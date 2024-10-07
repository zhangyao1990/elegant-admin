<script lang="tsx" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { Delete, Edit, Plus, Refresh } from '@element-plus/icons-vue'
import { delSysMenuApi, getSysMenuListApi } from '../http/sys_menu'
import MenuDetail from './modules/menuDetail.vue'
import { convertTree } from '@/utils'

defineOptions({
  name: 'SysSettingMenu',
})

const menuFilterText = ref('')
const newMenuIndex = ref(1)
const menuTreeList = ref<any>([])
const menuList = ref<any>([])
const menuProps = ref<any>({
  label: (data: any) => {
    return (data.meta && data.meta.title) || ''
  },
})
const menuLoading = ref(false)
const menuTreeRef = ref()
const menuDetailRef = ref()
watch(
  () => menuFilterText.value,
  (newVal: any) => {
    menuTreeRef.value.filter(newVal)
  },
)
onMounted(() => {
  getMenuList()
})
// 加载树数据
async function getMenuList() {
  menuLoading.value = true
  let res = await getSysMenuListApi({})
  menuLoading.value = false
  menuTreeList.value = convertTree(res.data) || []
  menuList.value = res.data || []
}
function handleRefreshMenu() {
  getMenuList()
}
// 树点击
const mainRef = ref()
function handleMenuTreeClick(data: any, node: any) {
  let pid = node.level === 1 ? '0' : node.parent.data.id
  menuDetailRef.value.acceptParams(data, pid, data.mode || 'edit')
  mainRef.value.$el.scrollTop = 0
}
// 树过滤
function menuFilterNode(value: any, data: any) {
  if (!value) {
    return true
  }
  let targetText = (data.meta && data.meta.title) || ''
  return targetText.includes(value)
}
// 增加

async function handleAddMenuTree(data?: any, node?: any) {
  newMenuIndex.value++
  let newMenuData: any = {
    pid: data ? data.id : '',
    name: '',
    path: '',
    id: `menuId-${newMenuIndex.value}`,
    component: '',
    redirect: '',
    sort: 1,
    meta: {
      title: `未命名`,
      icon: '',
      activeMenu: '',
      type: 'menu',
      menu: false,
      breadcrumb: false,
      cache: false,
      threeMenu: false,
      isFull: false,
      link: '',
      iframe: '',
    },
    apiPermissionsIdList: [],
    mode: 'add',
  }
  menuLoading.value = true
  menuLoading.value = false
  let pid = node ? node.data.id : '0'
  menuDetailRef.value.acceptParams(newMenuData, pid, 'add')
}
// 删除菜单
async function handleDelMenuTree(data?: any) {
  let CheckedNodes: any = null
  if (data) {
    CheckedNodes = [data]
  }
  else {
    CheckedNodes = menuTreeRef.value.getCheckedNodes()
  }
  if (CheckedNodes.length === 0) {
    ElMessage.warning('请选择需要删除的项')
    return false
  }
  let confirm = await ElMessageBox.confirm('确认删除已选择的菜单吗？', '提示', {
    type: 'warning',
    confirmButtonText: '确认',
  }).catch(() => {})
  if (confirm !== 'confirm') {
    return false
  }
  menuLoading.value = true
  const menuIds: any = CheckedNodes.map((item: any) => (!item.id.includes('menuId-') ? item.id : null))
  let reqData = {
    idList: menuIds.filter((v: any) => v),
  }
  if (reqData.idList.length > 0) {
    delSysMenuApi(reqData.idList)
      .then(() => {
        menuLoading.value = false
        getMenuList()
      })
      .catch(() => {
        menuLoading.value = false
      })
  }
  else {
    menuLoading.value = false
    CheckedNodes.forEach((item: any) => {
      menuTreeRef.value.remove(item)
      menuList.value.forEach((v: any, i: number) => {
        if (v.id == item.id) {
          menuList.value.splice(i, 1)
        }
      })
      console.log('menuList', menuList.value)
    })
  }
  ElMessage.success('操作成功')
}
// 全选\取消全选
function selectAllChange(isChecked: boolean) {
  if (isChecked) {
    menuTreeRef.value.setCheckedNodes(menuList.value) // pushData是树形节点的data
  }
  else {
    menuTreeRef.value!.setCheckedKeys([], false)
  }
}
// 展开、折叠全部节点
function expandAllNodes(isExpanded: boolean) {
  for (let i = 0; i < menuTreeRef.value.store._getAllNodes().length; i++) {
    if (isExpanded) {
      menuTreeRef.value.store._getAllNodes()[i].expanded = true
    }
    else {
      menuTreeRef.value.store._getAllNodes()[i].expanded = false
    }
  }
}
</script>

