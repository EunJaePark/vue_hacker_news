<template>
  <ol class="list">
      <li v-for="item in list" v-bind:key="item.id">
          <b>{{ item.time_ago }} </b>
          <span>by {{ item.user }}</span> <br/>
          <a v-bind:href="item.url" target="blank">{{ item.title }}</a>
          <router-link :to="`/item/${item.id}`"><span>( {{ item.comments_count }} )</span></router-link>
      </li>
  </ol>
</template>

<script>
export default {
    computed: {
        list() {
            return this.$store.state.list;
        }
    },
    created() {
        this.$store.dispatch('FETCH_LIST', 'news');
    }
}
</script>

<style>

</style>