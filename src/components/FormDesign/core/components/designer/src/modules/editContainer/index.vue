<script lang="ts" setup>
import { computed, inject, onMounted, ref } from 'vue'
import type { PageSchema } from '../../../../../types/elegant-designer'
import EPreviewWidgets from './previewWidgets.vue'
import ENodeItem from './nodeItem.vue'
import KEditScreenContainer from './editScreenContainer.vue'

const elegantEditRangeRef = ref<HTMLDivElement | null>(null)
const ePreviewWidgetsRef = ref<typeof EPreviewWidgets | null>(null)

const pageSchema = inject('pageSchema') as PageSchema
const rootSchema = computed(() => {
  return pageSchema.schemas[0]
})

const getEditRangestyle = computed(() => {
  return {
    width: '100%',
    height: '100%',
  }
})

onMounted(() => {
  ePreviewWidgetsRef.value?.handleInit(elegantEditRangeRef.value)
})
</script>

<template>
  <section class="elegant-edit-canvas">
    <KEditScreenContainer>
      <div
        ref="elegantEditRangeRef" class="elegant-edit-range relative overflow-auto rounded-md"
        :style="getEditRangestyle"
      >
        <ENodeItem :schema="rootSchema" />
        <EPreviewWidgets ref="ePreviewWidgetsRef" />
      </div>
    </KEditScreenContainer>
  </section>
</template>
