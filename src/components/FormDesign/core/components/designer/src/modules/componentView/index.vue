<script lang="ts" setup>
import draggable from 'vuedraggable'
import { computed, inject, ref } from 'vue'
import type { Revoke } from '../../../../../../utils'
import { findSchemaInfoById, generateNewSchema, pluginManager } from '../../../../../../utils'
import type { ComponentSchema, Designer, PageSchema } from '../../../../../../core'
import type { DesignerProps } from '../../types'

import EIcon from '../../../../icon'

const Input = pluginManager.getComponent('input')
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer
const revoke = inject('revoke') as Revoke
const designerProps = inject('designerProps') as Ref<DesignerProps>
const sourceSchema = pluginManager.getComponentSchemaGroups()
const keyword = ref('')
const allSchema = {
  title: '全部',
  list: [],
}
const activeItem = ref(allSchema)

/**
 * 计算组件分类列表
 */
const getSchemaTypeList = computed(() => {
  return [
    allSchema,
    ...sourceSchema.value,
  ]
})

/**
 * 计算当前需要展示的组件列表
 */
const getSourceSchemaList = computed(() => {
  let sourceSchemaList: ComponentSchema[] = activeItem.value.list
  if (activeItem.value.title === '全部') {
    const sourceSchemaAllList = sourceSchema.value.map((item) => {
      return item.list
    })
    sourceSchemaList = ([] as ComponentSchema[]).concat(...sourceSchemaAllList)
  }
  return sourceSchemaList.filter(item => item.label?.includes(keyword.value)
    && (!designerProps.value.formMode || item.type !== 'form'))
})

function handelChecked(item: any) {
  activeItem.value = item
}

/**
 * 点击添加节点
 * @param schema
 */
function handleClick(schema: ComponentSchema) {
  const data = findSchemaInfoById(pageSchema.schemas, designer.state.checkedNode?.id ?? 'root')
  if (!data) {
    return false
  }
  let { list, schema: checkedSchema, index } = data

  // 如果选中元素存在children字段，则添加到children中
  if (checkedSchema.children && !pluginManager.getComponentConfingByType(checkedSchema.type)?.editConstraints?.childImmovable) {
    list = checkedSchema.children
    index = checkedSchema.children.length - 1
  }

  const newSchema = generateNewSchema(schema)

  list.splice(index + 1, 0, newSchema)
  designer.setCheckedNode(newSchema)
  revoke.push(pageSchema.schemas, '插入组件')
}
</script>

<template>
  <div class="elegant-component-view flex flex-col">
    <div class="flex flex-1 overflow-auto">
      <!-- 分类选项 start  -->
      <div class="elegant-tabs-box">
        <div
          v-for="(item, index) in getSchemaTypeList" :key="index"
          class="elegant-tab cursor-pointer truncate" :class="{ checked: activeItem.title === item.title }" :title="item.title" @click="handelChecked(item)"
        >
          {{ item.title }}
        </div>
      </div>
      <!-- 分类选项 end  -->

      <div class="box-border h-full flex-1 overflow-auto py-2">
        <!-- 搜素框 start -->
        <div class="elegant-search-box px-10px py-6px">
          <Input v-model="keyword" v-model:value="keyword" placeholder="搜索组件" clearable allow-clear>
            <template #prefix>
              <EIcon class="text-$elegant-text-helper" name="icon--elegant--search-rounded" />
            </template>
          </Input>
        </div>
        <!-- 搜素框 end -->
        <draggable
          v-model="getSourceSchemaList" v-bind="{
            group: { name: 'edit-draggable', pull: 'clone', put: false },
            sort: false,
            animation: 180,
            ghostClass: 'moving',
          }" :clone="generateNewSchema" item-key="id" class="grid grid-cols-[auto_auto] gap-2 px-10px"
        >
          <template #item="{ element }">
            <div class="elegant-component-item flex items-center truncate" @click="handleClick(element)">
              <EIcon :name="pluginManager.getComponentConfingByType(element.type).icon ?? ''" />
              <div class="elegant-component-label w-0 flex-1 truncate">
                {{ element.label }}
              </div>
            </div>
          </template>
        </draggable>
        <div v-show="!getSourceSchemaList.length" class="pt-42px text-center text-gray-400">
          没有查询到的组件
        </div>
      </div>
    </div>
  </div>
</template>