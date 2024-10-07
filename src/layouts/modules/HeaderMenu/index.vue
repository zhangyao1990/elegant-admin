<script setup lang="ts">
import useMenuStore from '@/store/modules/menu'

defineOptions({
  name: 'HeaderMenu',
})

const menuStore = useMenuStore()

const { switchTo } = useMenu()
</script>

<template>
  <div class="menu-container">
    <!-- 顶部模式 -->
    <div class="h-full flex of-hidden transition-all">
      <el-tabs
        v-model="menuStore.actived" @tab-click="(pane) => {
          console.log('index', pane.index)
          switchTo(Number(pane.index))
        }"
      >
        <el-tab-pane v-for="(item, index) in menuStore.allMenus" :key="index" :name="index">
          <template #label>
            <div class="inline-flex flex-1 items-center justify-center gap-1">
              <SvgIcon v-if="item.meta?.icon" :name="item.meta?.icon" :size="20" async />
              <span class="w-full flex-1 truncate text-15px transition-height transition-opacity transition-width">
                {{ typeof item.meta?.title === 'function' ? item.meta?.title() : item.meta?.title }}
              </span>
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  flex: 1 1 0%;
  height: 100%;
  margin: 0 30px;
  overflow: hidden;
  // mask-image: linear-gradient(to right, transparent, #000 20px, #000 calc(100% - 20px), transparent);

  :deep(.el-tabs) {
    width: 100%;

    .el-tabs__header {
      height: 100%;
      margin: 0;

      .el-tabs__nav-wrap {
        height: 100%;

        &::after {
          height: 0;
        }

        .el-tabs__nav-prev {
          display: flex;
          align-items: center;
          height: 100%;
          font-size: 15px;
          box-shadow: 5px 0 10px -5px #e5e5e5;
        }

        .el-tabs__nav-next {
          display: flex;
          align-items: center;
          height: 100%;
          font-size: 15px;
          box-shadow: -5px 0 10px -5px #e5e5e5;
        }

        .el-tabs__nav-scroll {
          display: flex;
          align-items: center;
          height: 100%;

          .el-tabs__nav {
            align-items: center;
            height: 100%;

            .el-tabs__item {
              padding: 0 15px;
            }
          }
        }
      }
    }
  }

  :deep(.el-tabs__active-bar) {
    background-color: transparent !important;
  }
}
</style>
