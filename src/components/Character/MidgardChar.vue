<template>
  <h3>Midgard</h3>
  <p>Trái Đất năm 2050 được bao trùm bởi nền công nghệ tân tiến, ngay cả con người cũng tiến một bước dài trên bậc thang tiến hóa.</p>
  <p>Trong đó nổi tiếng nhất là công nghệ Cybord, thay thế một phần cơ thể của con người bằng các dụng cụ máy móc tân tiến. Ngoài ra còn rất nhiều những công nghệ khác phụ trợ như sóng điện não, vũ khí tối tân, cường hóa giác quan.</p>
    <router-link :to="{ name: 'Character002'}">Rachel Carney</router-link>

  <div class="char_table">
    <div>
      <img src="./../../assets/character/001.jpg" class="img_char"/>
      <router-link :to="{ name: 'Character001'}">Trần Ngọc Minh</router-link>
    </div>
      <div>
      <img src="./../../assets/character/stefanie.png" class="img_char"/>
      Helena Stefanie
    </div>
      <div>
      <img src="./../../assets/character/VTQ.jpg" class="img_char"/>
      Vương Thiếu Quân
    </div>
      <div>
      <img src="./../../assets/character/Jopher.jpg" class="img_char"/>
        Ali Jopher
    </div>
      <div>
      <img src="./../../assets/character/Lucy.jpg" class="img_char"/>
        Lucy 
    </div>
      <div>
      <img src="./../../assets/character/Beaker.jpg" class="img_char"/>
        Grand Beaker 
    </div>
      <div>
      <img src="./../../assets/character/Suzuko.jpg" class="img_char"/>
        Suzuko 
    </div>
      <div>
      <img src="./../../assets/character/Sona.jpg" class="img_char"/>
        Sona Blinz
    </div>
      <div>
      <img src="./../../assets/character/Jacky.jpg" class="img_char"/>
        Jacky Mile
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