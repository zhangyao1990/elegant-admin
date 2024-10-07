import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueLegacy from '@vitejs/plugin-legacy'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

import appInfo from './app-info'
import createDevtools from './devtools'
import createAutoImport from './auto-import'
import createComponents from './components'
import createUnocss from './unocss'
import createSvgIcon from './svg-icon'
import createMock from './mock'
import createLayouts from './layouts'
import createCompression from './compression'
import createArchiver from './archiver'
import createConsole from './console'
import createBanner from './banner'
import createVisualizer from './visualizer'
import versionUpdate from './version-update'

export default function createVitePlugins(viteEnv, isBuild = false, nowTime?: any) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    appInfo(),
    vue(),
    (monacoEditorPlugin as any).default({
      languageWorkers: [
        'editorWorkerService',
        'css',
        'html',
        'json',
        'typescript',
      ],
    }),
    vueJsx(),
    versionUpdate({
      version: nowTime,
    }),
    vueLegacy({
      renderLegacyChunks: false,
      modernPolyfills: [
        'es.array.at',
        'es.array.find-last',
      ],
    }),
  ]
  vitePlugins.push(createDevtools(viteEnv))
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createUnocss())
  vitePlugins.push(createSvgIcon(isBuild))
  vitePlugins.push(createMock(viteEnv, isBuild))
  vitePlugins.push(createLayouts())
  vitePlugins.push(...createCompression(viteEnv, isBuild))
  vitePlugins.push(createArchiver(viteEnv))
  vitePlugins.push(createConsole())
  vitePlugins.push(createBanner())
  vitePlugins.push(createVisualizer() as any)
  return vitePlugins
}
