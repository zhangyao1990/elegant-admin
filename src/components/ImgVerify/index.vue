<script lang="ts" setup>
import { useVerify } from '@/hooks/useVerify'

defineOptions({
  name: 'ImgVerify',
})
const verify = ref(null)

const { width, height, handleDraw, imgCode } = useVerify(verify)
defineExpose({
  imgCode,
})
</script>

<template>
  <div :style="{ width: '131px', height: `${height}px`, cursor: 'pointer' }">
    <canvas ref="verify" :width="width" :height="height" @click="handleDraw" />
  </div>
</template>
