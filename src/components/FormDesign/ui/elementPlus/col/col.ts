import { type PropType, defineComponent, h, renderSlot } from 'vue'
import { ElCol } from 'element-plus'
import type { ComponentSchema } from '../../../core'

export default defineComponent({
  props: {
    componentSchema: {
      type: Object as PropType<ComponentSchema>,
      required: true,
      default: () => ({}),
    },
  },
  setup(props, { _attrs, slots }) {
    return () => {
      const componentSchema = {
        ...props.componentSchema,
        title: props.componentSchema?.label,
      } as ComponentSchema
      const children = componentSchema.children ?? []
      delete componentSchema.children

      return h(ElCol, componentSchema, {
        default: () =>
          renderSlot(slots, 'edit-node', {}, () =>
            children.map((node: ComponentSchema) =>
              renderSlot(slots, 'node', { componentSchema: node }),
            ),
          ),
      })
    }
  },
})
