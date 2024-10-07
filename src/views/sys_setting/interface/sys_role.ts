/**
 * @name 角色管理模块
 */
import type { ReqPage } from '@/api/interface/index'

export interface ReqRoleListParams extends ReqPage {
  roleName: string
  openStatus: string
}

export interface ResRoleList {
  id: string
  roleName: string
  note: string
  alias: string
  sort: number
  openStatus: string
}
