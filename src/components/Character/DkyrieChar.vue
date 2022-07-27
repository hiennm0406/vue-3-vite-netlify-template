<template>
  <h3>Dkyrie</h3>
  <p>Dkyrie là những người được chọn tham gia vào dự án Dkyrie của Tập đoàn New Life. Những cá nhân này đều được tuyển chọn từ những tình nguyện viên có bệnh hiểm nghèo, không còn sống được bao lâu nữa, tham gia vào những thí nghiệm biến đổi gen và công nghệ nano sinh học nhằm kích phát tiềm năng sâu thẳm nhất của mỗi cá nhân.</p>
  <p>Nhưng không một ai biết, đằng sau đó là cả một âm mưu...</p>
    <router-link :to="{ name: 'Character001'}">Trần Ngọc Minh</router-link>
</template>

<style scoped>
a {
  color: #42b983;
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