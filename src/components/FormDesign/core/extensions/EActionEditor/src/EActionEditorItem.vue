<script lang="ts" setup>
import { type PropType, inject } from 'vue'
import draggable from 'vuedraggable'
import { findSchemaById } from '../../../../utils'
import type { PageSchema } from '../../../types/elegant-designer'
import EIcon from '../../../components/icon'

const props = defineProps({
  itemEvents: {
    type: Array as PropType<any>,
    default: () => [],
  },
  allEvents: {
    type: Array as PropType<any>,
    default: () => [],
  },
  modelValue: {
    type: Object as PropType<any>,
    default: () => {},
  },
  events: {
    type: Object as PropType<any>,
    default: () => ({}),
  },
})
const emit = defineEmits(['add', 'edit', 'update:modelValue'])

const pageSchema = inject('pageSchema') as PageSchema

/**
 * 打开动作配置窗口
 * @param type
 */
function handleOpen(type: string) {
  emit('add', type)
}

/**
 * 获取组件label
 * @param id
 */
function getLabel(id: string) {
  const schema = findSchemaById(pageSchema.schemas, id)
  return schema.label
}

/**
 * 删除
 * @param index
 */
function handleDelete(index: number, type: string) {
  const newEvents = getNewEvents(type)
  newEvents[type] = props.events[type].filter((_item: any, i: number) => index !== i)
  if (!newEvents[type]?.length) {
    delete newEvents[type]
  }
  emit('update:modelValue', newEvents)
}

/**
 * 修改事件
 * @param index
 * @param type
 * @param action
 */
function handleEdit(index: number, type: string, action: any) {
  emit('edit', index, type, action)
}

/**
 * 获取新的事件数据，过滤空数据
 * @param type
 */
function getNewEvents(type: string) {
  const newEvents: { [type: string]: any } = {}
  props.allEvents.forEach((item: any) => {
    if (!props.events[item.type].length) {
      return false
    }
    if (item.type === type) {
      return false
    }
    newEvents[item.type] = props.events[item.type]
  })
  return newEvents
}
const localEvents = ref<any>(props.events)
watch(
  () => props.events,
  (newEvents) => {
    localEvents.value = newEvents
  },
  { deep: true, immediate: true },
)
</script>

<template>
  <div v-for="item in itemEvents" :key="item.type" class="elegant-event-item">
    <div class="elegant-event-info">
      <div class="elegant-event-label" :title="item.describe">
        {{ item.describe }}
      </div>
      <div class="elegant-event-btn flex items-center text-lg text-$elegant-text-secondary">
        <EIcon name="icon--elegant--add-rounded" @click="handleOpen(item.type)" />
      </div>
    </div>
    <div class="elegant-action-editor-main">
      <draggable
        v-model="localEvents[item.type]" item-key="id" :component-data="{
          type: 'transition-group',
        }" group="option-list" handle=".handle" :animation="200"
      >
        <template #item="{ element: action, index }">
          <div class="elegant-editor-item rounded">
            <div class="w-36px flex items-center text-lg">
              <EIcon class="handle mr-2 cursor-move text-lg text-$elegant-text-medium" name="icon--elegant--drag" />
            </div>
            <div class="flex-1">
              <div v-if="action.type === 'component'">
                {{ getLabel(action.componentId) }}
              </div>
              <div v-else-if="action.type === 'custom'">
                自定义函数
              </div>
              <div v-else-if="action.type === 'public'">
                公共函数
              </div>
              {{ action.methodName }}
            </div>
            <div class="elegant-action-box text-lg text-$elegant-text-medium">
              <div class="elegant-edit-btn" @click="handleEdit(index, item.type, action)">
                <EIcon name="icon--elegant--page-info-outline-rounded" />
              </div>
              <div class="elegant-del-btn" @click="handleDelete(index, item.type)">
                <EIcon name="icon--elegant--delete-outline-rounded" />
              </div>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
