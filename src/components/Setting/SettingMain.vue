<template>
   <h2>Setting game</h2>
   <table  class="table_content">
    <tr>
      <td>
        <h3>Character</h3>
        <ul>
          <li><router-link :to="{ name: 'attribute'}">Attribute</router-link></li>
        </ul>
      </td>
      <td><h3>Battle</h3></td>
    </tr>
   </table>
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