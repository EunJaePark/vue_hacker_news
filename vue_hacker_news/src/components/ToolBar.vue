<template>
    <!-- <header>
        <router-link
            :class="{'click': index === 1}"
            @click.native="clickBg(1, 'yes')"
            to="/news">News</router-link>
        <router-link
            :class="{'click': index === 2}"
            @click.native="clickBg(2, 'yes')"
            to="/Ask">Ask</router-link>
        <router-link 
            :class="{'click': index === 3}"
            @click.native ="clickBg(3, 'yes')"
            to="/Jobs">Jobs</router-link>
    </header> -->
    <header>
        <router-link
            :class="{active:isNav.isNews}"
            @click.native="setNav()"
            to="/news">News</router-link>
        <router-link
            :class="{active:isNav.isAsk}"
            @click.native="setNav()"
            to="/Ask">Ask</router-link>
        <router-link 
            :class="{active:isNav.isJobs}"
            @click.native="setNav()"
            to="/Jobs">Jobs</router-link>
    </header>
</template>

<script>
export default {
    // data() {
    //     return {
    //         index: 1,
    //         click: 'yes'
    //     }
    // },
    // methods: {
    //     clickBg(index, click) {
    //         this.index = index
    //         this.click = click
    //     }
    // }
    data() {
        return{
            isNav: {
                isNews: true,
                isAsk: false,
                isJobs: false
            }
        }
    },
    methods: {
        setNav() {
            let currentName = localStorage.getItem('nav');
            let uppCrrName = currentName.charAt(0).toUpperCase() + currentName.slice(1); //위의 데이터명들인 isNews에 맞추기 위해 각각이름의 첫글자를 대문자로 바꿔준것.

            for(let item in this.isNav) {
                if(item === `is${uppCrrName}`) {
                    this.isNav[item] = true;
                } else {
                    this.isNav[item] = false;
                }
            }
        }
    }
}
</script>

<style>
header{  padding:15px 30px; background-color:rgb(255, 190, 51); }
header > *{ margin-right:20px; padding:5px 10px; text-decoration:none; color:#fff; font-weight:600; font-size:20px; }
header > *:hover{ text-decoration:underline; }

.click{ background-color:rgba(255, 255, 255, .4); text-decoration:underline; }
.active{ background-color:rgba(255, 255, 255, .4); text-decoration:underline; }
</style>