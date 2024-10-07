/*
 *    ┏┓　　　┏┓
 *  ┏┛┻━━━┛┻┓
 *  ┃　　　　　　　┃
 *  ┃　　　━　   ┃
 *  ┃　＞　　　＜　┃
 *  ┃　　　　　　　┃
 *  ┃...　⌒　...　┃
 *  ┃　　　　　　　┃
 *  ┗━┓　　　  ┏━┛
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃  神兽保佑
 *      ┃　　　┃  代码无bug
 *      ┃　　　┃
 *      ┃　　　┗━━━┓
 *      ┃　　　　　　　┣┓
 *      ┃　　　　　　　┏┛
 *      ┗┓┓┏━┳┓┏┛
 *        ┃┫┫　┃┫┫
 *        ┗┻┛　┗┻┛
 *
 * @Description:axios封装
 * @version:
 * @Date: 2023-02-07
 * @LastEditors: 97972619@qq.com
 * @LastEditTime:
 * @Author: 97972619@qq.com
 */
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { checkStatus } from './helper/checkStatus'
import { getLocal, getSession, removeSession } from '@/utils/storage'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/api/config/serviceLoading'

// import { AxiosCanceler } from './helper/axiosCancel'; //取消重复请求暂时没用到
import type { ResultData } from '@/api/interface'
import { ResultEnum } from '@/enums/httpEnum'
import useUserStore from '@/store/modules/user'
import router from '@/router'

function toLogin() {
  router.push({
    path: '/login',
    query: {
      redirect: router.currentRoute.value.path !== '/login' ? router.currentRoute.value.fullPath : undefined,
    },
  })
  window.location.reload()
}
const TOKEN_NAME = 'Authorization'
// const axiosCanceler = new AxiosCanceler();

const config = {
  // 默认地址请求地址，可在 .env 开头文件中修改
  // baseURL: import.meta.env.VITE_APP_API_BASEURL as string,
  // 设置超时时间（10s）
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时候允许携带凭证
  // withCredentials: true
}

class RequestHttp {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config)

    /**
     * @description 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
     */
    this.service.interceptors.request.use(
      (config: any) => {
        // * 将当前请求添加到 pending 中
        // axiosCanceler.addPending(config);
        // * 如果当前请求不需要显示 loading,在 api 服务中通过指定的第三个参数: { headers: { noLoading: true } }来控制不显示loading，参见loginApi
        config.headers!.noLoading || showFullScreenLoading()
        const token: any = getLocal('token')
        const passwordKey: any = getSession('psKey')
        if (config.headers) {
          if (token) {
            config.headers[TOKEN_NAME] = token
          }
          if (passwordKey) {
            config.headers.codeKey = passwordKey
            removeSession('psKey')
          }
        }
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )

    /**
     * @description 响应拦截器
     *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      async (response: AxiosResponse) => {
        const { data } = response
        const userStore = useUserStore()
        // * 在请求结束后，移除本次请求，并关闭请求 loading
        // axiosCanceler.removePending(config);
        tryHideFullScreenLoading()
        // * 登陆失效（code == 104）
        if (data.code == ResultEnum.OVERDUE) {
          ElMessageBox.confirm(`您已经登出，您可以取消留在此页面，或者重新登录!`, '登录失效', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning',
          })
            .then(async () => {
              await userStore.logout()
              toLogin()
            })
            .catch(() => {})
          return Promise.reject(data)
        }
        // * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
        if (data.code && data.code !== ResultEnum.SUCCESS) {
          ElMessage.error(data.message)
          return Promise.reject(data)
        }
        // * 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
        return data
      },
      async (error: AxiosError) => {
        const { response } = error
        tryHideFullScreenLoading()
        // 请求超时单独判断，因为请求超时没有 response
        if (error.message.includes('timeout')) {
          ElMessage.error('请求超时！请您稍后重试')
        }
        // 根据响应的错误状态码，做不同的处理
        if (response) {
          checkStatus(response.status)
        }
        // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
        if (!window.navigator.onLine) {
          await router.replace('/500')
        }
        return Promise.reject(error)
      },
    )
  }

  // * 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object })
  }

  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object)
  }

  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object)
  }

  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, data: params, ..._object }) // data是以JSON传参,params是问号后面带参
  }
}

export default new RequestHttp(config)
