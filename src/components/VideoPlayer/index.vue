<script lang="ts" setup name="VideoPlayer">
import Player from 'xgplayer'
import HlsPlayer from 'xgplayer-hls'
import 'xgplayer/dist/index.min.css'

defineOptions({
  name: 'VideoPlayer',
})
const props = withDefaults(
  defineProps<{
    src?: string
    autoplay?: boolean
    controls?: boolean
    loop?: boolean
    isLive?: boolean
    options?: any
  }>(),
  {
    src: '',
    autoplay: false,
    controls: true,
    loop: false,
    isLive: false,
    options: {},
  },
)
const player = ref<any>({})
watch(
  () => props.src,
  (newVal: any) => {
    if (player.value.hasStart) {
      player.value.src = newVal
    }
    else {
      player.value.start(newVal)
    }
  },
)
onMounted(() => {
  if (props.isLive) {
    initHls()
  }
  else {
    init()
  }
})
const xgplayerVideoRef = ref<HTMLElement>()
function init() {
  player.value = new Player({
    el: xgplayerVideoRef.value,
    url: props.src,
    autoplay: props.autoplay,
    loop: props.loop,
    controls: props.controls,
    fluid: true,
    lang: 'zh-cn',
    ...props.options,
  })
}
function initHls() {
  player.value = new HlsPlayer({
    el: xgplayerVideoRef,
    url: props.src,
    autoplay: props.autoplay,
    loop: props.loop,
    controls: props.controls,
    fluid: true,
    isLive: true,
    ignores: ['time', 'progress'],
    lang: 'zh-cn',
    ...props.options,
  } as any)
}
function destroyXgPlayer() {
  player.value?.destroy()
}
onUnmounted(() => {
  destroyXgPlayer()
})
</script>

<template>
  <div ref="xgplayerVideoRef" class="xgplayer-video" />
</template>

<style scoped>
.xgplayer-video:deep(.danmu) > * {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;
}

.xgplayer-video:deep(.xgplayer-controls) {
  background-image: linear-gradient(180deg, transparent, rgb(0 0 0 / 30%));
}

.xgplayer-video:deep(.xgplayer-progress-tip) {
  padding: 0 10px;
  line-height: 25px;
  color: #fff;
  background: rgb(0 0 0 / 50%);
  border: 0;
  border-radius: 25px;
}

.xgplayer-video:deep(.xgplayer-enter-spinner) {
  width: 50px;
  height: 50px;
}
</style>
