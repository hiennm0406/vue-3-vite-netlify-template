<template>
   <h2>Attribute</h2>

<p>Mỗi nhân vật có 3 Attribute chính, 3 attribute này kiểm soát gần như toàn bộ các chỉ số chính của trò chơi.</p>
<p>Ngoài ra nhân vật còn có các Attribute phụ khác.</p>

<h3>Main Attribute</h3>
<ul>
  <li>Might</li>
  <li>Enegry</li>
  <li>Endurance</li>
</ul>

   
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