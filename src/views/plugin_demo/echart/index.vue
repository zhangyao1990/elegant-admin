<script setup lang="ts">
import { onUnmounted } from 'vue'
import Alert from '../modules/alert.vue'
import {
  barOptions,
  gaugeOptions,
  getPictorialBarOption,
  getScatterOption,
  lineOptions,
  pieOptions,
  radarOptions,
} from './data'
import useSettingsStore from '@/store/modules/settings'
import { useEcharts } from '@/hooks/useEcharts'

const settingsStore = useSettingsStore()
const darkMode = computed(() => settingsStore.settings.app.colorScheme)

const { domRef: pieRef, updateOptions: updatePieOptions } = useEcharts(() => pieOptions, { onRender() {} })
const { domRef: lineRef, updateOptions: updateLineOptions } = useEcharts(() => lineOptions, { onRender() {} })
const { domRef: barRef, updateOptions: updateBarOptions } = useEcharts(() => barOptions, { onRender() {} })
const { domRef: pictorialBarRef, updateOptions: updatePictorialBarOptions } = useEcharts(() => getPictorialBarOption(), { onRender() {} })
const { domRef: radarRef, updateOptions: updateRadarOptions } = useEcharts(() => radarOptions, { onRender() {} })
const { domRef: scatterRef, updateOptions: updateScatterOptions } = useEcharts(() => getScatterOption(), { onRender() {} })
const { domRef: gaugeRef, setOptions: setGaugeOptions, updateOptions: updateGaugeOptions } = useEcharts(() => gaugeOptions, { onRender() {} })
let intervalId: NodeJS.Timeout

function initGaugeChart() {
  intervalId = setInterval(() => {
    const date = new Date()
    const second = date.getSeconds()
    const minute = date.getMinutes() + second / 60
    const hour = (date.getHours() % 12) + minute / 60

    setGaugeOptions({
      animationDurationUpdate: 300,
      series: [
        {
          name: 'hour',
          animation: hour !== 0,
          data: [{ value: hour }],
        },
        {
          name: 'minute',
          animation: minute !== 0,
          data: [{ value: minute }],
        },
        {
          animation: second !== 0,
          name: 'second',
          data: [{ value: second }],
        },
      ],
    })
  }, 1000)
}
const titleTextColor = computed(() => darkMode.value === 'dark' ? '#ffffff' : '#333333')
watch(() => darkMode.value, () => {
  updatePieOptions((opts: any) => {
    opts.title.textStyle.color = titleTextColor.value
    return opts
  })
  updateLineOptions((opts: any) => {
    opts.title.textStyle.color = titleTextColor.value
    return opts
  })
  updateBarOptions((opts: any) => {
    opts.title.textStyle.color = titleTextColor.value
    return opts
  })
  updatePictorialBarOptions((opts: any) => {
    opts.title.textStyle.color = titleTextColor.value
    return opts
  })
  updateRadarOptions((opts: any) => {
    opts.title.textStyle.color = titleTextColor.value
    return opts
  })
  updateScatterOptions((opts: any) => {
    opts.title.forEach((element: { textStyle: { color: string } }) => {
      element.textStyle.color = titleTextColor.value
    })
    return opts
  })
  updateGaugeOptions((opts: any) => {
    opts.title.textStyle.color = titleTextColor.value
    return opts
  })
})
function clearGaugeChart() {
  clearInterval(intervalId)
}

initGaugeChart()

onUnmounted(() => {
  clearGaugeChart()
})
function open(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="flex flex-1 flex-col">
    <Alert />
    <PageHeader title="Echarts" content="Echarts图表示例">
      <template #content>
        <p style="margin-bottom: 0;">
          安装命令：<ElTag>pnpm add echarts</ElTag>
        </p>
      </template>
      <ElButton @click="open('https://echarts.apache.org/zh/index.html')">
        <template #icon>
          <SvgIcon name="ep:link" />
        </template>
        访问 echarts
      </ElButton>
    </PageHeader>
    <div class="mx-8px">
      <el-card class="card-wrapper">
        <div ref="pieRef" class="h-400px" />
      </el-card>
      <el-card :bordered="false" class="card-wrapper">
        <div ref="lineRef" class="h-400px" />
      </el-card>
      <el-card :bordered="false" class="card-wrapper">
        <div ref="barRef" class="h-400px" />
      </el-card>
      <el-card :bordered="false" class="card-wrapper">
        <div ref="radarRef" class="h-400px" />
      </el-card>
      <el-card :bordered="false" class="card-wrapper">
        <div ref="scatterRef" class="h-600px" />
      </el-card>
      <el-card :bordered="false" class="card-wrapper">
        <div ref="pictorialBarRef" class="h-600px" />
      </el-card>
      <el-card :bordered="false" class="card-wrapper">
        <div ref="gaugeRef" class="h-640px" />
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card-wrapper {
    position: relative;
    margin-bottom: 8px;
  }
</style>
