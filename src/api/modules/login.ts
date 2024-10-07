import type { ResultData } from '../interface'
import type { ReqImageCaptchaForm, ReqLoginForm, ResLogin } from '@/api/interface/modules/login'
import { PORT1 } from '@/api/config/servicePort'

// import qs from 'qs';
import http from '@/api'

/**
 * @name 登录模块
 */
// * 用户登录接口
export function loginApi(params: ReqLoginForm) {
  return http.post<ResLogin>(`${PORT1}/user/login`, params, { headers: { noLoading: true } }) // 正常 post json 请求  ==>  application/json
  // return http.post<Login.ResLogin>(PORT1 + `/admin/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
  // return http.post<Login.ResLogin>(PORT1 + `/admin/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
  // return http.post<Login.ResLogin>(PORT1 + `/admin/login`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
}

// * 获取图形验证码
export function getImageCaptchaApi(params: ReqImageCaptchaForm) {
  return http.get<ResultData>(`${PORT1}/user/captcha`, params, { headers: { noLoading: true } })
}
