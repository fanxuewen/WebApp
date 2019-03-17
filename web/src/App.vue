<template>
  <div id="app">
   
   <app-header msg="购物网站"></app-header>
   <app-content></app-content>
   <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from  './components/app/AppHeader.vue'
import AppContent from  './components/app/AppContent.vue'
import AppFooter from  './components/app/AppFooter.vue'

export default {
  name: 'app',
  components: {
   AppHeader,
   AppContent,
   AppFooter
  }
}
</script>

<style>
 *{
   margin: 0;
   padding: 0;
 }
 body{
   font-size: 16px;
   font-family:Arial, Helvetica, sans-serif;
 }
</style>
