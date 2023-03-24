<template>
  <div class="app">{{ counter.counter }} - {{ counter.doubleCount }}</div>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-icon class="is-loading">
    <IEpLoading />
  </el-icon>
  <IEpEdit />
</template>

<script setup lang="ts">
import { getMultidata } from "@/service/modules/home"
import { onMounted } from "vue"
import { useCounterStore } from "./store"
const counter = useCounterStore()

onMounted(() => {
  getMultidata("/home/multidata").then((res) => {
    console.log(res)
  })
})
</script>

<style lang="less" scoped>
.app {
}
</style>
