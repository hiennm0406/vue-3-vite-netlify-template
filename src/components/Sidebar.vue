<template>
 <sidebar-menu :menu="menu" />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>


<script>
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
            href: '/',
            title: 'Main Page',
            icon: {
              element: 'span',
              class: 'icon40 icon_main',
            }
          },
          {
            href: '/charts',
            title: 'Lịch sử thế giới',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link'
              }
            ]
          },
          {
            href: '/charts',
            title: 'Tổng quan - Setting',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Atribute'
              },
               {
                href: '/charts/sublink',
                title: 'Skill'
              },
              {
                href: '/charts/sublink',
                title: 'Skill link'
              },
              {
                href: '/charts/sublink',
                title: 'Tactic'
              },
              {
                href: '/charts/sublink',
                title: 'Artifact'
              },
              {
                href: '/charts/sublink',
                title: 'Rune'
              },
              {
                href: '/charts/sublink',
                title: 'Trait'
              },
              {
                href: '/charts/sublink',
                title: 'Awake'
              },
              
            ]
          },
          {
            href: '/charts',
            title: 'Nhân vật',
            icon: 'fa fa-chart-area',
            child: [
               {
                href: '/charts/sublink',
                title: 'Dkyrie'
              },
              {
                href: '/charts/sublink',
                title: 'Midgard'
              },
               {
                href: '/charts/sublink',
                title: 'Asgard'
              },
              {
                href: '/charts/sublink',
                title: 'Alfheim'
              },
              {
                href: '/charts/sublink',
                title: 'Vanaheim'
              },
              {
                href: '/charts/sublink',
                title: 'Muspelheim'
              },
              {
                href: '/charts/sublink',
                title: 'Svartalfheim'
              },
              {
                href: '/charts/sublink',
                title: 'Jotunheim'
              },
              {
                href: '/charts/sublink',
                title: 'Nilfheim'
              },
              {
                href: '/charts/sublink',
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