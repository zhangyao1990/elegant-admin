<script lang="ts" setup>
import { computed, ref, shallowRef } from 'vue'
import type { ActivitybarModel } from '../../../../../../utils'
import { pluginManager } from '../../../../../../utils'
import EIcon from '../../../../icon'

defineOptions({
  name: 'EActivityBar',
})
const activitybars = computed(() => {
  return pluginManager.viewsContainers.activitybars.value.filter(item => item.visible)
})

const activityBarCheckedIndex = ref<number | null>(0)

const sidebarComponent = shallowRef<any>(null)
sidebarComponent.value = activitybars.value[0].component

function handleClick(item: ActivitybarModel, index: number) {
  if (activityBarCheckedIndex.value === index) {
    activityBarCheckedIndex.value = null
    return false
  }
  sidebarComponent.value = item.component
  activityBarCheckedIndex.value = index
}
</script>

<template>
  <div class="relative flex">
    <div class="elegant-action-bar">
      <ul class="elegant-actions-container">
        <li
          v-for="(item, index) in activitybars" :key="index" class="elegant-action-item" :title="item.title"
          :class="{ checked: activityBarCheckedIndex === index }" @click="handleClick(item, index)"
        >
          <EIcon class="relative" :name="item.icon" />
          <div class="text-14px">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
    <div class="elegant-left-sidebar" :class="{ hide: activityBarCheckedIndex === null }">
      <div class="elegant-sidebar-container">
        <component :is="sidebarComponent" />
      </div>
    </div>
  </div>
</template>
