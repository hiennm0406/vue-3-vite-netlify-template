<template>
   <h2>Trần Ngọc Minh</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/001.jpg" style="height: 400px ;"/>
      </td>
      <td class="text_left">
        <h2>Level:</h2>
        <br/>
        <Slider v-model="value" :max="15" :min="1" />
         <h2>Stat:</h2>
        <h3><b>Might: </b>{{might}}</h3><br/>
        <h3><b>Energy: </b>{{energy}}</h3><br/>
        <h3><b>Endurance: </b>{{endurance}}</h3><br/>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="btn-group">
          <button :class="{active:active=='skill'}" @click="active='skill'">Skill</button>
          <button :class="{active:active=='link'}" @click="active='link'">Link</button>
          <button :class="{active:active=='perk'}" @click="active='perk'">Perk</button>
          <button :class="{active:active=='bg'}" @click="active='bg'">Background</button>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/001.jpg" style="height: 40px ;"/></div>
          <div class="name">Name</div>
          <div class="type">Type</div>
          <div class="cost">Cost</div>
          <div class="tag">Tag</div>
          <div class="description">Description 1 </div>
          <div class="description">Description 2 </div>
        </div>
      </td>
       <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/001.jpg" style="height: 40px ;"/></div>
          <div class="name">Name</div>
          <div class="type">Type</div>
          <div class="cost">Cost</div>
          <div class="tag">Tag</div>
          <div class="description">Description 1 </div>
          <div class="description">Description 2 </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/001.jpg" style="height: 40px ;"/></div>
          <div class="name">Name</div>
          <div class="type">Type</div>
          <div class="cost">Cost</div>
          <div class="tag">Tag</div>
          <div class="description">Description 1 </div>
          <div class="description">Description 2 </div>
      </div>
      </td>
      <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/001.jpg" style="height: 40px ;"/></div>
          <div class="name">Name</div>
          <div class="type">Type</div>
          <div class="cost">Cost</div>
          <div class="tag">Tag</div>
          <div class="description">Description 1 </div>
          <div class="description">Description 2 </div>
        </div>
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
  watch: {
    value(newValue, oldValue) {
      if (newValue != oldValue) {
        this.changeValue()
      }
    }
  },
  components: {
    Slider
  },
  data: function() {
    return {
      users: [],
      value:1,
      might:0,
      energy:0,
      endurance:0,
      dataChar:{},
      active:'skill'
    };
  },
  
  methods: {
    changeValue(){
      this.might = this.increase(this.dataChar.Stat.Might,this.dataChar.Stat.MightEvo,this.value-1);
      this.energy = this.increase(this.dataChar.Stat.Energy,this.dataChar.Stat.EnergyEvo,this.value-1);
      this.endurance = this.increase(this.dataChar.Stat.Endurance,this.dataChar.Stat.EnduranceEvo,this.value-1);
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
      var output = parseInt(input);
      return output;
    }
  }
}
 
</script>