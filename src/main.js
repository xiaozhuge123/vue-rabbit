import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import createPersistedState from 'pinia-plugin-persistedstate';

//引入初始化样式资源
import '@/styles/common.scss'

// 全局指令注册
import { lazyPlugin } from '@/directives'
import { componentPlugin } from '@/components'

const app = createApp(App)

var pinia = createPinia();
pinia.use(createPersistedState)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
