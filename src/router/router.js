import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/components/MainScreen.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router