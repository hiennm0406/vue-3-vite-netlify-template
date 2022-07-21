import { createRouter, createWebHistory } from 'vue-router'

import Main from './../components/MainScreen.vue'

import History from './../components/History/HistoryMain.vue'
import FirstRagnarok from './../components/History/FirstRagnarok.vue'

import Character from './../components/Character/CharacterPage.vue'
import Setting from './../components/Setting/SettingMain.vue'

const routes = [
    {
        path: '/',
        component: Main,
        name: 'Main',
    },
    {
        path: 'history',
        component: History,
        name: 'History'
    },
    {
        path: 'first',
        component: FirstRagnarok,
        name: 'firstRagnarok'
    },
    {
        path: 'setting',
        component: Setting,
        name: 'Setting',
    },
    {
        path: 'character',
        component: Character,
        name: 'Character',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router