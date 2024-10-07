export interface ResMenuList {
  id: string
  pid: string
  name: string
  sort: number
  path: string
  redirect: string
  component: string
  meta: {
    title: string
    type: string
    icon: string
    activeMenu: string
    menu: boolean
    breadcrumb: boolean
    cache: boolean
    threeMenu: any
    iframe: boolean
    link: string | null
  }
  api: any
  apiPermissions: any
}
