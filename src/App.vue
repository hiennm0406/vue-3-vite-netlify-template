
<template>
  <sidebar-menu @update:collapsed="onToggleCollapse" :menu="menu" />
  <div id="Mainboard" :class="{ collapsed: isCollapsed }">
    <router-view />
  </div>
</template>

<script >

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  data: function() {
    return {
      isCollapsed: true,
      users: [],
      //https://yaminncco.github.io/vue-sidebar-menu/#/basic-usage
      menu: [
          {
            header: 'RAGNAROK',
            hiddenOnCollapse: true,
            showOneChild: true,
          },
          {
            to: '/',
            title: 'Main Page',
            icon: {
              element: 'span',
              class: 'icon40 icon_main',
            }
          },
          {
            href: { name: 'History' },
            title: 'Lịch sử thế giới',
            icon: {
              element: 'span',
              class: 'icon40 icon_history',
            },
            showOneChild: true,
            child: [
              {
                href: { name: 'firstRagnarok' },
                title: 'The first ragnarok'
              }
            ]
          },
          {
            href: { name: 'Setting' },
            title: 'Tổng quan - Setting',
             icon: {
              element: 'span',
              class: 'icon40 icon_setting',
            },
            showOneChild: true,
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
            href: { name: 'Character' },
            title: 'Nhân vật',
            icon: 'fa fa-chart-area',
            icon: {
              element: 'span',
              class: 'icon40 icon_character',
            },
            showOneChild: true,
            child: [
               {
                href: { name: 'CharacterDkyrie' },
                title: 'Dkyrie',
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
    },
    onToggleCollapse(collapsed) {
      this.isCollapsed = collapsed;
    },
  }
}
</script>

<style>
@import "./css/global.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#Mainboard{
  padding-left: 290px;
}
#Mainboard.collapsed{
  padding-left: 65px !important;
}
</style>
