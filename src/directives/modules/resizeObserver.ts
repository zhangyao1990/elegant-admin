// 监听元素大小变化的指令
import type { Directive } from 'vue'

const map = new WeakMap()
const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    // 获取dom元素的回调
    const handler = map.get(entry.target)
    // 存在回调函数
    if (handler) {
      // 将监听的值给回调函数
      handler({
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize,
      })
    }
  }
})
const resize: Directive = {
  mounted(el: any, binding: any) {
    // 将dom与回调的关系塞入map
    map.set(el, binding.value)
    // 监听el元素的变化
    ob.observe(el)
  },
  unmounted(el: any) {
    // 取消监听
    ob.unobserve(el)
  },
}

export default resize
