<script setup lang="ts">
import { useEcharts } from '@/hooks/useEcharts'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'LineChart',
})
const settingsStore = useSettingsStore()
const darkMode = computed(() => settingsStore.settings.app.colorScheme)
const titleTextColor = computed(() => darkMode.value === 'dark' ? '#ffffff' : '#333333')
const { domRef, updateOptions } = useEcharts(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  title: {
    text: '折线图 示例',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bolder',
      color: titleTextColor.value,
    },
  },
  legend: {
    data: ['下载量', '注册量'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [] as string[],
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: '#e5e5e5', // 分割线颜色
      },
    },
  },
  series: [
    {
      color: '#8e9dff',
      name: '下载量',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#8e9dff',
            },
            {
              offset: 1,
              color: '#fff',
            },
          ],
        },
      },
      emphasis: {
        focus: 'series',
      },
      data: [] as number[],
    },
    {
      color: '#26deca',
      name: '注册量',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#26deca',
            },
            {
              offset: 1,
              color: '#fff',
            },
          ],
        },
      },
      emphasis: {
        focus: 'series',
      },
      data: [],
    },
  ],
}))

async function mockData() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  updateOptions((opts) => {
    opts.xAxis.data = ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
    opts.series[0].data = [4623, 6145, 6268, 6411, 1890, 4251, 2978, 3880, 3606, 4311]
    opts.series[1].data = [2208, 2016, 2916, 4512, 8281, 2008, 1963, 2367, 2956, 678]

    return opts
  })
}
watch(() => darkMode.value, () => {
  updateOptions((opts: any) => {
    opts.title.textStyle.color = titleTextColor.value
    return opts
  })
})
async function init() {
  mockData()
}

// init
init()
</script>

<template>
  <el-card class="rounded-10px">
    <div ref="domRef" class="h-360px overflow-hidden" />
  </el-card>
</template>

<style scoped></style>
