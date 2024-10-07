<!--
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-03-01 09:03:25
 * @LastEditTime: 2024-06-12 19:24:30
 * @LastEditors: zhangyao
-->
<script setup lang="ts">
import Logo from '../Logo/index.vue'
import ToolbarRightSide from '../Topbar/Toolbar/rightSide.vue'
import HeaderMenu from '../HeaderMenu/index.vue'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'LayoutHeader',
})

const settingsStore = useSettingsStore()
</script>

<template>
  <Transition name="header">
    <header v-if="settingsStore.mode === 'pc' && settingsStore.settings.menu.menuMode === 'head'">
      <div class="header-container">
        <div class="main">
          <Logo class="title" />
          <HeaderMenu class="header-menu" />
        </div>
        <ToolbarRightSide />
      </div>
    </header>
  </Transition>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1200;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--g-header-height);
  padding: 0 20px;
  margin: 0 auto;
  color: var(--g-header-color);
  background: var(--g-header-bg);
  box-shadow: -1px 0 0 0 var(--g-border-color), 1px 0 0 0 var(--g-border-color), 0 1px 0 0 var(--g-border-color);
  transition: background-color 0.3s;

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    .main {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      align-items: center;
      height: 100%;
    }
  }

  :deep(a.title) {
    position: relative;
    width: inherit;
    height: inherit;
    padding: inherit;
    background-color: inherit;

    .logo {
      width: initial;
      height: 40px;
    }

    span {
      font-size: 20px;
      color: var(--g-header-color);
      letter-spacing: 1px;
    }
  }
}

// 头部动画
.header-enter-active,
.header-leave-active {
  transition: transform 0.3s;
}

.header-enter-from,
.header-leave-to {
  transform: translateY(calc(var(--g-header-height) * -1));
}
</style>
