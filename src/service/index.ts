import MRequest from "./request"
import { BASE_URL, TIME_OUT } from "./config"
import LocalCache from "@/utils/cache"

const Request = new MRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 验证有没有token,有则添加在请求头
    requestInterceptor(config) {
      const token = LocalCache.getCache("token")

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export { Request }
