/**
 * @name 用户管理模块
 */
import type { ReqPage } from '@/api/interface/index'

export interface ReqUserListParams extends ReqPage {
  username: string
  gender: number
  idCard: string
  email: string
  address: string
  createTime: string[]
  status: number
}
export interface ResUserList {
  id: string
  username: string
  gender: string
  age: number
  idCard: string
  email: string
  address: string
  createTime: string
  status: number
  avatar: string
  children?: ResUserList[]
}
