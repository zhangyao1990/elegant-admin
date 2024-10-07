import type { ReqUserListParams, ResUserList } from '../interface/sys_user'
import type { ResPage, ResultData } from '@/api/interface'
import { PORT1 } from '@/api/config/servicePort'

import http from '@/api'

/** ******** 用户管理模块 */
// * 获取用户列表
export function getSysUserListApi(params: ReqUserListParams) {
  return http.post<ResPage<ResUserList>>(`${PORT1}/admin/sysUser/page`, params)
}

// * 新增用户
export function addUserApi(params: ReqUserListParams) {
  return http.post<ResultData>(`${PORT1}/admin/sysUser/save`, params)
}

// * 编辑用户
export function editUserApi(params: ReqUserListParams) {
  return http.put<ResultData>(`${PORT1}/admin/sysUser/update`, params)
}
// * 用户详情
export function getSysUserDetailApi(params: any) {
  return http.get<ResultData>(`${PORT1}/admin/sysUser/${params.id}`, params)
}
// * 删除用户
export function delSysUserApi(params: { id: string }) {
  return http.delete<ResultData>(`${PORT1}/admin/sysUser/delete`, params)
}
