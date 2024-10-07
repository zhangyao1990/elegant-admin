<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Check, Close } from '@element-plus/icons-vue'
import cloneDeep from 'lodash-es/cloneDeep'

defineOptions({
  name: 'RoleDrawer',
})
const formRules = reactive({
  roleName: [{ required: true, message: '请输入角色名称!' }],
  alias: [{ required: true, message: '请输入角色别名!' }],
})

interface DrawerProps {
  title: string
  isView: boolean
  row: Partial<any>
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}
const formData = ref<Partial<any>>({})
const drawerVisible = ref(false)
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: '',
  row: {},
})

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
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="600px" :title="`${drawerProps.title}角色`">
    <el-form
      ref="ruleFormRef"
      label-width="120px"
      label-suffix=" :"
      :rules="formRules"
      :disabled="drawerProps.isView"
      :model="formData"
      :hide-required-asterisk="drawerProps.isView"
    >
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="formData.roleName" clearable placeholder="请输入角色名称" />
      </el-form-item>
      <el-form-item label="角色别名" prop="alias">
        <el-input v-model="formData.alias" clearable placeholder="请输入角色别名" />
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
