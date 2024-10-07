<script setup lang="ts" name="Login">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElNotification } from 'element-plus'
import Copyright from '@/layouts/modules/Copyright/index.vue'
import useSettingsStore from '@/store/modules/settings'
import useUserStore from '@/store/modules/user'
import type { ReqLoginForm } from '@/api/interface/modules/login'
import { getLocal, removeLocal, setLocal } from '@/utils/storage'
import { getTimeState } from '@/utils'

const route = useRoute()
const router = useRouter()

const settingsStore = useSettingsStore()
const userStore = useUserStore()

const loginBg = new URL('../../assets/images/login-bg.png', import.meta.url).href
const loginBanner = new URL('../../assets/images/login-banner.png', import.meta.url).href
const logo = new URL('../../assets/images/logo.png', import.meta.url).href
const title = import.meta.env.VITE_APP_TITLE

// 表单类型，login 登录，register 注册，reset 重置密码
const formType = ref('login')
const loading = ref(false)
const redirect = ref(route.query.redirect?.toString() ?? settingsStore.settings.home.fullPath)

// 登录
const loginFormRef = ref<FormInstance>()
const loginForm = ref<ReqLoginForm>({
  account: getLocal('login_account') || 'admin',
  password: '123456',
  verifyCode: '',
  remember: !!getLocal('login_account'),
})

const imgVerifyRef = ref<any>(null)
function validatorVerifyCode(_rule: any, value: string, callback: (error?: Error) => void) {
  if (!value) {
    callback(new Error('请输入验证码'))
  }
  else if (value !== imgVerifyRef.value?.imgCode) {
    callback(new Error('请输入正确的验证码'))
  }
  else {
    callback()
  }
}
const loginRules = ref<FormRules>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
  verifyCode: [
    { required: true, trigger: 'blur', validator: validatorVerifyCode },
  ],
})
function handleLogin() {
  loginFormRef.value && loginFormRef.value.validate((valid) => {
    if (valid) {
      loading.value = true
      userStore.login(loginForm.value).then(() => {
        loading.value = false
        if (loginForm.value.remember) {
          setLocal('login_account', loginForm.value.account)
        }
        else {
          removeLocal('login_account')
        }
        router.push(redirect.value)
        ElNotification({
          title: getTimeState(),
          message: `欢迎登录 ${title}`,
          type: 'success',
          duration: 3000,
        })
      }).catch(() => {
        loading.value = false
      })
    }
  })
}

// 注册
const registerFormRef = ref<FormInstance>()
const registerForm = ref({
  account: '',
  captcha: '',
  password: '',
  checkPassword: '',
})
const registerRules = ref<FormRules>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  captcha: [
    { required: true, trigger: 'blur', message: '请输入验证码' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
  checkPassword: [
    { required: true, trigger: 'blur', message: '请再次输入密码' },
    {
      validator: (_rule, value, callback) => {
        if (value !== registerForm.value.password) {
          callback(new Error('两次输入的密码不一致'))
        }
        else {
          callback()
        }
      },
    },
  ],
})
function handleRegister() {
  ElMessage({
    message: '注册模块仅提供界面演示，无实际功能，需开发者自行扩展',
    type: 'warning',
  })
  registerFormRef.value && registerFormRef.value.validate((valid) => {
    if (valid) {
      // 这里编写业务代码
    }
  })
}

// 重置密码
const resetFormRef = ref<FormInstance>()
const resetForm = ref({
  account: localStorage.login_account,
  captcha: '',
  newPassword: '',
})
const resetRules = ref<FormRules>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  captcha: [
    { required: true, trigger: 'blur', message: '请输入验证码' },
  ],
  newPassword: [
    { required: true, trigger: 'blur', message: '请输入新密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
})
function handleReset() {
  ElMessage({
    message: '重置密码仅提供界面演示，无实际功能，需开发者自行扩展',
    type: 'info',
  })
  resetFormRef.value && resetFormRef.value.validate((valid) => {
    if (valid) {
      // 这里编写业务代码
    }
  })
}
</script>

