
<template>
  <sidebar-menu @update:collapsed="onToggleCollapse" :menu="menu" :showOneChild="true" />
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
      isCollapsed: false,
      users: [],
      //https://yaminncco.github.io/vue-sidebar-menu/#/basic-usage
      menu: [
          {
            header: 'RAGNAROK',
            hiddenOnCollapse: true,
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
            }            
          },
          {
            href: { name: 'Setting' },
            title: 'Tổng quan - Setting',
             icon: {
              element: 'span',
              class: 'icon40 icon_setting',
            }            
          },
          {
            title: 'Nhân vật',
            icon: 'fa fa-chart-area',
            icon: {
              element: 'span',
              class: 'icon40 icon_character',
            },
            child: [
               {
                href: { name: 'CharacterDkyrie' },
                title: 'Dkyrie',
              },
              {
               href: { name: 'CharacterMidgard' },
                title: 'Midgard'
              },
              // {
              //   href: '/1',
              //   title: 'Asgard'
              // },
              // {
              //   href: '/CharacterJotunheim',
              //   title: 'Alfheim'
              // },
              // {
              //   href: '/1',
              //   title: 'Vanaheim'
              // },
              // {
              //   href: '/1',
              //   title: 'Muspelheim'
              // },
              // {
              //   href: '/1',
              //   title: 'Svartalfheim'
              // },
              {
                 href: { name: 'CharacterJotunheim' },
                title: 'Jotunheim'
              },
              // {
              //   href: '/1',
              //   title: 'Nilfheim'
              // },
              // {
              //   href: '/1',
              //   title: 'Helheim'
              // },
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
<style src="@vueform/slider/themes/default.css"></style>
<style>
@import "./css/global.css";
@import 'vue-slider-component/theme/antd.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#Mainboard{
  padding-left: 290px;
}
#Mainboard.collapsed{
  padding-left: 65px !important;
}
</style>
