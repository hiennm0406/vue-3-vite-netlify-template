<template>
   <h2>Trần Ngọc Minh</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/001.jpg"/>
      </td>
      <td>
        <h2>Stat:</h2>
           <Slider v-model="value" :max="15" />
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
import Slider from '@vueform/slider'
export default {
  components: {
    Slider
  },
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