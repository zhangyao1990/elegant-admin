<script setup lang="ts">
defineOptions({
  name: 'TabDemoNestedTest',
})

const val = ref('')
</script>

<template>
  <div>
    <PageMain>
      <div class="mb-10px">
        层级 1-1-1
      </div>
      <ElInput v-model="val" />
    </PageMain>
  </div>
</template>
