import type { ReqRoleListParams, ResRoleList } from '../interface/sys_role'
import type { ResPage, ResultData } from '@/api/interface'
import { PORT1 } from '@/api/config/servicePort'

import http from '@/api'

/** ******** 角色管理模块 */
// * 获取角色列表
export function getSysRoleListApi(params: ReqRoleListParams) {
  return http.post<ResPage<ResRoleList>>(`${PORT1}/admin/sysRole/page`, params)
}

// * 新增角色
export function addRoleApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/sysRole/save`, params)
}

// * 编辑角色
export function editRoleApi(params: any) {
  return http.put<ResultData>(`${PORT1}/admin/sysRole/update`, params)
}

// * 删除角色
export function delSysRoleApi(params: { id: string }) {
  return http.delete<ResultData>(`${PORT1}/admin/sysRole/delete`, params)
}
// * 设置权限
export function settingSysRoleAuthApi(params: { id: string }) {
  return http.post<ResultData>(`${PORT1}/admin/sysRole/authSetting`, params)
}
// * 获取角色权限
export function getSysRoleAuthApi(params: { id: string }) {
  return http.get<ResultData>(`${PORT1}/admin/sysRole/authList`, params)
}
