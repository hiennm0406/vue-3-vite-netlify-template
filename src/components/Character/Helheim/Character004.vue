<template>
   <h2>{{name}}</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/004.jpg" style="height: 400px ;"/>
      </td>
      <td class="text_left">
        <h2>Level:</h2>
        <br/>
        <Slider v-model="value" :max="15" :min="1" />
        <h2>Stat:</h2>
        <p><b>Might: </b>{{might}}</p>
        <p><b>Energy: </b>{{energy}}</p>
        <p><b>Endurance: </b>{{endurance}}</p>
         <br/>
        <p><b>Health: </b>{{endurance * 10}}</p>
        <p><b>Armor: </b>{{might + endurance}}</p>
        <p><b>Resis: </b>{{energy + endurance}}</p>
        <p>Class: Human (esper) - Original: Midgard</p>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="btn-group" style="text-align: center;">
          <button :class="{active:active=='skill'}" @click="active='skill'">Skill</button>
          <button :class="{active:active=='link'}" @click="active='link'">Link</button>
          <button :class="{active:active=='perk'}" @click="active='perk'">Ascensions</button>
          <button :class="{active:active=='bg'}" @click="active='bg'">Background</button>
          <button :class="{active:active=='info'}" @click="active='info'">Thông tin thêm</button>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00401.png" style="height: 40px ;"/></div>
          <div class="name">Incarnation</div>
          <div class="type">Type: 1-o</div>
          <div class="cost">1 AP</div>
          <div class="tag"><effect/> SHIELD GHOST </div>
          <div class="description"> Nếu đang ở trạng thái linh hồn, [] vào người đồng minh bên cạnh.
            Nếu đang ở trạng thái nhập hồn, xuất hồn ra ô trống bất kỳ. 
          </div>
           <div class="description">Nếu đang ở trạng thái linh hồn, nhập vào người đồng minh ít máu nhất, hồi phục lại cho
            đồng minh đó 5% máu tối đa.
            Nếu đang ở trạng thái nhập hồn, hồi phục lại cho đồng minh đó 5% máu tối đa, 
            rồi xuất hồn ra ô trống bất kỳ.
          </div>
        </div>
      </td>
       <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00402.png" style="height: 40px ;"/></div>
          <div class="name">High voltage</div>
          <div class="type">Type: 2-o</div>
          <div class="cost">1AP</div>
          <div class="tag"><effect/> GHOST </div>
          <div class="description">Nếu đang ở trạng thái linh hồn, nhập vào người đồng minh bên cạnh.
            Nếu đang ở trạng thái nhập hồn. Xuất hồn khỏi đồng minh và nhập vào người đồng minh ít máu nhất ngoài
            đồng minh đang nhập. Tạo một liên kết giữa 2 đồng minh đó. Khi một người nhận sát thương,
            người còn lại nhận hộ 30% sát thương.
          </div>
          <div class="description">Nếu đang ở trạng thái linh hồn, nhập vào người đồng minh bên cạnh.
            Nếu đang ở trạng thái nhập hồn. Xuất hồn khỏi đồng minh và nhập vào người đồng minh ít máu nhất ngoài
            đồng minh đang nhập. Tạo một liên kết giữa đồng minh đang nhập và đồng minh ít máu nhất khác. Khi một người nhận sát thương,
            người còn lại nhận hộ 30% sát thương.
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00403.png" style="height: 40px ;"/></div>
          <div class="name">Usurp</div>
          <div class="type">Type: 4-o</div>
          <div class="tag">SHIELD </div>
          <div class="description">Lựa chọn 1 đồng minh đã chết ngẫu nhiên, [Chiếm hữu] thân thể đồng minh đó.
            Hồi sinh đồng minh đó với 1 máu.
          </div>
          <div class="description">Lựa chọn 1 đồng minh đã chết ngẫu nhiên, [Chiếm hữu] thân thể đồng minh đó.
            Hồi sinh đồng minh đó với 1 máu và có một lớp giáp vật lý bằng 200% Endurance (<span class="phys">({{2 * endurance}})</span>)
          </div>
      </div>
      </td>
      <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00404.png" style="height: 40px ;"/></div>
          <div class="name">Symbiotic</div>
          <div class="type">Type: o-4</div>
          <div class="tag"> <attack/> <lightning/> <multi/> <instantly/> <bond/> </div>
          <div class="description">Khi nhập hoặc xuất hồn. Hồi phục đồng minh được nhập/xuất 5% máu tối đa.
          </div>
          <div class="description">Khi nhập hoặc xuất hồn. Hồi phục đồng minh được nhập/xuất 5% máu tối đa.
            Tạo một lớp giáp vật lý bằng 200% Endurance (<span class="phys">({{2 * endurance}})</span>) cho mục tiêu 
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td colspan="2"><span style="font-size: smaller;">Lưu ý chỉ số sát thương trong skill là tương đối, chưa tính hiệu ứng tăng lên từ artifact, trait.</span></td>
    </tr>
    

    <tr v-if="active=='perk'">
      <td colspan="2">
          <table class="perk_table">
             <tr>
              <td class="box" colspan="2"></td>
              <td class="box" colspan="2"></td>
            </tr>
            <tr>
              <td></td>
              <td class="box"></td>
              <td class="box"></td>
              <td></td>
            </tr>
            <tr>
              <td class="box red">
              </td>
              <td class="box"></td>
              <td class="box"></td>
              <td class="box red">
              </td>
            </tr>
            <tr>
              <td></td>
              <td class="box"></td>
              <td class="box"></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td class="box"></td>
              <td class="box"></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td class="box"></td>
              <td class="box">
              </td>
              <td></td>
            </tr>
            <tr>
              <td class="box red">
              </td>
              <td class="box red"></td>
              <td class="box red"></td>
              <td class="box red"></td>
            </tr>
          </table>
      </td>
    </tr>
    <tr v-if="active=='skill' || active=='perk' ">
      <td colspan="2">
        <table>
          <tr>
            <td><img src="../../../assets/character/ghost.png" class="icon40"/></td>
            <td>Haunted: Ma ám, có một bóng ma đang trú ngụ trong thân thể này.</td>
          </tr>
          <tr>
            <td><img src="../../../assets/character/00403.png" class="icon40"/></td>
            <td>Usurp: Kẻ này đã chết và đang bị chiếm đoạt thân thể. Sẽ chết khi linh hồn đó rời khỏi.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr v-if="active=='info'">
      <td colspan="2">
          <p>Rachel là 1 trong những nhân vật xuất hiện từ đầu game. Và cũng là nhân vật hướng dẫn chúng ta trong tutorial.</p>

<p>Về lối chơi, cô ấy là một trong những core char tôi sử dụng để làm minh chứng về sự đa dạng của xây dựng nhân vật. Một cô gái nhỏ nhắn đáng yêu, nhưng có thể vừa là một khẩu railgun gây sát thương kinh khủng. Hoặc có thể chọn hướng làm kẻ chống chịu với kỹ năng counter đáng sợ, đương nhiên là kèm theo một chút rủi ro.</p>
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
          if(x.id == "002"){
              this.dataChar = x;
              this.might = x.Stat.Might;
              this.energy = x.Stat.Energy;
              this.endurance = x.Stat.Endurance;
              this.name = x.name;
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
      name:'',
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