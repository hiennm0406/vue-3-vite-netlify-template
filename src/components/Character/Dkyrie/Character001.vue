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
        <Slider v-model="value" :max="15" @change="changeValue" />
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
              this.might = x.Stat.Might;
              this.energy = x.Stat.Energy;
              this.endurance = x.Stat.Endurance;
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
    changeValue(){
      console.log(this.dataChar);
      this.might = increase(x.Stat.Might,x.Stat.MightEvo,this.value);
      this.energy = increase(x.Stat.Energy,x.Stat.EnergyEvo,this.value);
      this.endurance = increase(x.Stat.Endurance,x.Stat.EnduranceEvo,this.value);
    },
    increase(input,type,level){
      for (let index = 0; index < level; index++) {
       if(type == "early"){
        input = input * json.StatEvolution.early[index];
       }
       else if(type == "late"){
        input = input * json.StatEvolution.late[index];
       }
       else if(type == "U"){
        input = input * json.StatEvolution.U[index];
       }
       else if(type == "uptodownU"){
        input = input * json.StatEvolution.uptodownU[index];
       }
       else if(type == "semi"){
        input = input * json.StatEvolution.semi[index];
       }
      }
      console.log(input);
      return input;
    }
  }
}
 
</script>