import type { ResMenuList } from '../interface/sys_menu'
import type { ResList, ResultData } from '@/api/interface'
import { PORT1 } from '@/api/config/servicePort'

import http from '@/api'

/** ******** 菜单管理模块 */
// * 获取菜单列表
export function getSysMenuListApi(params: any) {
  return http.post<ResList<ResMenuList>>(`${PORT1}/admin/sysMenu/list`, params)
}

// * 新增菜单
export function addSysMenuApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/sysMenu/save`, params)
}

// * 编辑菜单
export function editSysMenuApi(params: any) {
  return http.put<ResultData>(`${PORT1}/admin/sysMenu/update`, params)
}

// * 删除菜单
export function delSysMenuApi(params: { id: string }) {
  return http.delete<ResultData>(`${PORT1}/admin/sysMenu/delete`, params)
}
