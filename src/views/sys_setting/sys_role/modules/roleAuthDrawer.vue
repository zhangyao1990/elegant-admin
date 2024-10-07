<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { getSysMenuListApi } from '../../http/sys_menu'
import { getSysRoleAuthApi, settingSysRoleAuthApi } from '../../http/sys_role'
import { convertTree } from '@/utils'

defineOptions ({
  name: 'RoleAuthDrawer',
})
interface DrawerProps {
  title: string
  rowData?: any
  getTableList?: () => Promise<any>
}

// drawer框状态
const drawerVisible = ref(false)
const drawerProps = ref<DrawerProps>({
  title: '角色权限设置',
})
const menuData = reactive<any>({
  menuList: [],
  menuTreeList: [],
  menuChecked: [],
  isChecked: false,
  isIndeterminate: false,
  props: {
    label: (data: any) => {
      return data.meta.title
    },
    class: treeNodeClass,
  },
})
const permissionData = ref<any>({
  roleDateType: 'ALL',
  departmentList: [],
  depChecked: [],
  props: {
    label: (data: any) => {
      return data.name
    },
  },
})

const dashboardData = ref<any>({
  checked: [],
  props: {
    label: (data: any) => {
      return data.name
    },
    // disabled: (data: any) => {
    // return data.isFixed;
    // }
  },
  dashboardOptions: [],
})
async function getSysMenuList() {
  const resData = await getSysMenuListApi({})
  console.log(resData)
  menuData.menuList = resData.data
  menuData.menuTreeList = convertTree(resData.data)
}
async function getSysRoleAuth(id: string) {
  const resData: any = await getSysRoleAuthApi({ id })
  menuData.menuChecked = resData.data || []
  await nextTick(() => {
    let menuCheck = menuData.menuChecked || []
    menuData.isChecked = menuCheck.length >= menuData.menuList.length
    menuData.isIndeterminate = menuCheck.length > 0 && menuCheck.length < menuData.menuList.length
  })
}

// 接收父组件传过来的参数
async function acceptParams(params: DrawerProps): Promise<void> {
  drawerProps.value = Object.assign(drawerProps.value, params)
  drawerVisible.value = true
  await getSysMenuList()
  if (params.rowData.id) {
    await getSysRoleAuth(params.rowData.id)
  }
}

const menuRef = ref()
// 取消子级父节点不变
function handleCheck(data: any, { checkedKeys }: any) {
  if (checkedKeys.includes(data.id)) {
    // 选中
    let node = menuRef.value.getNode(data.id) // getNode(node-key)
    selectChildren(data, true) // 选中子节点
    parentNodesChange(node) // 选中父节点
  }
  else {
    selectChildren(data, false) // 取消子节点
  }
  checkIsIndeterminate()
}
// 全选取消check显示
function checkIsIndeterminate() {
  nextTick(() => {
    let CheckedNodes = menuRef.value.getCheckedNodes()
    let menuIds = CheckedNodes.map((item: any) => item.id)
    menuData.isChecked = menuIds.length === menuData.menuList.length
    menuData.isIndeterminate = menuIds.length > 0 && menuIds.length < menuData.menuList.length
  })
}
function selectChildren(data: any, checked: any) {
  data
  && data.children
  && data.children.map((item: any) => {
    menuRef.value.setChecked(item.id, checked)
    if (data.children) {
      selectChildren(item, checked)
    }
  })
}
// 父级递归
function parentNodesChange(node: any) {
  // console.log(node);
  if (node.parent) {
    for (let key in node) {
      if (key == 'id') {
        // console.log(node[key]);
        menuRef.value.setChecked(node, true)
      }
    }
    if (node.parent && node.id !== 0) {
      parentNodesChange(node.parent)
    }
  }
}
function checkedAll() {
  if (menuData.isChecked) {
    // 全选
    menuRef.value.setCheckedNodes(menuData.menuList)
  }
  else {
    // 取消选中
    menuRef.value.setCheckedKeys([])
  }
  checkIsIndeterminate()
}
function handleClose() {
  menuData.menuTreeList = []
  menuData.menuChecked = []
  menuData.menuList = []
  menuData.isIndeterminate = false
  menuData.isChecked = false
  dashboardData.value.checked = []
}
// 提交数据

async function handleSubmit() {
  // 注意点：传递参数（获取了父子节点）
  let menuIdList = menuRef.value && menuRef.value.getCheckedNodes(false, true).map((item: any) => item.id)

  let reqData: any = {
    roleId: drawerProps.value.rowData.id,
    menuIdList,
    roleData: {
      roleDateType: permissionData.value.roleDateType,
    },
  }
  await settingSysRoleAuthApi(reqData)
  ElMessage.success({
    message: '操作成功!',
    showClose: true,
    duration: 1000,
  })
  await drawerProps.value.getTableList
  drawerVisible.value = false
}
function treeNodeClass(_data: any, node: Node) {
  if (node.isLeaf) {
    return ''
  }
  let addClass = true
  for (const key in node.childNodes) {
    if (!node.childNodes[key].isLeaf) {
      addClass = false
    }
  }
  return addClass ? 'penultimate-node' : ''
}

defineExpose({
  acceptParams,
})
</script>

<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="600px" :title="`${drawerProps.title}`" @closed="handleClose">
    <div>
      <el-tabs tab-position="top">
        <el-tab-pane label="菜单权限">
          <div class="treeMain">
            <div class="tree-isCheckBox">
              <el-checkbox v-model="menuData.isChecked" :indeterminate="menuData.isIndeterminate" @change="checkedAll">
                全选/反选
              </el-checkbox>
            </div>
            <el-divider border-style="dashed" />
            <el-tree
              ref="menuRef"
              node-key="id"
              :data="menuData.menuTreeList"
              :props="menuData.props"
              :check-on-click-node="true"
              :check-strictly="true"
              :default-checked-keys="menuData.menuChecked"
              :expand-on-click-node="false"
              highlight-current show-checkbox default-expand-all
              @check="handleCheck"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="数据权限">
          <el-form label-width="100px" label-position="left">
            <el-form-item label="规则类型">
              <el-select
                v-model="permissionData.roleDateType"
                placeholder="请选择"
              >
                <el-option label="全部可见" value="ALL" />
                <el-option label="仅部门可见" value="DEPT" />
                <el-option label="选择的部门可见" value="SELECT_DEPT" />
                <el-option label="仅本人可见" value="USERSELF" />
              </el-select>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane v-if="false" label="应用权限">
          <el-form label-width="100px" label-position="left" />
        </el-tab-pane>
        <el-tab-pane v-if="false" label="控制台模块" />
      </el-tabs>
    </div>
    <template #footer>
      <el-button @click="drawerVisible = false">
        取消
      </el-button>
      <el-button type="primary" @click="handleSubmit">
        确定
      </el-button>
    </template>
  </el-drawer>
</template>

<style lang="scss" scoped>
:deep(.penultimate-node) {
  .el-tree-node__children {
    padding-left: 60px;
    line-height: 12px;
    white-space: pre-wrap;

    .el-tree-node {
      display: inline-block;
    }

    .el-tree-node__content {
      padding-right: 10px;
      padding-left: 10px !important;

      .el-tree-node__expand-icon {
        display: none;
      }
    }
  }
}
</style>
