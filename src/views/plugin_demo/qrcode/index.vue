<!--
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-05-23 15:30:15
 * @LastEditTime: 2024-06-09 23:25:50
 * @LastEditors: zhangyao
-->
<script setup lang="ts">
import QRCode from 'qrcode'
import Alert from '../modules/alert.vue'

const url1 = ref('')
const url2 = ref('')
const url3 = ref('')

const canvasRef = ref()

onMounted(() => {
  // 渲染成 img 标签
  QRCode.toDataURL('Elegant-admin 真棒！').then((url: string) => {
    url1.value = url
  }).catch((err: any) => {
    console.log(err)
  })
  // 渲染成 canvas 标签
  QRCode.toCanvas(canvasRef.value, 'Elegant-admin 真棒！').then(() => {
    // 渲染成功
  }).catch((err: any) => {
    console.log(err)
  })
  // 自定义颜色
  QRCode.toDataURL('Elegant-admin 真棒！', {
    color: {
      dark: '#5482EE',
      light: '#E8E8E8',
    },
  }).then((url: string) => {
    url2.value = url
  }).catch((err: any) => {
    console.log(err)
  })
  // 指定宽度
  QRCode.toDataURL('Elegant-admin 真棒！', {
    width: 100,
  }).then((url: string) => {
    url3.value = url
  }).catch((err: any) => {
    console.log(err)
  })
})

function open(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div>
    <Alert />
    <PageHeader title="二维码">
      <template #content>
        <p style="margin-bottom: 0;">
          安装命令：<ElTag>pnpm add qrcode</ElTag> <ElTag>pnpm add @types/qrcode -D</ElTag>
        </p>
      </template>
      <ElButton @click="open('https://github.com/soldair/node-qrcode')">
        <template #icon>
          <SvgIcon name="ep:link" />
        </template>
        访问 node-qrcode
      </ElButton>
    </PageHeader>
    <div class="mx-8px">
      <Grid :collapsed="false" :gap="[10, 10]" :cols="{ xs: 1, sm: 1, md: 4, lg: 4, xl: 4 }">
        <GridItem :span="1">
          <PageMain title="渲染成 img 标签" style="margin: 0;">
            <img :src="url1">
          </PageMain>
        </GridItem>
        <GridItem :span="1">
          <PageMain title="渲染成 canvas 标签" style="margin: 0;">
            <canvas ref="canvasRef" />
          </PageMain>
        </GridItem>
        <GridItem :span="1">
          <PageMain title="自定义颜色" style="margin: 0;">
            <img :src="url2">
          </PageMain>
        </GridItem>
        <GridItem :span="1">
          <PageMain title="指定宽度" style="margin: 0;" class="h-full">
            <img :src="url3">
          </PageMain>
        </GridItem>
      </Grid>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-main {
  text-align: center;
}
</style>
