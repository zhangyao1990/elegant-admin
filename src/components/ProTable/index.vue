<script setup lang="ts">
import { computed, onMounted, provide, reactive, ref, unref, watch } from 'vue'
import { ElTable } from 'element-plus'
import { DCaret, Operation, Refresh, Search } from '@element-plus/icons-vue'
import Sortable from 'sortablejs'
import Pagination from './components/Pagination.vue'
import ColSetting from './components/ColSetting.vue'
import TableColumn from './components/TableColumn.vue'
import { useTable } from '@/hooks/useTable'
import { useSelection } from '@/hooks/useSelection'
import type { BreakPoint } from '@/components/Grid/interface'
import type { ColumnProps, TypeProps } from '@/components/ProTable/interface'
import { handleProp } from '@/utils'
import SearchForm from '@/components/SearchForm/index.vue'

defineOptions({
  name: 'ProTable',
})
// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<ProTableProps>(), {
  columns: () => [],
  requestAuto: true,
  isShowPageable: true,
  isShowSearch: true,
  initParam: {},
  border: true,
  toolButton: true,
  rowKey: 'id',
  searchCol: () => ({ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }),
})

// 定义 emit 事件
const emits = defineEmits<{
  search: []
  reset: []
  dargSort: [{ newIndex?: number, oldIndex?: number }]
  select: any
  selectAll: any
}>()

export interface ProTableProps {
  columns: ColumnProps[] // 列配置项  ==> 必传
  data?: any[] // 静态 table data 数据，若存在则不会使用 requestApi 返回的 data ==> 非必传
  requestApi?: (params: any) => Promise<any> // 请求表格数据的 api ==> 非必传
  requestAuto?: boolean // 是否自动执行请求 api ==> 非必传（默认为true）
  requestError?: (params: any) => void // 表格 api 请求错误监听 ==> 非必传
  dataCallback?: (data: any) => any // 返回数据的回调函数，可以对数据进行处理 ==> 非必传
  title?: string // 表格标题 ==> 非必传
  isShowPageable?: boolean // 是否需要分页组件 ==> 非必传（默认为true）
  isShowSearch?: boolean // 是否查询组件 ==> 非必传（默认为true）
  pageLayout?: string // 分页组件参数 ==> 非必传（默认为'total, sizes, prev, pager, next, jumper'）
  initParam?: any // 初始化请求参数 ==> 非必传（默认为{}）
  border?: boolean // 是否带有纵向边框 ==> 非必传（默认为true）
  toolButton?: ('refresh' | 'setting' | 'search')[] | boolean // 是否显示表格功能按钮 ==> 非必传（默认为true）
  rowKey?: string // 行数据的 Key，用来优化 Table 的渲染，当表格数据多选时，所指定的 id ==> 非必传（默认为 id）
  searchCol?: number | Record<BreakPoint, number> // 表格搜索项 每列占比配置 ==> 非必传 { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }
}

// table 实例
const tableRef = ref<InstanceType<typeof ElTable>>()

// column 列类型
const columnTypes: TypeProps[] = ['selection', 'radio', 'index', 'expand', 'sort']

// 是否显示搜索模块
const isShowSearch = ref(props.isShowSearch)

// 控制 ToolButton 显示
function showToolButton(key: 'refresh' | 'setting' | 'search') {
  return Array.isArray(props.toolButton) ? props.toolButton.includes(key) : props.toolButton
}

// 单选值
const radio = ref<string | number>('')

// 表格多选 Hooks
const { selectionChange, selectedList, selectedListIds, isSelected } = useSelection(props.rowKey)

// 表格操作 Hooks
const { tableData, pageable, searchParam, searchInitParam, getTableList, search, reset, handleSizeChange, handleCurrentChange }
  = useTable(props.requestApi, props.initParam, props.isShowPageable, props.dataCallback, props.requestError)

// 清空选中数据列表
const clearSelection = () => tableRef.value!.clearSelection()
// 选中数据列表
const toggleRowSelection = (row: any, selected: boolean) => tableRef.value?.toggleRowSelection(row, selected)
/**
 * 处理选择变更事件
 * @param selecteds 当前选择的项集合
 * @param row 当前操作的行数据
 */
function selectChange(selecteds: any, row: any) {
  emits('select', selecteds, row)
}
/**
 * 当选择全部变化时触发的函数
 * @param selecteds 任意类型，代表被选中的项
 */
function selectAllChange(selecteds: any) {
  emits('selectAll', selecteds)
}
// 初始化表格数据 && 拖拽排序
onMounted(() => {
  dragSort()
  props.requestAuto && getTableList()
  props.data && (pageable.value.total = props.data.length)
})

