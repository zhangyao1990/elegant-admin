<script setup lang="ts">
import Alert from '../modules/alert.vue'

const content = ref('<h1>Elegant-admin</h1>')

function open(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="flex flex-1 flex-col">
    <Alert />
    <PageHeader title="TinyMCE 编辑器">
      <template #content>
        <p>
          安装命令：<ElTag>pnpm add tinymce @tinymce/tinymce-vue</ElTag>
        </p>
        <p style="margin-bottom: 0;">
          安装成功后，在框架 /public 目录下创建 tinymce 文件夹，并将 /node_modules/tinymce 目录下的 langs 和 skins 文件夹复制到 /public/tinymce 目录下。
        </p>
      </template>
      <ElButton @click="open('https://github.com/tinymce/tinymce')">
        <template #icon>
          <SvgIcon name="ep:link" />
        </template>
        访问 TinyMCE
      </ElButton>
    </PageHeader>
    <PageMain>
      <Tinymce v-model="content" />
      <div class="preview" v-html="content" />
    </PageMain>
  </div>
</template>
