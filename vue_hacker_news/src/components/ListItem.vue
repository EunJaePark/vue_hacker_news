<template>
    <ol class="list">
      <div class="loadingView">
          <div class="loadingBar"></div>
          <span class="loadingText">loading...</span>
      </div>
      
        <li v-for="item in list" v-bind:key="item.id">
            <b>{{ item.time_ago }} </b>
            <span>by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></span> <br/>
            <!--v-if조건을 줘서 jobs에서는 작성자와 댓글을 안보이게 해보자!!!-->
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
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
            // this.$store.dispatch('FETCH_LIST', 'ask');
            this.$store.dispatch('FETCH_LIST', this.$route.name);
            localStorage.setItem('nav', this.$route.name);
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