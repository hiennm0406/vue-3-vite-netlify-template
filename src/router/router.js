import { createRouter, createWebHistory } from 'vue-router'

import Main from './../components/MainScreen.vue'

import History from './../components/History/HistoryMain.vue'
import FirstRagnarok from './../components/History/FirstRagnarok.vue'
import TheUnion from './../components/History/TheUnion.vue'

import Character from './../components/Character/CharacterPage.vue'
import CharacterDkyrie from './../components/Character/DkyrieChar.vue'
import Character001 from './../components/Character/Dkyrie/Character001.vue'

import Setting from './../components/Setting/SettingMain.vue'
import attribute from './../components/Setting/Attribute.vue'

const routes = [
    {
        path: '/',
        component: Main,
        name: 'Main',
    },
    {
        path: '/history',
        component: History,
        name: 'History'
    },
    {
        path: '/first',
        component: FirstRagnarok,
        name: 'firstRagnarok'
    },
    {
        path: '/theunion',
        component: TheUnion,
        name: 'TheUnion'
    },
    {
        path: '/setting',
        component: Setting,
        name: 'Setting',
    },
    {
        path: '/attribute',
        component: attribute,
        name: 'attribute',
    },
    {
        path: '/character',
        component: Character,
        name: 'Character',
    },
    {
        path: '/charDkyrie',
        component: CharacterDkyrie,
        name: 'CharacterDkyrie',
    },
    {
        path: '/char001',
        component: Character001,
        name: 'Character001',
    },
    {
        path: '/:catchAll(.*)',
        component: Main
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    mode: 'hash'
})

export default router