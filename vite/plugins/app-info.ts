import boxen from 'boxen'
import picocolors from 'picocolors'
import type { Plugin } from 'vite'

export default function appInfo(): Plugin {
  return {
    name: 'appInfo',
    apply: 'serve',
    async buildStart() {
      const { bold, green, bgGreen, underline } = picocolors
      console.log(
        boxen(
          `${bold(green(`由 ${bgGreen('Elegant-admin')} 驱动`))}\n\n${underline('https://github.com/zhangyao1990/elegant-admin')}`,
          {
            padding: 1,
            margin: 1,
            borderStyle: 'double',
            textAlignment: 'center',
          },
        ),
      )
    },
  }
}
