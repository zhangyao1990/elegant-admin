<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import useSettingsStore from '@/store/modules/settings'
import { setLocal } from '@/utils/storage'

defineOptions({
  name: 'Language',
})
const mainPage = useMainPage()
const settingsStore = useSettingsStore()
const i18n = useI18n()
function translationLangSwitch(lang: string) {
  i18n.locale.value = lang
  settingsStore.settings.app.translationLang = lang
  setLocal('lang', lang)
  mainPage.reload()
}
</script>

<template>
  <span v-if="settingsStore.mode === 'pc'" class="mx-6px flex-center transform cursor-pointer rounded-100px bg-[var(--g-bg-color-secondary)] p-8px hover:bg-[var(--g-bg-color-secondary-hover)]">

    <HDropdownMenu
      :items="[
        [
          { label: '简体中文', handle: () => translationLangSwitch('zh') },
          { label: 'English', handle: () => translationLangSwitch('en') },
        ],
      ]"
    >
      <SvgIcon class="text-14px" name="carbon:ibm-watson-language-translator" />
    </HDropdownMenu>
  </span>
</template>
