/*
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-03-01 09:03:25
 * @LastEditTime: 2024-06-04 15:42:44
 * @LastEditors: zhangyao
 */
import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'

export default defineFakeRoute([
  {
    url: '/mock/user/captcha',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 200,
        data: Mock.mock({
          imgUrl: Mock.Random.dataImage('50x20', Mock.mock({ regexp: /\w{4}/ }).regexp),
        }),
      }
    },
  },
  {
    url: '/mock/user/login',
    method: 'post',
    response: ({ body }) => {
      return {
        error: '',
        status: 200,
        data: Mock.mock({
          account: body.account || 'admin',
          token: `${body.account}_@string`,
          avatar: 'https://isdm-public.oss-cn-hangzhou.aliyuncs.com/doctor/ele-avatar.png',
        }),
      }
    },
  },
  {
    url: '/mock/user/permission',
    method: 'get',
    response: ({ headers }) => {
      let permissions: string[] = []
      if (headers.authorization?.indexOf('admin') === 0) {
        permissions = [
          'permission.browse',
          'permission.create',
          'permission.edit',
          'permission.remove',
          'add:user:btn',
          'edit:user:btn',
          'del:user:btn',
          'role:auth:btn',
          'add:role:btn',
          'edit:role:btn',
          'del:role:btn',
          'add:resource:btn',
          'edit:resource:btn',
          'del:resource:btn',
          'add:menu:btn',
          'del:menu:btn',
        ]
      }
      else if (headers.authorization?.indexOf('test') === 0) {
        permissions = [
          'permission.browse',
        ]
      }
      return {
        error: '',
        status: 200,
        data: {
          permissions,
        },
      }
    },
  },
  {
    url: '/mock/user/password/edit',
    method: 'post',
    response: () => {
      return {
        error: '',
        status: 200,
        data: {
          isSuccess: true,
        },
      }
    },
  },
])
