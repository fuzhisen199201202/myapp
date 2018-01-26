<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  import {getlist,postlist} from './services/appServices.js'
export default {
  name: 'App',
  data:function(){
    return {

    }
  },
  created:function(){
      this.$router.replace('/login')
  }
}
</script>

<style type="text/css">
  @import "./style/style.css";
</style>
