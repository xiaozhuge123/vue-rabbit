import axios from 'axios'
import 'element-plus/es/components/message/style/css'
import {ElMessage} from "element-plus";

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  ElMessage({ type: 'warning', message: e.response.data.message })
  return Promise.reject(e)
})

export default httpInstance
