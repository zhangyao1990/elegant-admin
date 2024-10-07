import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/permission_demo',
  component: Layout,
  redirect: '/permission_demo/index',
  name: 'permissionDemo',
  meta: {
    title: '权限验证',
    icon: 'ri:shield-keyhole-line',
  },
  children: [
    {
      path: 'index',
      name: 'permissionDemoIndex',
      component: () => import('@/views/permission_demo/index.vue'),
      meta: {
        title: '权限验证',
        menu: false,
        breadcrumb: false,
        activeMenu: '/permission_demo',
      },
    },
    {
      path: 'test',
      name: 'permissionDemoTest',
      component: () => import('@/views/permission_demo/test.vue'),
      meta: {
        title: '测试页面',
        auth: ['permission.browse'],
        menu: false,
        breadcrumb: false,
        activeMenu: '/permission_demo',
      },
    },
  ],
}

export default routes
