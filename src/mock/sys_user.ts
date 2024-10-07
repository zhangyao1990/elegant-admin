import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'

export default defineFakeRoute([
  {
    url: '/mock/admin/sysUser/page',
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
              'name': '@cname',
              'roleNames|1': ['超级管理员', '管理员', '用户', '编辑', '访客'],
              'sort|1-100': 1,
              'createTime': '@date(\'yy-MM-dd hh:mm:ss\')',
              'phone': /^1[3456789]\d{9}$/,
              'openStatus|1': ['OPEN', 'CLOSE'],
              'gender|1': ['MAN', 'WOMAN'],
            },
          ],
        }),
      }
    },
  },
  {
    url: '/mock/admin/sysUser/save',
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
    url: '/mock/admin/sysUser/update',
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
    url: '/mock/admin/sysUser/delete',
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
