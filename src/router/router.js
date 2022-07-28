import { createRouter, createWebHistory } from 'vue-router'

import Main from './../components/MainScreen.vue'

import History from './../components/History/HistoryMain.vue'
import FirstRagnarok from './../components/History/FirstRagnarok.vue'
import TheUnion from './../components/History/TheUnion.vue'
import MuspelheimHis from './../components/History/MuspelheimHis.vue'

import Character from './../components/Character/CharacterPage.vue'
import CharacterDkyrie from './../components/Character/DkyrieChar.vue'
import CharacterMidgard from './../components/Character/MidgardChar.vue'
import Character001 from './../components/Character/Dkyrie/Character001.vue'
import Character002 from './../components/Character/Midgard/Character002.vue'

import Setting from './../components/Setting/SettingMain.vue'
import attribute from './../components/Setting/Attribute.vue'
import skill from './../components/Setting/Skill.vue'
import tactic from './../components/Setting/Tactic.vue'
import ascen from './../components/Setting/Ascensions.vue'
import level from './../components/Setting/Level.vue'
import trait from './../components/Setting/Trait.vue'


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
        path: '/MuspelheimHis',
        component: MuspelheimHis,
        name: 'MuspelheimHis'
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
        path: '/skill',
        component: skill,
        name: 'skill',
    },
    {
        path: '/tactic',
        component: tactic,
        name: 'tactic',
    },
    {
        path: '/ascen',
        component: ascen,
        name: 'ascen',
    },
    {
        path: '/level',
        component: level,
        name: 'level',
    },
    {
        path: '/trait',
        component: trait,
        name: 'trait',
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
        path: '/charMidgard',
        component: CharacterMidgard,
        name: 'CharacterMidgard',
    },
    {
        path: '/char001',
        component: Character001,
        name: 'Character001',
    },
    {
        path: '/char002',
        component: Character002,
        name: 'Character002',
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