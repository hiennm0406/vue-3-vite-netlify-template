<template>
   <h2>Tactic</h2>

<p>Tactic - chiến thuật. Là một thanh gồm 8 ô trống.</p>
<div>
   <span class="tactic"></span>
   <span class="tactic"></span>
   <span class="tactic"></span>
   <span class="tactic"></span>
   <span class="tactic"></span>
   <span class="tactic"></span>
   <span class="tactic"></span>
   <span class="tactic"></span>
</div>
<p>Lúc bắt đầu trận đấu, sẽ có một đội được chỉ định đi trước. Thường là người chơi.</p>
<p>Lúc này, người chơi sẽ lựa chọn các đồng minh và gán từng nhân vật vào các ô Tactic ngẫu nhiên. Tối đa mỗi đội sẽ gán được vào 4 ô Tactic.</p>

<table>
  <tr>
    <td><img class="tactic_img" src="../../assets/character/demo1.png"/></td>
    <td><img class="tactic_img" src="../../assets/character/demo2.png"/></td>
    <td><div style="width:100px;"></div></td>
    <td><img class="tactic_img" src="../../assets/character/demo5.png"/></td>
    <td><img class="tactic_img" src="../../assets/character/demo6.png"/></td>
  </tr>
  <tr>
    <td><img class="tactic_img" src="../../assets/character/demo3.png"/></td>
    <td><img class="tactic_img" src="../../assets/character/demo4.png"/></td>
    <td></td>
    <td><img class="tactic_img" src="../../assets/character/demo7.png"/></td>
    <td><img class="tactic_img" src="../../assets/character/demo8.png"/></td>
  </tr>
  <tr>
    <td colspan="5">
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
    </td>
  </tr>
</table>

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