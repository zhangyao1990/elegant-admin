import { onBeforeMount } from 'vue'
import useSettingsStore from '@/store/modules/settings'
import { getDarkColor, getLightColor } from '@/utils/theme'
import { getLocal } from '@/utils/storage'

/**
 * @description element-plus切换主题
 */
export function useTheme() {
  const settingsStore = useSettingsStore()

  // 修改主题颜色
  const changePrimary = (val: string | null) => {
    if (!val) {
      val = getLocal('themeColor') || settingsStore.settings.app.themeColor
    }
    settingsStore.setThemeColor(val)
    // 颜色加深
    document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(settingsStore.settings.app.themeColor, 0.5)}`)
    document.documentElement.style.setProperty('--el-color-primary', settingsStore.settings.app.themeColor)
    // 颜色变浅
    for (let i = 1; i <= 9; i++) {
      document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(settingsStore.settings.app.themeColor, i / 10)}`,
      )
    }
  }

  onBeforeMount(() => {
    changePrimary(settingsStore.settings.app.themeColor)
  })

  return {
    changePrimary,
  }
}
