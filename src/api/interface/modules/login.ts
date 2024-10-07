/**
 * @name 登录模块
 */

export interface ReqLoginForm {
  account: string
  password: string
  id?: string
  captcha?: string
  verifyCode?: string
  remember?: boolean
}
export interface ReqImageCaptchaForm {
  id: string
}
export interface ResLogin {
  account: string
  token: string
  avatar: string
}
