<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Check, Close } from '@element-plus/icons-vue'
import cloneDeep from 'lodash-es/cloneDeep'

defineOptions({
  name: 'ResourceDrawer',
})
const formRules = reactive({
  name: [{ required: true, message: '请输入API名称!' }],
  method: [{ required: true, message: '请输入API方法类型!' }],
  apiUrl: [{ required: true, message: '请输入API地址!' }],
})

interface DrawerProps {
  title: string
  isView: boolean
  row: Partial<any>
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}

const drawerVisible = ref(false)
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: '',
  row: {},
})
const formData = ref<Partial<any>>({})
// 接收父组件传过来的参数
function acceptParams(params: DrawerProps) {
  console.log('params', params)
  formData.value = params.row
  drawerProps.value = params
  drawerVisible.value = true
}

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>()
function handleSubmit() {
  ruleFormRef.value!.validate(async (valid) => {
    if (!valid) {
      return
    }
    try {
      let params = cloneDeep(formData.value)
      await drawerProps.value.api!(params)
      ElMessage.success({ message: `${drawerProps.value.title}成功！` })
      drawerProps.value.getTableList!()
      drawerVisible.value = false
    }
    catch (error) {
      console.log(error)
    }
  })
}

defineExpose({
  acceptParams,
})
</script>

<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="600px" :title="`${drawerProps.title}`">
    <el-form
      ref="ruleFormRef"
      label-width="120px"
      label-suffix=" :"
      :rules="formRules"
      :disabled="drawerProps.isView"
      :model="formData"
      :hide-required-asterisk="drawerProps.isView"
    >
      <el-form-item label="API名称" prop="name">
        <el-input v-model="formData.name" clearable placeholder="请输入角色名称" />
      </el-form-item>
      <el-form-item label="API地址" prop="apiUrl">
        <el-input v-model="formData.apiUrl" clearable placeholder="请输入API地址" />
      </el-form-item>
      <el-form-item label="API方法类型" prop="method">
        <el-select v-model="formData.method" placeholder="请选择" clearable>
          <el-option label="GET" value="get" />
          <el-option label="POST" value="post" />
          <el-option label="PUT" value="put" />
          <el-option label="DELETE" value="delete" />
          <el-option label="*" value="*" />
        </el-select>
      </el-form-item>
      <el-form-item label="序号值" prop="sort">
        <el-input-number v-model="formData.sort" controls-position="right" />
      </el-form-item>
      <el-form-item label="状态" prop="openStatus">
        <el-switch
          v-model="formData.openStatus"
          active-value="OPEN"
          inactive-value="CLOSE"
          inline-prompt
          :active-icon="Check"
          :inactive-icon="Close"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">
        取消
      </el-button>
      <el-button v-show="!drawerProps.isView" type="primary" @click="handleSubmit">
        确定
      </el-button>
    </template>
  </el-drawer>
</template>
