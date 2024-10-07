import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'

export default defineFakeRoute([
  {
    url: '/mock/admin/sysResource/page',
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
              'name|1': ['新增账号', '账号列表', '编辑账号', '删除账号'],
              'method|1': ['get', 'post', 'put', 'delete', '*'],
              'apiUrl|1': '/admin/sysUser/page',
              'sort|1-100': 1,
              'openStatus|1': ['OPEN', 'CLOSE'],
            },
          ],
        }),
      }
    },
  },
  {
    url: '/mock/admin/sysResource/save',
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
    url: '/mock/admin/sysResource/update',
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
    url: '/mock/admin/sysResource/delete',
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
