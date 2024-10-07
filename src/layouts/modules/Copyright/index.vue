<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'Copyright',
})
withDefaults(
  defineProps<{
    color?: string
  }>(),
  {
    color: '#333333',
  },
)
const settingsStore = useSettingsStore()
</script>

<template>
  <footer v-if="settingsStore.settings.copyright.enable" class="copyright" :style="{ color }">
    <span>Copyright</span>
    <SvgIcon name="ri:copyright-line" :size="18" />
    <span v-if="settingsStore.settings.copyright.dates">{{ settingsStore.settings.copyright.dates }}</span>
    <template v-if="settingsStore.settings.copyright.company">
      <a v-if="settingsStore.settings.copyright.website" :style="{ color }" :href="settingsStore.settings.copyright.website" target="_blank" rel="noopener">{{ settingsStore.settings.copyright.company }}</a>
      <span v-else>{{ settingsStore.settings.copyright.company }}</span>
    </template>
    <a v-if="settingsStore.settings.copyright.beian" :style="{ color }" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">{{ settingsStore.settings.copyright.beian }}</a>
  </footer>
</template>

<style lang="scss" scoped>
.copyright {
  --at-apply: flex items-center justify-center flex-wrap my-4 px-4 text-sm;

  span,
  a {
    --at-apply: px-1;
  }

  a {
    --at-apply: text-center no-underline hover:text-dark dark:hover:text-light transition;
  }
}
</style>
