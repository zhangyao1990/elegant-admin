<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

defineOptions({
  name: 'CardData',
})

interface CardData {
  key: string
  title: string
  value: number
  unit: string
  color: {
    start: string
    end: string
  }
  icon: string
}

const cardData = computed<CardData[]>(() => [
  {
    key: 'visitCount',
    title: '访问量',
    value: 5188,
    unit: '',
    color: {
      start: '#ec4786',
      end: '#b955a4',
    },
    icon: 'ant-design:bar-chart-outlined',
  },
  {
    key: 'turnover',
    title: '成交额',
    value: 6188,
    unit: '$',
    color: {
      start: '#865ec0',
      end: '#5144b4',
    },
    icon: 'ant-design:money-collect-outlined',
  },
  {
    key: 'downloadCount',
    title: '下载量',
    value: 718888,
    unit: '',
    color: {
      start: '#56cdf3',
      end: '#719de3',
    },
    icon: 'carbon:document-download',
  },
  {
    key: 'dealCount',
    title: '成交量',
    value: 5173,
    unit: '',
    color: {
      start: '#fcbc25',
      end: '#f68057',
    },
    icon: 'ant-design:trademark-circle-outlined',
  },
])

interface GradientBgProps {
  gradientColor: string
}

const [DefineGradientBg, GradientBg] = createReusableTemplate<GradientBgProps>()

function getGradientColor(color: CardData['color']) {
  return `linear-gradient(to bottom right, ${color.start}, ${color.end})`
}
</script>

<template>
  <div>
    <!-- define component start: GradientBg -->
    <DefineGradientBg v-slot="{ $slots, gradientColor }">
      <div class="rd-8px px-16px pb-4px pt-8px text-white" :style="{ backgroundImage: gradientColor }">
        <component :is="$slots.default" />
      </div>
    </DefineGradientBg>
    <!-- define component end: GradientBg -->
    <Grid ref="gridRef" :collapsed="false" :gap="[10, 10]" :cols="{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }">
      <GridItem v-for="(item, index) in cardData" :key="index" :index="index">
        <GradientBg :gradient-color="getGradientColor(item.color)" class="flex-1">
          <h3 class="text-16px">
            {{ item.title }}
          </h3>
          <div class="flex justify-between pt-12px">
            <SvgIcon :name="item.icon" class="text-32px" />
            <CountTo
              :prefix="item.unit"
              :start-value="1"
              :end-value="item.value"
              class="text-30px text-white dark:text-dark"
            />
          </div>
        </GradientBg>
      </GridItem>
    </Grid>
  </div>
</template>
