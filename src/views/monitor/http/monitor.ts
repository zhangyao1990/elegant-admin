import type { ReqLoginLogsListParams, ReqOnlineUserListParams, ReqOperationLogsListParams, ResLoginLogsList, ResOnlineUserList, ResOperationLogsList } from '../interface/monitor'
import type { ResList } from '@/api/interface'
import { PORT1 } from '@/api/config/servicePort'

import http from '@/api'

/** ******** 在线用户 */
// * 获取在线登录列表
export function getMonitorOnlineUserListApi(params: ReqOnlineUserListParams) {
  return http.post<ResList<ResOnlineUserList>>(`${PORT1}/admin/monitorOnlineUser/page`, params)
}
// * 在线用户强制退出
export function operateMonitorOnlineUserForceoutApi(params: ReqOnlineUserListParams) {
  return http.post<ResList<ResOnlineUserList>>(`${PORT1}/admin/monitorOnlineUser/forceOut`, params)
}
/** ******** 登录日志 */
// * 获取在线登录列表
export function getMonitorLoginLogsListApi(params: ReqLoginLogsListParams) {
  return http.post<ResList<ResLoginLogsList>>(`${PORT1}/admin/monitorLoginLogs/page`, params)
}
/** ******** 操作日志 */
// * 获取操作日志列表
export function getMonitorOperationLogsListApi(params: ReqOperationLogsListParams) {
  return http.post<ResList<ResOperationLogsList>>(`${PORT1}/admin/monitorOperationLogs/page`, params)
}
