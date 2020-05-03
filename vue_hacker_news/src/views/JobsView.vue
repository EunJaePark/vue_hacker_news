<template>
  <!-- <ol class="list">
      <div class="loadingView">
          <div class="loadingBar"></div>
          <span class="loadingText">loading...</span>
      </div>
      
      <li v-for="item in list" v-bind:key="item.id">
          <b>{{ item.time_ago }}</b>
          <span>{{ item.user }}</span> <br/> 
          <a v-bind:href="item.url" target="blank">{{ item.title }}</a>
      </li>
  </ol> -->
  <list-item></list-item>
</template>

<script>
import listItem from '../components/ListItem'

export default {
    components: {listItem}
    // computed: {
    //     list() {
    //         return this.$store.state.list;
    //     }
    // },
    // created() {
    //     this.$store.dispatch('FETCH_LIST', 'jobs');
    // },
    // mounted() {
    //     let loadingView = document.querySelector('.loadingView');
    //     let loadingBar = document.querySelector('.loadingBar');

        
    //     requestAnimationFrame(function() {
    //         setTimeout(function() {
    //             loadingBar.style.width = '50%' 
    //         }, 0)
    //     })
       
    //     setTimeout(function() {
    //         loadingView.style.display = 'none'
    //     }, 300)
    // }
}
</script>

<style>

</style>