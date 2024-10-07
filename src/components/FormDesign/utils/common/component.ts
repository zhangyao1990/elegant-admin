import {
  type AsyncComponentLoader,
  type Component,
  defineAsyncComponent,
} from 'vue'

/*
 * 异步加载组件
 * @param loader
 * @param loadingComponent
 * @returns
 */
export function loadAsyncComponent(loader: AsyncComponentLoader<any>,
  loadingComponent?: Component): any {
  return defineAsyncComponent({
    loader,
    loadingComponent,
    delay: 80,
  })
}