// 处理表格数据
const processTableData = computed(() => {
  if (!props.data) {
    return tableData.value
  }
  if (!props.isShowPageable) {
    return props.data
  }
  return props.data.slice(
    (pageable.value.pageNum - 1) * pageable.value.pageSize,
    pageable.value.pageSize * pageable.value.pageNum,
  )
})

// 监听页面 initParam 改化，重新获取表格数据
watch(() => props.initParam, getTableList, { deep: true })

// 接收 columns 并设置为响应式
const tableColumns = reactive<ColumnProps[]>(props.columns)

// 扁平化 columns
const flatColumns = computed(() => flatColumnsFunc(tableColumns))

// 定义 enumMap 存储 enum 值（避免异步请求无法格式化单元格内容 || 无法填充搜索下拉选择）
const enumMap = ref(new Map<string, { [key: string]: any }[]>())
async function setEnumMap({ prop, enum: enumValue }: ColumnProps) {
  if (!enumValue) {
    return
  }

  // 如果当前 enumMap 存在相同的值 return
  if (enumMap.value.has(prop!) && (typeof enumValue === 'function' || enumMap.value.get(prop!) === enumValue)) {
    return
  }

  // 当前 enum 为静态数据，则直接存储到 enumMap
  if (typeof enumValue !== 'function') {
    return enumMap.value.set(prop!, unref(enumValue!))
  }

  // 为了防止接口执行慢，而存储慢，导致重复请求，所以预先存储为[]，接口返回后再二次存储
  enumMap.value.set(prop!, [])

  // 当前 enum 为后台数据需要请求数据，则调用该请求接口，并存储到 enumMap
  const { data } = await enumValue()
  enumMap.value.set(prop!, data)
}

// 注入 enumMap
provide('enumMap', enumMap)

// 扁平化 columns 的方法
function flatColumnsFunc(columns: ColumnProps[], flatArr: ColumnProps[] = []) {
  columns.forEach(async (col) => {
    if (col._children?.length) {
      flatArr.push(...flatColumnsFunc(col._children))
    }
    flatArr.push(col)

    // column 添加默认 isShow && isFilterEnum 属性值
    col.isShow = col.isShow ?? true
    col.isFilterEnum = col.isFilterEnum ?? true

    // 设置 enumMap
    await setEnumMap(col)
  })
  return flatArr.filter(item => !item._children?.length)
}

// 过滤需要搜索的配置项 && 排序
const searchColumns = computed(() => {
  return flatColumns.value
    ?.filter(item => item.search?.el || item.search?.render)
    .sort((a, b) => a.search!.order! - b.search!.order!)
})

// 设置 搜索表单默认排序 && 搜索表单项的默认值
searchColumns.value?.forEach((column, index) => {
  column.search!.order = column.search?.order ?? index + 2
  const key = column.search?.key ?? handleProp(column.prop!)
  const defaultValue = column.search?.defaultValue
  if (defaultValue !== undefined && defaultValue !== null) {
    searchInitParam.value[key] = defaultValue
    searchParam.value[key] = defaultValue
  }
})

// 列设置 ==> 需要过滤掉不需要设置的列
const colRef = ref()
const colSetting = tableColumns!.filter((item) => {
  const { type, prop, isShow } = item
  return !columnTypes.includes(type!) && prop !== 'operation' && isShow
})
const openColSetting = () => colRef.value.openColSetting()

function _search() {
  search()
  emits('search')
}

function _reset() {
  emits('reset')
  reset()
}

// 拖拽排序
function dragSort() {
  const tbody = document.querySelector('.el-table__body-wrapper tbody') as HTMLElement
  Sortable.create(tbody, {
    handle: '.move',
    animation: 300,
    onEnd({ newIndex, oldIndex }: any) {
      const [removedItem] = processTableData.value.splice(oldIndex!, 1)
      processTableData.value.splice(newIndex!, 0, removedItem)
      emits('dargSort', { newIndex, oldIndex })
    },
  })
}
// 点击行也能选中
function tableItemClick(row: any) {
  let selectItem: any = tableColumns!.find(item => ['radio', 'selection'].includes(item.type as any))
  if (selectItem) {
    if (selectItem.type === 'radio') {
      radio.value = row.id
    }
    else if (selectItem.type === 'selection') {
      if (row.noSelected) {
        return
      }
      if (selectedList.value.some((item: any) => item.id === row.id)) {
        toggleRowSelection(row, false)
      }
      else {
        toggleRowSelection(row, true)
      }
    }
    selectChange(selectedList.value, row)
  }
}
// 是否可以勾选
function selectable(row: any) {
  let ids = processTableData.value.map((item: any) => {
    if (item.noSelected) {
      return item.id
    }
  })
  return !ids.includes(row.id)
}
// 暴露给父组件的参数和方法 (外部需要什么，都可以从这里暴露出去)
defineExpose({
  element: tableRef,
  tableData: processTableData,
  radio,
  pageable,
  searchParam,
  searchInitParam,
  getTableList,
  search,
  reset,
  handleSizeChange,
  handleCurrentChange,
  clearSelection,
  toggleRowSelection,
  enumMap,
  isSelected,
  selectedList,
  selectedListIds,
})
</script>

