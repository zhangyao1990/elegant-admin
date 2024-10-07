import type { ComponentConfigModel } from '../../../utils'

export default {
  component: () => import('./formItem.vue'),
  defaultSchema: {
    label: '表单项',
    type: 'form-item',
  },
  config: {
  },
} as ComponentConfigModel
