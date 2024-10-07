import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'

export default defineFakeRoute([
  {
    url: '/mock/admin/sysRole/page',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'success',
        ok: true,
        data: Mock.mock({
          'total': 100,
          'records|10': [
            {
              'id|+1': 1,
              'roleName|1': ['超级管理员', '管理员', '用户', '编辑', '访客'],
              'note': null,
              'alias|1': ['SU', 'Admin', 'User', 'Edit', 'Guest'],
              'sort|1-100': 1,
              'openStatus|1': ['OPEN', 'CLOSE'],
            },
          ],
        }),
      }
    },
  },
  {
    url: '/mock/admin/sysRole/save',
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
    url: '/mock/admin/sysRole/update',
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
    url: '/mock/admin/sysRole/delete',
    method: 'delete',
    response: () => {
      return {
        code: 200,
        message: 'success',
        ok: true,
        data: Mock.Random.id(),
      }
    },
  }, {
    url: '/mock/admin/sysRole/authList',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        ok: true,
        data: Mock.mock([
          '1gq0ocq6c1vgd1uj12r71qklts41e2k0',
          '1gq1cdcut20glk202h63g9tljjo7b11g',
          '1gq6fm0fe3gn7ogh1d3sbra1ouiudnd5',
        ]),
      }
    },
  }, {
    url: '/mock/admin/sysRole/authSetting',
    method: 'post',
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
