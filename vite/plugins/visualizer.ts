import { visualizer } from 'rollup-plugin-visualizer'

// 依赖分析插件
export default function createVisualizer() {
  return visualizer({
    emitFile: true,
    filename: 'stats.html', // 分析图生成的文件名
    open: true, // 如果存在本地服务端口，将在打包后自动展示
  })
}
