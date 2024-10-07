<script lang="ts" setup>
import { computed, ref, shallowRef } from 'vue'
import type { RightSidebarModel } from '../../../../../../utils'
import { pluginManager } from '../../../../../../utils'
import EIcon from '../../../../icon'
import EBreadcrumb from './breadcrumb.vue'

const hideRightMain = ref(false)

const rightSidebars = computed(() => {
  return pluginManager.viewsContainers.rightSidebars.value.filter(item => item.visible)
})

const actionBarCheckedIndex = ref<number | null>(0)
const sidebarComponent = shallowRef<any>(null)
sidebarComponent.value = rightSidebars.value[0]?.component

function handleHideRight() {
  hideRightMain.value = !hideRightMain.value
}

function handleClick(item: RightSidebarModel, index: number) {
  if (actionBarCheckedIndex.value === index) {
    return false
  }
  sidebarComponent.value = item.component
  actionBarCheckedIndex.value = index
}
</script>

<template>
  <div v-if="sidebarComponent" class="elegant-right-sidebar-container relative">
    <!-- 折叠按钮 start -->
    <div
      class="elegant-right-sidebar-hide-btn absolute left--18px top-80px z-9 h-28px w-28px flex cursor-pointer items-center justify-center rounded-full"
      @click="handleHideRight"
    >
      <EIcon
        class="transition-all" :class="{ 'rotate-180': hideRightMain }"
        name="icon--elegant--arrow-forward-ios-rounded"
      />
    </div>
    <div class="w-10px" />
    <!-- 折叠按钮 end -->

    <div class="elegant-right-sidebar w-308px" :class="{ hide: hideRightMain }">
      <div class="w-308px">
        <EBreadcrumb />
        <ul class="elegant-actions-container">
          <li
            v-for="(item, index) in rightSidebars" :key="index" class="elegant-action-item" :title="item.title"
            :class="{ checked: actionBarCheckedIndex === index }" @click="handleClick(item, index)"
          >
            {{ item.title }}
          </li>
        </ul>
        <div class="elegant-sidebar-content">
          <component :is="sidebarComponent" />
        </div>
      </div>
    </div>
  </div>
</template>
