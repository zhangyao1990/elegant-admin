<script setup lang="ts">
const flip = ref<'horizontal' | 'vertical' | 'both'>('horizontal')
</script>

<template>
  <div class="flex flex-1 flex-col">
    <PageHeader title="SVG Icon" content="自定义图标示例" />
    <PageMain>
      <p>SVG Icon</p>
      <SvgIcon name="example-emotion-line" :size="32" :flip="flip" />
      <SvgIcon name="example-emotion-laugh-line" :size="32" :flip="flip" />
      <SvgIcon name="example-emotion-unhappy-line" :size="32" :flip="flip" />

      <div>
        <p>翻转：</p>
        <ElRadioGroup v-model="flip">
          <ElRadioButton value="horizontal">
            水平翻转
          </ElRadioButton>
          <ElRadioButton value="vertical">
            垂直翻转
          </ElRadioButton>
          <ElRadioButton value="both">
            水平垂直翻转
          </ElRadioButton>
        </ElRadioGroup>
      </div>
      <p>使用方法：</p>
      <ol>
        <li>上 <a href="https://www.iconfont.cn/" target="_blank">Iconfont</a> 下载需要的 svg 图标</li>
        <li>将 svg 文件放入 ./src/assets/icons 目录下，文件名即为 name</li>
      </ol>
    </PageMain>
  </div>
</template>
