<script lang="ts" setup name="ProFormTable">
import Sortable from 'sortablejs'
import { Delete, Plus } from '@element-plus/icons-vue'

interface PaginationProps {
  addTemplate?: object
  isIndex?: boolean
  isAddBtn?: boolean
  placeholder?: string
  dragSort?: boolean
}

// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<PaginationProps>(), {
  isIndex: true,
  isAddBtn: true,
  placeholder: '暂无数据',
  dragSort: true,
})
const emits = defineEmits(['handleFormDel'])
const modelValue = defineModel<any>({
  default: [],
})
const toggleIndex = ref<any>(0)
onMounted(() => {
  if (props.dragSort) {
    rowDrop()
  }
})

const tableRef = ref<any>()
function rowDrop() {
  const tbody = tableRef.value.$el.querySelector('.el-table__body-wrapper tbody')
  Sortable.create(tbody, {
    handle: '.move',
    animation: 300,
    ghostClass: 'ghost',
    onEnd({ newIndex, oldIndex }: any) {
      const tableData = modelValue.value
      const currRow = tableData.splice(oldIndex, 1)[0]
      tableData.splice(newIndex, 0, currRow)
      toggleIndex.value += 1
      nextTick(() => {
        rowDrop()
      })
    },
  })
}
function rowAdd() {
  const temp = JSON.parse(JSON.stringify(props.addTemplate))
  modelValue.value.push(temp)
}
function rowDel(row: any, index: any) {
  modelValue.value.splice(index, 1)
  emits('handleFormDel', row)
}
</script>

<template>
  <div class="table-box pro-form-table">
    <el-table ref="tableRef" :key="toggleIndex" :data="modelValue" stripe border>
      <el-table-column v-if="isIndex" type="index" width="60" fixed="left" align="center">
        <template #header>
          <el-button v-if="isAddBtn" type="primary" :icon="Plus" circle @click="rowAdd" />
          <div v-else>
            排序
          </div>
        </template>
        <template #default="scope">
          <div class="pro-form-table-handle">
            <span>{{ scope.$index + 1 }}</span>
            <el-button type="danger" :icon="Delete" circle plain @click="rowDel(scope.row, scope.$index)" />
          </div>
        </template>
      </el-table-column>
      <el-table-column v-if="dragSort" label="" width="52" align="center">
        <template #default>
          <el-tag class="move" style="cursor: move;">
            <el-icon>
              <svg-icon name="ep:d-caret" />
            </el-icon>
          </el-tag>
        </template>
      </el-table-column>
      <slot />
      <!-- 无数据 -->
      <template #empty>
        <div class="table-empty">
          <slot name="empty">
            <img src="@/assets/images/notData.png" alt="notData">
            <div>{{ placeholder }}</div>
          </slot>
        </div>
      </template>
    </el-table>
    <div v-if="modelValue.length > 5 && isAddBtn" class="b-add">
      <el-button type="primary" :icon="Plus" @click="rowAdd">
        添加
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pro-form-table {
  min-height: 200px;
}

.pro-form-table :deep(.el-table) {
  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
  }
}

.pro-form-table .pro-form-table-handle span {
  display: inline-block;
}

.pro-form-table .pro-form-table-handle button {
  display: none;
}

.pro-form-table .hover-row .pro-form-table-handle span {
  display: none;
}

.pro-form-table .hover-row .pro-form-table-handle button {
  display: inline-block;
}

.b-add {
  padding-top: 5px;
}

:deep(.el-table__inner-wrapper) {
  flex: 1;
}
</style>
