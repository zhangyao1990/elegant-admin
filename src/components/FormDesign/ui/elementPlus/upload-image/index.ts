import type { ComponentConfigModel } from '../../../utils'

export default {
  component: () => import('./uploadImage'),
  groupName: '表单',
  icon: 'icon--elegant--imagesmode-outline-rounded',
  sort: 920,
  defaultSchema: {
    label: '上传图片',
    type: 'upload-image',
    field: 'uploadImage',
    input: true,
    componentProps: {
      action: 'https://examples.epicjs.cn/static/upload-img.json',
      name: 'file',
      showFileList: true,
    },
  },
  config: {
    attribute: [
      {
        label: '字段名',
        type: 'input',
        field: 'field',
      },
      {
        label: '标题',
        type: 'input',
        field: 'label',
      },
      {
        label: '请求地址',
        type: 'input',
        field: 'componentProps.action',
      },
      {
        label: '上传文件字段',
        type: 'input',
        field: 'componentProps.name',
      },
      {
        label: '多选',
        type: 'switch',
        field: 'componentProps.multiple',
      },
      {
        label: '展示文件列表',
        type: 'switch',
        field: 'componentProps.showFileList',
      },
      {
        label: '拖拽上传',
        type: 'switch',
        field: 'componentProps.drag',
      },
      {
        label: '允许上传最大数量',
        type: 'number',
        field: 'componentProps.limit',
        componentProps: {
          min: 0,
          placeholder: '请输入',
        },
      },
      {
        label: '禁用',
        type: 'switch',
        field: 'componentProps.disabled',
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden',
      },
      {
        label: '表单校验',
        type: 'ERuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用',
        componentProps: {
          ruleType: 'array',
        },
      },
    ],
  },
  bindModel: 'modelValue',
} as ComponentConfigModel