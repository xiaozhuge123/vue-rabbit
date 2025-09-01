import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//测试调用axios函数
import {getCategary} from '@/apis/testApi.js'
getCategary().then(res=>{
  console.log(res)
})

app.use(createPinia())
app.use(router)

app.mount('#app')
