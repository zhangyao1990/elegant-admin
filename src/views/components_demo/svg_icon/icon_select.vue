<script setup lang="ts">
const iconVal = ref<string>('')
</script>

<template>
  <div class="flex" flex-1 flex-col>
    <PageHeader title="IconSelect组件" content="Icon图标选择器" />
    <PageMain>
      <IconSelect v-model="iconVal" />
    </PageMain>
  </div>
</template>
