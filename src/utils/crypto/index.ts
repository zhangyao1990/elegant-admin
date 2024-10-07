import CryptoJS from 'crypto-js'

const CryptoSecret = '__CryptoJS_Secret__'

/**
 * 对给定数据进行加密处理。
 * @param data 任意类型的数据，将被加密。
 * @returns 返回经过AES加密后的新数据字符串。
 */
export function encrypto(data: any) {
  // 将输入数据转换为JSON字符串
  const newData = JSON.stringify(data)
  // 使用CryptoJS的AES加密方法对数据进行加密，并将加密结果转换为字符串
  return CryptoJS.AES.encrypt(newData, CryptoSecret).toString()
}

/**
 * 使用AES加密方式解密文本。
 * @param cipherText 加密文本。
 * @returns 如果解密成功，返回解密后的JSON对象；如果解密失败或文本无法解析为有效的JSON，返回null。
 */
export function decrypto(cipherText: string) {
  // 使用CryptoJS的AES解密方法解密密文
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret)
  // 将解密后的bytes转换为UTF-8字符串
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  if (originalText) {
    // 如果解密文本存在，尝试将其解析为JSON对象并返回
    return JSON.parse(originalText)
  }
  // 如果无法解析为有效的JSON，则返回null
  return null
}

/* 常用加解密 */
/**
 * 使用MD5算法对输入的数据进行加密
 * @param data 任意类型的数据，将被加密成MD5字符串
 * @returns 返回加密后的MD5字符串
 */
export function MD5(data: any) {
  // 使用CryptoJS的MD5函数对数据进行加密，并将加密结果转换为字符串
  return CryptoJS.MD5(data).toString()
}
/**
 * 使用BASE64加密方法对数据进行加密。
 * @param data 任意类型的数据，将被转化为字符串并加密。
 * @returns 返回加密后的BASE64字符串。
 */
export function BASE64Encrypt(data: any) {
  // 将数据解析为UTF-8格式，然后转换为BASE64格式
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data))
}
/**
 * 使用BASE64解密密文
 * @param cipher 待解密的密文，其类型为any以支持多种输入形式，但通常应为BASE64编码的字符串
 * @returns 解密后的文本，返回的是UTF-8编码的字符串
 */
export function BASE64Decrypt(cipher: any) {
  // 将BASE64编码的密文解析为CryptoJS的字节数组，然后将其转换为UTF-8编码的字符串
  return CryptoJS.enc.Base64.parse(cipher).toString(CryptoJS.enc.Utf8)
}

/**
 * 使用AES算法对消息进行加密
 * @param message 待加密的消息，可以是任意类型，但实际使用时通常为字符串或字节数组
 * @param key 加密使用的密钥，可以是字符串或字节数组，具体取决于加密需求
 * @returns 返回加密后的消息，以base64编码的字符串形式呈现
 */
export function AesEncrypt(message: any, key: any) {
  // 将UTF-8字符串转换为WordArray对象，以备加密使用
  const keyHex = CryptoJS.enc.Utf8.parse(key) //
  const messageHex = CryptoJS.enc.Utf8.parse(message)
  // 使用AES算法进行加密，采用ECB模式和Pkcs7填充方式
  const encrypted = CryptoJS.AES.encrypt(messageHex, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  // 返回加密结果的base64编码字符串
  return encrypted.toString()
  // 如果需要，也可以直接返回加密后的密文（二进制字符串）
  // return encrypted.ciphertext.toString();
}

/**
 * 使用AES算法对密文进行解密
 * @param messageBase64 要解密的密文，以Base64编码格式传入
 * @param key 解密密钥，以字符串形式传入
 * @returns 解密后的明文字符串
 */
export function AesDecrypt(messageBase64: any, key: any) {
  // 如果加密后没有转成base64,那么先要转成base64再传入
  // let encryptedHexStr = CryptoJS.enc.Hex.parse(word);   // 从二进制文本转成二进制
  // messageBase64 = CryptoJS.enc.Base64.stringify(encryptedHexStr);    // 转成base64
  const keyHex = CryptoJS.enc.Utf8.parse(key)
  const decrypt = CryptoJS.AES.decrypt(messageBase64, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}
