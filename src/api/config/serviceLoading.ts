import { ElLoading } from 'element-plus'

/* 全局 loading(服务方式调用) */
let loadingInstance: ReturnType<typeof ElLoading.service>

function startLoading() {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: '数据加载中，请稍候...',
    background: 'rgba(0, 0, 0, 0.5)',
  })
}
function endLoading() {
  loadingInstance.close()
}

// 那么 showFullScreenLoading() tryHideFullScreenLoading() 要做的事就是将同一时刻的请求合并。
// 声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
// 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) {
    return
  }
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
