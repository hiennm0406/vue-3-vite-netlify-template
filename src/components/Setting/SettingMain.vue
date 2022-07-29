<template>
   <h2>Setting game</h2>
   <table  class="table_content">
    <tr>
      <td>
        <h3>Character</h3>
        <ul>
          <li><router-link :to="{ name: 'level'}">Level</router-link></li>
          <li><router-link :to="{ name: 'attribute'}">Attribute</router-link></li>
           <li><router-link :to="{ name: 'skill'}">Skill</router-link></li>
          <li><router-link :to="{ name: 'trait'}">Trait</router-link></li>
           <li><router-link :to="{ name: 'ascen'}">Ascensions</router-link></li>
        </ul>
      </td>
      <td><h3>Battle</h3>
       <ul>
          <li><router-link :to="{ name: 'tactic'}">Tactic</router-link></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <h3>World</h3>
        <ul>
          <li><router-link :to="{ name: 'Midgard'}">Midgard</router-link></li>
          <li><router-link :to="{ name: 'Asgard'}">Asgard</router-link></li>
          <li><router-link :to="{ name: 'Alfheim'}">Alfheim</router-link></li>
          <li><router-link :to="{ name: 'Vanaheim'}">Vanaheim</router-link></li>
          <li><router-link :to="{ name: 'Muspelheim'}">Muspelheim</router-link></li>
          <li><router-link :to="{ name: 'Svartalfheim'}">Svartalfheim</router-link></li>
          <li><router-link :to="{ name: 'Jotunheim'}">Jotunheim</router-link></li>
          <li><router-link :to="{ name: 'Nilfheim'}">Nilfheim</router-link></li>
          <li><router-link :to="{ name: 'Helheim'}">Helheim</router-link></li>
        </ul>
      </td>
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