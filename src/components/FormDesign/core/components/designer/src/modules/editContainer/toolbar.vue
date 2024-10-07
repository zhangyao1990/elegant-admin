<script lang="ts" setup>
import { computed, inject, ref } from 'vue'
import type {
  Revoke } from '../../../../../../utils'
import {
  convertKFormData,
  deepCompareAndModify,
  pluginManager,
} from '../../../../../../utils'
import { useStore } from '../../../../../../hooks'
import type { Designer, PageSchema } from '../../../../../types/elegant-designer'
import EIcon from '../../../../icon'
import EPreviewJson from './previewJson.vue'

const Select = pluginManager.getComponent('select')

const { canvasScale, disabledZoom } = useStore()
const checkedKey = ref('pc')
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer
const revoke = inject('revoke') as Revoke
const previewJson = ref<InstanceType<typeof EPreviewJson> | null>(null)
const deviceOptions = [
  {
    icon: 'icon--elegant--computer-outline-rounded',
    title: 'pc',
    key: 'pc',
  },
  {
    icon: 'icon--elegant--tablet-android-outline-rounded',
    title: '平板',
    key: 'pad',
  },
  {
    icon: 'icon--elegant--phone-iphone-outline-sharp',
    title: '手机',
    key: 'mobile',
  },
]

const actionOptions = computed(() => {
  return [
    {
      icon: 'icon--elegant--code',
      title: '查看数据',
      on: () => handlePreview(),
    },
    // {
    //   icon: 'icon--elegant--exit-to-app-rounded',
    //   title: '导入数据',
    //   on: handleOpenFileSelector,
    // },
    {
      icon: 'icon--elegant--trash',
      title: '清空',
      on: handleReset,
    },
    {
      icon: 'icon--elegant--undo',
      title: '撤销',
      on: handleUndo,
      disabled: !revoke.recordList.value.length,
      divider: true,
    },
    {
      icon: 'icon--elegant--redo',
      title: '重做',
      on: handleRedo,
      disabled: !revoke.undoList.value.length,
    },
  ]
})

const fileRef = ref<HTMLInputElement | null>(null)
const canvasScaleComuted = computed({
  get() {
    return `${(canvasScale.value * 100).toFixed(0)}%`
  },
  set(value) {
    const percentage = Number.parseFloat(value)
    canvasScale.value = percentage / 100
  },
})

const canvasScaleOptions = [
  {
    label: '60%',
    value: '60%',
  },
  {
    label: '80%',
    value: '80%',
  },
  {
    label: '100%',
    value: '100%',
  },
  {
    label: '120%',
    value: '120%',
  },
  {
    label: '140%',
    value: '140%',
  },
]

/**
 * 撤销操作
 */
function handleUndo() {
  const componentSchema = revoke.undo()
  if (!componentSchema) {
    return
  }
  deepCompareAndModify(pageSchema.schemas, componentSchema)
  designer.setCheckedNode(pageSchema.schemas[0])
}

/**
 * 重做操作
 */
function handleRedo() {
  const componentSchema = revoke.redo()
  if (!componentSchema) {
    return
  }
  deepCompareAndModify(pageSchema.schemas, componentSchema)
  designer.setCheckedNode(pageSchema.schemas[0])
}

/**
 * 重置页面数据
 */
function handleReset() {
  designer.reset()
}

// 预览数据
function handlePreview() {
  previewJson.value!.handleOpen()
}

/**
 * 打开文件选择器
 */
// eslint-disable-next-line unused-imports/no-unused-vars
function handleOpenFileSelector() {
  fileRef.value?.click()
}

// 选择文件
function handleFileSelected(e) {
  const file = e.target.files?.[0]
  if (!file) {
    return
  }
  e.target.value = null

  // 通过json文件导入
  const reader = new FileReader()
  reader.readAsText(file)
  reader.onload = (res) => {
    handleImporttData(res.target?.result as string)
  }
}

/**
 * 导入数据
 */
function handleImporttData(content?: string) {
  // 导入JSON
  try {
    let schema = JSON.parse(content ?? '')
    if (!schema.schemas) {
      schema = convertKFormData(schema)
    }

    // 调用 deepCompareAndModify 函数比较 pageSchema 和传入的 schema，进行修改
    deepCompareAndModify(pageSchema, schema)
  }
  catch (error) {
    console.error(error)
  }
}

/**
 * 设置画布宽高
 * @param type
 */
function handleSetCanvas(type: string) {
  designer.handleToggleDeviceMode(type)
  checkedKey.value = type
  const canvasConfigs = {
    pc: {},
    pad: {
      width: '780px',
      mode: type,
    },
    mobile: {
      width: '390px',
      mode: type,
    },
  }

  pageSchema.canvas = canvasConfigs[type]
}
</script>

<template>
  <!-- 工具条 start  -->
  <div class="elegant-edit-toolbar flex items-center justify-between px-2">
    <!-- 操作按钮 start  -->
    <div class="h-full flex flex-1 items-center">
      <template v-for="(action, index) in actionOptions" :key="index">
        <div v-if="action.divider" class="elegant-divider" />
        <div
          :title="action.title"
          class="elegant-action-item h-90% flex cursor-pointer items-center px-10px text-base"
          :class="{ disabled: action.disabled }"
          @click="action.on"
        >
          <EIcon :name="action.icon" />
        </div>
      </template>
    </div>
    <!-- 操作按钮 end  -->

    <input
      v-show="false"
      ref="fileRef"
      type="file"
      accept=".json,.txt"
      @change="handleFileSelected"
    >

    <div class="h-full flex flex-1 items-center justify-end">
      <!-- 缩放操作 start  -->
      <div v-if="!disabledZoom" class="ml-12px flex items-center">
        <div class="w-82px cursor-pointer pr-8px">
          <Select
            v-model:value="canvasScaleComuted"
            v-model="canvasScaleComuted"
            :options="canvasScaleOptions"
            size="small"
          />
        </div>
      </div>
      <!-- 缩放操作 end  -->
      <!-- 画布类型切换 start -->
      <div class="elegant-device h-28px flex items-center gap-1 border rounded-md p-2px">
        <template v-for="item in deviceOptions" :key="item.key">
          <div
            :title="item.title"
            class="elegant-device-item h-full flex cursor-pointer items-center rounded-sm px-1 text-base transition-colors"
            :class="{ checked: item.key === checkedKey }"
            @click="handleSetCanvas(item.key)"
          >
            <EIcon :name="item.icon" />
          </div>
        </template>
      </div>
      <!-- 画布类型切换 end -->
    </div>
  </div>
  <EPreviewJson ref="previewJson" />
  <!-- 工具条 end  -->
</template>
