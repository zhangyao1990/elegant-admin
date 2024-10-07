<script setup lang="ts">
defineOptions({
  name: 'PageMain',
})

const props = withDefaults(
  defineProps<{
    title?: string
    collaspe?: boolean
    height?: string
    background?: string
    padding?: string
  }>(),
  {
    title: '',
    collaspe: false,
    height: '',
    background: '',
    padding: '10px',
  },
)

const titleSlot = !!useSlots().title

const isCollaspe = ref(props.collaspe)
function unCollaspe() {
  isCollaspe.value = false
}
</script>

<template>
  <div
    class="page-main relative mx-8px mt-8px flex flex-1 flex-col rounded-8px transition-background-color-300" :class="{
      'of-hidden': isCollaspe,
    }" :style="{
      height: isCollaspe ? height : '',
      backgroundColor: background ? background : 'var(--g-container-bg)',
      padding,
    }"
  >
    <div v-if="titleSlot || title" class="title-container border-b-1 border-b-[var(--g-bg)] border-b-solid px-5 py-4 transition-border-color-300">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="main-container">
      <slot />
    </div>
    <div v-if="isCollaspe" class="collaspe absolute bottom-0 w-full cursor-pointer from-transparent to-[var(--g-container-bg)] bg-gradient-to-b pb-2 pt-10 text-center" @click="unCollaspe">
      <SvgIcon name="ep:arrow-down" class="text-xl op-30 transition-opacity hover:op-100" />
    </div>
  </div>
</template>
