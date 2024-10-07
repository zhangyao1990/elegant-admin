import { type PropType, computed, defineComponent, h, nextTick, ref, watch } from 'vue'
import { ElImageViewer, ElMessage, ElUpload, type UploadProps, type UploadUserFile } from 'element-plus'

// 封装上传文件组件
export default defineComponent({
  props: {
    modelValue: {
      type: Array as PropType<UploadUserFile[]>,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const fileList = ref<UploadUserFile[]>([])

    const imgUrl = ref('')
    const visible = ref(false)
    const setVisible = (value: boolean): void => {
      visible.value = value
    }

    watch(fileList, (e) => {
      emit('update:modelValue', e)
    })
    // 处理传递进来的值
    watch(
      () => props.modelValue,
      (e) => {
        if (e != null && e.length > 0 && fileList.value != null) {
          // props modelValue 等于 data 不进行处理
          if (fileList.value === e) {
            return
          }
          fileList.value.length = 0
          fileList.value.push(...e)
        }
      },
      { deep: true, immediate: true },
    )

    const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles): void => {
      // eslint-disable-next-line style/max-statements-per-line
      nextTick(() => { fileList.value = uploadFiles })
    }

    // 处理数据结果
    // const handleChange = (info: UploadChangeParam): void => {
    //   if (info.file.status === 'uploading') {
    //     return
    //   }
    //
    //   if (info.file.status === 'done') {
    //     // Get this url from response in real world.
    //     const url: string | undefined = info.file.response?.data?.url
    //     if (!info.file.url && !url) {
    //       info.file.status = 'error'
    //       message.error('上传失败')
    //       return
    //     }
    //     // 赋值url
    //     info.file.url = url
    //     info.file.thumbUrl = url
    //   }
    //
    //   if (info.file.status === 'error') {
    //     message.error('upload error')
    //   }
    // }

    const handleSuccess: UploadProps['onSuccess'] = (response, uploadFile, uploadFiles) => {
      console.log(uploadFiles)
    }
    const handleError: UploadProps['onError'] = (error, _uploadFile, _uploadFiles) => {
      ElMessage.error('上传失败')
      console.error(error)
    }

    // 上传前处理
    const beforeUpload = (_file: any): void => {
      // const isJpgOrPng = _file.type === 'image/jpeg' || _file.type === 'image/png';
      // if (!isJpgOrPng) {
      //   message.error('您只能上传JPG/PNG文件!');
      // }
      // const isLt2M = _file.size / 1024 / 1024 < 2;
      // if (!isLt2M) {
      //   message.error('图片大小超过 2MB!');
      // }
      // return isJpgOrPng && isLt2M;
    }

    const getUploadProps = computed<UploadProps>(() => ({
      ...attrs,
      'file-list': fileList.value,
      'list-type': 'picture-card',
      'accept': 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
      'onBeforeUpload': beforeUpload,
      'onChange': handleChange,
      'onSuccess': handleSuccess,
      'onError': handleError,
      // eslint-disable-next-line ts/no-use-before-define
      'onPreview': handlePreview,
    }))

    /**
     * 预览功能
     * @param uploadFile
     */
    const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
      if (!uploadFile.url) {
        return
      }
      imgUrl.value = uploadFile.url
      setVisible(true)
    }

    return () => {
      // const type = attrs.type;
      return h(
        'div',
        {
          class: 'elegant-upload-image',
        },
        {
          default: () => [
            h(ElUpload, getUploadProps.value, {
              default: () => [
                h('div', { style: { 'text-align': 'center' } }, {
                  default: () => [
                    h('span', {
                      class: 'icon--elegant icon--elegant--cloud-upload-outlined mr-2px text-lg',
                    }),
                    h(
                      'div',
                      { class: 'ant-upload-text' },
                      { default: () => '点击上传' },
                    ),
                  ],
                }),
              ],
            }),
            (() => {
              if (!visible.value) {
                return
              }
              return h(ElImageViewer, {
                urlList: [imgUrl.value],
                onClose: () => { setVisible(false) },
              })
            })(),
          ],
        },
      )
    }
  },
})
