<script lang="tsx" setup>
import { getMonitorLoginLogsListApi } from '../http/monitor'
import type { ColumnProps, ProTableInstance } from '@/components/ProTable/interface'

defineOptions({
  name: 'LoginLogs',
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
  return getMonitorLoginLogsListApi(newParams)
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
      label: '登录行为',
      prop: 'behavior',
      minWidth: 100,
    }, {
      prop: 'status',
      label: '登录状态',
      enum: [{ label: '成功', value: 'SUCCESS' }, { label: '失败', value: 'FAIL' }],
      fieldNames: { label: 'label', value: 'value' },
      minWidth: 100,
      search: { el: 'tree-select', props: { filterable: true } }, // filterable 开启模糊搜索
      render: (scope: { row: any }) => {
        return (
          <el-tag type={scope.row.status === 'SUCCESS' ? 'success' : 'danger'}>
            {scope.row.status === 'SUCCESS' ? '成功' : '失败'}
          </el-tag>
        )
      },
    }, {
      prop: 'loginTime',
      label: '登录时间',
      minWidth: 100,
      search: {
        el: 'date-picker',
        span: 1,
        props: { type: 'datetimerange', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
      // defaultValue: ["2022-11-12 11:35:00", "2022-12-12 11:35:00"]
      },
    },
  ],
)
</script>

<template>
  <div class="table-container">
    <div class="table-box">
      <ProTable
        ref="proTableRef"
        :border="false"
        title="登录日志"
        :request-api="getTableList"
        :columns="columns"
        :data-callback="dataCallback"
        :init-param="initTableParam"
        highlight-current-row
      />
    </div>
  </div>
</template>
