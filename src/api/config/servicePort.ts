// * 后端接口请求地址1服务
const BASEURL1: any = {
  dev: '/mock',
  test: 'http://127.0.0.1:8080/mock',
  sit: '',
  prod: '',
}
// * 后端接口请求地址2服务(暂未使用)
const BASEURL2: any = {
  dev: '/mock',
  test: '',
  sit: '',
  prod: '',
}
export const PORT1 = BASEURL1[import.meta.env.VITE_APP_MODE]
export const PORT2 = BASEURL2[import.meta.env.VITE_APP_MODE]
