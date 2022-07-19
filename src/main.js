import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.prototype.$api_url = "https://jsonplaceholder.typicode.com/"

createApp(App).mount('#app')
