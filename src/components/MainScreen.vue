<template>
  <div>
   <button @click="increment">12</button>
  </div>
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
      users: []
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