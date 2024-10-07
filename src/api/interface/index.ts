// * 请求响应参数(不包含data)
export interface Result {
  code: string
  msg: string
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  data: T
}

// * 分页响应参数
export interface ResPage<T> {
  records: T[]
  pageNum: number
  pageSize: number
  total: number
}
export interface ResList<T> {
  list: T[]
  total: number
}

// * 分页请求参数
export interface ReqPage {
  pageNum: number
  pageSize: number
}
