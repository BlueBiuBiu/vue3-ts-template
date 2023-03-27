<template>
  <div class="not-found">
    <el-result title="404" subTitle="抱歉，请求错误">
      <template #icon>
        <el-image
          style="width: 100px; height: 100px"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        ></el-image>
      </template>
      <template #extra>
        <el-button type="primary" size="medium" @click="$router.back()">返回</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
