<script setup lang="ts">
defineOptions({
  name: 'Auth',
})

const props = defineProps<{
  value: string | string[]
}>()

function check() {
  return useAuth().auth(props.value)
}
</script>

<template>
  <span>
    <slot v-if="check()" />
    <slot v-else name="no-auth" />
  </span>
</template>
