import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'

export default defineFakeRoute([
  {
    url: '/mock/admin/monitorLoginLogs/page',
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
              'name|1': ['SU', 'Admin', 'User', 'Edit', 'Guest'],
              'ip|1': ['139.141.123.81', '206.71.134.225'],
              'address|1': ['中国浙江省杭州市', '中国湖南长沙市'],
              'system|1': ['macOS', 'Windows'],
              'browser|1': ['Chrome', 'Firefox'],
              'behavior|1': ['账号登录', '第三方登录'],
              'status|1': ['SUCCESS', 'FAIL'],
              'loginTime': '@date(\'yy-MM-dd hh:mm:ss\')',
              'sort|1-100': 1,
            },
          ],
        }),
      }
    },
  },
])
