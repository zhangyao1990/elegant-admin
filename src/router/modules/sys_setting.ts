/*
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-06-27 14:38:40
 * @LastEditTime: 2024-07-02 11:01:57
 * @LastEditors: zhangyao
 */
import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/sys_setting',
  component: Layout,
  redirect: '/sys_setting/sys_user',
  name: 'systemSetting',
  meta: {
    title: '系统设置',
    icon: 'fluent:laptop-settings-20-regular',
  },
  children: [
    {
      path: 'sys_user',
      name: 'SysUser',
      component: () => import('@/views/sys_setting/sys_user/index.vue'),
      meta: {
        title: '账号管理',
      },
    },

    {
      path: 'sys_role',
      name: 'SysRole',
      component: () => import('@/views/sys_setting/sys_role/index.vue'),
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'sys_menu',
      name: 'SysMenu',
      component: () => import('@/views/sys_setting/sys_menu/index.vue'),
      meta: {
        title: '菜单管理',
      },
    }, {
      path: 'sys_resource',
      name: 'SysResource',
      component: () => import('@/views/sys_setting/sys_resource/index.vue'),
      meta: {
        title: '资源管理',
      },
    },
  ],
}

export default routes
