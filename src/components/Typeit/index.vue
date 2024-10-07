<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import TypeIt from 'typeit'
import type { El } from 'typeit/dist/types'
import type { Options as TypeItOptions } from 'typeit'
import type { PropType } from 'vue'

// 打字机效果组件（配置项详情请查阅 https://www.typeitjs.com/docs/vanilla/usage#options）
export default defineComponent({
  name: 'TypeIt',
  props: {
    options: {
      type: Object as PropType<TypeItOptions>,
      default: () => ({} as TypeItOptions),
    },
  },
  setup(props, { expose }) {
    /**
     * 输出错误信息
     * @param message 错误信息
     */
    function throwError(message: string) {
      throw new TypeError(message)
    }

    /**
     * 获取浏览器默认语言
     */
    function getBrowserLanguage() {
      return navigator.language
    }

    const typedItRef = ref<HTMLElement | null>(null)

    onMounted(() => {
      const $typed = typedItRef.value?.querySelector('.type-it') as El

      if (!$typed) {
        const errorMsg = getBrowserLanguage() === 'zh-CN'
          ? '请确保有且只有一个具有class属性为 \'type-it\' 的元素'
          : 'Please make sure that there is only one element with a class attribute of \'type-it\''
        throwError(errorMsg)
      }

      const typeIt = new TypeIt($typed, props.options).go()

      expose({
        typeIt,
      })
    })

    return {
      typedItRef,
    }
  },
})
</script>

<template>
  <div ref="typedItRef">
    <slot>
      <span class="type-it" />
    </slot>
  </div>
</template>
