import { App } from 'vue'
import MainApp from './App.vue'
import axios from 'axios'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
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

App(MainApp).mount('#app')
MainApp.use(store)