<script lang="ts" setup>
import { computed, inject } from 'vue'
import { pluginManager } from '../../../../../../utils'
import ETree from '../../../../tree'
import type { Designer, PageSchema } from '../../../../../types/elegant-designer'
import EIcon from '../../../../../components/icon'

const designer = inject('designer') as Designer
const pageSchema = inject('pageSchema') as PageSchema

// 计算选中节点值
const selectedKeys = computed(() => {
  const id = designer.state.checkedNode?.id
  return id ? [id] : []
})

// 设置选中节点
function handleNodeClick(e: any) {
  designer.setCheckedNode(e.componentSchema)
}
</script>

<template>
  <div class="elegant-outline">
    <ETree
      :options="pageSchema.schemas"
      draggable
      :selected-keys="selectedKeys"
      :hover-key="designer.state.hoverNode?.id"
      @node-click="handleNodeClick"
    >
      <template #tree-node="{ schema }">
        <div
          class="elegant-text-padding flex"
          :class="{ hidden: schema.componentProps?.hidden }"
          @mouseenter.stop="designer.setHoverNode(schema)"
          @mouseleave.stop="designer.setHoverNode(null)"
        >
          <span class="max-w-full truncate">
            <EIcon
              v-if="schema.componentProps?.hidden"
              name="icon--elegant--visibility-off-outline-rounded"
              class="translate-y-2px"
            />
            {{
              schema.label
                ?? pluginManager.getComponentConfingByType(schema.type)?.defaultSchema.label
            }}
          </span>
          <span class="elegant-node-type-text w-0 flex-1 truncate">
            {{ schema.id }}
          </span>
        </div>
      </template>
    </ETree>
  </div>
</template>
