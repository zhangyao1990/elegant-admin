<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'ColorScheme',
})
interface ExtendedPropertyIndexedKeyframes extends PropertyIndexedKeyframes {
  clipPath?: string[]
}
interface ExtendedKeyframeAnimationOptions extends AnimationEffectTiming {
  pseudoElement?: string
}
const settingsStore = useSettingsStore()

function toggleColorScheme(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const { startViewTransition } = useViewTransition(() => {
    settingsStore.currentColorScheme && settingsStore.setColorScheme(settingsStore.currentColorScheme === 'dark' ? 'light' : 'dark')
  })
  startViewTransition()?.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    const animationKeyframes: ExtendedPropertyIndexedKeyframes = {
      clipPath: settingsStore.settings.app?.colorScheme === 'dark' ? [...clipPath].reverse() : clipPath,
    }
    const animationOptions: ExtendedKeyframeAnimationOptions = {
      duration: 500,
      easing: 'ease-out',
      pseudoElement: settingsStore.settings.app.colorScheme !== 'dark' ? '::view-transition-new(root)' : '::view-transition-old(root)',
    }
    document.documentElement.animate(
      animationKeyframes,
      animationOptions,
    )
  })
}
</script>

<template>
  <HDropdown class="flex-center cursor-pointer px-2 py-1">
    <SvgIcon
      :name="{
        '': 'codicon:color-mode',
        'light': 'ri:sun-line',
        'dark': 'ri:moon-line',
      }[settingsStore.settings.app.colorScheme]" @click="toggleColorScheme"
    />
    <template #dropdown>
      <HTabList
        v-model="settingsStore.settings.app.colorScheme"
        :options="[
          { icon: 'ri:sun-line', label: '', value: 'light' },
          { icon: 'ri:moon-line', label: '', value: 'dark' },
          { icon: 'codicon:color-mode', label: '', value: '' },
        ]"
        class="m-3"
      />
    </template>
  </HDropdown>
</template>
