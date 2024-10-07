import type { ReqPage } from '@/api/interface/index'

/**
 * ***
   @name 在线用户
 */

export interface ReqOnlineUserListParams extends ReqPage {
  name: string
}

export interface ResOnlineUserList {
  id: string
  name: string
  ip: string
  address: string
  system: string
  browser: string
  loginTime: string
  sort: number
  openStatus: string
}
/**
 * ***
 *  @name 登录日志
 */

export interface ReqLoginLogsListParams extends ReqPage {
  name: string
  status: string
  loginTime: string
}

export interface ResLoginLogsList {
  id: string
  name: string
  ip: string
  address: string
  system: string
  browser: string
  behavior: string
  loginTime: string
  sort: number
  status: string
}
/**
 * ***
 *  @name 操作日志
 */

export interface ReqOperationLogsListParams extends ReqPage {
  name: string
  status: string
  operationTime: string
}

export interface ResOperationLogsList {
  id: string
  name: string
  module: string
  summary: string
  ip: string
  address: string
  system: string
  browser: string
  operatingTime: string
  sort: number
  status: string
}
