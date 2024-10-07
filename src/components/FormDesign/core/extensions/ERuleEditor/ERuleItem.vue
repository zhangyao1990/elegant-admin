<script lang="ts" setup>
import { computed, inject } from 'vue'
import type { PageManager } from '../../../utils'
import ENode from '../../components/node/index'
import EIcon from '../../components/icon'
import type { FormItemRule } from './types'
import { lenTypeOptions, triggerOptions, typeOptions } from './data'

const props = defineProps<{
  rule: FormItemRule
}>()
const emit = defineEmits(['change', 'delete', 'update:rule'])
const modelRule = computed({
  get() {
    return props.rule
  },
  set(value) {
    emit('update:rule', value)
  },
})

const pageManager = inject('pageManager', {}) as PageManager

const methodOptions = computed(() => {
  return Object.entries(pageManager.funcs.value)
    .filter(([_key, value]) => typeof value === 'function')
    .map(([label]) => ({ label, value: label }))
})

const ruleItemSchemas = [
  {
    type: 'select',
    label: '校验时机',
    model: 'trigger',
    componentProps: { options: triggerOptions, placeholder: '校验时机', multiple: true, mode: 'multiple' },
  },
  {
    type: 'switch',
    label: '自定义规则',
    model: 'isValidator',
  },
  {
    type: 'select',
    label: '校验函数',
    model: 'validator',
    show() { return Boolean(modelRule.value.isValidator) },
    componentProps: { options: methodOptions.value, placeholder: '校验函数' },
  },
  {
    type: 'select',
    label: '类型',
    model: 'type',
    show() { return !modelRule.value.isValidator },
    componentProps: { options: typeOptions, placeholder: '类型' },
  },
  {
    type: 'input',
    label: '正则校验',
    model: 'pattern',
    show() { return !modelRule.value.isValidator },
    componentProps: { placeholder: '正则校验' },
  },
  {
    type: 'number',
    label: '字段长度',
    model: 'len',
    show() { return lenTypeOptions.includes(modelRule.value.type ?? '') },
    componentProps: { min: 0, placeholder: '字段长度' },
  },
  {
    type: 'number',
    label: '最小长度',
    model: 'min',
    show() { return lenTypeOptions.includes(modelRule.value.type ?? '') },
    componentProps: { min: 0, placeholder: '最小长度' },
  },
  {
    type: 'number',
    label: '最大长度',
    model: 'max',
    show() { return lenTypeOptions.includes(modelRule.value.type ?? '') },
    componentProps: { min: 0, placeholder: '最大长度' },
  },
  {
    type: 'input',
    label: '校验信息',
    model: 'message',
    componentProps: { placeholder: '校验信息' },
  },
]

/**
 * 更新校验规则
 */
function handleUpdate() {
  const v = modelRule.value
  if (v.isValidator) {
    delete v.type
    delete v.pattern
    delete v.len
    delete v.min
    delete v.max
  }
  else {
    delete v.validator
  }
  // emit('update:rule', v)
  emit('change', v)
}

/**
 * 删除校验规则
 */
function handleDelete() {
  emit('delete')
}
</script>

<template>
  <div
    class="rule-item-main hover:border-primary relative m-t-2 border border-gray-200 rounded border-solid bg-white p-2 transition-all"
  >
    <template v-for="(componentSchema, index) in ruleItemSchemas" :key="index">
      <div v-if="componentSchema.show ? componentSchema.show() : true" class="m-t-2 flex first:m-0">
        <div class="elegant-attr-label" title="校验时机">
          {{ componentSchema.label }}
        </div>
        <div class="elegant-attr-input">
          <ENode v-model="modelRule[componentSchema.model]" :component-schema="{ ...componentSchema, noFormItem: true }" @change="handleUpdate" />
        </div>
      </div>
    </template>
    <div
      class="rule-btn-delete text-md absolute right-0 top-0 h-24px w-24px flex cursor-pointer items-center justify-center rounded-bl-2 color-white transition-all"
      @click="handleDelete"
    >
      <EIcon name="icon--elegant--delete-outline-rounded" />
    </div>
  </div>
</template>
