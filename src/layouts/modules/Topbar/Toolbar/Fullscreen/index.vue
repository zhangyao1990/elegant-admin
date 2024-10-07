<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'Fullscreen',
})

const settingsStore = useSettingsStore()

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <span v-if="settingsStore.mode === 'pc'" class="mx-6px flex-center transform cursor-pointer rounded-100px bg-[var(--g-bg-color-secondary)] p-8px hover:bg-[var(--g-bg-color-secondary-hover)]" @click="toggle">
    <SvgIcon class="text-14px" :name="isFullscreen ? 'ri:fullscreen-exit-line' : 'ri:fullscreen-line'" />
  </span>
</template>
