/*
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-06-18 19:18:26
 * @LastEditTime: 2024-06-26 20:26:50
 * @LastEditors: zhangyao
 */
import type { ProxyOptions } from 'vite'

type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

type ProxyTargetList = Record<string, ProxyOptions>

const httpsRE = /^https:\/\//

/**
 * 创建代理配置对象
 * @param list 代理列表，是一个键为前缀、值为目标地址的键值对数组，默认为空数组
 * @param VITE_OPEN_PROXY 环境变量，用于控制是否开启代理，字符串值，默认为字符串形式的 'true' 或其他非 'true' 值
 * @returns 返回一个对象，键为前缀，值为代理配置对象
 */
export function createProxy(list: ProxyList = [], VITE_OPEN_PROXY: boolean) {
  const ret: ProxyTargetList = {}
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target)
    // 根据代理目标地址配置代理选项
    ret[prefix] = {
      target,
      changeOrigin: VITE_OPEN_PROXY,
      // 如果环境变量 VITE_OPEN_PROXY 为 'true'，则重写路径，否则移除路径中的 '/proxy'
      rewrite: path => VITE_OPEN_PROXY ? path.replace(new RegExp(`^${prefix}`), `${prefix}`) : path.replace(/\/proxy/, ''),
      // 如果目标地址是 HTTPS，则设置 secure 为 false
      ...(isHttps ? { secure: false } : {}),
    }
  }
  console.log('ret', ret)
  return ret
}
