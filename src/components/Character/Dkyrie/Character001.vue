<template>
   <h2>Trần Ngọc Minh</h2>
   <table>
    <tr>
      <td>
        <img src="../../../assets/character/001.jpg"/>
      </td>
      <td>
        Stat:
         <vue-slider v-model="value" />
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
import json from './../../data/data.json';
export default {
  data: function() {
    return {
      users: [],
      value:0
    };
  },
  methods: {
    show() {
     json.forEach(x => { console.log(x.firstname, x.lastname); });
    }
  }
}
 
</script>