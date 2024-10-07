<script setup lang="ts">
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useI18n } from 'vue-i18n'
import { useTheme } from './useElementTheme'
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()
const { changePrimary } = useTheme()
// init language
const i18n = useI18n()
watch(
  () => settingsStore.settings.app.themeColor,
  () => {
    changePrimary(settingsStore.settings.app.themeColor)
  },
  {
    deep: true,
  },
)
const currentLocale = computed(() => {
  return settingsStore.settings.app.translationLang === 'zh'
    ? { ...zhCn }
    : { ...en }
})
onMounted(() => {
  i18n.locale.value = settingsStore.settings.app.translationLang ?? 'zh'
})
</script>

<template>
  <ElConfigProvider :locale="currentLocale" :button="{ autoInsertSpace: true }">
    <slot />
  </ElConfigProvider>
</template>
