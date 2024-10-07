import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/plugin_demo',
  component: Layout,
  redirect: '/plugin_demo/qrcode',
  name: 'pluginDemo',
  meta: {
    title: '插件',
    icon: 'clarity:plugin-outline-alerted',
  },
  children: [
    {
      path: 'qrcode',
      name: 'pluginDemoQrcode',
      component: () => import('@/views/plugin_demo/qrcode/index.vue'),
      meta: {
        title: '二维码',
        icon: 'material-symbols:qr-code',
      },
    },
    {
      path: 'esign',
      name: 'pluginDemoEsign',
      component: () => import('@/views/plugin_demo/esign/index.vue'),
      meta: {
        title: '电子签名',
        icon: 'mdi:draw',
      },
    },
    {
      path: 'swiper',
      name: 'pluginDemoSwiper',
      component: () => import('@/views/plugin_demo/swiper/index.vue'),
      meta: {
        title: '轮播动画',
        icon: 'carbon:carousel-horizontal',
      },
    },
    {
      path: 'tinymce',
      name: 'pluginDemoTinymce',
      component: () => import('@/views/plugin_demo/tinymce/index.vue'),
      meta: {
        title: 'TinyMCE 编辑器',
        icon: 'file-icons:tinymce',
      },
    },
    {
      path: 'markdown',
      name: 'pluginDemoMarkdown',
      component: () => import('@/views/plugin_demo/markdown/index.vue'),
      meta: {
        title: 'Markdown 编辑器',
        icon: 'teenyicons:markdown-outline',
      },
    },
    {
      path: 'splitpanes',
      name: 'pluginDemoSplitpanes',
      component: () => import('@/views/plugin_demo/splitpanes/index.vue'),
      meta: {
        title: '拆分面板',
        icon: 'icon-park-outline:split-cells',
      },
    },
  ],
}

export default routes
