<script lang="ts" setup>
import { computed } from 'vue'
import type { ComponentSchema } from '../../../core'

const props = defineProps<{
  componentSchema: ComponentSchema
}>()

const children = computed(() => {
  return props.componentSchema.children ?? []
})
</script>

<template>
  <div
    class="wh-full! box-border h-full"
  >
    <slot name="edit-node">
      <slot
        v-for="item in children"
        name="node"
        :component-schema="item"
      />
    </slot>
  </div>
</template>
