import type { RouteRecordRaw } from 'vue-router'
import PluginDemo from './modules/plugin_demo'
import PermissionDemo from './modules/permission_demo'
import MockDemo from './modules/mock_demo'
import type { Route } from '#/global'
import useSettingsStore from '@/store/modules/settings'

// 固定路由（默认路由）
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/:all(.*)*',
    name: 'notFound',
    component: () => import('@/views/[...all].vue'),
    meta: {
      title: '找不到页面',
    },
  },
]

// 系统路由
const systemRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    redirect: () => useSettingsStore().settings.home.fullPath,
    meta: {
      title: () => useSettingsStore().settings.home.title,
      breadcrumb: false,
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/welcome/index.vue'),
        name: 'Dashboard',
        meta: {
          title: () => useSettingsStore().settings.home.title,
          icon: 'ant-design:home-twotone',
          breadcrumb: false,
        },
      },
      {
        path: 'reload',
        name: 'reload',
        component: () => import('@/views/reload/index.vue'),
        meta: {
          title: '重新加载',
          breadcrumb: false,
        },
      },
      {
        path: 'personal/setting',
        name: 'personalSetting',
        component: () => import('@/views/personal/setting.vue'),
        meta: {
          title: '个人设置',
          cache: 'personalEditPassword',
        },
      },
      {
        path: 'personal/edit/password',
        name: 'personalEditPassword',
        component: () => import('@/views/personal/edit.password.vue'),
        meta: {
          title: '修改密码',
        },
      },
    ],
  },
]

// 动态路由（异步路由、导航栏路由）
const asyncRoutes: Route.recordMainRaw[] = [
  {
    meta: {
      title: '演示功能',
      icon: 'uim:box',
    },
    children: [
      PluginDemo,
      PermissionDemo,
      MockDemo,
    ],
  },
]

export {
  constantRoutes,
  systemRoutes,
  asyncRoutes,
}
