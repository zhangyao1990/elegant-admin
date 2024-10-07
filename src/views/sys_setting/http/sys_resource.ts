import type { ReqResourceListParams, ResResourceList } from '../interface/sys_resource'
import type { ResPage, ResultData } from '@/api/interface'
import { PORT1 } from '@/api/config/servicePort'

import http from '@/api'

/** ******** 资源管理模块 */
// * 获取资源列表
export function getSysResourceListApi(params: ReqResourceListParams) {
  return http.post<ResPage<ResResourceList>>(`${PORT1}/admin/sysResource/page`, params)
}

// * 新增资源
export function addResourceApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/sysResource/save`, params)
}

// * 编辑资源
export function editResourceApi(params: any) {
  return http.put<ResultData>(`${PORT1}/admin/sysResource/update`, params)
}

// * 删除资源
export function delSysResourceApi(params: { id: string }) {
  return http.delete<ResultData>(`${PORT1}/admin/sysResource/delete`, params)
}
