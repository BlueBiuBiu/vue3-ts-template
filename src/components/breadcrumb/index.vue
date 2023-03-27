<template>
  <el-breadcrumb separator="/">
    <template v-for="breadcrumbMenu in props.breadcrumbMenus" :key="breadcrumbMenu.path">
      <el-breadcrumb-item :to="{ path: breadcrumbMenu.path }">
        {{ breadcrumbMenu.name }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue"

interface IBreadcrumb {
  name?: string
  path?: string
}

const props = withDefaults(
  defineProps<{
    breadcrumbMenus: IBreadcrumb[]
  }>(),
  {
    breadcrumbMenus: () => []
  }
)
</script>

<style lang="less" scoped></style>
