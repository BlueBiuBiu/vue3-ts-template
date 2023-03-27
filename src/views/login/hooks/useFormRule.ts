export function useFormRule(currentCode: string) {
  // 检查验证码是否正确
  const checkCode = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error("请输入验证码"))
    }
    if (currentCode !== value) {
      return callback(new Error("验证码不正确"))
    }
    return callback()
  }

  const rules = {
    name: [
      { required: true, message: "请输入账号", trigger: "blur" },
      { min: 5, max: 10, message: "账号长度在 5 到 10 个字符", trigger: "blur" }
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      {
        pattern: /^[a-z0-9]{3,}$/,
        message: "用户名必须是3位以上的字母或者数字~",
        trigger: "blur"
      }
    ],
    code: [{ validator: checkCode, trigger: "blur" }]
  }

  return rules
}
