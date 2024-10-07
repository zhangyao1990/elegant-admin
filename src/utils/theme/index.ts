import { colord, extend } from 'colord'
import namesPlugin from 'colord/plugins/names'
import mixPlugin from 'colord/plugins/mix'
import labPlugin from 'colord/plugins/lab'
import type { AnyColor, HslColor, RgbColor } from 'colord'

extend([namesPlugin, mixPlugin, labPlugin])

export function isValidColor(color: AnyColor) {
  return colord(color).isValid()
}

export function getHex(color: AnyColor) {
  return colord(color).toHex()
}

export function getRgb(color: AnyColor) {
  return colord(color).toRgb()
}

export function getHsl(color: AnyColor) {
  return colord(color).toHsl()
}

export function getHsv(color: AnyColor) {
  return colord(color).toHsv()
}

export function getDeltaE(color1: AnyColor, color2: AnyColor) {
  return colord(color1).delta(color2)
}

export function transformHslToHex(color: HslColor) {
  return colord(color).toHex()
}

/**
 * Add color alpha
 *
 * @param color - Color
 * @param alpha - Alpha (0 - 1)
 */
export function addColorAlpha(color: AnyColor, alpha: number) {
  return colord(color).alpha(alpha).toHex()
}

/**
 * Mix color
 *
 * @param firstColor - First color
 * @param secondColor - Second color
 * @param ratio - The ratio of the second color (0 - 1)
 */
export function mixColor(firstColor: AnyColor, secondColor: AnyColor, ratio: number) {
  return colord(firstColor).mix(secondColor, ratio).toHex()
}

/**
 * Transform color with opacity to similar color without opacity
 *
 * @param color - Color
 * @param alpha - Alpha (0 - 1)
 * @param bgColor Background color (usually white or black)
 */
export function transformColorWithOpacity(color: AnyColor, alpha: number, bgColor = '#ffffff') {
  const originColor = addColorAlpha(color, alpha)
  const { r: oR, g: oG, b: oB } = colord(originColor).toRgb()

  const { r: bgR, g: bgG, b: bgB } = colord(bgColor).toRgb()

  function calRgb(or: number, bg: number, al: number) {
    return bg + (or - bg) * al
  }

  const resultRgb: RgbColor = {
    r: calRgb(oR, bgR, alpha),
    g: calRgb(oG, bgG, alpha),
    b: calRgb(oB, bgB, alpha),
  }

  return colord(resultRgb).toHex()
}

/**
 * hex颜色转rgb颜色
 * @param str 颜色值字符串
 * @returns 返回处理后的颜色值
 */
export function hexToRgb(str: any) {
  let hex: any = ''
  let reg = /^\#?[0-9A-Fa-f]{6}$/
  if (!reg.test(str)) {
    return
  }
  str = str.replace('#', '')
  hex = str.match(/../g)
  for (let i = 0; i < 3; i++) {
    hex[i] = Number.parseInt(hex[i], 16)
  }
  return hex
}

/**
 * rgb颜色转Hex颜色
 * @param r 代表红色
 * @param g 代表绿色
 * @param b 代表蓝色
 * @returns 返回处理后的颜色值
 */
export function rgbToHex(r: any, g: any, b: any) {
  let reg = /^\d{1,3}$/
  if (!reg.test(r) || !reg.test(g) || !reg.test(b)) {
    return
  }
  let hex = [r.toString(16), g.toString(16), b.toString(16)]
  for (let i = 0; i < 3; i++) {
    if (hex[i].length == 1) {
      hex[i] = `0${hex[i]}`
    }
  }
  return `#${hex.join('')}`
}

/**
 * 加深颜色值
 * @param color 颜色值字符串
 * @param level 加深的程度，限0-1之间
 * @returns 返回处理后的颜色值
 */
export function getDarkColor(color: string, level: number) {
  let reg = /^\#?[0-9A-Fa-f]{6}$/
  if (!reg.test(color)) {
    return
  }
  let rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor(rgb[i] * (1 - level))
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2])
}

/**
 * 变浅颜色值
 * @param color 颜色值字符串
 * @param level 加深的程度，限0-1之间
 * @returns 返回处理后的颜色值
 */
export function getLightColor(color: string, level: number) {
  let reg = /^\#?[0-9A-Fa-f]{6}$/
  if (!reg.test(color)) {
    return
  }
  let rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i])
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2])
}

export { colord }
