<script setup lang="ts">
import { Download } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

interface ExcelParameterProps {
  title: string // 标题
  tempApi: (params: any) => Promise<any> // 下载模板的Api
  importApi: (params: any) => Promise<any> // 批量导入的Api
  getTableList?: () => Promise<any> // 获取表格数据的Api
  modelValue?: any
  isShowCover?: any
}
const emits = defineEmits(['emitSubmit'])
// 是否覆盖数据
const isCover = ref(false)
// dialog状态
const dialogVisible = ref(false)
// 父组件传过来的参数
const parameter = ref<Partial<ExcelParameterProps>>({
  modelValue: [],
  isShowCover: false,
})

// 接收父组件参数
function acceptParams(params?: any): void {
  parameter.value = Object.assign(parameter.value, params)
  dialogVisible.value = true
}

// Excel 导入模板下载
function downloadTemp() {
  if (!parameter.value.tempApi) {
    return
  }
  useDownload('httpPath', parameter.value.tempApi, `${parameter.value.title}模板`, {})
}
function handleSubmit() {
  let key = parameter.value?.modelValue?.join(',')
  console.log('key', key)
  if (!key) {
    ElMessage({
      message: '请上传文件!',
      type: 'error',
      plain: true,
    })
    return
  }
  let para = {
    key: key.split('.com')[1],
  }
  if (!parameter.value.importApi) {
    return
  }
  parameter.value.importApi(para).then(() => {
    handleClose()
    parameter.value.getTableList!()
    ElMessage({
      message: '操作成功!',
      type: 'success',
      plain: true,
    })
  })

  emits('emitSubmit', para)
}
function handleClose() {
  parameter.value.modelValue = []
  dialogVisible.value = false
}
defineExpose({
  acceptParams,
  handleClose,
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="parameter.title || '批量添加'"
    width="700px"
    draggable
    :destroy-on-close="true"
    @close="handleClose"
  >
    <el-form class="drawer-multiColumn-form" label-width="100px">
      <slot />
      <el-form-item label="模板下载 :">
        <el-button type="primary" :icon="Download" @click="downloadTemp">
          点击下载
        </el-button>
      </el-form-item>
      <el-form-item label="文件上传 :">
        <file-upload v-model="parameter.modelValue" accept=".xlsx" :ext="['xlsx']" :size="100" :max="1" />
      </el-form-item>
      <el-form-item v-if="parameter.isShowCover" label="数据覆盖 :">
        <el-switch v-model="isCover" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="dialogVisible = false">
        取消
      </el-button>
      <el-button type="primary" @click="handleSubmit">
        确定
      </el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.upload {
  width: 80%;
}
</style>
