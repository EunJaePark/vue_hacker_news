<template>
    <header>
        <router-link
            :class="{'click': click === 'yes' && index === 1}"
            @click.native="clickBg(1, 'yes')"
            to="/news">News</router-link>
        <router-link
            :class="{'click': click === 'yes' && index === 2}"
            @click.native="clickBg(2, 'yes')"
            to="/Ask">Ask</router-link>
        <router-link 
            :class="{'click': click === 'yes' && index === 3}"
            @click.native ="clickBg(3, 'yes')"
            to="/Jobs">Jobs</router-link>
    </header>
</template>

<script>
export default {
    data() {
        return {
            index: 1,
            click: 'no'
        }
    },
    // computed: {
    //     baseIndexClick() {
    //         this.index = 1
    //         this.click = 'yes'
    //     }
    // },
    methods: {
        clickBg(index, click) {
            this.index = index
            this.click = click
        }
    }
}
</script>

<style>
header{  padding:15px 30px; background-color:rgb(255, 190, 51); }
header > *{ margin-right:20px; padding:5px 10px; text-decoration:none; color:#fff; font-weight:600; font-size:20px; }
header > *:hover{ text-decoration:underline; }

.click{ background-color:rgba(255, 255, 255, .4); text-decoration:underline; }
</style>