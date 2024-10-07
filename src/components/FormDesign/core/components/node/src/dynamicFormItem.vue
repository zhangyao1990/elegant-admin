<script lang="ts" setup>
import { ref } from 'vue'
import { pluginManager } from '../../../../utils'
import type { ComponentSchema } from '../../../../core'

const props = defineProps<{
  hasFormItem?: boolean
  formItemProps: ComponentSchema
}>()

const emit = defineEmits(['updateFormItemRef'])

// 获取插件管理器中的表单项组件
const FormItem = pluginManager.getComponent('form-item')

const formItemRef = ref<any>()

/**
 * 当 FormItem 组件挂载时，向父组件发送 formItemRef
 */
function notifyFormItemMounted() {
  emit('updateFormItemRef', formItemRef.value)
}
</script>

<template>
  <!-- 如果有 FormItem，则包裹 slot，否则直接渲染 slot -->
  <FormItem
    v-if="props.hasFormItem"
    ref="formItemRef"
    v-bind="props.formItemProps"
    @vue:mounted="notifyFormItemMounted "
  >
    <slot />
  </FormItem>
  <!-- 无FormItem start -->
  <slot v-else />
  <!-- 无FormItem end -->
</template>
