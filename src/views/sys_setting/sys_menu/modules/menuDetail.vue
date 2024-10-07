<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { cloneDeep } from 'lodash-es'
import { addSysMenuApi, editSysMenuApi } from '../../http/sys_menu'
import { getSysResourceListApi } from '../../http/sys_resource'
import type { ColumnProps } from '@/components/ProTable/interface'

defineOptions({
  name: 'MenuDetail',
})
const props = withDefaults(
  defineProps<{
    menuTreeList?: any
  }>(),
  {
    menuTreeList: [],
  },
)
const emits = defineEmits(['success'])
const mode = ref<any>('add')
const isLoading = ref<any>(false)
const isDetail = ref<any>(false)
const menuRules = ref<any>({
  'meta.title': [{ required: true, message: '请输入显示名称' }],
  'meta.iframe': [{ required: true, message: '请输入iframe地址' }],
  'meta.link': [{ required: true, message: '请输入外链地址' }],
  'meta.type': [{ required: true, message: '请选择菜单类型' }],
  'name': [{ required: true, message: '请输入别名' }],
  'sort': [{ required: true, message: '请输入排序' }],
})
const menuOptions = ref<any>([])
const menuForm = ref<any>({})
watch(
  () => props.menuTreeList,
  (newVal) => {
    menuOptions.value = [{
      children: treeToMap(newVal),
      label: '顶级菜单',
      value: '0',
    }]
  },
  { deep: true },
)
onMounted(() => {
  init()
})
function init() {
  menuForm.value = {
    id: '',
    pid: '',
    name: '',
    path: '',
    component: '',
    redirect: '',
    sort: 1,
    meta: {
      title: '',
      icon: '',
      activeMenu: '',
      type: '',
      menu: false,
      breadcrumb: false,
      cache: false,
      threeMenu: false,
      isFull: false,
      link: '',
      iframe: '',
    },
    apiPermissionsIdList: [],
  }
  menuOptions.value = [{
    children: treeToMap(props.menuTreeList),
    label: '顶级菜单',
    value: '0',
  }]
}
// 简单化菜单
function treeToMap(tree: Record<string, any>) {
  const mapList: any = []
  tree && tree.forEach((item: any) => {
    let obj = {
      value: item.id,
      pid: item.pid,
      label: (item.meta && item.meta.title) || '',
      children: item.children && item.children.length > 0 ? treeToMap(item.children) : null,
    }
    mapList.push(obj)
  })
  return mapList
}
// 保存
const menuDetailFormRef = ref()
async function handleSave() {
  menuDetailFormRef.value.validate(async (valid: any) => {
    if (valid) {
      isLoading.value = true
      try {
        let formData = cloneDeep(menuForm.value)
        let authIds: any = []
        formData.apiPermissionsIdList && formData.apiPermissionsIdList.map((item: any) => {
          authIds.push(item.value)
        })
        formData.apiPermissionsIdList = authIds
        formData.id = !formData.id.includes('menuId-') ? formData.id : ''
        if (mode.value === 'add') {
          let res: any = await addSysMenuApi(formData)
          isLoading.value = false
          if (res.code === 200) {
            emits('success', formData)
            ElMessage.success({
              message: '操作成功!',
              showClose: true,
              duration: 1000,
            })
          }
        }
        else {
          let res: any = await editSysMenuApi(formData)
          isLoading.value = false
          if (res.code === 200) {
            emits('success', formData)
            ElMessage.success({
              message: '操作成功!',
              showClose: true,
              duration: 1000,
            })
          }
        }
      }
      catch (err) {
        console.log('err', err)
        isLoading.value = false
      }
    }
    else {
      return false
    }
  })
}
// 表单注入数据
async function acceptParams(data: any, pid: any, type = 'add') {
  mode.value = type
  isDetail.value = true
  if (type === 'add') {
    menuForm.value = Object.assign({}, data)
    menuForm.value.pid = pid
    return
  }
  menuForm.value = {
    id: data.id,
    pid,
    name: data.name,
    path: data.path,
    component: data.component,
    redirect: data.redirect,
    sort: data.sort || 1,
    meta: {
      title: data?.meta?.title,
      icon: data?.meta?.icon || '',
      activeMenu: data?.meta?.activeMenu,
      type: data?.meta?.type,
      menu: data?.meta?.menu,
      breadcrumb: data?.meta?.breadcrumb,
      cache: data?.meta?.cache,
      threeMenu: data?.meta?.threeMenu,
      isFull: data?.meta?.isFull,
      link: data?.meta?.link,
      iframe: data?.meta?.iframe,
    },
    apiPermissionsIdList: data.apiPermissions || [],
  }
  // 转换TableSelect数据格式
  let arrPermission: { value: any, label: any }[] = []
  data.apiPermissions?.forEach((item: any) => {
    arrPermission.push({
      value: item.id,
      label: item.name,
    })
  })
  menuForm.value.apiPermissionsIdList = arrPermission || []
}

