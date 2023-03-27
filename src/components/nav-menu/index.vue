<template>
  <div class="nav-menu">
    <el-menu
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="menu in userMenus" :key="menu.path">
        <el-sub-menu v-if="menu.type === 1" :index="menu.id">
          <template #title>
            <Icon class="icon" :icon="menu.icon"></Icon>
            <span>{{ menu.name }}</span>
          </template>
          <template v-for="submenu in menu.children" :key="submenu.path">
            <template v-if="submenu.type === 2">
              <el-menu-item @click="menuClick(submenu)" :index="submenu.id">
                <span>{{ submenu.name }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-sub-menu>
        <el-menu-item v-else :index="menu.id" @click="menuClick(menu)">
          <template #title>
            <Icon class="icon" :icon="menu.icon"></Icon>
            <span>{{ menu.name }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue"

import { useLoginStore } from "@/store"
import { useRouter } from "vue-router"
import { More } from "@element-plus/icons-vue"
/* ts类型定义区域 */

/* 定义数据区域 */
const props = defineProps<{
  collapse: boolean
}>()

const router = useRouter()
const store = useLoginStore()

const userMenus = computed(() => store.userMenus)
console.log(userMenus)

/* 事件处理区域 */
const menuClick = (submenu: any) => {
  console.log(submenu)

  router.push({ path: submenu.path })
}
/* 监听 */

/* 生命周期 */
</script>

<style lang="less" scoped>
.nav-menu {
  .el-menu {
    border-right: none;
  }
  :deep(.el-submenu__title) {
    background-color: #001529 !important;
  }
  .el-submenu {
    background-color: #001529;

    .el-menu.item {
      background-color: #0c2135;

      &:hover {
        color: #fff;
      }
    }
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }

  .icon {
    width: 16px;
    height: 16px;
    margin-right: 20px;
  }
}
</style>
