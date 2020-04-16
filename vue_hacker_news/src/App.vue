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

.fade-enter-active{ transition:all 1s ease-out; }

ol{ margin:0; padding:20px 40px; background-color:rgb(250, 241, 223); position:relative; }
ol > li{  margin-bottom:30px; }
ol > li > b{ margin-right:10px; color:rgba(53, 52, 52, .5); }
ol > li  span{ color:rgba(53, 52, 52, .5); font-weight:400; }
ol > li > a{  margin:5px 5px 0 0; font-weight:700; font-size:18px; color:#353434; display:inline-block; }

.loadingView{  width:100%; height:100%; background-color:rgb(250, 241, 223); position:absolute; left:0; top:0; z-index:1000; }
.loadingView > *{ position:absolute; top:200px; left:50%; transform:translateX(-50%); }
.loadingText{ padding:10px 0; font-size:30px; color:#353434; }
.loadingBar{ width:100px; height:50px; background-color:rgb(255, 190, 51); transition:width 1s ease-out; }
</style>
