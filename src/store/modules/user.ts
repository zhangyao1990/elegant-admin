import useSettingsStore from './settings'
import useRouteStore from './route'
import useMenuStore from './menu'
import router from '@/router'
import { getLocal, removeLocal, setLocal } from '@/utils/storage'
import { loginApi } from '@/api/modules/login'
import { editPasswordApi, getAuthPermissionListApi } from '@/api/modules/auth'
import type { ReqLoginForm } from '@/api/interface/modules/login'

const useUserStore = defineStore(
  // 唯一ID
  'user',
  () => {
    const settingsStore = useSettingsStore()
    const routeStore = useRouteStore()
    const menuStore = useMenuStore()

    const account = ref<string>(getLocal('account') ?? '')
    const token = ref<string | null | undefined>(getLocal('token') ?? '')
    const avatar = ref<string>(getLocal('avatar') ?? '')
    const permissions = ref<string[]>([])
    const isLogin = computed(() => {
      if (token.value) {
        return true
      }
      return false
    })

    // 登录
    async function login(data: ReqLoginForm) {
      const res = await loginApi(data)
      setLocal('account', res.data.account)
      setLocal('token', res.data.token)
      setLocal('avatar', res.data.avatar)
      account.value = res.data.account
      token.value = res.data.token
      avatar.value = res.data.avatar
    }
    // 登出
    async function logout(redirect = router.currentRoute.value.fullPath) {
      removeLocal('account')
      removeLocal('token')
      removeLocal('avatar')
      account.value = ''
      token.value = ''
      avatar.value = ''
      permissions.value = []
      routeStore.removeRoutes()
      menuStore.setActived(0)
      router.push({
        name: 'login',
        query: {
          ...(router.currentRoute.value.path !== settingsStore.settings.home.fullPath && router.currentRoute.value.name !== 'login' && { redirect }),
        },
      })
    }
    // 获取权限
    async function getPermissions() {
      const res = await getAuthPermissionListApi()
      permissions.value = res.data.permissions
    }
    // 修改密码
    async function editPassword(data: {
      password: string
      newpassword: string
    }) {
      await editPasswordApi(data)
    }

    return {
      account,
      token,
      avatar,
      permissions,
      isLogin,
      login,
      logout,
      getPermissions,
      editPassword,
    }
  },
)

export default useUserStore
