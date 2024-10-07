<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import Alert from '../modules/alert.vue'

function open(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="flex" flex-1 flex-col>
    <Alert />
    <PageHeader title="拆分面板">
      <template #content>
        <p style="margin-bottom: 0;">
          安装命令：<ElTag>pnpm add splitpanes</ElTag> <ElTag>pnpm add @types/splitpanes -D</ElTag>
        </p>
      </template>
      <ElButton @click="open('https://github.com/antoniandre/splitpanes')">
        <template #icon>
          <SvgIcon name="ep:link" />
        </template>
        访问 splitpanes
      </ElButton>
    </PageHeader>
    <PageMain>
      <Splitpanes class="default-theme">
        <Pane min-size="20">
          <div class="h-full w-full flex items-center justify-center bg-#67C23A text-#ffffff">
            A
          </div>
        </Pane>
        <Pane>
          <Splitpanes horizontal>
            <Pane>
              <div class="h-full w-full flex items-center justify-center bg-#E6A23C text-#fff">
                B
              </div>
            </Pane>
            <Pane>
              <div class="h-full w-full flex items-center justify-center bg-#F56C6C text-#fff">
                C
              </div>
            </Pane>
            <Pane>
              <div class="h-full w-full flex items-center justify-center bg-#d1edc4 text-#fff">
                D
              </div>
            </Pane>
          </Splitpanes>
        </Pane>
        <Pane>
          <div class="h-full w-full flex items-center justify-center bg-#6831FF text-#fff">
            F
          </div>
        </Pane>
      </Splitpanes>
    </PageMain>
  </div>
</template>

<style lang="scss" scoped>
.default-theme {
  height: calc(100vh - 400px);
}
</style>
