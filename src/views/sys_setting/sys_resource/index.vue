<script lang="tsx" setup>
import { CirclePlus, Delete, EditPen } from '@element-plus/icons-vue'
import { addResourceApi, delSysResourceApi, editResourceApi, getSysResourceListApi } from '../http/sys_resource'
import ResourceDrawer from './modules/resourceDrawer.vue'
import type { ColumnProps, ProTableInstance } from '@/components/ProTable/interface'

defineOptions({
  name: 'ResourceList',
})
const proTableRef = ref<ProTableInstance>()
// 表格初始查询参数
const initTableParam = reactive({})
// 表格数据回调
function dataCallback(data: any) {
  return {
    list: (data && data.records) || [],
    total: (data && data.total) || 0,
  }
}
// 获取表格数据
function getTableList(params: any) {
  let newParams = { ...params }
  // console.log('newParams', newParams)
  return getSysResourceListApi(newParams)
}
// 表格配置项
const columns = reactive<ColumnProps[]>(
  [
    {
      type: 'index',
      label: '排序',
      width: 80,
    },
    {
      prop: 'name',
      label: '资源名称',
      minWidth: 100,
      search: { el: 'input' },
    }, {
      prop: 'method',
      label: 'API方法类型',
      minWidth: 100,
    },
    {
      prop: 'openStatus',
      label: '用户状态',
      enum: [{ label: '启用', value: 'OPEN' }, { label: '停用', value: 'CLOSE' }],
      fieldNames: { label: 'label', value: 'value' },
      minWidth: 100,
      search: { el: 'tree-select', props: { filterable: true } }, // filterable 开启模糊搜索
      render: (scope: { row: any }) => {
        return (
          <el-tag type={scope.row.openStatus === 'OPEN' ? 'success' : 'danger'}>
            {scope.row.openStatus === 'OPEN' ? '启用' : '停用'}
          </el-tag>
        )
      },
    },
    { prop: 'sort', label: '排序值', minWidth: 120 },
    { prop: 'operation', label: '操作', fixed: 'right', width: 200 },
  ],
)
// 新增-编辑弹窗
const drawerRef = ref()
function handelOpenDrawer(type: string, row?: any) {
  const params = {
    title: type === 'add' ? '新增资源' : type === 'edit' ? '编辑资源' : '查看资源',
    isView: type === 'show',
    row: { ...row },
    api: type === 'add' ? addResourceApi : type === 'edit' ? editResourceApi : undefined,
    getTableList: proTableRef.value?.getTableList,
  }
  console.log('params', params)
  drawerRef.value?.acceptParams(params)
}
// 删除
async function handleDel(row: any) {
  await useHandleData(delSysResourceApi, { id: row.id }, `删除【${row.name}】`)
  proTableRef.value?.getTableList()
}
</script>

<template>
  <div class="table-container">
    <div class="table-box">
      <ProTable
        ref="proTableRef" :border="false" title="资源管理" :request-api="getTableList" :columns="columns"
        :data-callback="dataCallback" :init-param="initTableParam" highlight-current-row
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <div class="flex">
            <Auth :value="['add:resource:btn']">
              <el-button type="primary" :icon="CirclePlus" @click="handelOpenDrawer('add')">
                新增资源
              </el-button>
            </Auth>
          </div>
        </template>
        <!-- 表格操作 -->
        <template #operation="scope">
          <div class="flex flex-wrap justify-center">
            <Auth class="mr-5px" :value="['edit:resource:btn']">
              <el-button type="primary" link :icon="EditPen" @click="handelOpenDrawer('edit', scope.row)">
                编辑
              </el-button>
            </Auth>
            <Auth class="mr-5px" :value="['del:resource:btn']">
              <el-button type="danger" link :icon="Delete" @click="handleDel(scope.row)">
                删除
              </el-button>
            </Auth>
          </div>
        </template>
      </ProTable>
      <ResourceDrawer ref="drawerRef" />
    </div>
  </div>
</template>
