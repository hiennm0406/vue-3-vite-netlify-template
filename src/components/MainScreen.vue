<template>
 <sidebar-menu :menu="menu" />

 <span class="icon icon_main"></span>
  <div>
   <button @click="increment">12</button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
.icon{
  width: 10px;
}
.icon_main{
  background-image: url("./../assets/main.ico");
}
</style>


<script>
export default {
  data: function() {
    return {
      users: [],
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
              class: 'icon icon_main',
              // attributes: {}
              // text: ''
            }
          },
          {
            href: '/charts',
            title: 'Charts',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link'
              }
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