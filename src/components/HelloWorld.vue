<div id="app">
    <ul v-for="user in users" :key="user.id">
      <li>{{user.id}}</li>
      <li>{{user.name}}</li>
      <li>{{user.username}}</li>
      <li>{{user.email}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      users: []
    };
  },
  created: function() {
    this.$axios.get(this.$api_url + "users")
    .then(res => {
      this.users = res.data;
    });
  }
};
</script>