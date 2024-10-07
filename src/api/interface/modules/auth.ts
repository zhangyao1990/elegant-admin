/**
 * @name 登录账号用户信息模块
 */

export interface ResUserInfo {
  id: string
  image?: string
  name: string
  phone: string
  role: []
  sysDept?: object
  thirdChannel?: string
  createTime?: string
  thirdChannelList?: []
}

export interface ResAuthButtons {
  [key: string]: {
    [key: string]: boolean
  }
}
export interface ResAuthPermission {
  permissions: string[]
}
export interface ReqPasswordForm {
  password: string
  newpassword: string
}
