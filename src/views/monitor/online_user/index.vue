<script lang="tsx" setup>
import { getMonitorOnlineUserListApi, operateMonitorOnlineUserForceoutApi } from '../http/monitor'
import type { ColumnProps, ProTableInstance } from '@/components/ProTable/interface'

defineOptions({
  name: 'OnlineUser',
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
const tablePageParams = ref<any>({})
// 获取表格数据
function getTableList(params: any) {
  tablePageParams.value = params
  let newParams = { ...params }
  // console.log('newParams', newParams)
  return getMonitorOnlineUserListApi(newParams)
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
      label: '用户名',
      minWidth: 100,
      search: { el: 'input' },
    }, {
      prop: 'ip',
      label: '登录IP',
      minWidth: 100,
    }, {
      prop: 'address',
      label: '登录地点',
      minWidth: 100,
    }, {
      prop: 'system',
      label: '操作系统',
      minWidth: 100,
    }, {
      prop: 'browser',
      label: '流览器类型',
      minWidth: 100,
    }, {
      prop: 'loginTime',
      label: '登录时间',
      minWidth: 100,
    },
    { prop: 'operation', label: '操作', fixed: 'right', width: 200 },
  ],
)

// 强制退出
async function handleForceOut(row: any) {
  await useHandleData(operateMonitorOnlineUserForceoutApi, { id: row.id }, `强制下线${row.name}`)
  proTableRef.value?.getTableList()
}
</script>

<template>
  <div class="table-container">
    <div class="table-box">
      <ProTable
        ref="proTableRef"
        :border="false"
        title="在线用户"
        :request-api="getTableList"
        :columns="columns"
        :data-callback="dataCallback"
        :init-param="initTableParam"
        highlight-current-row
      >
        <!-- 表格操作 -->
        <template #operation="scope">
          <div class="flex flex-wrap justify-center">
            <Auth class="mr-5px" :value="['edit:resource:btn']">
              <el-button type="primary" link @click="handleForceOut(scope.row)">
                <template #icon>
                  <SvgIcon class="text-18px" name="mdi:airplane" />
                </template>
                强退
              </el-button>
            </Auth>
          </div>
        </template>
      </ProTable>
    </div>
  </div>
</template>
