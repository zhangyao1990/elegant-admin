<script setup lang="ts">
import Alert from '../modules/alert.vue'

const videoOptions = ref<any>({
  pip: true,
})
const itemVideoUrl = ref<string>('https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4')
function open(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="flex flex-1 flex-col">
    <Alert />
    <PageHeader title="视频播放器1" content="视频播放器示例">
      <template #content>
        <p style="margin-bottom: 0;">
          安装命令：<ElTag>npm install xgplayer</ElTag>
        </p>
      </template>
      <ElButton @click="open('https://v2.h5player.bytedance.com/config')">
        <template #icon>
          <SvgIcon name="ep:link" />
        </template>
        访问 xgplayer
      </ElButton>
    </PageHeader>
    <div class="ml-8px w-600px flex items-center justify-center overflow-hidden rounded-6px">
      <VideoPlayer :src="itemVideoUrl" :options="videoOptions" />
    </div>
  </div>
</template>
