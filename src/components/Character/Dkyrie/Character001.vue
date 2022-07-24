<template>
    THIS IS CHARACTER PAGE
    <button @click="show"></button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>


<script>
import json from './../data/data.json';
export default {
  data: function() {
    return {
      users: [],
    };
  },
  methods: {
    show() {
     json.forEach(x => { console.log(x.firstname, x.lastname); });
    }
  }
}
 
</script>