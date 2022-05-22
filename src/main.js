import { createApp } from 'vue'
import App from './App.vue'
import { router } from './route'
import * as echarts from 'echarts'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.echarts=echarts
app.use(router)
app.use(ElementUI)

app.mount('#app')
