<script lang="ts" setup>
import ProTable from '@/components/ProTable/index.vue'

defineOptions({
  name: 'TableSelect',
})
// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<PaginationProps>(), {
  placeholder: '请选择',
  size: 'default',
  clearable: true,
  multiple: false,
  collapseTags: false,
  collapseTagsTooltip: false,
  disabled: false,
  teleported: true,
  fitInputWidth: true,
  tableWidth: '100%',
  columns: [],
  initTableParam: {},
  tableProps: () => ({ label: 'id', value: 'name' }), // 映射字段
})

const emits = defineEmits(['change', 'reset'])
interface PaginationProps {
  requestApi: (params: any) => Promise<any> // 请求表格数据的api ==> 必传
  placeholder?: string // 占位符
  size?: any // 尺寸
  clearable?: boolean // 是否可清空
  multiple?: boolean// 是否多选
  collapseTags?: boolean // 多选时是否将选中值按文字的形式展示
  collapseTagsTooltip?: boolean // 是否在多选模式下将选中值按文字的形式展示
  fitInputWidth?: boolean // 是否将下拉框的宽度设置为与选择框一致
  disabled?: boolean // 是否禁用
  teleported?: boolean // 是否将弹出框teleport到body
  selectWidth?: string // 选择框的宽度
  tableWidth?: string // 表格的宽度
  columns?: any // 表格参数
  initTableParam?: any // 表格初始化查询参数
  tableProps: { [key: string]: any } //
}
const modelValue = defineModel<any>({
  default: null,
})

const proTableRef = ref()
function init() {
  proTableRef.value.clearSelection!()
  proTableRef.value.reset!()
}
const selectTableRef = ref()
function selectBlue() {
  selectTableRef.value.blur()
}

function visibleChange(visible: boolean) {
  if (visible) {
    init()
  }
}
// 清空后的回调
function handleClear() {
  if (props.multiple) {
    modelValue.value = []
  }
  else {
    modelValue.value = {}
  }
  emits('change', modelValue.value)
}

// tags删除后回调
function handleRemoveTag(tag: any) {
  const row = findRowByKey(tag.value)
  const exists = proTableRef.value?.selectedList?.some((v: any) => v[props.tableProps.value] === tag.value)
  if (exists) {
    if (row) {
      proTableRef?.value?.toggleRowSelection(row, false)
    }
  }

  modelValue.value?.forEach((item: any, index: number) => {
    if (item.value === tag.value) {
      modelValue.value.splice(index, 1)
    }
  })
  emits('change', modelValue.value)
}
// 关键值查询表格数据行
function findRowByKey(value: any) {
  return proTableRef.value.tableData.find((item: any) => item[props.tableProps.value] === value)
}

// 表格数据回调
function dataCallback(data: any) {
  setSelected()
  return {
    list: (data && data.records) || [],
    total: (data && data.total) || 0,
  }
}
// 回显数据
function setSelected() {
  if (props.multiple) {
    nextTick(() => {
      proTableRef.value?.tableData?.forEach((item: any) => {
        modelValue.value?.forEach((key: any) => {
          if (key.value === item[props.tableProps.value]) {
            const exists = proTableRef.value?.selectedList?.some((v: any) => v[props.tableProps.value] === key.value)
            if (!exists) {
              proTableRef?.value?.toggleRowSelection(item, true)
            }
          }
        })
      })
    })
  }
  else {
    nextTick(() => {
      proTableRef.value.radio = modelValue.value?.value || ''
    })
  }
}
// 单个选择或取消
function handleSelectionChange(selecteds: any, row: any) {
  if (props.multiple) {
    const exists = modelValue.value?.some((item: any) => item.value === row[props.tableProps.value])
    if (!exists) {
    // 回显数据里没有本条，把这条加进来(选中)
      delete row.label
      modelValue.value.push({
        value: row[props.tableProps.value],
        label: row[props.tableProps.label],
        ...row,
      })
      emits('change', modelValue.value)
    }
    else {
    // 回显数据里有本条，把这条删除(取消选中)
      modelValue.value.forEach((item: any, index: number) => {
        if (item.value === row[props.tableProps.value]) {
          modelValue.value?.splice(index, 1)
        }
      })
      emits('change', modelValue.value)
    }
  }
  else {
    delete row.label
    modelValue.value = {
      value: row[props.tableProps.value],
      label: row[props.tableProps.label],
      ...row,
    }
    emits('change', modelValue.value)
    selectBlue()
  }
}
// 全选、取消全选
function handleAllChange(selecteds: any) {
  if (props.multiple) {
    if (selecteds.length > 0) {
      selecteds.forEach((item: any) => {
        const exists = modelValue.value?.some((v: any) => v.value === item[props.tableProps.value])
        if (!exists) {
          delete item.label
          modelValue.value.push({
            value: item[props.tableProps.value],
            label: item[props.tableProps.label],
            ...item,
          })
        }
      })
      emits('change', modelValue.value)
    }
    else {
      proTableRef.value?.tableData?.forEach((item: any) => {
        modelValue.value.forEach((v: any, index: number) => {
          if (v.value === item[props.tableProps.value]) {
            modelValue.value.splice(index, 1)
          }
        })
      })
      emits('change', modelValue.value)
    }
  }
}
function reset() {
  emits('reset')
}
</script>

<template>
  <el-select
    v-if="modelValue"
    ref="selectTableRef"
    v-model="modelValue"
    popper-class="tip-dropdown"
    :teleported="teleported"
    :fit-input-width="fitInputWidth"
    :style="{ width: selectWidth ? `${selectWidth}` : '100%' }"
    class="select-box"
    :size="size"
    :clearable="clearable"
    :multiple="multiple"
    :collapse-tags="collapseTags"
    :collapse-tags-tooltip="collapseTagsTooltip"
    :placeholder="placeholder"
    :disabled="disabled"
    @remove-tag="handleRemoveTag"
    @visible-change="visibleChange"
    @clear="handleClear"
  >
    <template #empty>
      <div class="select-empty">
        <div class="select-close">
          <el-icon class="select-close__icon" @click="selectBlue">
            <svg-icon name="ep:close" />
          </el-icon>
        </div>
        <div class="select-table" :style="{ width: tableWidth ? `${tableWidth}` : '100%' }">
          <div class="table-box">
            <ProTable
              ref="proTableRef"
              :search-col="{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }"
              :init-param="initTableParam"
              :tool-button="false"
              :data-callback="dataCallback"
              highlight-current-row
              page-layout="total, prev, pager, next"
              :request-api="requestApi"
              :columns="columns"
              @reset="reset"
              @select="handleSelectionChange"
              @select-all="handleAllChange"
            />
          </div>
        </div>
      </div>
    </template>
  </el-select>
</template>

<style lang="scss" scoped>
.select-box {
  width: 100%;
}

.tip-dropdown {
  width: 700px;
}

.select-close {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.3em;
  height: 1.3em;
  font-size: 14px;
  color: var(--g-tabbar-tab-color);
  border-radius: 50%;

  &__icon {
    font-size: 14px;
    cursor: pointer;
  }

  &:hover {
    --at-apply: ring-1 ring-stone-3 dark:ring-stone-7;

    background-color: var(--g-bg);
  }
}

.select-empty {
  height: 500px;

  .select-table {
    height: 100%;
    padding: 12px;
  }
}

:deep(.el-table__row) {
  cursor: pointer;
}
</style>
