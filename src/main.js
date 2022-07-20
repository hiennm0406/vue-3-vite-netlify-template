import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

// createApp.prototype.$axios = axios
createApp.prototype.$api_url = "https://jsonplaceholder.typicode.com/"

createApp(App).mount('#app')
