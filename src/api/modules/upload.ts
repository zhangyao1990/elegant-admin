import type { ResOssCredentials } from '../interface/modules/upload'
import { PORT1 } from '@/api/config/servicePort'

import http from '@/api'

/**
 * @name 文件上传模块
 */
// * 获取临时授权token
export function getOssToken(params: any) {
  return http.post<ResOssCredentials>(`${PORT1}/admin/oss/upload/stsToken`, params)
}
