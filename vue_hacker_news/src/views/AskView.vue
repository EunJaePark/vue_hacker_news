<template>
  <header>
      <ol class="list">
          <li v-for="item in list" v-bind:key="item.id">
              <b>{{ item.time_ago }} </b>
              <span>by {{ item.user }}</span> <br/>
              <a v-bind:href="item.url" target="blank">{{ item.title }}</a>
              <span>( {{ item.comments_count }} )</span>
          </li>
      </ol>
  </header>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            list: [],
        }
    },
    created() {
        axios.get('https://api.hnpwa.com/v0/ask/1.json').
        then( res => {
            this.list = res.data;
        })
    }
}
</script>

<style>

</style>