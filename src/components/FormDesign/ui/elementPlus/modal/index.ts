import type { ComponentConfigModel } from '../../../utils'

export default {
  component: () => import('./modal'),
  defaultSchema: {
    label: '模态框',
    type: 'modal',
    children: [],
  },
  config: {
    attribute: [
      {
        label: '标题',
        type: 'input',
        field: 'title',
      },
    ],
  },
} as ComponentConfigModel
