<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Check, Close } from '@element-plus/icons-vue'
import cloneDeep from 'lodash-es/cloneDeep'

defineOptions({
  name: 'UserDrawer',
})
const formRules = reactive({
  phone: [{ required: true, message: '请输入用户名称!' }],
  name: [{ required: true, message: '请输入用户姓名!' }],
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
  formData.value = params.row
  console.log('params', params)
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
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="600px" :title="`${drawerProps.title}账号`">
    <el-form
      ref="ruleFormRef"
      label-width="120px"
      label-suffix=" :"
      :rules="formRules"
      :disabled="drawerProps.isView"
      :model="drawerProps.row"
      :hide-required-asterisk="drawerProps.isView"
    >
      <el-form-item prop="phone">
        <template #label>
          <div class="flex items-center">
            <span class="mr-4px">登录账号</span>
            <el-tooltip
              content="<span class='w-40'>登录账号为手机号</span>"
              raw-content
            >
              <el-icon>
                <svg-icon name="ep:question-filled" />
              </el-icon>
            </el-tooltip>
          </div>
        </template>
        <el-input v-model="drawerProps.row.phone" clearable placeholder="请输入登录账号" />
      </el-form-item>
      <el-form-item label="用户姓名" prop="name">
        <el-input v-model="drawerProps.row.name" clearable placeholder="请输入用户姓名" />
      </el-form-item>
      <el-form-item label="状态" prop="openStatus">
        <el-switch
          v-model="drawerProps.row.openStatus"
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
