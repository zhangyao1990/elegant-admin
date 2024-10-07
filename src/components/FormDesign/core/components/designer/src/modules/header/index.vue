<script lang="ts" setup>
import { type Ref, inject } from 'vue'
import { pluginManager } from '../../../../../../utils'
import EIcon from '../../../../icon'
import type { DesignerProps } from '../../types'

const emits = defineEmits(['save', 'reset', 'preview'])
const Button = pluginManager.getComponent('button')
const designerProps = inject('designerProps') as Ref<DesignerProps>

/**
 * 预览
 */
function handlePreview() {
  emits('preview')
}

/**
 * 触发保存操作
 */
function handleSave() {
  emits('save')
}
</script>

<template>
  <header class="elegant-header relative">
    <div class="elegant-header-item flex flex-1 items-center">
      <slot name="prefix">
        <a
          class="flex items-center decoration-none"
          href="https://github.com/Kchengz/elegant-designer"
          target="_blank"
        >
          <img
            src="../../../../../static/logo.png"
            class="h-18px w-18px"
            alt=""
            srcset=""
          >
          <span class="ml-3">elegantDesigner</span>
        </a>
      </slot>
    </div>

    <div class="elegant-header-item flex flex-1 justify-center text-12px">
      <slot name="title">
        {{ designerProps.title }}
      </slot>
    </div>
    <div class="elegant-header-item flex flex-1 items-center justify-end">
      <slot name="right-prefix" />
      <slot name="right-action">
        <div>
          <Button size="small" @click="handlePreview">
            <span class="h-full items-center flex!">
              <EIcon name="icon--elegant--preview-outline" class="mr-4px" />
              预览
            </span>
          </Button>
        </div>
        <div class="ml-2">
          <Button size="small" @click="handleSave">
            <span class="h-full items-center flex!">
              <EIcon name="icon--elegant--save-outline-rounded" class="mr-4px" />
              保存
            </span>
          </Button>
        </div>
      </slot>
      <slot name="right-suffix" />
    </div>
  </header>
</template>
