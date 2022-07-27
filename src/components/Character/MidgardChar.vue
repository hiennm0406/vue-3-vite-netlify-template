<template>
  <h3>Midgard</h3>
  <p>Trái Đất năm 2050 được bao trùm bởi nền công nghệ tân tiến, ngay cả con người cũng tiến một bước dài trên bậc thang tiến hóa.</p>
  <p>Trong đó nổi tiếng nhất là công nghệ Cybord, thay thế một phần cơ thể của con người bằng các dụng cụ máy móc tân tiến. Ngoài ra còn rất nhiều những công nghệ khác phụ trợ như sóng điện não, vũ khí tối tân, cường hóa giác quan.</p>
    <router-link :to="{ name: 'Character002'}">Rachel Carney</router-link>
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