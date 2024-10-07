import { hex2rgba } from '@unocss/preset-mini/utils'

export const lightTheme = {
  'color-scheme': 'light',
  // 内置 UI
  '--ui-text': hex2rgba('#fcfcfc')!.join(' '),
}

export const darkTheme = {
  'color-scheme': 'dark',
  // 内置 UI
  '--ui-text': hex2rgba('#fcfcfc')!.join(' '),

}
