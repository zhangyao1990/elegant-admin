<script lang="ts" setup>
import type { Ref, Slots } from 'vue'
import { computed, defineComponent, h, inject } from 'vue'
import { pluginManager } from '../../../../utils'
import type { ComponentSchema, PageSchema } from '../../../../core'
import EIcon from '../../icon'
import ETreeNodes from './treeNodes.vue'

defineOptions({
  name: 'ETreeNodeItem',
})

const props = defineProps<{
  schema: ComponentSchema
}>()
const localSchema = ref<any>(props.schema)
watch(
  () => props.schema,
  (newSchema) => {
    localSchema.value = newSchema
  },
  {
    deep: true,
  },
)
const slots = inject('slots', {}) as Slots
const pageSchema = inject('pageSchema', {}) as PageSchema

const expandedKeys = inject('expandedKeys') as Ref<string[]>
const treeProps = inject('treeProps') as any
const selectedKeys = inject('selectedKeys') as Ref<string[]>

const handleSelect = inject('handleSelect') as (
  id: string,
  componentSchema: ComponentSchema
) => NonNullable<unknown>

const expanded = computed(() => {
  return expandedKeys.value.includes(props.schema.id ?? '')
})

const TreeNodeText = defineComponent({
  setup() {
    return () =>
      h(
        'span',
        {
          class: {
            text: true,
            hover: treeProps.hoverKey === props.schema.id,
            checked: selectedKeys.value.includes(props.schema.id!),
          },
          onClick: () => handleSelect(props.schema.id!, props.schema),
        },
        slots['tree-node']?.(props)
        ?? h(
          'span',
          { class: 'elegant-text-padding flex' },
          {
            default: () => [
              h(
                'span',
                { class: 'max-w-full truncate' },
                props.schema.label
                ?? pluginManager.getComponentConfingByType(props.schema.type)
                  ?.defaultSchema.label,
              ),
              h(
                'span',
                { class: 'elegant-node-type-text flex-1 w-0 truncate' },
                props.schema.id,
              ),
            ],
          },
        ),
      )
  },
})

function handleExpanded() {
  const id = props.schema.id
  if (!id) {
    return false
  }

  if (expandedKeys.value.includes(id)) {
    expandedKeys.value = expandedKeys.value.filter(item => item !== id)
  }
  else {
    expandedKeys.value.push(id)
  }
}

function init() {
  const id = props.schema.id
  if (!id || !props.schema.children?.length) {
    return false
  }
  expandedKeys.value.push(id)
}
init()
</script>

<template>
  <li
    class="elegant-tree-node"
    :class="{
      'expanded': props.schema.children?.length,
      'level-1': props.schema.id === pageSchema.schemas[0]?.id,
    }"
  >
    <a>
      <span
        v-if="
          props.schema.children?.length && props.schema.id !== pageSchema.schemas[0]?.id
        "
        class="icon-expanded"
        :class="{ expanded }"
        @click="handleExpanded"
      >
        <EIcon name="icon--elegant--caret-right-outlined" />
      </span>
      <TreeNodeText />
    </a>
    <ETreeNodes
      v-if="props.schema.children?.length"
      v-model:schemas="localSchema.children"
      class="elegant-tree-sublist"
      :class="{ expanded }"
      :parent-schema="props.schema"
    />
  </li>
</template>
