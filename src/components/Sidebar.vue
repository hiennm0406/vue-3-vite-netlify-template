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
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link'
              }
            ]
          },
          {
            href: { name: 'Setting' },
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
            href: { name: 'Character' },
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