<template>
  <!-- 查询表单 -->
  <SearchForm
    v-show="isShowSearch"
    :search="_search"
    :reset="_reset"
    :columns="searchColumns"
    :search-param="searchParam"
    :search-col="searchCol"
  />

  <!-- 表格主体 -->
  <div class="card table-main">
    <!-- 表格头部 操作按钮 -->
    <div class="table-header">
      <div class="header-button-lf">
        <slot name="tableHeader" :selected-list="selectedList" :selected-list-ids="selectedListIds" :is-selected="isSelected" />
      </div>
      <div v-if="toolButton" class="header-button-ri">
        <slot name="toolButton">
          <el-button v-if="showToolButton('refresh')" :icon="Refresh" circle @click="getTableList" />
          <el-button v-if="showToolButton('setting') && columns.length" :icon="Operation" circle @click="openColSetting" />
          <el-button
            v-if="showToolButton('search') && searchColumns?.length"
            :icon="Search"
            circle
            @click="isShowSearch = !isShowSearch"
          />
        </slot>
      </div>
    </div>
    <!-- 表格主体 -->
    <ElTable
      ref="tableRef"
      v-bind="$attrs"
      :data="processTableData"
      :border="border"
      :row-key="rowKey"
      @selection-change="selectionChange"
      @row-click="tableItemClick"
      @select="selectChange"
      @select-all="selectAllChange"
    >
      <!-- 默认插槽 -->
      <slot />
      <template v-for="item in tableColumns" :key="item">
        <!-- selection || radio || index || expand || sort -->
        <el-table-column
          v-if="item.type && columnTypes.includes(item.type)"
          v-bind="item"
          :align="item.align ?? 'center'"
          :reserve-selection="item.type === 'selection'"
          :selectable="selectable"
          :tooltip-options="{
            popperClass: 'el-table-tooltip',
          }"
        >
          <template #default="scope">
            <!-- expand -->
            <template v-if="item.type === 'expand'">
              <component :is="item.render" v-bind="scope" v-if="item.render" />
              <slot v-else :name="item.type" v-bind="scope" />
            </template>
            <!-- radio -->
            <el-radio-group v-if="item.type === 'radio'" v-model="radio">
              <el-radio :value="scope.row[rowKey]" />
            </el-radio-group>
            <!-- sort -->
            <el-tag v-if="item.type === 'sort'" class="move">
              <el-icon> <DCaret /></el-icon>
            </el-tag>
            <!-- sort -->
            <template v-if="item.type === 'index'">
              <span>
                {{ scope.$index + (pageable.pageNum - 1) * pageable.pageSize + 1 }}
              </span>
            </template>
          </template>
        </el-table-column>
        <!-- other -->
        <TableColumn v-if="!item.type && item.prop && item.isShow" :column="item">
          <template v-for="slot in Object.keys($slots)" #[slot]="scope">
            <slot :name="slot" v-bind="scope" />
          </template>
        </TableColumn>
      </template>
      <!-- 插入表格最后一行之后的插槽 -->
      <template #append>
        <slot name="append" />
      </template>
      <!-- 无数据 -->
      <template #empty>
        <div class="table-empty">
          <slot name="empty">
            <img src="@/assets/images/notData.png" alt="notData">
            <div>暂无数据</div>
          </slot>
        </div>
      </template>
    </ElTable>
    <!-- 分页组件 -->
    <slot name="pagination">
      <Pagination
        v-if="isShowPageable"
        :pageable="pageable"
        :page-layout="pageLayout"
        :handle-size-change="handleSizeChange"
        :handle-current-change="handleCurrentChange"
      />
    </slot>
  </div>
  <!-- 列设置 -->
  <ColSetting v-if="toolButton" ref="colRef" v-model:col-setting="colSetting" />
</template>
