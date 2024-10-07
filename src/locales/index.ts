import { createI18n } from 'vue-i18n'

import zh from './lang/zh'
import en from './lang/en'
import { getLocal } from '@/utils/storage'
const i18n = createI18n({
  // Use Composition API, Set to false
  allowComposition: true,
  legacy: false,
  locale: getLocal('lang') || 'zh',
  messages: {
    zh,
    en,
  },
})

export default i18n
