import { defineStore } from "pinia"

import { menuConfig } from "../config"
import router from "@/router"
import { tranform2Routes } from "@/utils/tool"
import LocalCache from "@/utils/cache"

interface ILoginState {
  token: string
  userMenus: any[]
}

export const useLoginStore = defineStore("loginAction", {
  state: (): ILoginState => ({
    token: "",
    userMenus: menuConfig
  }),
  getters: {},
  actions: {
    /** 登录逻辑处理 */
    loginAction() {
      const token = "123455"
      const userMenus: any[] = []

      this.token = token
      LocalCache.setCache("token", token)

      this.userMenus = userMenus.length ? userMenus : menuConfig
      this.changeUserMenus(this.userMenus)

      LocalCache.setCache("userMenus", this.userMenus)

      router.push("/main/workPlatform")
    },
    /** 动态添加路由 */
    changeUserMenus(userMenus?: any[]) {
      this.userMenus = userMenus || menuConfig

      const routes = tranform2Routes(this.userMenus)
      for (const route of routes) {
        !router.hasRoute(route.path) && router.addRoute("main", route)
      }
    },
    /** 加载本地缓存的 */
    loadLocalLogin() {
      const token = LocalCache.getCache("token")
      if (token) {
        this.token = token
      }

      const userMenus = LocalCache.getCache("userMenus")
      if (userMenus) {
        this.userMenus = userMenus
        this.changeUserMenus(userMenus)
      }
    }
  }
})
