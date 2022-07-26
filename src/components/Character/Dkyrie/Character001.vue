<template>
   <h2>Trần Ngọc Minh</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/001.jpg"/>
      </td>
      <td class="text_left">
        <h2>Stat:</h2>
        <br/>
        <Slider v-model="value" :max="15" />
        <h3><b>Might: </b>{{might}}</h3><br/>
        <h3><b>Energy: </b>{{energy}}</h3><br/>
        <h3><b>Endurance: </b>{{endurance}}</h3><br/>
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
  mounted() {
   json.Character.forEach(x => { 
          if(x.id == "001"){
              this.dataChar = x;
            return;
          }
        }); ;
  },
  components: {
    Slider
  },
  data: function() {
    return {
      users: [],
      value:0,
      might:0,
      energy:0,
      endurance:0,
      dataChar:{}
    };
  },
  
  methods: {
    show() {
     json.forEach(x => { console.log(x.firstname, x.lastname); });
    },
    changeValue(){

    }
  }
}
 
</script>