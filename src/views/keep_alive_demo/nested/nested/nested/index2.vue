<script setup lang="ts">
defineOptions({
  name: 'TabDemoNestedTest2',
})

const val = ref('')
</script>

<template>
  <div>
    <PageMain>
      <div>层级 1-1-2</div>
      <ElInput v-model="val" />
    </PageMain>
  </div>
</template>
