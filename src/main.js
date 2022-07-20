import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createStore } from 'vuex'

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

app.use(store)

app.mount('#app')