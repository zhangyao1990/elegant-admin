<script lang="ts" setup>
import { inject, ref } from 'vue'
import { pluginManager } from '../../../../utils'
import type { PageSchema } from '../../../types/elegant-designer'

const MonacoEditor = pluginManager.getComponent('monacoEditor')
const MonacoEditorConfig = {
  theme: 'vs-light',
  selectOnLineNumbers: true,
  minimap: {
    enabled: false,
  },
}
const monacoEditorRef = ref<any>(null)
const pageSchema = inject('pageSchema') as PageSchema
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="pb-2">
      自定义函数编辑
    </div>
    <MonacoEditor
      ref="monacoEditorRef" v-model="pageSchema.script" auto-toggle-theme class="elegant-editor flex-1" :config="MonacoEditorConfig"
      language="javascript"
    />
  </div>
</template>
