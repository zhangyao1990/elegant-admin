import { decrypto, encrypto } from '../crypto'

/**
 * 将给定的值加密后存储到会话存储（sessionStorage）中。
 * @param key 用于在存储中标识数据的键名。
 * @param value 需要存储的数据，类型未知，将被加密。
 */
export function setSession(key: string, value: unknown) {
  // 对值进行加密处理
  const json = encrypto(value)
  // 将加密后的数据存入sessionStorage
  sessionStorage.setItem(key, json)
}

/**
 * 从会话存储中获取经过加密的会话数据。
 * @param key 用于在会话存储中标识数据的键名。
 * @returns 返回解密后的数据，如果不存在或解密失败则返回 null。
 */
export function getSession<T>(key: string) {
  // 从会话存储中获取指定键名的值（已加密的数据）
  const json = sessionStorage.getItem(key)
  let data: T | null = null
  if (json) {
    try {
      // 尝试解密获取到的数据
      data = decrypto(json)
    }
    catch {
      // 如果解密过程失败，则保持 data 为 null，防止使用错误的数据
      // 这里不详细记录错误，因为可能由于多种原因导致失败，且此处不需要对失败情况做特殊处理
    }
  }
  return data
}

/**
 * 从会话存储中移除指定的项。
 * @param key 要移除的项的键名。
 */
export function removeSession(key: string) {
  window.sessionStorage.removeItem(key) // 从sessionStorage中移除指定键名的项
}

/**
 * 清除当前会话的sessionStorage中的所有数据。
 * 无参数。
 * 无返回值。
 */
export function clearSession() {
  window.sessionStorage.clear()
}
