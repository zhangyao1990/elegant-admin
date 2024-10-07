<!--
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-07-30 19:33:47
 * @LastEditTime: 2024-07-30 19:36:08
 * @LastEditors: zhangyao
-->
<script lang="ts" setup>
defineOptions({
  name: 'ProTitle',
})
defineProps({
  text: {
    type: String,
    required: true,
  },
  isDivider: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="flex items-center">
    <div class="title-left" />
    <div class="ml-2 font-medium">
      {{ text }}
    </div>
  </div>
  <el-divider class="my-2" />
</template>

<style scoped lang="scss">
.title-left {
  width: 8px;
  height: 19px;
  background-color: var(--el-color-primary-light-1);
  border-radius: 10px;
}
</style>