// selectTable表格配置项
const tableSelectColumns = reactive<ColumnProps[]>(
  [
    { type: 'selection', fixed: 'left', width: 80 },
    { type: 'index', label: '#', width: 60 },
    { prop: 'name', label: '资源名称', minWidth: 100, search: { el: 'input' } },
  ],
)
defineExpose({
  acceptParams,
})
</script>

<template>
  <div class="mb-4 pt-2">
    <div class="px-3 py-1.2 text-16px font-500">
      {{ `${mode === 'add' ? '新增' : '编辑'}-${menuForm.meta && menuForm.meta.title}` }}
    </div>
    <div class="mx-2 mt-2">
      <el-divider border-style="dashed" class="m-0 w-full" />
    </div>
  </div>
  <div class="flex-1 overflow-auto px-4 py-2">
    <div v-if="!isDetail">
      <el-empty description="请选择左侧菜单后操作" :image-size="100" />
    </div>
    <template v-else>
      <div>
        <el-form
          ref="menuDetailFormRef"
          class="grid grid-cols-2 gap-x-20 gap-y-2"
          :model="menuForm"
          :rules="menuRules"
          label-width="120px"
          label-position="left"
        >
          <el-form-item label="菜单类型:" prop="meta.type" class="col-span-2">
            <el-radio-group
              v-model="menuForm.meta.type" @change="() => {
                menuForm.meta.iframe = null
                menuForm.meta.link = null
              }"
            >
              <el-radio-button value="menu">
                菜单
              </el-radio-button>
              <el-radio-button value="iframe">
                Iframe
              </el-radio-button>
              <el-radio-button value="link">
                外链
              </el-radio-button>
              <el-radio-button value="button">
                按钮
              </el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="menuForm.meta.type === 'iframe'" label="Iframe地址:" prop="meta.iframe">
            <el-input v-model="menuForm.meta.iframe" clearable placeholder="请输入Iframe地址" />
          </el-form-item>
          <el-form-item v-if="menuForm.meta.type === 'link'" label="外链地址:" prop="meta.link">
            <el-input v-model="menuForm.meta.link" clearable placeholder="请输入外链地址" />
          </el-form-item>
          <el-form-item label="菜单名称:" prop="meta.title">
            <el-input v-model="menuForm.meta.title" maxlength="50" clearable placeholder="菜单显示名字" />
          </el-form-item>
          <el-form-item prop="name">
            <template #label>
              <div class="flex items-center">
                别名:
                <el-tooltip
                  content="<div class='w-40'>系统唯一且与内置组件名一致，否则导致缓存失效。如类型为Iframe的菜单，别名将代替源地址显示在地址栏</span>"
                  raw-content
                >
                  <el-icon>
                    <svg-icon name="ep:question-filled" />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
            <el-input v-model="menuForm.name" maxlength="50" clearable placeholder="菜单别名" />
          </el-form-item>
          <el-form-item label="上级菜单:" prop="pid">
            <el-tree-select
              v-model="menuForm.pid"
              :data="menuOptions"
              :render-after-expand="false"
              class="w-full"
              placeholder="顶级菜单"
              clearable check-strictly show-checkbox check-on-click-node
            />
          </el-form-item>

          <el-form-item label="菜单图标:" prop="meta.icon">
            <IconSelect v-model="menuForm.meta.icon" />
          </el-form-item>
          <el-form-item label="是否缓存:" prop="meta.cache">
            <el-checkbox v-model="menuForm.meta.cache">
              是否缓存
            </el-checkbox>
          </el-form-item>
          <el-form-item label="路由地址:" prop="path">
            <el-input v-model="menuForm.path" clearable placeholder="" />
          </el-form-item>
          <el-form-item label="是否三级路由:" prop="meta.threeMenu">
            <template #label>
              <div class="flex items-center">
                是否三级路由:
                <el-tooltip content="<div class='w-40'>非特殊情况不勾选</span>" raw-content>
                  <el-icon>
                    <svg-icon name="ep:question-filled" />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
            <el-checkbox v-model="menuForm.meta.threeMenu">
              是否三级路由
            </el-checkbox>
          </el-form-item>
          <el-form-item label="菜单是否全屏:" prop="meta.isFull">
            <el-checkbox v-model="menuForm.meta.isFull">
              菜单是否全屏
            </el-checkbox>
          </el-form-item>
          <el-form-item label="重定向:" prop="redirect">
            <el-input v-model="menuForm.redirect" clearable placeholder="" />
          </el-form-item>
          <el-form-item prop="activeMenu">
            <template #label>
              <div class="flex items-center">
                菜单高亮:
                <el-tooltip content="<div class='w-40'>子节点或详情页需要高亮的上级菜单路由地址</span>" raw-content>
                  <el-icon>
                    <svg-icon name="ep:question-filled" />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
            <el-input v-model="menuForm.meta.activeMenu" clearable placeholder="" />
          </el-form-item>
          <el-form-item label="排序:" prop="sort">
            <el-input-number
              v-model="menuForm.sort"
              controls-position="right"
              :max="10000"
              :min="1"
              style="width: 100%;"
            />
          </el-form-item>
          <el-form-item prop="component" class="col-span-2">
            <template #label>
              <div class="flex items-center">
                视图:
                <el-tooltip content="<div class='w-40'>如父节点、外链或Iframe等没有视图的菜单填写LinkLayout</span>" raw-content>
                  <el-icon>
                    <svg-icon name="ep:question-filled" />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
            <el-input v-model="menuForm.component" clearable placeholder="">
              <template #prepend>
                views/
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="meta.menu" class="col-span-2">
            <template #label>
              <div class="flex items-center">
                是否显示:
                <el-tooltip content="<div class='w-40'>菜单不显示在导航中，例如详情页</span>" raw-content>
                  <el-icon>
                    <svg-icon name="ep:question-filled" />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
            <el-checkbox v-model="menuForm.meta.menu">
              显示菜单
            </el-checkbox>
            <el-checkbox v-model="menuForm.meta.breadcrumb">
              显示面包屑
            </el-checkbox>
          </el-form-item>
          <el-form-item label="接口权限:" prop="apiPermissionsIdList" class="col-span-2">
            <TableSelect
              v-model="menuForm.apiPermissionsIdList"
              multiple
              :columns="tableSelectColumns"
              :request-api="getSysResourceListApi"
              :table-props="{
                label: 'name',
                value: 'id',
              }"
            />
          </el-form-item>
        </el-form>
      </div>
    </template>
  </div>
  <div class="menu-footer h-14 flex items-center justify-center">
    <Auth :value="['add:menu:btn']">
      <el-button type="primary" :loading="isLoading" @click="handleSave">
        保 存
      </el-button>
    </Auth>
  </div>
</template>

<style scoped lang="scss">
h2 {
  padding: 0 0 30px;
  font-size: 17px;
  color: #3c4a54;
}

.el-form-item--default :deep(.el-form-item__content) {
  align-items: self-start;
}

.menu-footer {
  border-top: 1px solid #e6e6e6;
}

[data-theme="dark"] h2 {
  color: #fff;
}

[data-theme="dark"] .apilist {
  border-color: #434343;
}
</style>
