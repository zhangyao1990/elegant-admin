<script setup lang="ts">
import { useRenderFlicker } from '@/components/ProFlicker'

defineOptions({
  name: 'ProjectNews',
})
const { lastBuildTime } = __SYSTEM_INFO__

const activities = [
  {
    id: 1,
    content: 'zhangyao1990 在2022年10月31日创建了开源项目 elegant-admin!',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker()),
  },
  {
    content: 'zhangyao1990 在2022年10月31日创建了开源项目 elegant-admin!',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker({ borderRadius: '50%', background: '#67C23A' })),
  },
  {
    id: 1,
    content: 'zhangyao1990 在2022年10月31日创建了开源项目 elegant-admin!',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker()),
  },
  {
    content: 'zhangyao1990 在2022年10月31日创建了开源项目 elegant-admin!',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker({ borderRadius: '50%', background: '#67C23A' })),
  },
  {
    id: 1,
    content: 'zhangyao1990 在2022年10月31日创建了开源项目 elegant-admin!',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker()),
  },
  {
    content: 'zhangyao1990 在2022年10月31日创建了开源项目 elegant-admin!',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker({ borderRadius: '50%', background: '#67C23A' })),
  },
  {
    id: 1,
    content: 'zhangyao1990 在2022年10月31日创建了开源项目 elegant-admin!',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker()),
  },
  {
    content: 'zhangyao1990 在2022年10月31日创建了开源项目 elegant-admin!',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker({ borderRadius: '50%', background: '#67C23A' })),
  },
  {
    id: 1,
    content: 'zhangyao1990 在2022年10月31日创建了开源项目 elegant-admin!',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker()),
  },
  {
    content: 'zhangyao1990 在2022年10月31日创建了开源项目 elegant-admin!',
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker({ borderRadius: '50%', background: '#67C23A' })),
  },
]
</script>

<template>
  <ElCard title="项目动态" shadow="hover" class="rounded-10px">
    <template #header>
      <div class="flex items-center justify-between">
        <div class="text-32rpx">
          最新动态
        </div>
      </div>
    </template>
    <el-scrollbar height="500px">
      <div class="py-10px">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-scrollbar>
  </ElCard>
</template>

<style scoped lang="scss">
.scrollbar-list-item {
  display: flex;
  align-items: center;
  background: var(--g-container-bg);

  &__divider {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    pointer-events: none;
    background-color: var(--g-border-color);
    transition: background-color 0.3s var(--n-bezier);
  }
}
</style>
