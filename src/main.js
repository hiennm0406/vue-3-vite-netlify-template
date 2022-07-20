import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createStore } from 'vuex'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// createApp.prototype.$axios = axios
// createApp.prototype.$api_url = "https://jsonplaceholder.typicode.com/"

const app = createApp(App)
app.use(VueSidebarMenu)
app.use(store)

app.mount('#app')