<script lang="ts" setup>
import { nextTick } from 'vue'

defineOptions({
  name: 'FrameView',
})

const loading = ref(true)
const currentRoute = useRoute()
const frameLink = ref<string>('')
const frameRef = ref<HTMLElement | null>(null)
const key = ref(new Date().getTime())
onMounted(() => {
  loading.value = true
  nextTick(() => {
    frameLink.value = unref(currentRoute.meta)?.iframe as string
    init()
  })
})
watch(
  () => unref(currentRoute.meta)?.iframe,
  (val: any) => {
    if (val) {
      loading.value = true
      if (unref(currentRoute.meta)?.iframe) {
        key.value = new Date().getTime()
        nextTick(() => {
          frameLink.value = unref(currentRoute.meta)?.iframe as string
          init()
        })
      }
    }
  },
)

function hideLoading() {
  loading.value = false
}
function init() {
  nextTick(() => {
    const iframe = unref(frameRef)
    if (!iframe) {
      return
    }
    const _frame = iframe as any
    if (_frame.attachEvent) {
      _frame.attachEvent('onload', () => {
        hideLoading()
      })
    }
    else {
      iframe.onload = () => {
        hideLoading()
      }
    }
  })
}
</script>

<template>
  <div class="p-[10px]">
    <div class="frame">
      <iframe :key="key" ref="frameRef" :src="frameLink" class="frame-iframe" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.frame {
  position: absolute;
  inset: 0;

  .frame-iframe {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 0;
  }
}

.main-content {
  margin: 2px 0 0 !important;
}
</style>