<template>
  <div class="login-container">
    <div class="bg-banner" :style="{ backgroundImage: `url(${loginBg})` }">
      <img class="login-banner" :src="loginBanner" alt="">
    </div>
    <div id="login-box">
      <ElForm v-show="formType === 'login'" ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form">
        <div class="title-container">
          <img :src="logo" class="logo" alt="">
          <h3 class="title">
            欢迎来到 {{ title }} ! 👋🏻
          </h3>
        </div>
        <div>
          <ElFormItem prop="account">
            <ElInput v-model="loginForm.account" placeholder="用户名" clearable type="text" tabindex="1">
              <template #prefix>
                <SvgIcon name="ep:user" />
              </template>
            </ElInput>
          </ElFormItem>
          <ElFormItem prop="password">
            <ElInput v-model="loginForm.password" type="password" clearable placeholder="密码" tabindex="2" autocomplete="new-password" show-password @keyup.enter="handleLogin">
              <template #prefix>
                <SvgIcon name="ep:lock" />
              </template>
            </ElInput>
          </ElFormItem>
          <ElFormItem prop="verifyCode">
            <ElInput v-model="loginForm.verifyCode" class="verify-code" type="text" clearable maxlength="4" placeholder="验证码" tabindex="3" @keyup.enter="handleLogin">
              <template #prefix>
                <SvgIcon name="lucide:shield-check" />
              </template>
              <template #append>
                <div class="verify-img">
                  <ImgVerify ref="imgVerifyRef" />
                </div>
              </template>
            </ElInput>
          </ElFormItem>
        </div>
        <div class="flex-bar">
          <ElCheckbox v-model="loginForm.remember">
            记住我
          </ElCheckbox>
          <ElLink type="primary" :underline="false" @click="formType = 'reset'">
            忘记密码了?
          </ElLink>
        </div>
        <ElButton :loading="loading" type="primary" round size="large" style="width: 100%;" @click.prevent="handleLogin">
          登录
        </ElButton>
        <div v-if="false" class="sub-link">
          <span class="text">还没有帐号?</span>
          <ElLink type="primary" :underline="false" @click="formType = 'register'">
            创建新帐号
          </ElLink>
        </div>
      </ElForm>
      <ElForm v-show="formType === 'register'" ref="registerFormRef" :model="registerForm" :rules="registerRules" class="login-form" auto-complete="on">
        <div class="title-container">
          <h3 class="title">
            探索从这里开始! 🚀
          </h3>
        </div>
        <div>
          <ElFormItem prop="account">
            <ElInput v-model="registerForm.account" clearable placeholder="用户名" tabindex="1">
              <template #prefix>
                <SvgIcon name="ep:user" />
              </template>
            </ElInput>
          </ElFormItem>
          <ElFormItem prop="captcha">
            <ElInput v-model="registerForm.captcha" clearable placeholder="验证码" tabindex="2">
              <template #prefix>
                <SvgIcon name="lucide:shield-check" />
              </template>
              <template #append>
                <ElButton>发送验证码</ElButton>
              </template>
            </ElInput>
          </ElFormItem>
          <ElFormItem prop="password">
            <ElInput v-model="registerForm.password" clearable type="password" placeholder="密码" tabindex="3" show-password>
              <template #prefix>
                <SvgIcon name="ep:lock" />
              </template>
            </ElInput>
          </ElFormItem>
          <ElFormItem prop="checkPassword">
            <ElInput v-model="registerForm.checkPassword" clearable type="password" placeholder="确认密码" tabindex="4" show-password>
              <template #prefix>
                <SvgIcon name="ep:lock" />
              </template>
            </ElInput>
          </ElFormItem>
        </div>
        <ElButton :loading="loading" type="primary" round size="large" style="width: 100%; margin-top: 20px;" @click.prevent="handleRegister">
          注册
        </ElButton>
        <div class="sub-link">
          <span class="text">已经有帐号?</span>
          <ElLink type="primary" :underline="false" @click="formType = 'login'">
            去登录
          </ElLink>
        </div>
      </ElForm>
      <ElForm v-show="formType === 'reset'" ref="resetFormRef" :model="resetForm" :rules="resetRules" class="login-form">
        <div class="title-container">
          <h3 class="title">
            忘记密码了? 🔒
          </h3>
        </div>
        <div>
          <ElFormItem prop="account">
            <ElInput v-model="resetForm.account" clearable placeholder="用户名" type="text" tabindex="1">
              <template #prefix>
                <SvgIcon name="ep:user" />
              </template>
            </ElInput>
          </ElFormItem>
          <ElFormItem prop="captcha">
            <ElInput v-model="resetForm.captcha" clearable placeholder="验证码" type="text" tabindex="2">
              <template #prefix>
                <SvgIcon name="lucide:shield-check" />
              </template>
              <template #append>
                <ElButton>发送验证码</ElButton>
              </template>
            </ElInput>
          </ElFormItem>
          <ElFormItem prop="newPassword">
            <ElInput v-model="resetForm.newPassword" clearable type="password" placeholder="新密码" tabindex="3" show-password>
              <template #prefix>
                <SvgIcon name="ep:lock" />
              </template>
            </ElInput>
          </ElFormItem>
        </div>
        <ElButton :loading="loading" type="primary" round size="large" style="width: 100%; margin-top: 20px;" @click.prevent="handleReset">
          确认
        </ElButton>
        <div class="sub-link">
          <ElLink type="primary" :underline="false" @click="formType = 'login'">
            去登录
          </ElLink>
        </div>
      </ElForm>
    </div>
    <Copyright
      :color="settingsStore.mode === 'mobile' ? '#333333' : '#ffffff'"
    />
  </div>
