import { createRouter, createWebHistory } from 'vue-router'

import Main from './../components/MainScreen.vue'

import History from './../components/History/HistoryMain.vue'
import FirstRagnarok from './../components/History/FirstRagnarok.vue'
import TheUnion from './../components/History/TheUnion.vue'
import MuspelheimHis from './../components/History/MuspelheimHis.vue'
import SecondRagnarok from './../components/History/SecondRagnarok.vue'

import Character from './../components/Character/CharacterPage.vue'
import CharacterDkyrie from './../components/Character/DkyrieChar.vue'
import CharacterMidgard from './../components/Character/MidgardChar.vue'
import CharacterJotunheim from './../components/Character/JotunheimChar.vue'
import Character001 from './../components/Character/Dkyrie/Character001.vue'
import Character002 from './../components/Character/Midgard/Character002.vue'
import Character003 from './../components/Character/Jotunheim/Character003.vue'

import Setting from './../components/Setting/SettingMain.vue'
import attribute from './../components/Setting/Attribute.vue'
import skill from './../components/Setting/Skill.vue'
import tactic from './../components/Setting/Tactic.vue'
import ascen from './../components/Setting/Ascensions.vue'
import level from './../components/Setting/Level.vue'
import trait from './../components/Setting/Trait.vue'

import Midgard from './../components/Setting/World/Midgard.vue'
import Asgard from './../components/Setting/World/Asgard.vue'
import Alfheim from './../components/Setting/World/Alfheim.vue'
import Vanaheim from './../components/Setting/World/Vanaheim.vue'
import Svartalfheim from './../components/Setting/World/Svartalfheim.vue'
import Jotunheim from './../components/Setting/World/Jotunheim.vue'
import Muspelheim from './../components/Setting/World/Muspelheim.vue'
import Nilfheim from './../components/Setting/World/Nilfheim.vue'
import Helheim from './../components/Setting/World/Helheim.vue'


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
        path: '/second',
        component: SecondRagnarok,
        name: 'SecondRagnarok'
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
        path: '/midgard',
        component: Midgard,
        name: 'midgard',
    },
    {
        path: '/asgard',
        component: Asgard,
        name: 'asgard',
    },
    {
        path: '/alfheim',
        component: Alfheim,
        name: 'alfheim',
    },
    {
        path: '/vanaheim',
        component: Vanaheim,
        name: 'vanaheim',
    },
    {
        path: '/jotunheim',
        component: Jotunheim,
        name: 'jotunheim',
    },
    {
        path: '/muspelheim',
        component: Muspelheim,
        name: 'muspelheim',
    },
    {
        path: '/svartalfheim',
        component: Svartalfheim,
        name: 'svartalfheim',
    },
    {
        path: '/nilfheim',
        component: Nilfheim,
        name: 'nilfheim',
    },
    {
        path: '/helheim',
        component: Helheim,
        name: 'helheim',
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
        path: '/charJotunheim',
        component: CharacterJotunheim,
        name: 'CharacterJotunheim',
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
        path: '/char003',
        component: Character003,
        name: 'Character003',
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