<script lang="ts" setup>
import { provide, reactive } from 'vue'
import { useVModel } from '@vueuse/core'
import { getUUID, pluginManager } from '../../../utils'
import EOptionItem from './optionItem.vue'

const props = defineProps<{
  tree?: boolean
  modelValue: Option[]
}>()
const emit = defineEmits(['update:modelValue'])
const Button = pluginManager.getComponent('button')
const innerValue = useVModel(props, 'modelValue', emit)

interface Option {
  label: string
  value: string
  children?: Option[]
}

provide('tree', props.tree)

/**
 *  添加选项
 */
function handleAdd() {
  const option: Option = reactive({
    label: '',
    value: `option_${getUUID(8)}`,
  })
  innerValue.value = [...innerValue.value, option]
}
</script>

<template>
  <div class="">
    <div v-show="!innerValue?.length" class="my-2 bg-white py-4 text-center text-gray-400">
      暂无选项
    </div>
    <!-- <div>
      <div :class="tree ? 'grid-cols-[16px_auto_auto_16px_16px]' : 'grid-cols-[16px_auto_auto_16px]'"
        class="option-item grid gap-2 items-center mb-2">
        <span></span>
        <div class="text-center">label</div>
        <div class="text-center">value</div>
      </div>
    </div> -->
    <EOptionItem v-model="innerValue" />
    <Button @click="handleAdd">
      添加选项
    </Button>
  </div>
</template>
