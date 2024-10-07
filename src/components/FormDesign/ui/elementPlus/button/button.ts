import { type PropType, defineComponent, h, renderSlot } from 'vue'
import { ElButton } from 'element-plus'
import type { ComponentSchema } from '../../../core'

// 二次封装组件
export default defineComponent({
  props: {
    componentSchema: {
      type: Object as PropType<ComponentSchema>,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    return () => {
      const componentProps: Record<string, any> = {
        ...props.componentSchema?.componentProps,
      }

      return h(ElButton, componentProps, {
        default: () =>
          renderSlot(slots, 'default', {}, () => [props.componentSchema?.label]),
      })
    }
  },
})
