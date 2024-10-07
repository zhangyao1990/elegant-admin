<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import imgLogo from '@/assets/images/logo.png'

defineOptions({
  name: 'Logo',
})

withDefaults(
  defineProps<{
    showLogo?: boolean
    showTitle?: boolean
  }>(),
  {
    showLogo: true,
    showTitle: true,
  },
)

const settingsStore = useSettingsStore()

const title = ref(import.meta.env.VITE_APP_TITLE)
const logo = ref(imgLogo)

const to = computed(() => settingsStore.settings.home.enable ? settingsStore.settings.home.fullPath : '')
</script>

<template>
  <RouterLink :to="to" class="h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline" :class="{ 'cursor-pointer': settingsStore.settings.home.enable }" :title="title">
    <div class="h-30px w-30px text-0">
      <img v-if="showLogo" :src="logo" class="logo h-30px w-30px rounded-[4px] object-contain">
    </div>
    <span v-if="showTitle" class="ml-15px block truncate font-bold">{{ title }}</span>
  </RouterLink>
</template>
