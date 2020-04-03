<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default{
  components: {ToolBar}
}
</script>

<style>
#app{ width:900px; margin:0 auto; }

ol{ margin:0; padding:20px 40px; background-color:rgb(250, 241, 223); }
ol > li{  margin-bottom:30px; }
ol > li > b{ margin-right:10px; color:rgba(53, 52, 52, .5); }
ol > li  span{ color:rgba(53, 52, 52, .5); font-weight:400; }
ol > li > a{  margin:5px 5px 0 0; font-weight:700; font-size:18px; color:#353434; display:inline-block; }
</style>
