/*
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-07-02 15:59:54
 * @LastEditTime: 2024-07-02 16:00:09
 * @LastEditors: zhangyao
 */
import { utils, writeFile } from 'xlsx'
import { ElNotification } from 'element-plus'

/**
 * @description 前端导出、下载excel文件
 * @param {Function} api 导出表格的api方法(必传)
 * @param {string} tempName 导出的文件名(必传)
 * @param {object} params 导出的参数(默认为空对象)
 * @param {Array} Columns 表头(默认为 [])
 * @param {boolean} isNotify 是否有导出消息提示(默认为 true)
 * @return void
 */

export async function useExportExcel(api: (param: any) => Promise<any>,
  tempName: string,
  params: any = {},
  columns: any = [],
  isNotify = true) {
  if (isNotify) {
    ElNotification({
      title: '温馨提示',
      message: '如果数据庞大会导致下载缓慢哦，请您耐心等待！',
      type: 'info',
      duration: 3000,
    })
  }
  try {
    const res = await api(params)
    const resData: string[][] = res.data.records.map((item: any) => {
      const arr: any = []
      columns.forEach((columnItem: any) => {
        arr.push(item[columnItem.prop])
      })
      return arr
    })
    const titleList: string[] = []
    columns.forEach((column: any) => {
      if (column.prop !== 'operation') {
        titleList.push(column.label)
      }
    })
    resData.unshift(titleList)
    const workSheet = utils.aoa_to_sheet(resData)
    const workBook = utils.book_new()
    utils.book_append_sheet(workBook, workSheet, '数据报表')
    writeFile(workBook, `${tempName}.xlsx`)
  }
  catch (error) {
    console.log(error)
  }
}
