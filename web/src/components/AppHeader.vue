<template>
  <div class="header">
     {{msg}}
  </div>
 </template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header{
  background: rgba(51, 133, 255, 1);
  text-align: center;
  padding: 8px;
  color: white;
  font-size: 1.2rem;
  font-family: '宋体';
  font-weight: bold;
  position: fixed;
  z-index: 9999;
  width: 100%;
}
</style>
