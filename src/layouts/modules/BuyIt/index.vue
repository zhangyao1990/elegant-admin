<script setup lang="ts">
import { ElNotification } from 'element-plus'
import eventBus from '@/utils/eventBus'

defineOptions({
  name: 'BuyIt',
})

const isActived = ref(true)
setTimeout(() => {
  isActived.value = false
}, 5000)

const UIdialog = ref(false)
function switchUI() {
  UIdialog.value = true
}

function open(url: string) {
  window.open(url, '_blank')
}

onMounted(() => {
  eventBus.on('global-ui-component-switch', () => switchUI())
})

onUnmounted(() => {
  ElNotification.closeAll()
})
</script>

<template>
  <div class="buy-it" :class="{ actived: isActived }">
    <div class="item" @click="switchUI">
      <SvgIcon name="icon-park-twotone:components" />
      <span class="title">切换<br>组件库</span>
      <HDialog v-model="UIdialog" title="切换组件库" overlay>
        <div class="rounded-2 bg-green/20 px-4 py-2 text-sm/6 c-green-6">
          <p class="my-1">
            为了视觉风格统一，与 Element Plus 组件库进行了解耦，意味着可以轻松将 Element Plus 组件库替换成其他 UI 组件库，并且不会影响框架原本的功能。
          </p>
          <p class="my-1">
            目前只提供了 Element Plus 组件库的示例，后续会陆续增加其他 UI 组件库的示例。
          </p>
        </div>
      </HDialog>
    </div>
    <div class="item" @click="open('https://github.com/zhangyao1990/elegant-admin')">
      <SvgIcon name="ri:code-s-slash-line" />
      <span class="title">下载<br>模版</span>
    </div>
    <div class="item" @click="open(`https://zhangyao1990.github.io/elegant-admin-docs`)">
      <SvgIcon name="ri:book-read-line" />
      <span class="title">开发<br>文档</span>
    </div>
    <div class="item" @click="open(`https://zhangyao1990.github.io/elegant-admin`)">
      <SvgIcon name="ri:message-2-line" />
      <span class="title">技术<br>支持</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buy-it {
  position: fixed;
  top: 50%;
  right: -58px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 70px;
  transition: right 0.3s;
  transform: translateY(-50%);

  &.actived,
  &:hover {
    right: 0;
  }

  .item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    height: 70px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid #fff;
    opacity: 0.7;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }

    &:first-child {
      border-top-left-radius: 5px;
    }

    &:last-child {
      border-bottom: 0;
      border-bottom-left-radius: 5px;
    }

    &:nth-child(1) {
      --at-apply: bg-#007AFF;
    }

    &:nth-child(2) {
      --at-apply: bg-#a78bfa;
    }

    &:nth-child(3) {
      --at-apply: bg-#fecdd3;
    }

    &:nth-child(4) {
      --at-apply: bg-#d4d4d8;
    }

    i {
      display: block;
      margin: 0 auto;
      font-size: 20px;
    }

    .title {
      display: inline-block;
      font-size: 12px;
    }
  }
}
</style>
