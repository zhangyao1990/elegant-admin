import { identityIDCard } from './regExp'

export function matching(value: any, callback: any, reg: any, message: any) {
  if (value === '' || value === undefined || value === null) {
    callback(new Error(message))
  }
  else {
    if (!reg.test(value)) {
      callback(new Error(message))
    }
    else {
      callback()
    }
  }
}
const validator = {
  checkSelectTable(value: any, callback: any, erroText: string) {
    if (!value || JSON.stringify(value) === '{}' || JSON.stringify(value) === '[]') {
      callback(new Error(`${erroText}`))
    }
    else {
      callback()
    }
  },
  checkUsername(_rule: any, value: any, callback: any) {
    let reg = /^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,12}$/
    matching(value, callback, reg, '请输入6-12位字母和数字组合')
  },
  checkSimplePwd(_rule: any, value: any, callback: any) {
    let reg = /^[_a-zA-Z0-9]+$/
    matching(value, callback, reg, '包含英文字母、数字及下划线组成')
  },
  checkComplexPwd(_rule: any, value: any, callback: any) {
    let reg = /^(?!\d+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4E00-\u9FA5\s]){8,20}$/
    matching(value, callback, reg, '请输入8-20位英文字母、数字或者符号')
  },

  checkPhone(_rule: any, value: any, callback: any) {
    let reg = /^[1][3, 4, 5, 6, 7, 8, 9][0-9]{9}$/
    let msgText = !value ? '请输入手机号!' : '请输入正确的手机号!'
    matching(value, callback, reg, msgText)
  },
  checkEmail(_rule: any, value: any, callback: any) {
    let reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/
    matching(value, callback, reg, '输入正确的邮箱!')
  },
  checkIdCard(_rule: any, value: any, callback: any) {
    let data = identityIDCard(value)
    if (value === '' || value === undefined || value === null) {
      callback(new Error('请输入身份证号码!'))
    }
    else {
      if (!data.isPass) {
        callback(new Error(data.errorMessage))
      }
      else {
        callback()
      }
    }
  },
  // 非必填校验身份证
  checkNoIdCard(_rule: any, value: any, callback: any) {
    if (!value) {
      callback()
    }
    else {
      let data = identityIDCard(value)
      if (!data.isPass) {
        callback(new Error(data.errorMessage))
      }
      else {
        callback()
      }
    }
  },
  checkCompany(_rule: any, value: any, callback: any) {
    let reg = /^[A-Z0-9]{8}-[A-Z0-9]$|^[A-Z0-9]{8}-[A-Z0-9]-[0-9]{2}$/
    matching(value, callback, reg, '请输入正确的营业执照!')
  },
  checkInteger(_rule: any, value: any, callback: any) {
    let reg = /^[1-9][0-9]*$/
    matching(value, callback, reg, '请输入正确的整数!')
  },
  checkNumber(_rule: any, value: any, callback: any) {
    let reg = /^\d+$|^\d+[.]?\d+$/
    matching(value, callback, reg, '请输入纯数字!')
  },
  checkLandline(_rule: any, value: any, callback: any) {
    let reg = /^(\d{3,4}-)?\d{7,8}$/
    matching(value, callback, reg, '请输入正确的座机!')
  },
  checkIp(_rule: any, value: any, callback: any) {
    let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    matching(value, callback, reg, '请输入正确的IP!')
  },
  checkPrice(_rule: any, value: any, callback: any) {
    let reg = /^-?\d{1,4}(?:\.\d{1,2})?$ /
    matching(value, callback, reg, '请输入正确的价格!')
  },
  checkBankCard(_rule: any, value: any, callback: any) {
    let reg = /^([1-9]{1})(\d{14}|\d{18})$/
    matching(value, callback, reg, '请输入正确的银行卡!')
  },
}
export default validator
