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