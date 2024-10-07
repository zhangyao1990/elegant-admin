/*
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-07-01 14:47:51
 * @LastEditTime: 2024-07-31 09:41:32
 * @LastEditors: zhangyao
 */
export const ossPath = 'https://isdm.oss-cn-hangzhou.aliyuncs.com/'
// 获取文件路径
export function getSysFilePath(path: string): string {
  if (!path) {
    // 处理path为空字符串、null或undefined的情况
    throw new Error('Invalid path')
  }

  const pattern = /^https:\/\//
  if (pattern.test(path)) {
    // 如果path已经是https开头，则直接返回
    return path
  }
  else {
    // 否则，将http转换为https，或拼接ossPath（需确保ossPath已定义）
    return path.startsWith('http') ? path.replace('http', 'https') : ossPath + path
  }
}
