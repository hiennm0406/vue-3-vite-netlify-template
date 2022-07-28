<template>
  <h3>Midgard</h3>
  <p>Trái Đất năm 2050 được bao trùm bởi nền công nghệ tân tiến, ngay cả con người cũng tiến một bước dài trên bậc thang tiến hóa.</p>
  <p>Trong đó nổi tiếng nhất là công nghệ Cybord, thay thế một phần cơ thể của con người bằng các dụng cụ máy móc tân tiến. Ngoài ra còn rất nhiều những công nghệ khác phụ trợ như sóng điện não, vũ khí tối tân, cường hóa giác quan.</p>

  <div class="char_table">
    <div>
      <img src="./../../assets/character/rachel.png" class="img_char"/>
      <router-link :to="{ name: 'Character002'}">Rachel Carney</router-link>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

.img_char{
  width: 100px;
}
.char_table{
  display: grid;
   grid-template-columns: repeat( auto-fit, minmax(50px, 200px) );
}
.char_table div{
  width:120px;
}

</style>


<script>
export default {
  data: function() {
    return {
    };
  },
}
 
</script>