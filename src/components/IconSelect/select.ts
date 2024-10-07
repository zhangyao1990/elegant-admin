import { cloneDeep } from 'lodash-es'
import { IconJson } from './data'

export function getIconList() {
  let iconList: any = cloneDeep(IconJson)
  let files: any = import.meta.glob('../../assets/icons/*.svg')
  const svgNames: any = []

  for (const path in files) {
    const fileNameWithExt: any = path.split('/').pop() // 获取带有后缀的文件名
    const fileName = fileNameWithExt?.split('.').slice(0, -1).join('.') // 去除后缀部分
    if (fileName) {
      svgNames.push(fileName)
    }
  }
  iconList['local:'] = svgNames
  return iconList
}
