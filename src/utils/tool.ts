/** 将菜单配置转换成符合路由格式，以便动态添加路由 */
import type { RouteRecordRaw } from "vue-router"
import { menuConfig } from "../store/config"

export function tranform2Routes(userMenus: any[]) {
  const tempArr: RouteRecordRaw[] = []

  for (const menu of userMenus) {
    const name: string = menu.path.split("/").pop()
    const path: string = menu.path
    const component = menu.component
    const children = menu.children

    if (children.length) {
      const tempChildren: RouteRecordRaw[] = []
      for (const child of children) {
        const childName: string = child.path.split("/").pop()
        const childPath: string = child.path
        const childComponent = child.component
        tempChildren.push({
          name: childName,
          path: childPath,
          component: childComponent
        })
      }
      tempArr.push({
        name,
        path,
        component,
        children: tempChildren
      })
    } else {
      tempArr.push({
        name,
        path,
        component
      })
    }
  }

  return tempArr
}
