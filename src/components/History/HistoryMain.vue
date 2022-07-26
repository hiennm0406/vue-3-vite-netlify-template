<template>
   <h2>Kỷ xa xưa</h2>
    <router-link :to="{ name: 'firstRagnarok'}">Ragnarokr lần đầu tiên</router-link>
    <router-link :to="{ name: 'TheUnion'}">Ngày tái hợp</router-link>
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