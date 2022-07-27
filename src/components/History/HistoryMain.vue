<template>
   <h1>Kỷ xa xưa</h1>
   <ul>
      <li><router-link :to="{ name: 'firstRagnarok'}">Ragnarokr lần đầu tiên</router-link></li>
      <li><router-link :to="{ name: 'TheUnion'}">Ngày tái hợp</router-link></li>
   </ul>

   <div id="myTimeline">
  <ul class="timeline-events">
    <li data-timeline-node="{ start:'2019-02-26 10:00',end:'2019-02-26 13:00',content:'<p>Event Body...</p>' }">Event Label</li>
    <li data-timeline-node="{ start:'2019-03-01 23:10',end:'2019-03-02 1:30' }">
      <span class="event-label">Event Label</span>
      <span class="event-content"><p>Event Body...</p></span>
    </li>
  </ul>
</div>
<div class="timeline-event-view"></div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>


<script>
import $ from "jquery";
export default {
  data: function() {
    return {
      users: [],
    };
  },
  mounted: function() {
      // $("#myTimeline").Timeline()
  } ,
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
 
</script>