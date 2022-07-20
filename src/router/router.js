import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/components/MainScreen.vue'

import History from '@/components/History/HistoryMain.vue'
import Character from '@/components/Character/CharacterPage.vue'
import Setting from '@/components/Setting/SettingMain.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/history',
        component: History
    },
    {
        path: '/setting',
        component: Setting
    },
    {
        path: '/character',
        component: Character
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router