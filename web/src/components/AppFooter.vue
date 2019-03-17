<template>
  <footer class="app-footer">
   <ul>
       <li><span class="base-icon home-icon"></span><a href="javascript:void(0)">首页</a></li>
       <li><span class="base-icon member-icon"></span><a href="javascript:void(0)">会员</a></li>
       <li><span class="base-icon cart-icon"></span><a href="javascript:void(0)">购物车</a></li>
       <li><span class="base-icon search-icon"></span><a href="javascript:void(0)">搜索</a></li>
   </ul>



  </footer>
 </template>

<script>
export default {
  name: 'AppFooter',
  data(){
      return{

          test:'123'
      }
  }
}
</script>

<style scoped>
.app-footer{

 position:fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 64px;
  background: #eee;
}
.app-footer ul {

    display:flex;
    align-items: center;
    justify-content: space-around;
}
li{
  
   list-style: none;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

a{
    text-decoration: none;
    padding-top: 8px;
}
.base-icon{
    background-position: center;
    background-repeat: no-repeat;
    height: 32px;
    width: 50px;
    display: inline-block;

}
.home-icon{
    background-image: url('../assets/img/home.png')

}
.member-icon{
    background-image: url('../assets/img/member.png')

}
.cart-icon{
    background-image: url('../assets/img/cart.png')

}
.search-icon{
    background-image: url('../assets/img/search.png')

}


</style>