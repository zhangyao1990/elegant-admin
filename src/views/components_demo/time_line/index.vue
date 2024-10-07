<script setup lang="tsx">
import { markRaw } from 'vue'
import { Clock } from '@element-plus/icons-vue'
import { useRenderFlicker } from '@/components/ProFlicker'

defineOptions({
  name: 'TimeLine',
})

const { lastBuildTime } = __SYSTEM_INFO__
const activities = [
  {
    content: '支持圆点发光',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker()),
  },
  {
    content: '支持方形发光',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker({ borderRadius: 0, background: '#67C23A' })),
  },
  {
    content: '支持默认颜色',
    timestamp: lastBuildTime,
  },
  {
    content: '支持自定义颜色',
    timestamp: lastBuildTime,
    color: '#F56C6C',
  },
  {
    content: '支持自定义图标',
    timestamp: lastBuildTime,
    color: '#F56C6C',
    icon: Clock,
  },
]
</script>

<template>
  <div>
    <PageHeader title="时间线" content="时间线示例" />
    <PageMain>
      <div class="flex py-20px">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :color="activity.color"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>

        <el-timeline class="pl-40">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :color="activity.color"
            :timestamp="activity.timestamp"
            placement="bottom"
          >
            <div class="message">
              Elegant-admin 第{{ activities.length - index }}个版本发布啦
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </PageMain>
  </div>
</template>

<style lang="scss" scoped>
.message {
  position: relative;
  box-sizing: border-box;
  width: 200px;
  padding: 5px 12px;
  line-height: 18px;
  color: #fff;
  word-break: break-all;
  background-color: var(--el-color-primary);
  border-color: var(--el-color-primary);
  border-radius: 6px;
}

.message::after {
  position: absolute;
  top: 8px;
  left: -10px;
  width: 0;
  height: 0;
  overflow: hidden;
  content: "";
  border-color: var(--el-color-primary) transparent transparent;
  border-style: solid dashed dashed;
  border-width: 10px;
}
</style>
