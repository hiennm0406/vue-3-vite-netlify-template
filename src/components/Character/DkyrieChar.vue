<template>
  <h3>Dkyrie</h3>
  <p>Dkyrie là những người được chọn tham gia vào dự án Dkyrie của Tập đoàn New Life. Những cá nhân này đều được tuyển chọn từ những tình nguyện viên có bệnh hiểm nghèo, không còn sống được bao lâu nữa, tham gia vào những thí nghiệm biến đổi gen và công nghệ nano sinh học nhằm kích phát tiềm năng sâu thẳm nhất của mỗi cá nhân.</p>
  <p>Nhưng không một ai biết, đằng sau đó là cả một âm mưu...</p>

  <table>
    <tr>
      <td>
        <img src="./../../assets/character/001.jpg" class="img_char"/>
        <router-link :to="{ name: 'Character001'}">Trần Ngọc Minh</router-link>
      </td>
       <td>
        <img src="./../../assets/character/stefanie.png" class="img_char"/>
        Helena Stefanie
      </td>
       <td>
        <img src="./../../assets/character/VTQ.jpg" class="img_char"/>
        Vương Thiếu Quân
      </td>
       <td>
        <img src="./../../assets/character/Jopher.jpg" class="img_char"/>
         Ali Jopher
      </td>
       <td>
        <img src="./../../assets/character/Lucy.jpg" class="img_char"/>
         Lucy 
      </td>
       <td>
        <img src="./../../assets/character/Beaker.jpg" class="img_char"/>
         Grand Beaker 
      </td>
       <td>
        <img src="./../../assets/character/Suzuko.jpg" class="img_char"/>
         Suzuko 
      </td>
       <td>
        <img src="./../../assets/character/Sona.jpg" class="img_char"/>
         Sona Blinz
      </td>
       <td>
        <img src="./../../assets/character/Jacky.jpg" class="img_char"/>
         Jacky Mile
      </td>
    </tr>
  </table>
</template>

<style scoped>
a {
  color: #42b983;
}

.img_char{
  width: 100px;
}
table{
  border-collapse: collapse;
}
table, td, th {
  border: 1px solid rgba(0, 0, 0, 0.185);
}
</style>


<script>
export default {
  data: function() {
    return {
      users: [],
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