import path from 'path-browserify'
import { isArray } from 'lodash-es'
import type { FieldNamesProps } from '@/components/ProTable/interface'

export function resolveRoutePath(basePath?: string, routePath?: string) {
  return basePath ? path.resolve(basePath, routePath ?? '') : routePath ?? ''
}

/**
 * @description 格式化表格单元格默认值 (el-table-column)
 * @param {number} row 行
 * @param {number} col 列
 * @param {*} callValue 当前单元格值
 * @returns {string} 格式化后的值
 */
export function formatTableColumn(row: number, col: number, callValue: any) {
  // 如果当前值为数组，使用 / 拼接（根据需求自定义）
  if (isArray(callValue)) {
    return callValue.length ? callValue.join(' / ') : '--'
  }
  return callValue ?? '--'
}

/**
 * @description 处理 ProTable 值为数组 || 无数据
 * @param {*} callValue 需要处理的值
 * @returns {string} 处理后的值
 */
export function formatValue(callValue: any) {
  // 如果当前值为数组，使用 / 拼接（根据需求自定义）
  if (isArray(callValue)) {
    return callValue.length ? callValue.join(' / ') : '--'
  }
  return callValue ?? '--'
}

/**
 * @description 处理 prop 为多级嵌套的情况，返回的数据 (列如: prop: user.name)
 * @param {object} row 当前行数据
 * @param {string} prop 当前 prop
 * @returns {*}   值
 */
export function handleRowAccordingToProp(row: { [key: string]: any }, prop: string) {
  if (!prop.includes('.')) {
    return row[prop] ?? '--'
  }
  prop.split('.').forEach(item => (row = row[item] ?? '--'))
  return row
}

/**
 * @description 处理 prop，当 prop 为多级嵌套时 ==> 返回最后一级 prop
 * @param {string} prop 当前 prop
 * @returns {string} 返回值
 */
export function handleProp(prop: string) {
  const propArr = prop.split('.')
  if (propArr.length == 1) {
    return prop
  }
  return propArr[propArr.length - 1]
}

/**
 * @description 根据枚举列表查询当需要的数据（如果指定了 label 和 value 的 key值，会自动识别格式化）
 * @param {string} callValue 当前单元格值
 * @param {Array} enumData 字典列表
 * @param {Array} fieldNames label && value && children 的 key 值
 * @param {string} type 过滤类型（目前只有 tag）
 * @returns {string} 返回值
 */
export function filterEnum(callValue: any, enumData?: any, fieldNames?: FieldNamesProps, type?: 'tag') {
  const value = fieldNames?.value ?? 'value'
  const label = fieldNames?.label ?? 'label'
  const children = fieldNames?.children ?? 'children'
  let filterData: { [key: string]: any } = {}
  // 判断 enumData 是否为数组
  if (Array.isArray(enumData)) {
    filterData = findItemNested(enumData, callValue, value, children)
  }
  // 判断是否输出的结果为 tag 类型
  if (type == 'tag') {
    return filterData?.tagType ? filterData.tagType : ''
  }
  else {
    return filterData ? filterData[label] : '--'
  }
}

/**
 * @description 递归查找 callValue 对应的 enum 值
 */
export function findItemNested(enumData: any, callValue: any, value: string, children: string) {
  return enumData.reduce((accumulator: any, current: any) => {
    if (accumulator) {
      return accumulator
    }
    if (current[value] === callValue) {
      return current
    }
    if (current[children]) {
      return findItemNested(current[children], callValue, value, children)
    }
  }, null)
}
/**
 * @description 获取当前时间
 * @return string
 */
export function getTimeState() {
  // 获取当前时间
  let timeNow = new Date()
  // 获取当前小时
  let hours = timeNow.getHours()
  // 判断当前时间段
  if (hours >= 6 && hours <= 10) {
    return `早上好 ⛅`
  }
  if (hours >= 10 && hours <= 14) {
    return `中午好 🌞`
  }
  if (hours >= 14 && hours <= 18) {
    return `下午好 🌞`
  }
  if (hours >= 18 && hours <= 24) {
    return `晚上好 🌛`
  }
  if (hours >= 0 && hours <= 6) {
    return `凌晨好 🌛`
  }
}

/**
 * @description 将普通数组对象转换为tree结构
 * @return any
 * @param data
 * @param callback
 * @param keyPid
 * @param childName
 */
// data数据格式[
//     { name: 'tree1', id: 1, parentId: 0 },
//     { name: 'tree2', id: 2, parentId: 0 }]
// 1、id与parentId这两个字段必须有
// 2、树形tree需要注意Id与parentId循环依赖的问题
// 3、callback每次生成一新的节点的时回调的方法
export function convertTree(data: any, callback?: any, keyPid = 'pid', childName = 'children') {
  if (!data) {
    return
  }
  let treeIds: string | any[] = []
  let rootData: any = []
  data.forEach((x: any) => {
    if (!x[childName]) {
      x[childName] = []
    }
    if (!x.hidden && x.id !== undefined && x.id !== x[keyPid] && !data.some((s: any) => {
      return x[keyPid] === s.id
    })
    ) {
      x.isRoot = true
      callback && callback(x, data, true, treeIds)
      rootData.push(x)
      getTree(x.id, x, data, callback, treeIds, keyPid, childName)
    }
  })
  const exceptionNodes: any = data.filter((f: any) => {
    return !treeIds.includes(f.id) && !f.hidden
  })

  rootData.push(...exceptionNodes)
  return rootData
}

/**
 * @description 将普通对象转换为tree结构
 * @return any
 * @param id
 * @param node
 * @param data
 * @param callback
 * @param treeIds
 * @param keyPid
 * @param childName
 */
export function getTree(id: any, node: any, data: any, callback: any, treeIds: any, keyPid: any, childName = 'children') {
  if (!treeIds.includes(id)) {
    treeIds.push(id)
  }
  data.forEach((x: any) => {
    if (!x.hidden && x[keyPid] === id) {
      if (!node[childName]) {
        node[childName] = []
      }
      callback && callback(x, node, false)
      node[childName].push(x)
      getTree(x.id, x, data, callback, treeIds, keyPid)
    }
  })
}

/**
 * @description 将树形结构转为平级
 * @return any
 * @param tree
 * @param childName
 */
export function convertTreeToArr(tree: any, childName = 'children') {
  // 设置临时数组，用来存放队列
  let queen: any = []
  // 设置输出数组，用来存放要输出的一维数组
  const result: any = []
  queen = queen.concat(tree)
  // 对树对象进行广度优先的遍历
  while (queen.length) {
    const first: any = queen.shift()
    if (first[childName]) {
      queen = queen.concat(first[childName])
      delete first[childName]
    }
    result.push(first)
  }
  return result
}
/*
 * @description 生成随机数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number}
 */
export function randomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (min - max) + max)
}
