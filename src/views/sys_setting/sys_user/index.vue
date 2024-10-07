<script lang="tsx" setup>
import { CirclePlus, Delete, EditPen } from '@element-plus/icons-vue'
import { addUserApi, delSysUserApi, editUserApi, getSysUserListApi } from '../http/sys_user'
import UserDrawer from './modules/userDrawer.vue'
import type { ColumnProps, ProTableInstance } from '@/components/ProTable/interface'

defineOptions({
  name: 'SysUserList',
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
  return getSysUserListApi(newParams)
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
      label: '姓名',
      minWidth: 100,
      search: { el: 'input' },
    },
    {
      prop: 'gender',
      label: '性别',
      enum: [{ label: '男', value: 'MAN' }, { label: '女', value: 'WOMAN' }],
      search: { el: 'select' },
    },
    { prop: 'phone', label: '登录账号', minWidth: 100 },
    { prop: 'roleNames', label: '角色', minWidth: 100 },
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
    {
      prop: 'createTime',
      label: '创建时间',
      minWidth: 100,
      search: {
        el: 'date-picker',
        span: 1,
        props: { type: 'datetimerange', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
      // defaultValue: ["2022-11-12 11:35:00", "2022-12-12 11:35:00"]
      },
    },
    { prop: 'operation', label: '操作', fixed: 'right', width: 200 },
  ],
)

const drawerRef = ref()
function handelOpenDrawer(type: string, row?: any) {
  const params = {
    title: type === 'add' ? '新增' : type === 'edit' ? '编辑' : '查看',
    isView: type === 'show',
    row: { ...row },
    api: type === 'add' ? addUserApi : type === 'edit' ? editUserApi : undefined,
    getTableList: proTableRef.value?.getTableList,
  }
  console.log('params', params)
  drawerRef.value?.acceptParams(params)
}
async function handleDelUser(row: any) {
  await useHandleData(delSysUserApi, { id: row.id }, `删除【${row.name}】`)
  proTableRef.value?.getTableList()
}
</script>

<template>
  <div class="table-container">
    <div class="table-box">
      <ProTable
        ref="proTableRef"
        height="100%"
        highlight-current-row
        :border="false"
        title="用户列表"
        :request-api="getTableList"
        :columns="columns"
        :data-callback="dataCallback"
        :init-param="initTableParam"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <div class="flex">
            <Auth :value="['add:user:btn']">
              <el-button type="primary" :icon="CirclePlus" @click="handelOpenDrawer('add')">
                新增用户
              </el-button>
            </Auth>
          </div>
        </template>
        <!-- 表格操作 -->
        <template #operation="scope">
          <div class="flex flex-wrap justify-center">
            <Auth class="mr-5px" :value="['edit:user:btn']">
              <el-button type="primary" link :icon="EditPen" @click="handelOpenDrawer('edit', scope.row)">
                编辑
              </el-button>
            </Auth>
            <Auth class="mr-5px" :value="['del:user:btn']">
              <el-button type="danger" link :icon="Delete" @click="handleDelUser(scope.row)">
                删除
              </el-button>
            </Auth>
          </div>
        </template>
      </ProTable>
      <UserDrawer ref="drawerRef" />
    </div>
  </div>
</template>
