<script setup lang="ts">
import eventBus from '@/utils/eventBus'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'NavSearch',
})

const settingsStore = useSettingsStore()
</script>

<template>
  <span class="h-34px flex-center cursor-pointer px-2" @click="eventBus.emit('global-search-toggle')">
    <SvgIcon v-if="settingsStore.mode === 'mobile'" name="ri:search-line" />
    <span v-else class="group h-full inline-flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-5px bg-#ffffff px-2 py-1.5 text-dark ring-1 ring-stone-2 ring-inset transition dark:bg-stone-9 dark:text-white">
      <SvgIcon name="ri:search-line" />
      <span class="text-sm text-stone-5 transition group-hover:text-dark dark:group-hover:text-white">{{ $t('head.search') }}</span>
      <HKbd v-if="settingsStore.settings.navSearch.enableHotkeys" class="ml-2">{{ settingsStore.os === 'mac' ? '⌥' : 'Alt' }} S</HKbd>
    </span>
  </span>
</template>
