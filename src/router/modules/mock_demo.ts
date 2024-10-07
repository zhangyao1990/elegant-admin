import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/mock_demo',
  component: Layout,
  redirect: '/mock_demo/index',
  name: 'mockDemo',
  meta: {
    title: 'Mock',
    icon: 'ri:database-2-line',
  },
  children: [
    {
      path: 'index',
      name: 'mockDemoIndex',
      component: () => import('@/views/mock_demo/index.vue'),
      meta: {
        title: 'Mock',
        menu: false,
        breadcrumb: false,
        activeMenu: '/mock_demo',
      },
    },
  ],
}

export default routes
