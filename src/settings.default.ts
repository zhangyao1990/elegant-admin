/*
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 *
 *
 * @Description:该文件为系统默认配置，请勿修改！！！
 * @version:
 * @Date: 2024-03-11
 * @LastEditors:  97972619@qq.com
 * @LastEditTime:
 * @Author: 97972619@qq.com
 */

import { getLocal } from '@/utils/storage'
import type { RecursiveRequired, Settings } from '#/global'

const globalSettingsDefault: RecursiveRequired<Settings.all> = {
  app: {
    colorScheme: 'light',
    enablePermission: false,
    enableProgress: true,
    enableDynamicTitle: false,
    lightTheme: 'string',
    translationLang: getLocal('lang') || 'zh',
    themeColor: getLocal('themeColor') || '#6366F1',
    routeBaseOn: 'backend', // 'frontend'：前端 'backend' 后端
  },
  home: {
    enable: true,
    title: '控制台',
    fullPath: '/dashboard',
  },
  layout: {
    enableMobileAdaptation: false,
  },
  menu: {
    menuMode: 'head',
    switchMainMenuAndPageJump: false,
    subMenuUniqueOpened: true,
    subMenuCollapse: false,
    enableSubMenuCollapseButton: false,
    enableHotkeys: false,
  },
  topbar: {
    mode: 'static',
  },
  tabbar: {
    enable: false,
    enableIcon: false,
    enableHotkeys: false,
  },
  toolbar: {
    breadcrumb: true,
    navSearch: true,
    fullscreen: false,
    pageReload: false,
    colorScheme: false,
    translationLang: true,
  },
  mainPage: {
    enableHotkeys: true,
  },
  navSearch: {
    enableHotkeys: true,
  },
  copyright: {
    enable: false,
    dates: '',
    company: '',
    website: '',
    beian: '',
  },
}

export default globalSettingsDefault
