import { defineFakeRoute } from 'vite-plugin-fake-server/client'

export default defineFakeRoute([
  {
    url: '/mock/app/route/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 200,
        data: [
          {
            meta: {
              title: '演示',
              icon: 'ri:function-add-fill',
            },
            children: [
              {
                path: '/breadcrumb_demo',
                component: 'Layout',
                redirect: '/breadcrumb_demo/list1',
                name: 'breadcrumbDemo',
                meta: {
                  title: '面包屑导航',
                  icon: 'streamline:paint-palette',
                },
                children: [
                  {
                    path: 'list1',
                    name: 'breadcrumbDemoList1',
                    component: 'breadcrumb_demo/list1.vue',
                    meta: {
                      title: '列表1（平级模式）',
                    },
                  },
                  {
                    path: 'detail1',
                    name: 'breadcrumbDemoDetail1',
                    component: 'breadcrumb_demo/detail1.vue',
                    meta: {
                      title: '详情1',
                      menu: false,
                      activeMenu: '/breadcrumb_demo/list1',
                    },
                  },
                  {
                    path: 'list2',
                    name: 'breadcrumbDemoList2',
                    redirect: '/breadcrumb_demo/list2',
                    meta: {
                      title: '列表2（层级模式）',
                    },
                    children: [
                      {
                        path: '',
                        component: 'breadcrumb_demo/list2.vue',
                        meta: {
                          title: '列表2（层级模式）',
                          menu: false,
                          breadcrumb: false,
                        },
                      },
                      {
                        path: 'detail2',
                        name: 'breadcrumbDemoDetail2',
                        component: 'breadcrumb_demo/detail2.vue',
                        meta: {
                          title: '详情2',
                          menu: false,
                          breadcrumb: false,
                          activeMenu: '/breadcrumb_demo/list2',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                path: '/multilevel_menu_demo',
                component: 'Layout',
                redirect: '/multilevel_menu_demo/page',
                name: 'multilevelMenuDemo',
                meta: {
                  title: '菜单嵌套',
                  icon: 'heroicons-solid:menu-alt-3',
                },
                children: [
                  {
                    path: 'page',
                    name: 'multilevelMenuDemo1',
                    component: 'multilevel_menu_demo/page.vue',
                    meta: {
                      title: '菜单1',
                    },
                  },
                  {
                    path: 'level2',
                    name: 'multilevelMenuDemo2',
                    redirect: '/multilevel_menu_demo/level2/page',
                    meta: {
                      title: '菜单2',
                    },
                    children: [
                      {
                        path: 'page',
                        name: 'multilevelMenuDemo2-1',
                        component: 'multilevel_menu_demo/level2/page.vue',
                        meta: {
                          title: '菜单2-1',
                        },
                      },
                      {
                        path: 'level3',
                        name: 'multilevelMenuDemo2-2',
                        redirect: '/multilevel_menu_demo/level2/level3/page1',
                        meta: {
                          title: '菜单2-2',
                        },
                        children: [
                          {
                            path: 'page1',
                            name: 'multilevelMenuDemo2-2-1',
                            component: 'multilevel_menu_demo/level2/level3/page1.vue',
                            meta: {
                              title: '菜单2-2-1',
                            },
                          },
                          {
                            path: 'page2',
                            name: 'multilevelMenuDemo2-2-2',
                            component: 'multilevel_menu_demo/level2/level3/page2.vue',
                            meta: {
                              title: '菜单2-2-2',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                path: '/keep_alive_demo',
                component: 'Layout',
                redirect: '/keep_alive_demo/page',
                name: 'keepAliveDemo',
                meta: {
                  title: '页面缓存',
                  icon: 'cil:window-restore',
                },
                children: [
                  {
                    path: 'page',
                    name: 'keepAliveDemoPage',
                    component: 'keep_alive_demo/page.vue',
                    meta: {
                      title: '页面缓存',
                      breadcrumb: false,
                    },
                  },
                  {
                    path: 'detail',
                    name: 'keepAliveDemoDetail',
                    component: 'keep_alive_demo/detail.vue',
                    meta: {
                      title: '平级路由',
                      menu: false,
                      activeMenu: '/keep_alive_demo/page',
                    },
                  },
                  {
                    path: 'nested',
                    redirect: '/keep_alive_demo/nested/detail',
                    meta: {
                      title: '嵌套路由',
                      menu: false,
                    },
                    children: [
                      {
                        path: 'detail',
                        name: 'keepAliveDemoNestedDetail',
                        component: 'keep_alive_demo/detail.vue',
                        meta: {
                          title: '嵌套路由',
                          activeMenu: '/keep_alive_demo/page',
                        },
                      },
                    ],
                  },
                  {
                    path: 'nested1',
                    name: 'keepAliveDemoNested1',
                    component: 'keep_alive_demo/nested/nested.vue',
                    meta: {
                      title: '路由多级缓存1',
                    },
                    children: [
                      {
                        path: 'nested2',
                        name: 'keepAliveDemoNested2',
                        component: 'keep_alive_demo/nested/nested/nested.vue',
                        meta: {
                          title: '路由多级缓存1-1',
                        },
                        children: [
                          {
                            path: 'index',
                            name: 'keepAliveDemoNestedIndex',
                            component: 'keep_alive_demo/nested/nested/nested/index.vue',
                            meta: {
                              title: '路由多级缓存1-1-1',
                              cache: true,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                path: '/components_demo',
                component: 'Layout',
                redirect: '/components_demo/icon/iconify',
                name: 'ComponentDemo',
                meta: {
                  title: '组件',
                  icon: 'ri:layout-right-line',
                },
                children: [
                  {
                    path: 'icon',
                    name: 'Icon',
                    redirect: '/components_demo/icon/iconify',
                    meta: {
                      title: '扩展图标',
                      icon: 'ri:remixicon-line',
                    },
                    children: [
                      {
                        path: 'iconify',
                        name: 'Iconify',
                        component: 'components_demo/svg_icon/iconify.vue',
                        meta: {
                          title: 'Iconify',
                        },
                      },
                      {
                        path: 'svg_icon',
                        name: 'SvgIcon',
                        component: 'components_demo/svg_icon/svg_icon.vue',
                        meta: {
                          title: 'SvgIcon',
                        },
                      },
                      {
                        path: 'icon_select',
                        name: 'IconSelect',
                        component: 'components_demo/svg_icon/icon_select.vue',
                        meta: {
                          title: 'Icon图标选择器',
                        },
                      },
                    ],
                  },
                  {
                    path: 'table_select',
                    name: 'TableSelectDemo',
                    component: 'components_demo/table_select/index.vue',
                    meta: {
                      title: '表格选择器',
                      icon: 'mdi:table-plus',
                    },
                  }, {
                    path: 'upload',
                    name: 'Upload',
                    component: 'components_demo/upload/index.vue',
                    meta: {
                      title: '文件上传',
                      icon: 'mdi:folder-upload-outline',
                    },
                  }, {
                    path: 'time_line',
                    name: 'TimeLine',
                    component: 'components_demo/time_line/index.vue',
                    meta: {
                      title: '时间线',
                      icon: 'ant-design:field-time-outlined',
                    },
                  },

                ],
              },
              {
                path: '/plugin_demo',
                component: 'Layout',
                redirect: '/plugin_demo/qrcode',
                name: 'pluginDemo',
                meta: {
                  title: '插件',
                  icon: 'clarity:plugin-outline-alerted',
                },
                children: [
                  {
                    path: 'typeit',
                    name: 'pluginDemoTypeit',
                    component: 'plugin_demo/typeit/index.vue',
                    meta: {
                      title: '打字机组件',
                    },
                  },
                  {
                    path: 'qrcode',
                    name: 'pluginDemoQrcode',
                    component: 'plugin_demo/qrcode/index.vue',
                    meta: {
                      title: '二维码',
                    },
                  }, {
                    path: 'echarts',
                    name: 'pluginDemoEcharts',
                    component: 'plugin_demo/echart/index.vue',
                    meta: {
                      title: 'Echarts',
                    },
                  }, {
                    path: 'print',
                    name: 'pluginDemoPrint',
                    component: 'plugin_demo/print/index.vue',
                    meta: {
                      title: '打印',
                    },
                  }, {
                    path: 'xgplayer_video',
                    name: 'pluginDemoXgplayerVideo',
                    component: 'plugin_demo/xgplayer_video/index.vue',
                    meta: {
                      title: '视频播放',
                    },
                  },
                  {
                    path: 'esign',
                    name: 'pluginDemoEsign',
                    component: 'plugin_demo/esign/index.vue',
                    meta: {
                      title: '电子签名',
                    },
                  },
                  {
                    path: 'swiper',
                    name: 'pluginDemoSwiper',
                    component: 'plugin_demo/swiper/index.vue',
                    meta: {
                      title: '轮播动画',
                    },
                  },
                  {
                    path: 'tinymce',
                    name: 'pluginDemoTinymce',
                    component: 'plugin_demo/tinymce/index.vue',
                    meta: {
                      title: 'TinyMCE 编辑器',
                    },
                  },
                  {
                    path: 'markdown',
                    name: 'pluginDemoMarkdown',
                    component: 'plugin_demo/markdown/index.vue',
                    meta: {
                      title: 'Markdown 编辑器',
                    },
                  },
                  {
                    path: 'splitpanes',
                    name: 'pluginDemoSplitpanes',
                    component: 'plugin_demo/splitpanes/index.vue',
                    meta: {
                      title: '拆分面板',
                    },
                  },
                ],
              },
              {
                path: '/link',
                component: 'Layout',
                redirect: '/link/github',
                name: 'externalLinkDemo',
                meta: {
                  title: '文档',
                  icon: 'ri:external-link-fill',
                },
                children: [
                  {
                    path: 'pro-docs',
                    component: 'LinkLayout',
                    name: 'iframeProDocs',
                    meta: {
                      title: '项目文档',
                      iframe: 'https://zhangyao1990.github.io/elegant-admin-docs',
                    },
                  }, {
                    path: 'vue-docs',
                    component: 'LinkLayout',
                    name: 'iframeVue3Docs',
                    meta: {
                      title: 'vue3文档',
                      iframe: 'https://cn.vuejs.org/',
                    },
                  }, {
                    path: 'vue-router-docs',
                    component: 'LinkLayout',
                    name: 'iframeVueRouterDocs',
                    meta: {
                      title: 'vue-router文档',
                      iframe: 'https://router.vuejs.org/zh/',
                    },
                  },
                  {
                    path: 'element-plus',
                    component: 'LinkLayout',
                    name: 'iframeElementPlusDocs',
                    meta: {
                      title: 'ElementPlus文档',
                      iframe: 'https://element-plus.org/zh-CN/',
                    },
                  },
                  {
                    path: 'vite-docs',
                    component: 'LinkLayout',
                    name: 'iframeViteDocs',
                    meta: {
                      title: 'Vite文档',
                      iframe: 'https://cn.vitejs.dev/',
                    },
                  }, {
                    path: 'pinia-docs',
                    component: 'LinkLayout',
                    name: 'iframePiniaDocs',
                    meta: {
                      title: 'Pinia文档',
                      iframe: 'https://pinia.vuejs.org/zh/index.html',
                    },
                  }, {
                    path: 'unocss-docs',
                    component: 'LinkLayout',
                    name: 'iframeUnocssDocs',
                    meta: {
                      title: 'UnoCSS文档',
                      iframe: 'https://unocss.dev',
                    },
                  },
                  {
                    path: 'github',
                    component: 'LinkLayout',
                    name: 'iframeGithub',
                    meta: {
                      title: 'Github 仓库',
                      link: 'https://github.com/zhangyao1990/elegant-admin',
                    },
                  },
                ],
              },
              {
                path: '/data_screen_demo',
                redirect: '/data_screen_demo/index',
                name: 'DataScreenDemo',
                meta: {
                  title: '数据大屏',
                  icon: 'ri:database-2-line',
                },
                children: [
                  {
                    path: 'index',
                    name: 'DataScreenDemoIndex',
                    component: 'data_screen_demo/index.vue',
                    meta: {
                      title: '数据大屏',
                      menu: false,
                      breadcrumb: false,
                      isFull: true,
                      activeMenu: '/data_screen_demo',
                    },
                  },
                ],
              },
              {
                path: '/form_design_demo',
                name: 'FormDesignDemo',
                redirect: '/form_design_demo/index',
                meta: {
                  title: '表单设计',
                  icon: 'mdi:format-float-left',
                },
                children: [
                  {
                    path: 'index',
                    name: 'FormDesignDemoIndex',
                    component: 'form_design_demo/index.vue',
                    meta: {
                      title: '表单设计',
                      menu: false,
                      breadcrumb: false,
                      isFull: true,
                      activeMenu: '/form_design_demo',
                    },
                  },
                ],
              },
              {
                path: '/flow_design_demo',
                redirect: '/flow_design_demo/index',
                name: 'FlowDesignDemo',
                meta: {
                  title: '流程设计',
                  icon: 'ri:organization-chart',
                },
                children: [
                  {
                    path: 'index',
                    name: 'FlowDesignDemoIndex',
                    component: 'flow_design_demo/index.vue',
                    meta: {
                      title: '流程设计',
                      menu: false,
                      breadcrumb: false,
                      isFull: true,
                      activeMenu: '/flow_design_demo',
                    },
                  },
                ],
              },

              {
                path: '/mock_demo',
                component: 'Layout',
                redirect: '/mock_demo/index',
                name: 'MockDemo',
                meta: {
                  title: 'Mock',
                  icon: 'ri:database-2-line',
                },
                children: [
                  {
                    path: 'index',
                    name: 'MockDemoIndex',
                    component: 'mock_demo/index.vue',
                    meta: {
                      title: 'Mock',
                      menu: false,
                      breadcrumb: false,
                      activeMenu: '/mock_demo',
                    },
                  },
                ],
              }, {
                path: '/permission_demo',
                component: 'Layout',
                redirect: '/permission_demo/index',
                name: 'PermissionDemo',
                meta: {
                  title: '权限验证',
                  icon: 'ri:shield-keyhole-line',
                },
                children: [
                  {
                    path: 'index',
                    name: 'PermissionDemoIndex',
                    component: 'permission_demo/index.vue',
                    meta: {
                      title: '权限验证',
                      menu: false,
                      breadcrumb: false,
                      activeMenu: '/permission_demo',
                    },
                  },
                  {
                    path: 'test',
                    name: 'PermissionDemoTest',
                    component: 'permission_demo/test.vue',
                    meta: {
                      title: '测试页面',
                      auth: ['permission.browse'],
                      menu: false,
                      breadcrumb: false,
                      activeMenu: '/permission_demo',
                    },
                  },
                ],
              },
            ],
          }, {
            meta: {
              title: '配置',
              icon: 'ep:setting',
            },
            children: [{
              path: '/sys_setting',
              component: 'Layout',
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
                  component: 'sys_setting/sys_user/index.vue',
                  meta: {
                    title: '账号管理',
                  },
                },

                {
                  path: 'sys_role',
                  name: 'SysRole',
                  component: 'sys_setting/sys_role/index.vue',
                  meta: {
                    title: '角色管理',
                  },
                },
                {
                  path: 'sys_menu',
                  name: 'SysMenu',
                  component: 'sys_setting/sys_menu/index.vue',
                  meta: {
                    title: '菜单管理',
                  },
                }, {
                  path: 'sys_resource',
                  name: 'SysResource',
                  component: 'sys_setting/sys_resource/index.vue',
                  meta: {
                    title: '资源管理',
                  },
                },
              ],
            }, {
              path: '/monitor',
              component: 'Layout',
              redirect: '/monitor/online_user',
              name: 'Monitor',
              meta: {
                title: '系统监控',
                icon: 'mdi:monitor-dashboard',
              },
              children: [
                {
                  path: 'online_user',
                  name: 'OnlineUser',
                  component: 'monitor/online_user/index.vue',
                  meta: {
                    title: '在线用户',
                  },
                }, {
                  path: 'login_logs',
                  name: 'LoginLogs',
                  component: 'monitor/login_logs/index.vue',
                  meta: {
                    title: '登录日志',
                  },
                }, {
                  path: 'operation_logs',
                  name: 'OperationLogs',
                  component: 'monitor/operation_logs/index.vue',
                  meta: {
                    title: '操作日志',
                  },
                },
              ],
            }],
          },
        ],
      }
    },
  },
  {
    url: '/mock/app/menu/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 200,
        data: [
          {
            meta: {
              title: '演示',
              icon: 'uim:box',
            },
            children: [
              {
                meta: {
                  title: '多级导航',
                  icon: 'heroicons-solid:menu-alt-3',
                },
                children: [
                  {
                    path: '/multilevel_menu_demo/page',
                    meta: {
                      title: '导航1',
                    },
                  },
                  {
                    meta: {
                      title: '导航2',
                    },
                    children: [
                      {
                        path: '/multilevel_menu_demo/level2/page',
                        meta: {
                          title: '导航2-1',
                        },
                      },
                      {
                        meta: {
                          title: '导航2-2',
                        },
                        children: [
                          {
                            path: '/multilevel_menu_demo/level2/level3/page1',
                            meta: {
                              title: '导航2-2-1',
                            },
                          },
                          {
                            path: '/multilevel_menu_demo/level2/level3/page2',
                            meta: {
                              title: '导航2-2-2',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }
    },
  },
])
