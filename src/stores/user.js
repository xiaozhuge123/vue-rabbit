import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI} from "@/apis/userApis.js";
import { useCartStore } from "./cartStore.js"

export const getUserStore = defineStore('user',()=>{
  //1.定义管理用户数据的state
  const userInfo = ref({})
  //定义获取接口数据的action函数
  const getUserInfo = async ({account,password}) => {
    const res = await loginAPI({account,password})
    userInfo.value = res.result
  }
  const cartStore = useCartStore()
  // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
    //清空购物车
    cartStore.clearCart()
  }

  //以对象的格式返回userInfo,getUserInfo
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},{
  persist: true
})
