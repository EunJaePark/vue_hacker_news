<template>
  <ol class="list">
      <li v-for="item in list" v-bind:key="item.id">
          <b>{{ item.time_ago }} </b>
          <span>by {{ item.user }}</span> <br/>
          <a v-bind:href="item.url" target="blank">{{ item.title }}</a>
          <router-link to="/item/${item.id}">( {{ item.comments_count }} )</router-link>
      </li>
  </ol>
</template>

<script>
export default {
    computed: {
        list() {
            return this.$store.state.list;
            // return this.$store.state.commentlist;
        }
    },
    created() {
        this.$store.dispatch('FETCH_LIST', 'news');
        // this.$store.dispatch('FETCH_COMMENT', 'comment');
    }
}
</script>

<style>

</style>