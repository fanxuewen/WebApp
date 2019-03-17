<template>
  <footer class="app-footer">
     <div class="app-link">
      <router-link  to="home"><span class="base-icon home-icon"></span><span >首页</span></router-link >
       <router-link  to="member"><span class="base-icon member-icon"></span><span >会员</span></router-link >
       <router-link  to="cart"><span class="base-icon cart-icon"></span><span>购物车</span></router-link >
       <router-link  to="search"><span class="base-icon search-icon"></span><span>搜索</span></router-link >
   
     </div>
      

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
  height: 60px;
  background: #eee;
}
div.app-link {

    display:flex;
    align-items: center;
    justify-content: space-around;
}
a{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-decoration: none;
    padding-top: 4px;
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
.router-link-active{
    color: rgba(51, 133, 255, 1);
}

</style>