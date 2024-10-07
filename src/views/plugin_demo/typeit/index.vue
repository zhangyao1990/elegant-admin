<script setup lang="ts">
import Alert from '../modules/alert.vue'

defineOptions({
  name: 'ProTypeit',
})

const options: any = {
  strings: ['我是一只小小小鸟', '想要飞呀飞', '却怎么也飞不高'],
}
function open(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div>
    <Alert />
    <PageHeader title="打字机组件">
      <template #content>
        <p>
          安装命令：<ElTag>pnpm add typeit</ElTag>
        </p>
      </template>
      <ElButton @click="open('https://www.typeitjs.com')">
        <template #icon>
          <SvgIcon name="ep:link" />
        </template>
        访问 Typeit
      </ElButton>
    </PageHeader>
    <PageMain>
      <div class="flex py-20px">
        <Typeit :options="options" />
      </div>
    </PageMain>
  </div>
</template>
