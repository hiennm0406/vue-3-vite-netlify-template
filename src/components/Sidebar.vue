<template>
 <sidebar-menu :menu="menu" />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>


<script>
import CharacterPageVue from './Character/CharacterPage.vue';
import HistoryMainVue from './History/HistoryMain.vue';
import HomeVue from './Home.vue';
import SettingMainVue from './Setting/SettingMain.vue';

export default {
  data: function() {
    return {
      users: [],
      //https://yaminncco.github.io/vue-sidebar-menu/#/basic-usage
      menu: [
          {
            header: 'RAGNAROK',
            hiddenOnCollapse: true
          },
          {
            to: '/',
            title: 'Main Page',
            external: true,
            exact: true ,
            icon: {
              element: 'span',
              class: 'icon40 icon_main',
            }
          },
          {
            href: { name: HistoryMainVue },
            title: 'Lịch sử thế giới',
            external: true,
            exact: true ,
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link'
              }
            ]
          },
          {
            href: { name: SettingMainVue },
            title: 'Tổng quan - Setting',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/',
                title: 'Atribute'
              },
               {
                href: '/',
                title: 'Skill'
              },
              {
                href: '/',
                title: 'Skill link'
              },
              {
                href: '/',
                title: 'Tactic'
              },
              {
                href: '/',
                title: 'Artifact'
              },
              {
                href: '/',
                title: 'Rune'
              },
              {
                href: '/',
                title: 'Trait'
              },
              {
                href: '/',
                title: 'Awake'
              },
              
            ]
          },
          {
            href: { name: CharacterPageVue },
            title: 'Nhân vật',
            icon: 'fa fa-chart-area',
            child: [
               {
                href: '/',
                title: 'Dkyrie'
              },
              {
                href: '/',
                title: 'Midgard'
              },
               {
                href: '/',
                title: 'Asgard'
              },
              {
                href: '/',
                title: 'Alfheim'
              },
              {
                href: '/',
                title: 'Vanaheim'
              },
              {
                href: '/',
                title: 'Muspelheim'
              },
              {
                href: '/',
                title: 'Svartalfheim'
              },
              {
                href: '/',
                title: 'Jotunheim'
              },
              {
                href: '/',
                title: 'Nilfheim'
              },
              {
                href: '/',
                title: 'Helheim'
              },
            ]
          }
        ]
    };
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
 
</script>