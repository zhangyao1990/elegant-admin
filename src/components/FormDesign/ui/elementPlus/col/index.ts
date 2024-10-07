import type { ComponentConfigModel } from '../../../utils'

export default {
  component: () => import('./col'),
  defaultSchema: {
    label: '栅格布局-列',
    type: 'col',
    children: [],
    componentProps: {
      span: 6,
    },
  },
  config: {
    attribute: [
      {
        label: '占位格数',
        type: 'number',
        field: 'componentProps.span',
      },
    ],
  },
} as ComponentConfigModel
