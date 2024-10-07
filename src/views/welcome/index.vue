<!--
 * @Description:
 * @Author: zhangyao
 * @Date: 2024-06-13 09:05:48
 * @LastEditTime: 2024-06-17 16:15:57
 * @LastEditors: zhangyao
-->
<script setup lang="ts">
import CardData from './modules/card_data.vue'
import LineChart from './modules/line_chart.vue'
import PieChart from './modules/pie_chart.vue'
import ProjectNews from './modules/project_news.vue'
import TableStatistics from './modules/table_statistics.vue'
</script>

<template>
  <div class="pt-16px">
    <!-- <PageHeader>
      <template #title>
        <HeaderBanner />
      </template>
    </PageHeader> -->
    <div class="mx-8px mb-8px">
      <CardData />
    </div>
    <div class="mx-8px mb-8px">
      <Grid :collapsed="false" :gap="[10, 10]" :cols="{ xs: 1, sm: 1, md: 1, lg: 3, xl: 3 }">
        <GridItem :span="2">
          <LineChart />
        </GridItem>
        <GridItem :span="1">
          <PieChart />
        </GridItem>
      </Grid>
    </div>
    <div class="mx-8px">
      <Grid :collapsed="false" :gap="[10, 10]" :cols="{ xs: 1, sm: 1, md: 1, lg: 3, xl: 3 }">
        <GridItem :span="2">
          <TableStatistics />
        </GridItem>
        <GridItem :span="1">
          <ProjectNews />
        </GridItem>
      </Grid>
    </div>
  </div>
</template>

  <style lang="scss" scoped>
  .text-emphasis {
    text-emphasis-style: "❤";
  }

  .ecology {
    --at-apply: flex-1 m-0;

    :deep(.title-container) {
      --at-apply: flex items-center justify-between flex-wrap gap-4;

      .title-info {
        --at-apply: flex items-center gap-4;

        img {
          --at-apply: block w-12 h-12;
        }

        h1 {
          --at-apply: m-0 text-2xl;
        }

        h2 {
          --at-apply: m-0 text-base text-stone-5 font-normal;
        }
      }
    }
  }

  .question {
    .answer {
      --at-apply: m-0 pl-6 text-stone-5;

      li {
        --at-apply: mb-2 lh-6 last:mb-0;
      }

      span {
        --at-apply: text-stone-7 dark:text-stone-3 font-bold;
      }
    }
  }
  </style>
