import './index.css'
import { type Component, defineComponent, h } from 'vue'

export interface attrsType {
  width?: string
  height?: string
  borderRadius?: number | string
  background?: string
  scale?: number | string
}

/**
 * 圆点、方形闪烁动画组件
 * @returns Component
 * @param attrs
 */
export function useRenderFlicker(attrs?: attrsType): Component {
  return defineComponent({
    name: 'ReFlicker',
    render() {
      return h(
        'div',
        {
          class: 'point point-flicker',
          style: {
            '--point-width': attrs?.width ?? '12px',
            '--point-height': attrs?.height ?? '12px',
            '--point-background':
              attrs?.background ?? 'var(--el-color-primary)',
            '--point-border-radius': attrs?.borderRadius ?? '50%',
            '--point-scale': attrs?.scale ?? '2',
          },
        },
        {
          default: () => [],
        },
      )
    },
  })
}
