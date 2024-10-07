/*
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-06-27 16:12:04
 * @LastEditTime: 2024-07-03 18:37:54
 * @LastEditors: zhangyao
 */
/**
 * 验证身份证号码
 * @param {string} code 身份证号码
 */
export function identityIDCard(code: string) {
  // 身份证号前两位代表区域
  const city: any = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 ',
  }
  const idCardReg = /^[1-9]\d{5}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i // 身份证格式正则表达式
  let errorMessage = '' // 错误提示信息
  let isPass = true // 身份证验证是否通过（true通过、false未通过）

  // 如果身份证不满足格式正则表达式
  if (!code) {
    errorMessage = '请输入身份证号码'
    isPass = false
  }
  else if (!code.match(idCardReg)) {
    errorMessage = '请输入正确的身份证号码'
    isPass = false
  }
  else if (!city[code.substring(0, 2)]) {
    // 区域数组中不包含需验证的身份证前两位
    errorMessage = '请输入正确的身份证号码'
    isPass = false
  }
  else if (code.length === 18) {
    // 18位身份证需要验证最后一位校验位
    let codeArr = code.split('')
    // ∑(ai×Wi)(mod 11)
    // 加权因子
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    // 校验位
    const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
    let sum = 0
    let ai = 0
    let wi = 0
    for (let i = 0; i < 17; i++) {
      ai = Number.parseInt(codeArr[i])
      wi = factor[i]
      sum += ai * wi // 开始计算并相加
    }
    const last = parity[sum % 11] // 求余
    if (last.toString() !== codeArr[17]) {
      errorMessage = '请输入正确的身份证号码'
      isPass = false
    }
  }
  return {
    errorMessage,
    isPass,
  }
}
