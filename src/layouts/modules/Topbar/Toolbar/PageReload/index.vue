<script setup lang="ts">
defineOptions({
  name: 'PageReload',
})

const mainPage = useMainPage()
</script>

<template>
  <span class="mx-6px flex-center transform cursor-pointer rounded-100px bg-[var(--g-bg-color-secondary)] p-8px hover:bg-[var(--g-bg-color-secondary-hover)]" @click="mainPage.reload()">
    <SvgIcon class="text-14px" name="iconoir:refresh-double" />
  </span>
</template>
