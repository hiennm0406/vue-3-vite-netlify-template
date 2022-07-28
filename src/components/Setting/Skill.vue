<template>
   <h2>SKILL</h2>

<p>Mỗi nhân vật có từ 4 kỹ năng khác nhau. Có thể có một vài trường hợp đặc biệt nhiều hoặc ít hơn.</p>
<p>Ví dụ: <router-link :to="{ name: 'Character001'}">Kỹ năng của [Trần Ngọc Minh]</router-link></p>
<table class="table_content">
  <tr>
    <td style="padding-right:5px">
      <div class="skill_container">
        <div class="img"><img src="../../assets/character/00101.png" style="height: 40px ;"/></div>
        <div class="name">Kick hit</div>
        <div class="type">Type: 1-o</div>
        <div class="cost">1AP</div>
        <div class="tag"><attack/> <melee/> <single/> <phys/></div>
        <div class="description">Lao đến tấn công đối thủ bằng một cú đấm, gây ra sát thương vật lý bằng 200% Might</div>
        <div class="description">Lao đến tấn công đối thủ bằng một cú đấm, gây ra sát thương vật lý bằng 100% Might</div>
      </div>
    </td>
      <td style="padding-left:5px">
      <div class="skill_container">
        <div class="img"><img src="../../assets/character/00102.png" style="height: 40px ;"/></div>
        <div class="name">Martial art</div>
        <div class="type">Type: 2-o</div>
        <div class="cost">1AP</div>
        <div class="tag"><attack/> <melee/> <single/> <phys/> <effect/> <duration/> </div>
        <div class="description">Lao đến tấn công đối thủ bằng một cú đá mạnh, làm mất trọng tâm của địch thủ. Gây ra sát thương vật lý bằng 200% Might, đồng thời giảm sát thương của kẻ địch đi 10% trong turn này.</div>
        <div class="description">Lao đến tấn công đối thủ bằng một cú đá mạnh. Gây ra sát thương vật lý bằng 120% Might.</div>
      </div>
    </td>
  </tr>
  <tr>
    <td style="padding-right:5px">
      <div class="skill_container">
        <div class="img"><img src="../../assets/character/00103.png" style="height: 40px ;"/></div>
        <div class="name">Critical hit</div>
        <div class="type">Type: o-3</div>
        <div class="tag"><effect/> <phys/> <bond/> </div>
        <div class="description">Đòn tấn công vật lý này được tăng thêm 10% sát thương.</div>
    </div>
    </td>
    <td style="padding-left:5px">
      <div class="skill_container">
        <div class="img"><img src="../../assets/character/00104.png" style="height: 40px ;"/></div>
        <div class="name">Quick hit</div>
        <div class="type">Type: o-6</div>
        <div class="tag"><attack/> <melee/> <single/> <phys/> <bond/> </div>
        <div class="description">Sau khi tấn công, Trần Ngọc Minh sẽ tấn công đối thủ thêm 1 lần nữa, gây sát thương vật lý bằng 80% Might</div>
        <div class="description">Sau khi tấn công, Trần Ngọc Minh sẽ tấn công đối thủ thêm 1 lần nữa, gây sát thương vật lý bằng 40% Might</div>
      </div>
    </td>
  </tr>
</table>
<hr/>

<h3>Thông tin:</h3>
<p>Với mỗi skill sẽ có các điểm sau:</p>

<img src="./../../assets/other/skill.png"/>



<div class="btn-group" style="text-align: center;">
  <button :class="{active:active=='Type'}" @click="active='Type'">Type</button>
  <button :class="{active:active=='Cost'}" @click="active='Cost'">Cost</button>
  <button :class="{active:active=='Description'}" @click="active='Description'">Description</button>
