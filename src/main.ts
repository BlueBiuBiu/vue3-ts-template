import { createApp, createVNode } from "vue"
import { createPinia } from "pinia"
import "normalize.css"

import App from "./App.vue"
import router from "./router"
import "element-plus/dist/index.css"
import "nprogress/nprogress.css"
import "./assets/css/index.less"
import { useLoginStore } from "./store"
import * as Icons from "@element-plus/icons-vue"

const app = createApp(App)
app.use(createPinia())
useLoginStore().changeUserMenus()
app.use(router)

app.mount("#app")

// 创建Icon组件
const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(Icons[icon as keyof typeof Icons])
}

// 注册Icon组件
app.component("Icon", Icon)
