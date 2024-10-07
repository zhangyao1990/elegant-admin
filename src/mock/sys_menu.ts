import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'

export default defineFakeRoute([
  {
    url: '/mock/admin/sysMenu/list',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'success',
        ok: true,
        data: Mock.mock([
          {
            id: '1gq0ocq6c1vgd1uj12r71qklts41e2k0',
            orgId: '1',
            pid: '0',
            name: 'demonstration',
            sort: 1,
            path: '',
            redirect: '',
            component: '',
            meta: {
              title: '演示',
              type: 'menu',
              icon: 'ri:function-add-fill',
              activeMenu: '',
              menu: true,
              breadcrumb: true,
              cache: false,
              threeMenu: null,
              iframe: null,
              link: null,
            },
            api: null,
            apiPermissions: null,
          },
          {
            id: '1gq1cdcut20glk202h63g9tljjo7b11g',
            orgId: '1',
            pid: '1gq0ocq6c1vgd1uj12r71qklts41e2k0',
            name: 'breadcrumb',
            sort: 1,
            path: 'user',
            redirect: '/breadcrumb_example/list1',

            meta: {
              title: '面包屑导航',
              type: 'menu',
              icon: 'example-vip',
              activeMenu: '',
              menu: true,
              breadcrumb: true,
              cache: false,
              threeMenu: null,
              iframe: null,
              link: null,
            },
          },
          {
            id: '1gq6fm0fe3gn7ogh1d3sbra1ouiudnd5',
            orgId: '1',
            pid: '1gq1cdcut20glk202h63g9tljjo7b11g',
            name: 'breadcrumbExampleDetail1',
            sort: 1,
            path: 'detail1',
            redirect: '',
            component: 'breadcrumb_example/detail1.vue',
            meta: {
              title: '详情1',
              type: 'menu',
              icon: '',
              activeMenu: '/breadcrumb_example/list1',
              menu: true,
              breadcrumb: true,
              cache: false,
              threeMenu: null,
              iframe: null,
              link: null,
            },
            api: null,
            apiPermissions: [
              {
                id: 1,
                name: '账号保存',
                method: 'post',
                api: '/nethos/admin/user/save ',
                sort: 1,
                openStatus: 'OPEN',
              }, {
                id: 2,
                name: '账号编辑',
                method: 'post',
                api: '/nethos/admin/user/edit ',
                sort: 1,
                openStatus: 'OPEN',

              }, {
                id: 3,
                name: '账号列表',
                method: 'post',
                api: '/nethos/admin/user/list ',
                sort: 1,
                openStatus: 'OPEN',

              },
            ],
          }]),
      }
    },
  },
  {
    url: '/mock/admin/sysMenu/save',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'success',
        ok: true,
        data: Mock.Random.id(),
      }
    },
  }, {
    url: '/mock/admin/sysMenu/update',
    method: 'put',
    response: () => {
      return {
        code: 200,
        message: 'success',
        ok: true,
        data: Mock.Random.id(),
      }
    },
  }, {
    url: '/mock/admin/sysMenu/delete',
    method: 'delete',
    response: () => {
      return {
        code: 200,
        message: 'success',
        ok: true,
        data: Mock.Random.id(),
      }
    },
  },
])
