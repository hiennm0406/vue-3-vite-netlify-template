<template>
  <h3>Jotunheim</h3>
  <p></p>
  <div class="char_table">
    <div>
      <router-link :to="{ name: 'Character003'}">
        <img src="./../../assets/character/003.jpg" class="img_char"/>
        Obri The Exalted
      </router-link>
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