<template>
  <div class="table-container">
    <div class="menu-box rounded">
      <el-container class="h-full">
        <el-aside v-loading="menuLoading" width="270px" class="menu-l mr-1 h-full rounded rounded-6px bg-[var(--g-container-bg)]">
          <el-container class="h-full">
            <el-header class="p-0 pt-2">
              <div class="flex items-center pl-2">
                <el-input v-model="menuFilterText" placeholder="输入关键字进行过滤" clearable />
                <HDropdownMenu
                  :items="[
                    [
                      { label: '选择全部', handle: () => selectAllChange(true) },
                      { label: '取消选择', handle: () => selectAllChange(false) },
                    ],
                    [
                      { label: '展开全部', handle: () => expandAllNodes(true) },
                      { label: '折叠全部', handle: () => expandAllNodes(false) },
                    ],
                  ]" class="flex-center cursor-pointer px-2"
                >
                  <div
                    class="flex-center gap-1 text-#333333"
                  >
                    <el-icon class="rotate-90">
                      <svg-icon name="ep:more-filled" />
                    </el-icon>
                  </div>
                </HDropdownMenu>
              </div>
              <div class="mx-2 mt-2">
                <el-divider border-style="dashed" class="m-0 w-full" />
              </div>
            </el-header>
            <el-main class="h-full p-0">
              <el-tree
                ref="menuTreeRef"
                class="menu"
                :default-expand-all="true"
                node-key="id"
                :data="menuTreeList"
                :props="menuProps"
                :expand-on-click-node="false"
                draggable check-strictly show-checkbox highlight-current
                :filter-node-method="menuFilterNode"
                :check-on-click-node="true"
              >
                <template #default="{ node, data }">
                  <span class="custom-tree-node el-tree-node__label">
                    <span class="label text-ellipsis">
                      {{ node.label }}
                    </span>
                    <span class="do absolute right-10px">
                      <Auth :value="['add:menu:btn', 'del:menu:btn']">
                        <el-button-group size="small">
                          <el-button :icon="Plus" @click.stop="handleAddMenuTree(data, node)" />
                          <el-button :icon="Edit" @click.stop="handleMenuTreeClick(data, node)" />
                          <el-button type="danger" :icon="Delete" @click.stop="handleDelMenuTree(data)" />
                        </el-button-group>
                      </Auth>
                    </span>
                  </span>
                </template>
              </el-tree>
            </el-main>
            <el-footer class="h-14 flex items-center justify-center">
              <el-button type="primary" :icon="Refresh" @click="handleRefreshMenu()" />
              <Auth :value="['add:menu:btn']" class="mx-3">
                <el-button type="primary" :icon="Plus" @click="handleAddMenuTree()" />
              </Auth>
              <Auth :value="['del:menu:btn']">
                <el-button type="danger" :icon="Delete" @click="handleDelMenuTree()" />
              </Auth>
            </el-footer>
          </el-container>
        </el-aside>
        <el-container class="menu-r rounded-6px bg-[var(--g-container-bg)]">
          <el-main ref="mainRef" class="flex flex-col p-0">
            <MenuDetail ref="menuDetailRef" :menu-tree-list="menuTreeList" @success="getMenuList" />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-box {
  height: 100%;

  .el-tree.menu :deep(.el-tree-node__content) {
    height: 34px;
  }

  .menu-l {
    border: 1px solid #e6e6e6;
  }

  .menu-r {
    border: 1px solid #e6e6e6;
  }

  .el-footer {
    border-top: 1px solid #e6e6e6;
  }
}

.custom-tree-node {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-right: 24px;
  font-size: 14px;
}

.custom-tree-node .label {
  display: flex;
  align-items: center;
  height: 100%;
}

.custom-tree-node .label .el-tag {
  margin-left: 5px;
}

.custom-tree-node .do {
  display: none;
  opacity: 0.9;
}

.custom-tree-node .do i {
  padding: 5px;
  margin-left: 5px;
  color: #999;
}

.custom-tree-node .do i:hover {
  color: #333;
}

.custom-tree-node:hover .do {
  display: inline-block;
}
</style>
