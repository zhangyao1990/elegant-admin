import { decrypto, encrypto } from '../crypto'

interface StorageData {
  value: unknown
  expire: number | null
}

/** 默认缓存期限为7天 */
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

/**
 * 将数据设置到本地存储中。
 * @param key 用于存储的键名。
 * @param value 要存储的数据值。
 * @param expire 数据的过期时间，单位为秒。如果不设置过期时间，可传入null，默认使用DEFAULT_CACHE_TIME。
 */
export function setLocal(key: string, value: unknown, expire: number | null = DEFAULT_CACHE_TIME) {
  // 创建存储数据对象，如果指定了过期时间，则计算其绝对时间；否则，不设置过期时间。
  const storageData: StorageData = { value, expire: expire !== null ? new Date().getTime() + expire * 1000 : null }
  // 对存储数据进行加密。
  const json = encrypto(storageData)
  // 将加密后的数据存储到localStorage中。
  window.localStorage.setItem(key, json)
}

/**
 * 从本地存储中获取数据。
 * @param key 用于在本地存储中标识数据的键名。
 * @returns 如果找到键名对应的数据且数据未过期，则返回该数据；否则，返回 null。
 */
export function getLocal<T>(key: string) {
  // 从本地存储获取指定键名的值
  const json = window.localStorage.getItem(key)
  if (json) {
    let storageData: StorageData | null = null
    try {
      // 尝试解密并解析存储的数据
      storageData = decrypto(json)
    }
    catch {
      console.log('解析失败')
      // 解析失败时不做处理，直接进行下一步判断
    }
    if (storageData) {
      const { value, expire } = storageData
      // 判断数据是否仍在有效期内
      if (expire === null || expire >= Date.now()) {
        // 在有效期内则返回数据
        return value as T
      }
    }
    // 如果数据过期，则移除该数据
    removeLocal(key)
    return null
  }
  // 未找到键名对应的数据，返回 null
  return null
}

/**
 * 从本地存储中移除指定的项。
 * @param key 要移除的项的键名。
 */
export function removeLocal(key: string) {
  window.localStorage.removeItem(key) // 从localStorage中移除指定键名的项
}

/**
 * 清除本地存储空间的所有数据。
 * 该函数没有参数。
 * 该函数没有返回值。
 */
export function clearLocal() {
  window.localStorage.clear() // 清除本地存储中的所有键值对
}
