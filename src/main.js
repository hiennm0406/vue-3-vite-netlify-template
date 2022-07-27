import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import router from './router/router'
import store from './store/store'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

// createApp.prototype.$axios = axios
// createApp.prototype.$api_url = "https://jsonplaceholder.typicode.com/"

const app = createApp(App)
app.use(VueSidebarMenu)
app.use(store)
app.use(router)
app.mount('#app')


import attack from './components/TitleComponent/Title/Attack.vue'
import phys from './components/TitleComponent/Title/Physic.vue'
import melee from './components/TitleComponent/Title/Melee.vue'
import single from './components/TitleComponent/Title/Single.vue'
import effect from './components/TitleComponent/Title/Effect.vue'
import duration from './components/TitleComponent/Title/Duration.vue'
import bond from './components/TitleComponent/Title/Bond.vue'

app.component('attack', attack)
.component('phys', phys)
.component('melee', melee)
.component('single', single)
.component('effect', effect)
.component('duration', duration)
.component('bond', bond)