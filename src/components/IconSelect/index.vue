<script setup lang="ts">
import { cloneDeep } from 'lodash-es'
import type { CSSProperties } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
import { getIconList } from './select'

defineOptions({
  name: 'IconSelect',
})

type ParameterCSSProperties = (item?: string) => CSSProperties | undefined

const visible = ref(false)
const iconList = ref<any>(getIconList())
const currentActiveType = ref('ep:')
// 深拷贝图标数据，前端做搜索
const copyIconList: any = cloneDeep(iconList.value)
const pageSize = ref(80)
const currentPage = ref(1)
const modelValue = defineModel<any>({
  default: '',
})
// 搜索条件
const filterValue = ref('')

const tabsList = [
  {
    label: 'Element Plus Icons',
    name: 'ep:',
  },
  {
    label: '本地图标',
    name: 'local:',
  },
  {
    label: 'Font Awesome Icons',
    name: 'fa-solid:',
  }, {
    label: 'Material Design Icons',
    name: 'mdi:',
  },
  {
    label: 'Remix Icons',
    name: 'ri:',
  }, {
    label: 'Ant-design Icons',
    name: 'ant-design:',
  }, {
    label: 'Streamline Icons',
    name: 'streamline:',
  },
]
watch(
  () => {
    return filterValue.value
  },
  () => {
    currentPage.value = 1
  },
)
function handleInput(e: any) {
  modelValue.value = e
}
const pageList = computed(() => {
  if (currentPage.value === 1) {
    return copyIconList[currentActiveType.value]
      .filter((v: any) => v.includes(filterValue.value))
      .slice(currentPage.value - 1, pageSize.value)
  }
  else {
    return copyIconList[currentActiveType.value]
      .filter((v: any) => v.includes(filterValue.value))
      .slice(pageSize.value * (currentPage.value - 1), pageSize.value * (currentPage.value - 1) + pageSize.value)
  }
})

const iconItemStyle = computed((): ParameterCSSProperties => {
  return (item) => {
    if (modelValue.value === currentActiveType.value + item || modelValue.value === item) {
      return {
        borderColor: 'var(--el-color-primary)',
        color: 'var(--el-color-primary)',
      }
    }
  }
})

function handleClick({ props }: any) {
  currentPage.value = 1
  currentActiveType.value = props.name
}

function onChangeIcon(item: any) {
  if (currentActiveType.value === 'local:') {
    modelValue.value = item
  }
  else {
    modelValue.value = currentActiveType.value + item
  }

  visible.value = false
}
const popoverRef = ref()
function onClickOutside(e: any) {
  if (
    visible.value
    && !unref(popoverRef).popperRef.contentRef.contains(e.target)
  ) {
    visible.value = false
  }
}
function onCurrentChange(page: any) {
  currentPage.value = page
}
</script>

<template>
  <div class="selector w-450px">
    <el-input v-model="modelValue" @input="handleInput">
      <template #append>
        <el-popover
          ref="popoverRef"
          :width="450"
          trigger="click"
          popper-class="pure-popper"
          :popper-options="{
            placement: 'auto',
          }"
          :visible="visible"
        >
          <template #reference>
            <div class="h-[32px] w-[40px] flex cursor-pointer items-center justify-center" @click="visible = !visible">
              <el-icon v-if="modelValue" class="icon text-18px">
                <svg-icon :name="modelValue" />
              </el-icon>
              <el-icon v-else class="icon text-18px">
                <svg-icon name="ep:bottom" />
              </el-icon>
            </div>
          </template>
          <el-input v-model="filterValue" class="mb-10px py-2" placeholder="搜索图标" clearable />
          <el-divider border-style="dashed" />

          <el-tabs v-model="currentActiveType" @tab-click="handleClick">
            <el-tab-pane v-for="(pane, index) in tabsList" :key="index" :label="pane.label" :name="pane.name">
              <el-divider class="tab-divider" border-style="dashed" />
              <el-scrollbar height="320px">
                <ul class="ml-2 flex flex-wrap px-2">
                  <li
                    v-for="(item, key) in pageList"
                    :key="key"
                    v-click-outside="onClickOutside"
                    :title="item"
                    class="icon-item mr-2 mt-1 w-[1/10] flex cursor-pointer items-center justify-center border border-solid p-2"
                    :style="iconItemStyle(item)"
                    @click="onChangeIcon(item)"
                  >
                    <el-icon class="icon">
                      <template v-if="currentActiveType === 'local:'">
                        <svg-icon :name="item" />
                      </template>
                      <template v-else>
                        <svg-icon :name="currentActiveType + item" />
                      </template>
                    </el-icon>
                  </li>
                </ul>
              </el-scrollbar>
            </el-tab-pane>
          </el-tabs>
          <el-divider border-style="dashed" />

          <el-pagination
            size="small"
            :total="copyIconList[currentActiveType]?.length"
            :page-size="pageSize"
            :current-page="currentPage"
            background
            layout="prev, pager, next"
            class="h-10 flex items-center justify-center"
            @current-change="onCurrentChange"
          />
        </el-popover>
      </template>
    </el-input>
  </div>
</template>

<style lang="scss" scoped>
.el-divider--horizontal {
  margin: 1px auto !important;
}

.tab-divider.el-divider--horizontal {
  margin: 0 !important;
}

.icon-item {
  font-size: 24px;
  border-radius: 6px;

  &:hover {
    color: var(--el-color-primary);
    border-color: var(--el-color-primary);
    transition: all 0.4s;
    transform: scaleX(1.05);
  }
}

:deep(.el-tabs__active-bar) {
  background-color: transparent !important;
}

:deep(.el-tabs__nav-next) {
  font-size: 15px;
  line-height: 32px;
  box-shadow: -5px 0 5px -6px #ccc;
}

:deep(.el-tabs__nav-prev) {
  font-size: 15px;
  line-height: 32px;
  box-shadow: 5px 0 5px -6px #ccc;
}

:deep(.el-input-group__append) {
  padding: 0;
  background-color: var(--g-container-bg);
}

:deep(.el-tabs__item) {
  height: 30px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 30px;
}

:deep(.el-tabs__header),
:deep(.el-tabs__nav-wrap) {
  position: static;
  margin: 5px 0;
}
</style>
