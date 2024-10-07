<script lang="ts" setup>
import { computed, inject, onUnmounted, provide, ref, useAttrs, watch } from 'vue'
import { type PageManager, pluginManager } from '../../../../../../utils'
import ENode from '../../../../node'
import type { ComponentSchema, Designer, PageSchema } from '../../../../../../core'
import KEditNodeItem from './editNodeItem.vue'

defineOptions({
  name: 'ENodeItem',
})
const props = defineProps<{
  schema: ComponentSchema
  name?: string
}>()
const attrs = useAttrs()
const designer = inject('designer') as Designer
const pageManager = inject('pageManager', {}) as PageManager
const pageSchema = inject('pageSchema', {}) as PageSchema

const nodeRef = ref<HTMLBaseElement | null>(null)

provide('nodeAttrs', attrs)
/**
 * 获取当前组件dom元素
 */
const getComponentElement = computed<HTMLBaseElement | null>(() => {
  const componentInstances = pageManager.componentInstances.value
  const id = props.schema?.id
  const componentConfing = pluginManager.getComponentConfingByType(props.schema?.type) ?? null
  if (!id || !componentInstances?.[id]) {
    return null
  }
  if (componentConfing?.defaultSchema.input && props.schema?.noFormItem !== true) {
    return componentInstances[`${id}formItem`]?.$el
  }
  const componentInstance = componentInstances[id]
  if (componentInstance?.$el?.nodeName === '#text') {
    return null
  }
  return componentInstance?.$el
})

// 监听选中dom元素变化
watch(() => getComponentElement.value, (componentElement) => {
  componentElement?.addEventListener('click', setCheckedNode, false)
  componentElement?.addEventListener('mouseover', setHoverNode, false)
  componentElement?.addEventListener('mouseout', clearHoverNode, false)
})

onUnmounted(() => {
  getComponentElement.value?.removeEventListener('click', setCheckedNode, false)
  getComponentElement.value?.removeEventListener('mouseover', setHoverNode, false)
  getComponentElement.value?.removeEventListener('mouseout', clearHoverNode, false)
})

function setCheckedNode(event: Event) {
  event.stopPropagation()
  designer.setCheckedNode(props.schema)
}

function setHoverNode(event: Event) {
  // 根节点不显示hover
  if (props.schema.id === pageSchema.schemas[0]?.id) {
    return
  }
  event.stopPropagation()
  designer.setHoverNode(props.schema)
}

function clearHoverNode(event: Event) {
  event.stopPropagation()
  designer.setHoverNode(null)
}
const localSchema = ref<ComponentSchema>(props.schema)

watch(() => props.schema, (newSchema) => {
  localSchema.value = newSchema
}, { deep: true })
</script>

<template>
  <ENode ref="nodeRef" :component-schema="props.schema">
    <!-- childImmovable不可拖拽设计 start -->
    <template v-if="pluginManager.getComponentConfingByType(props.schema.type)?.editConstraints?.childImmovable" #edit-node>
      <ENodeItem v-for="schemaItem in props.schema.children" :key="schemaItem.id" :schema="schemaItem" />
    </template>
    <!-- childImmovable不可拖拽设计 end -->

    <template v-else #edit-node>
      <KEditNodeItem v-if="props.schema.children" v-model:schemas="localSchema.children" />
    </template>
  </ENode>
</template>
