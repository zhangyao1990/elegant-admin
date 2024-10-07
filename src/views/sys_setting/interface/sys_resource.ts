/**
 * @name 资源管理模块
 */
import type { ReqPage } from '@/api/interface/index'

export interface ReqResourceListParams extends ReqPage {
  name: string
  openStatus: string
}

export interface ResResourceList {
  id: string
  name: string
  sort: number
  openStatus: string
}
