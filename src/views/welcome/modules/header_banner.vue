<script setup lang="ts">
import useUserStore from '@/store/modules/user'

defineOptions({
  name: 'HeaderBanner',
})
const userStore = useUserStore()
</script>

<template>
  <div>
    <div>
      <div class="flex" items-start>
        <div class="h-100px w-100px rounded-100px bg-#d4d4d8">
          <img class="h-100px w-100px rounded-100px" :src="userStore.avatar" alt="">
        </div>
        <div class="mt-2 flex flex-col justify-center md:ml-6 md:mt-0">
          <h1 class="text-20px">
            {{ $t('home.greeting', { userName: userStore.account }) }}
          </h1>
          <span class="text-emphasis text-16px text-#999 leading-30px">{{ $t('home.weatherDesc') }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
