<script setup lang="ts">
import useKeepAliveStore from '@/store/modules/keepAlive'

defineOptions({
  name: 'TabDemoNested2',
})

const keepAliveStore = useKeepAliveStore()
</script>

<template>
  <div>
    <PageMain>
      <div>层级：1-1</div>
      <RouterView v-slot="{ Component }">
        <KeepAlive :include="keepAliveStore.list">
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </PageMain>
  </div>
</template>
