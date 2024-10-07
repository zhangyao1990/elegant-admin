/*
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-06-18 19:18:26
 * @LastEditTime: 2024-08-29 11:03:54
 * @LastEditors: zhangyao
 */
import type { ResultData } from '../interface'
import { PORT1 } from '@/api/config/servicePort'
import http from '@/api'

// * IM聊天用户token
export function getImChatUserTokenApi(params: any) {
  return http.get<ResultData>(`${PORT1}/admin/im/chat/userToken`, params)
}
// 获取Im Appid
export function getImAppIdApi(params: any) {
  return http.get<ResultData>(`${PORT1}/admin/app/config`, params)
}
// * 创建一对一房间
export function createPrivateRoomApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/im/chat/createPrivateRoom`, params)
}
// * 创建团队房间
export function createTeamRoomApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/im/chat/createTeamRoom`, params)
}
// * 创建多个房间
export function createGroupRoomApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/im/chat/createGroupRoom`, params)
}
// * IM聊天会话列表
export function getChatListApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/im/chat/unreadList`, params)
}
// * IM聊天消息列表
export function getChatMsgListApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/im/chat/msgList`, params)
}
// * 消息设置已读
export function saveMarkReadApi(params: any) {
  return http.put<ResultData>(`${PORT1}/admin/im/chat/markRead`, params)
}
// * 获取患者剩余聊天次数
export function getPatientResidualUseApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/im/freq/remain`, params)
}

// * 医生赠送次数
export function saveGiveChatNumApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/im/freq/present`, params, { headers: { noLoading: true } })
}
// * 获取单个聊天室详情
export function getRoomDetailApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/im/chat/roomDetail/${params.roomId}`, params)
}
// * 获取多个聊天室详情
export function getRoomDetailsApi(params: any) {
  return http.post<ResultData>(`${PORT1}/admin/im/chat/roomDetailList`, params)
}
// * 获取常用语列表
export function getUsefulListApi(params: any) {
  return http.get<ResultData>(`${PORT1}/admin/im/phrases/list`, params)
}
// * 新增常用语列表
export function addUsefulListApi(params: any) {
  return http.put<ResultData>(`${PORT1}/admin/im/phrases/save`, params)
}
// * 编辑常用语列表
export function editUsefulListApi(params: any) {
  return http.put<ResultData>(`${PORT1}/admin/im/phrases/edit`, params)
}
// * 删除常用语列表
export function delUsefulApi(params: any) {
  return http.delete<ResultData>(`${PORT1}/admin/im/phrases/delete/${params.id}`, params)
}
