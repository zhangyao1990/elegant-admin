/*
 *           佛曰:
 *                   写字楼里写字间，写字间里程序员；
 *                   程序人员写程序，又拿程序换酒钱。
 *                   酒醒只在网上坐，酒醉还来网下眠；
 *                   酒醉酒醒日复日，网上网下年复年。
 *                   但愿老死电脑间，不愿鞠躬老板前；
 *                   奔驰宝马贵者趣，公交自行程序员。
 *                   别人笑我忒疯癫，我笑自己命太贱；
 *                   不见满街漂亮妹，哪个归得程序员？
 *
 *
 * @Description:该文件为系统配置
 * @version:
 * @Date: 2024-03-11
 * @LastEditors:  97972619@qq.com
 * @LastEditTime:
 * @Author: 97972619@qq.com
 */
import { defaultsDeep } from 'lodash-es'
import type { RecursiveRequired, Settings } from '#/global'
import settingsDefault from '@/settings.default'

const globalSettings: Settings.all = {
  app: {
    enablePermission: true,
    enableDynamicTitle: true,
  },
  layout: {
    enableMobileAdaptation: true,
  },
  menu: {
    enableSubMenuCollapseButton: true,
    enableHotkeys: true,
    switchMainMenuAndPageJump: true,
  },
  topbar: {
    mode: 'fixed',
  },
  tabbar: {
    enable: true,
    enableIcon: true,
    enableHotkeys: true,
  },
  toolbar: {
    fullscreen: true,
    pageReload: true,
    colorScheme: true,
    breadcrumb: true,
  },
  mainPage: {
    enableHotkeys: true,
  },
  copyright: {
    enable: true,
    dates: '2024-present',
    company: 'Elegant-admin',
    website: 'https://github.com/zhangyao1990/elegant-admin',
  },
}

export default defaultsDeep(globalSettings, settingsDefault) as RecursiveRequired<Settings.all>
