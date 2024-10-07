<script setup lang="ts">
import tinymce from 'tinymce/tinymce'
import TinymceEditor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/quickbars'
import 'tinymce/themes/silver/theme'
import 'tinymce/icons/default/icons'
import 'tinymce/models/dom'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/image'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/media'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/table'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/code'
import 'tinymce/plugins/searchreplace'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'Tinymce',
})
const props = defineProps<{
  modelValue: string
  setting?: object
  disabled?: boolean
}>()
const emits = defineEmits(['update:modelValue'])
const content = ref('')

onMounted(() => {
  tinymce.init({})
  content.value = props.modelValue
})

watch(
  () => content.value,
  (newVal: string) => {
    emits('update:modelValue', newVal)
  },
)
const settingsStore = useSettingsStore()

const defaultSetting = ref({
  license_key: 'gpl', // 同意开源许可条款
  selector: 'textarea',
  language_url: 'tinymce/langs/zh-Hans.js',
  language: 'zh-Hans',
  skin_url: settingsStore.settings.app.colorScheme === 'light' ? 'tinymce/skins/ui/oxide' : 'tinymce/skins/ui/oxide-dark',
  content_css: settingsStore.settings.app.colorScheme === 'light' ? 'tinymce/skins/content/default/content.min.css' : 'tinymce/skins/content/dark/content.min.css',
  min_height: 250,
  max_height: 700,
  placeholder: '在这里输入文字',
  plugins: 'autolink autoresize fullscreen image insertdatetime link lists media preview table wordcount code searchreplace',
  toolbar: 'undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor removeformat | link image media table insertdatetime searchreplace | preview code fullscreen | fontsizeselect fontselect',
  branding: false, // 隐藏右下角技术支持
  promotion: false,
  menubar: true,
  toolbar_mode: 'sliding',
  fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
  font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',

  insertdatetime_formats: [
    '%Y年%m月%d日',
    '%H点%M分%S秒',
    '%Y-%m-%d',
    '%H:%M:%S',
  ],
  // https://www.tiny.cloud/docs/tinymce/6/file-image-upload/#images_upload_handler
  images_upload_handler: (blobInfo: any) => new Promise((resolve) => {
    const img = `data:image/jpeg;base64,${blobInfo.base64()}`
    resolve(img)
  }),
  file_picker_types: 'media',
  file_picker_callback: (callback: any, value: any, meta: any) => {
    if (meta.filetype === 'media') {
      // ,,m4v,avi,wmv,rmvb,mov,mpg,mpeg,webm
      const filetype = '.mp4,.mkv, .avi,.wmv, .rmvb,.mov,.mpg,.mpeg,.webm' // 限制文件的上传类型
      const inputElem = document.createElement('input') as any
      inputElem.setAttribute('type', 'file')
      inputElem.setAttribute('accept', filetype)
      inputElem.click()
      inputElem.onchange = async function () {
        // const file = inputElem.files[0] // 为 HTMLInputElement 构造函数中的 this，指向 input 实例对象
        // const isValid = await validateVideo(file)
        // if (isValid) {
        //   await uploadVideoFile(file, callback)
        // }
        // else {
        //   callback()
        // }
      }
    }
  },
  video_template_callback: (data: any) => {
    return `<video width="100%" height="auto" controls="controls" src=${data.source} />`
  },
})
const completeSetting = computed(() => {
  return Object.assign(defaultSetting.value, props.setting)
})
</script>

<template>
  <div class="editor">
    <TinymceEditor v-model="content" :init="completeSetting" />
  </div>
</template>

  <style lang="scss" scoped>
  .preview {
    margin-top: 10px;

    &::before {
      display: block;
      content: "预览：";
    }
  }
</style>
