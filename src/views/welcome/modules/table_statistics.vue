<script lang="tsx" setup>
import type { ColumnProps, ProTableInstance } from '@/components/ProTable/interface'

defineOptions({
  name: 'ProjectNews',
})

function mockData() {
  let data: any = [
    {
      id: 1,
      visitCount: 5188,
      turnover: 5188,
      downloadCount: 5188,
      dealCount: 5188,
    }, {
      id: 2,
      visitCount: 5188,
      turnover: 5188,
      downloadCount: 5188,
      dealCount: 5188,
    }, {
      id: 3,
      visitCount: 5188,
      turnover: 5188,
      downloadCount: 5188,
      dealCount: 5188,
    }, {
      id: 4,
      visitCount: 5188,
      turnover: 5188,
      downloadCount: 5188,
      dealCount: 5188,
    }, {
      id: 5,
      visitCount: 5188,
      turnover: 5188,
      downloadCount: 5188,
      dealCount: 5188,
    }, {
      id: 6,
      visitCount: 5188,
      turnover: 5188,
      downloadCount: 5188,
      dealCount: 5188,
    }, {
      id: 7,
      visitCount: 5188,
      turnover: 5188,
      downloadCount: 5188,
      dealCount: 5188,
    }, {
      id: 8,
      visitCount: 5188,
      turnover: 5188,
      downloadCount: 5188,
      dealCount: 5188,
    }, {
      id: 9,
      visitCount: 5188,
      turnover: 5188,
      downloadCount: 5188,
      dealCount: 5188,
    }, {
      id: 10,
      visitCount: 5188,
      turnover: 5188,
      downloadCount: 5188,
      dealCount: 5188,
    },

  ]
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          records: (data) || [],
          total: 100,
        },
      })
    }, 1000) // 模拟网络延迟
  })
}
const proTableRef = ref<ProTableInstance>()
// 表格初始查询参数
const initTableParam = reactive({})
// 表格数据回调
function dataCallback(data: any) {
  console.log('data', data)
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
  console.log('newParams', newParams)
  return mockData()
}
// 表格配置项
const columns = reactive<ColumnProps[]>(
  [
    {
      prop: 'index',
      label: '排序',
      width: 80,
      render: (scope) => {
        return (<span>{scope.$index + (tablePageParams.value.pageNum - 1) * tablePageParams.value.pageSize + 1}</span>)
      },
    },
    {
      prop: 'visitCount',
      label: '访问量',
      minWidth: 100,
      sortable: true,
      search: { el: 'input' },
    }, {
      prop: 'turnover',
      label: '成交额',
      sortable: true,
      minWidth: 100,
    }, {
      prop: 'downloadCount',
      label: '下载量',
      sortable: true,
      minWidth: 100,
    }, {
      prop: 'dealCount',
      label: '成交量',
      sortable: true,
      minWidth: 100,
    },
  ],
)
</script>

<template>
  <ElCard title="数据统计" shadow="hover" class="rounded-10px">
    <template #header>
      <div class="flex items-center justify-between">
        <div class="text-32rpx">
          数据统计
        </div>
      </div>
    </template>
    <div class="h-500px">
      <div class="table-box">
        <ProTable
          ref="proTableRef"
          :tool-button="false"
          :is-show-search="false" :border="false" title="资源管理" :request-api="getTableList" :columns="columns"
          :data-callback="dataCallback" :init-param="initTableParam"
          highlight-current-row
        />
      </div>
    </div>
  </ElCard>
</template>
