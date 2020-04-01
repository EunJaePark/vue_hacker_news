<template>
  <ol class="list">
      <li v-for="item in list" v-bind:key="item.id">{{ item }}</li>
  </ol>
</template>

<script>
export default {
    computed: {
        list() {
            return this.$store.state.commentlist;
        }
    }, 
    created() {
        this.$store.dispatch('FETCH_COMMENT', 'news/id'); 
    }
}
</script>

<style>

</style>