<template>
  <div>
      <!-- {{ userInfo }} -->
      <strong>User Name: {{ userInfo.id }}</strong>
      <b>Write: {{ userInfo.created }}</b>
      <b>Karma: {{ userInfo.karma }}</b>
  </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        this.$store.dispatch('FETCH_USER', this.$route.params.id);
    }
}
</script>

<style scoped>
div{ margin-top:30px; }
div > *{ display:block; }
strong{ font-size:20px; color:rgb(255, 190, 51); }
b{ font-weight:400; }
</style>