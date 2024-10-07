import process from 'node:process'

/**
 * 将环境配置信息包装并注入到进程环境变量中。
 * @param envConf 环境配置对象，键为环境变量名，值为环境变量的字符串值。
 * @returns 返回一个对象，其中包含经过处理的环境变量配置。
 */
export function wrapperEnv(envConf: any) {
  const ret: any = {}

  // 遍历环境配置对象，对每个环境变量进行处理
  for (const envName of Object.keys(envConf)) {
    // 替换环境变量值中的换行符，并处理布尔值字符串
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    // 如果环境变量名为'VITE_PROXY'且其值不为空，则尝试将其解析为JSON
    if (envName === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'))
      }
      catch (error) {
        realName = ''
      }
    }

    // 将处理后的环境变量值存入返回对象，并根据值的类型注入到进程环境变量中
    ret[envName] = realName
    if (typeof realName === 'string') {
      process.env[envName] = realName
    }
    else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName)
    }
  }
  return ret
}
