import { ElMessage, ElMessageBox } from 'element-plus'
import useUserStore from '@/store/modules/user'
import router from '@/router'

function toLogin() {
  router.push({
    path: '/login',
    query: {
      redirect: router.currentRoute.value.path !== '/login' ? router.currentRoute.value.fullPath : undefined,
    },
  })
  window.location.reload()
}
/**
 * @description: 校验网络请求状态码
 * @param {number} status
 * @return void
 */
export function checkStatus(status: number): void {
  const userStore = useUserStore()
  switch (status) {
    case 400:
      ElMessage.error('请求失败！请您稍后重试')
      break
    case 401:
      ElMessageBox.confirm(`您已经登出，您可以取消留在此页面，或者重新登录!`, '登录失效', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          await userStore.logout()
          toLogin()
        })
        .catch(() => {})
      break
    case 403:
      ElMessage.error('当前账号无权限访问！')
      break
    case 404:
      ElMessage.error('你所访问的资源不存在！')
      break
    case 405:
      ElMessage.error('请求方式错误！请您稍后重试')
      break
    case 408:
      ElMessage.error('请求超时！请您稍后重试')
      break
    case 500:
      ElMessage.error('服务异常！')
      break
    case 502:
      ElMessage.error('网关错误！')
      break
    case 503:
      ElMessage.error('服务不可用！')
      break
    case 504:
      ElMessage.error('网关超时！')
      break
    default:
      ElMessage.error('请求失败！')
  }
}
