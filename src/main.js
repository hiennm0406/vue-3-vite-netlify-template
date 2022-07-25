import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import router from './router/router'
import store from './store/store'
import VueSlider from 'vue-slider-component'

// createApp.prototype.$axios = axios
// createApp.prototype.$api_url = "https://jsonplaceholder.typicode.com/"

const app = createApp(App)
app.use(VueSidebarMenu)
app.use(store)
app.use(VueSlider)
app.use(router)
app.mount('#app')