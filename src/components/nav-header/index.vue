<template>
  <div class="nav-header">
    <el-icon @click="changeFold" class="fold-menu">
      <IEpExpand v-if="isCollapse" />
      <IEpFold v-else />
    </el-icon>
    <user-info />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue"

const isCollapse = ref(false)
const emit = defineEmits(["collapse"])

const changeFold = () => {
  isCollapse.value = !isCollapse.value
  emit("collapse", isCollapse.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
