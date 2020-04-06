<template>
    <ol class="list">
      <div class="loadingView">
          <div class="loadingBar"></div>
          <span class="loadingText">loading...</span>
      </div>
      
        <li v-for="item in list" v-bind:key="item.id">
            <b>{{ item.time_ago }} </b>
            <span>by {{ item.user }}</span> <br/>
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            <router-link :to="`/item/${item.id}`"><span>( {{ item.comments_count }} )</span></router-link>
        </li>
    </ol>
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
    },
    mounted() {
        let loadingView = document.querySelector('.loadingView');
        let loadingBar = document.querySelector('.loadingBar');

        
        requestAnimationFrame(function() {
            setTimeout(function() {
                loadingBar.style.width = '50%' 
            }, 0)
        })
       
        setTimeout(function() {
            loadingView.style.display = 'none'
        }, 300)
    }
}
</script>

<style>

</style>