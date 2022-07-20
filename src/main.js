import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuex from 'vuex'

createApp.use(Vuex)


const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// createApp.prototype.$axios = axios
// createApp.prototype.$api_url = "https://jsonplaceholder.typicode.com/"

createApp(App).mount('#app')
