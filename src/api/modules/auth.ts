import type { ResultData } from '../interface'
import type { ReqPasswordForm, ResAuthPermission, ResUserInfo } from '@/api/interface/modules/auth'
import type { Menu } from '#/global'
import { PORT1 } from '@/api/config/servicePort'

// import qs from 'qs';
import http from '@/api'

/**
 * @name 登录模块
 */

// * 获取用户信息
export function getUserInfoApi() {
  return http.get<ResUserInfo>(`${PORT1}/admin/sysUser/detail/current`, {}, { headers: { noLoading: true } })
}

// * 获取按钮权限

export function getAuthPermissionListApi() {
  return http.get<ResAuthPermission>(`${PORT1}/user/permission`, {}, { headers: { noLoading: true } })
}
// * 修改密码

export function editPasswordApi(params: ReqPasswordForm) {
  return http.post<ResultData>(`${PORT1}/user/permission`, params, { headers: { noLoading: true } })
}
// * 获取菜单列表

export function getAuthMenuListApi() {
  return http.get<Menu.recordMainRaw[]>(`${PORT1}/app/route/list`, {}, { headers: { noLoading: true } })
  // 如果想让菜单变为本地数据，注释上一行代码，并引入本地 dynamicRouter.json 数据
  // return new Promise<any>(resolve => {
  // resolve(DynamicRouter);
  // });
}
