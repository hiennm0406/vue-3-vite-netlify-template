<template>
  <div>
   <button onclick="increment()"></button>>
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
  // created: function() {
  //   this.$axios.get(this.$api_url + "users")
  //   .then(res => {
  //     this.users = res.data;
  //   });
  // }
};
</script>