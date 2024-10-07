/*
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-03-01 09:03:25
 * @LastEditTime: 2024-06-03 22:51:34
 * @LastEditors: zhangyao
 */
/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 *
 * @Description: 入口文件
 * @version:
 * @Date: 2023-02-07
 * @LastEditors: 97972619@qq.com
 * @LastEditTime:
 * @Author: 97972619@qq.com
 */

import '@/utils/system.copyright'

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'

import 'overlayscrollbars/overlayscrollbars.css'

import App from './App.vue'
import pinia from './store'
import { setupRouter } from './router'
import ui from './ui-provider'

// 全局loading
import { setupLoading } from '@/plugins/loading'

// 自定义指令
import directives from '@/directives/index'

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 加载 iconify 图标
import { downloadAndInstall } from '@/iconify'
import icons from '@/iconify/index.json'

import 'virtual:uno.css'

// 全局样式
import '@/assets/styles/globals.scss'

// element-plus样式覆盖
import '@/assets/styles/element.scss'

// errorHandler
import errorHandler from '@/utils/eroorHandler'

// vue i18n
import I18n from '@/locales/index'

async function setupApp() {
  setupLoading()

  const app = createApp(App)
  // 注册Element UI
  app.config.errorHandler = errorHandler

  app.use(FloatingVue, {
    distance: 12,
  })
  app.use(Message)
  app.use(pinia)
  app.use(I18n)
  app.use(ui)
  app.use(directives)
  await setupRouter(app)
  if (icons.isOfflineUse) {
    for (const info of icons.collections) {
      await downloadAndInstall(info)
    }
  }

  app.mount('#app')
}
setupApp()
