/*
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-03-01 09:03:25
 * @LastEditTime: 2024-06-06 17:26:19
 * @LastEditors: zhangyao
 */
import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

// 注册表单设计器
import { setupElementPlus } from '@/components/FormDesign/ui/index.ts'

async function install(app: App) {
  app.use(ElementPlus)
  // 注册Element UI
  setupElementPlus()
}

export default { install }
