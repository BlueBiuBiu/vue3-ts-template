<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "@/component"
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
