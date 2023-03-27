<template>
  <div class="login-panel">
    <h1 class="title">河南省红十字基金会管理系统</h1>
    <el-form :model="account" status-icon :rules="rules" ref="formRef">
      <el-form-item prop="name">
        <el-input
          v-model="account.name"
          :prefix-icon="User"
          :style="{ height: `${inputHeight}px` }"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          show-password
          v-model="account.password"
          :prefix-icon="Lock"
          :style="{ height: `${inputHeight}px` }"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="account.code" :maxlength="4" :prefix-icon="Key" @keyup.enter="submit">
          <template #append>
            <Identify
              :identifyCode="identifyCode"
              @click="refreshCode"
              :content-height="inputHeight"
            />
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <div class="operate">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="info">忘记密码</el-link>
    </div>
    <el-button class="submit" size="large" type="primary" @click="submit">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onMounted } from "vue"
import type { ElForm } from "element-plus"
import { User, Lock, Key } from "@element-plus/icons-vue"
import type { Ref } from "vue"

import Identify from "./indetify.vue"
import LocalCache from "@/utils/cache"
import { useFormRule } from "../hooks/useFormRule"
import { useLoginStore } from "@/store"

/* ts类型定义区域 */

/* 定义数据区域 */
const inputHeight = ref(40)

const isKeepPassword = ref(true)
const account = reactive({
  name: LocalCache.getCache("name") ?? "",
  password: LocalCache.getCache("password") ?? "",
  code: ""
})

const identifyCode = ref()
const identifyCodes = ref("1234567890abcdefjhijklinopqrsduvwxyz")

const rules = ref(useFormRule(identifyCode.value))
const formRef = ref<InstanceType<typeof ElForm>>()

const store = useLoginStore()

/* 事件处理区域 */
// 验证表单
const validate = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 判断是否需要记住密码
      if (isKeepPassword) {
        //本地缓存
        LocalCache.setCache("name", account.name)
        LocalCache.setCache("password", account.password)
      } else {
        LocalCache.deleteCache("name")
        LocalCache.deleteCache("password")
      }

      store.loginAction()
    } else {
      refreshCode()
    }
  })
}

// 重置验证码
const refreshCode = () => {
  identifyCode.value = ""
  makeCode(identifyCode, 4)
}

const makeCode = (o: Ref<any>, l: number) => {
  for (let i = 0; i < l; i++) {
    identifyCode.value += identifyCodes.value[randomNum(0, identifyCodes.value.length)]
  }
}

const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

// 提交表单
const submit = () => {
  validate(isKeepPassword.value)
}

/* 监听 */
// 验证码改变时，更新检查表单中验证码的规则
watch(identifyCode, () => {
  rules.value = useFormRule(identifyCode.value)
})

/* 生命周期 */
onMounted(() => {
  // 初始化验证码，修改掉初始默认值
  refreshCode()
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 350px;
  text-align: center;
  .title {
    font-size: 25px;
  }

  :deep(.el-input-group__append) {
    padding: 0;
  }

  .operate {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .submit {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
