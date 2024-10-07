<script lang="tsx" setup>
import { CirclePlus, Connection, Delete, EditPen } from '@element-plus/icons-vue'
import { addRoleApi, delSysRoleApi, editRoleApi, getSysRoleListApi } from '../http/sys_role'
import RoleDrawer from './modules/roleDrawer.vue'
import RoleAuthDrawer from './modules/roleAuthDrawer.vue'
import type { ColumnProps, ProTableInstance } from '@/components/ProTable/interface'

defineOptions({
  name: 'SysRoleList',
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
  return getSysRoleListApi(newParams)
}
// 表格配置项
const columns = reactive<ColumnProps[]>(
  [
    {
      type: 'index',
      label: '排序',
      width: 80,
    },
    { prop: 'roleName', label: '角色名称', minWidth: 100, search: { el: 'input' } },
    { prop: 'alias', label: '角色别名', minWidth: 100 },
    {
      prop: 'openStatus',
      label: '状态',
      enum: [{ label: '启用', value: 'OPEN' }, { label: '停用', value: 'CLOSE' }],
      fieldNames: { label: 'label', value: 'value' },
      minWidth: 100,
      search: { el: 'tree-select', props: { filterable: true } }, // filterable 开启模糊搜索
      render: (scope) => {
        return (
          <el-tag type={scope.row.openStatus === 'OPEN' ? 'success' : 'danger'}>
            {scope.row.openStatus === 'OPEN' ? '启用' : '停用'}
          </el-tag>
        )
      },
    },
    { prop: 'sort', label: '排序值', minWidth: 100 },
    { prop: 'operation', label: '操作', fixed: 'right', width: 260 },
  ],
)
// 权限设置
const roleAuthDrawerRef = ref()
function handleOpenRoleAuthDrawer(rowData: Partial<any> = {}) {
  let params = {
    rowData: { ...rowData },
    getTableList: proTableRef.value?.getTableList,
  }
  roleAuthDrawerRef.value.acceptParams(params)
}
// 新增-编辑弹窗
const drawerRef = ref()
function handelOpenDrawer(type: string, row?: any) {
  const params = {
    title: type === 'add' ? '新增' : type === 'edit' ? '编辑' : '查看',
    isView: type === 'show',
    row: { ...row },
    api: type === 'add' ? addRoleApi : type === 'edit' ? editRoleApi : undefined,
    getTableList: proTableRef.value?.getTableList,
  }
  console.log('params', params)
  drawerRef.value?.acceptParams(params)
}
// 删除
async function handleDel(row: any) {
  await useHandleData(delSysRoleApi, { id: row.id }, `删除【${row.roleName}】`)
  proTableRef.value?.getTableList()
}
</script>

<template>
  <div class="table-container">
    <div class="table-box">
      <ProTable
        ref="proTableRef"
        :border="false"
        title="角色列表"
        :request-api="getTableList"
        :columns="columns"
        :data-callback="dataCallback"
        :init-param="initTableParam"
        highlight-current-row
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <div class="flex">
            <Auth :value="['add:role:btn']">
              <el-button type="primary" :icon="CirclePlus" @click="handelOpenDrawer('add')">
                新增角色
              </el-button>
            </Auth>
          </div>
        </template>
        <!-- 表格操作 -->
        <template #operation="scope">
          <div class="flex flex-wrap justify-center">
            <Auth class="mr-5px" :value="['role:auth:btn']">
              <el-button type="primary" link :icon="Connection" @click="handleOpenRoleAuthDrawer(scope.row)">
                权限配置
              </el-button>
            </Auth>
            <Auth class="mr-5px" :value="['edit:role:btn']">
              <el-button type="primary" link :icon="EditPen" @click="handelOpenDrawer('edit', scope.row)">
                编辑
              </el-button>
            </Auth>
            <Auth class="mr-5px" :value="['del:role:btn']">
              <el-button type="danger" link :icon="Delete" @click="handleDel(scope.row)">
                删除
              </el-button>
            </Auth>
          </div>
        </template>
      </ProTable>
      <RoleDrawer ref="drawerRef" />
      <RoleAuthDrawer ref="roleAuthDrawerRef" />
    </div>
  </div>
</template>