</div>
<div v-if="active=='Type'">
  <h3>Tất cả skill của các nhân vật được chia làm 2 loại chính:</h3>
  <ul>
    <li>Active skill</li>
    <li>Bond skill</li>
  </ul>

  <h3>Active skill</h3>
  <p>Active skill là những skill tiêu tốn Action point để phát động. Để cast được Active Skill cần lựa chọn Tactic phù hợp với Type mà skill yêu cầu. Xem <router-link :to="{ name: 'tactic'}">Tactic</router-link> để nắm thêm thông tin.</p>
  <p>Có 4 loại Active skill:</p>
  <ul>
    <li>1-o</li>
    <li>2-o</li>
    <li>3-o</li>
    <li>4-o</li>
  </ul>
  <p>Ứng với mỗi ô Tactic Skill xếp ngay sát nhau của nhân vật đó trong Tactic Phase:</p>
  <table class="table_content">
    <tr>
      <td class="text_cen">1-o</td>
      <td class="text_cen">2-o</td>
      <td class="text_cen">3-o</td>
      <td class="text_cen">4-o</td>
    </tr>
    <tr>
      <td class="text_cen" style="border-right: 1px solid gray;"><img class="tactic_img ally" src="../../assets/character/demo4.png"/></td>
      <td class="text_cen" style="border-right: 1px solid gray;">
        <img class="tactic_img ally" src="../../assets/character/demo4.png"/>
        <img class="tactic_img ally" src="../../assets/character/demo4.png"/>
      </td>
      <td class="text_cen" style="border-right: 1px solid gray;">
        <img class="tactic_img ally" src="../../assets/character/demo3.png"/>
        <img class="tactic_img ally" src="../../assets/character/demo3.png"/>
        <img class="tactic_img ally" src="../../assets/character/demo3.png"/>
      </td>
      <td class="text_cen">
        <img class="tactic_img ally" src="../../assets/character/demo3.png"/>
        <img class="tactic_img ally" src="../../assets/character/demo3.png"/>
        <img class="tactic_img ally" src="../../assets/character/demo3.png"/>
        <img class="tactic_img ally" src="../../assets/character/demo3.png"/>
      </td>
    </tr>
  </table>

  <b>Lưu ý: Số lượng ô Tactic liền nhau phải khớp chính xác yêu cầu của skill. 3 ô Tactic liền nhau chỉ kích hoạt những skill 3-o. Không thể kích hoạt các skill 1-o và 2-o. Trong trận đánh. Nếu đã chọn xong Tactic mà nhân vật không có bất kỳ skill nào trùng Type với số lượng Tactic đã chọn. Nhân vật sẽ được tính là [Idle] - vẫn được coi là Action, nhưng không có bất kỳ hành động nào cả.</b>

  <br/>
  <br/>
  <h3>Bond skill</h3>
  <p>Bond skill là những skill Chỉ kích hoạt khi có 1 Active skill được kích hoạt, đồng thời Active skill chứa 1 ô Tactic phù hợp với yêu cầu của Bond Skill. Xem <router-link :to="{ name: 'tactic'}">Tactic</router-link> để nắm thêm thông tin.</p>
  <p>Có 8 loại Bond skill:</p>
  <ul>
    <li>o-1</li>
    <li>o-2</li>
    <li>o-3</li>
    <li>o-4</li>
    <li>o-5</li>
    <li>o-6</li>
    <li>o-7</li>
    <li>o-8</li>
  </ul>
  <p>Con số ở đây thể hiện ô Tactic mà nó yêu cầu.</p>
  <p>Ví dụ Bond Skill o-4 sẽ được kích hoạt khi có 1 Active Skill được sử dụng thành công, và Active skill đó phải nằm trên ô Tactic số 4.</p>
  <div>
    <span class="tactic"></span>
    <span class="tactic"></span>
    <span class="tactic"></span>
    <img class="tactic_img ally" src="../../assets/character/demo4.png"/>
    <span class="tactic"></span>
    <span class="tactic"></span>
    <span class="tactic"></span>
    <span class="tactic"></span>
  </div>

</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

</template>

<style scoped>
a {
  color: #42b983;
}
.icon{
  width: 60px;
}

.table_icon{
  width: 100%;
}
.table_icon tr td{
  text-align: center;
}
.round_content{
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.493);
  border-radius: 20px;
}
</style>


<script>
export default {
  data: function() {
    return {
      active:'Type'
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