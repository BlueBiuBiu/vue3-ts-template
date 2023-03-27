import { createRouter, createWebHashHistory } from "vue-router"

import type { RouteRecordRaw } from "vue-router"
import LocalCache from "@/utils/cache"
import NProgress from "nprogress"

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/index.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  NProgress.start()
  if (to.path !== "/login") {
    const token = LocalCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }
  if (to.path === "/main") {
    return "/main/workPlatform"
  }
})

router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

export default router