</template>

<style lang="scss" scoped>
    :deep(input[type="password"]::-ms-reveal) {
      display: none;
    }

    .login-container {
      position: relative;
      width: 100%;
      height: 100%;

      .bg-banner {
        position: fixed;
        inset: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-size: cover;

        .login-banner {
          position: absolute;
          top: 30%;
          left: 10%;
          width: 550px;
          transform: translateY(-50%);
          animation: float 5s linear 0ms infinite;

          @keyframes float {
            0% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-20px);
            }

            100% {
              transform: translateY(0);
            }
          }
        }
      }

      #login-box {
        position: absolute;
        top: 50%;
        right: 120px;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        background-color: var(--g-container-bg);
        border-radius: 10px;
        box-shadow: var(--el-box-shadow);
        transform: translateY(-50%);

        .login-form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 500px;
          min-height: 500px;
          padding: 40px 50px;
          overflow: hidden;

          .title-container {
            position: relative;
            display: flex;
            align-items: center;
            margin-bottom: 15px;

            .logo {
              width: 40px;
              height: 40px;
              border-radius: 4px;
            }

            .title {
              margin-left: 20px;
              font-size: 1.3em;
              font-weight: bold;
              color: var(--el-text-color-primary);
            }
          }

          .verify-img {
            overflow: hidden;
            border-radius: 0 5px 5px 0;
          }
        }

        .el-form-item {
          margin-bottom: 24px;

          :deep(.el-input) {
            width: 100%;
            height: 48px;
            line-height: inherit;

            input {
              height: 48px;
            }

            .el-input__prefix,
            .el-input__suffix {
              display: flex;
              align-items: center;
            }

            .el-input__prefix {
              left: 10px;
            }

            .el-input__suffix {
              right: 10px;
            }

            &.verify-code {
              .el-input-group__append {
                padding: 0;
              }
            }
          }
        }

        :deep(.el-divider__text) {
          background-color: var(--g-container-bg);
        }

        .flex-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sub-link {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          font-size: 14px;
          color: var(--el-text-color-secondary);

          .text {
            margin-right: 10px;
          }
        }
      }
    }

    .copyright {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 20px;
      margin: 0;
    }

    [data-mode="mobile"] {
      .login-container {
        .bg-banner {
          background: #fff !important;
        }

        #login-box {
          position: relative;
          top: inherit;
          right: 0;
          left: inherit;
          flex-direction: column;
          justify-content: start;
          width: 100%;
          height: calc(100% - 60px);
          border-radius: 0;
          box-shadow: none;
          transform: translateX(0) translateY(0);

          .login-form {
            width: 100%;
            min-height: auto;
            padding: 30px;
          }
        }
      }

      .copyright {
        position: relative;
      }
    }
</style>
