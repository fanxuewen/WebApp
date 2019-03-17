<template>
  <div class="app-content">
   <home-container></home-container>
  </div> 
 </template>

<script>
import HomeContainer from '../home/HomeContainer.vue'
export default {
  name: 'AppContent',
  components:{
  HomeContainer
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-content{
  padding-top: 36px;
  border: 1px solid yellowgreen;
}
</style>