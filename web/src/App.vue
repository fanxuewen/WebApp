<template>
  <div id="app">
   <div class="header">
     简易手机购物网站
  </div>
    <div class="app-content">
     <transition>
           <router-view></router-view>
     </transition>
    </div> 
    <footer class="app-footer">
     <div class="app-link">
       <router-link  to="home"><span class="base-icon home-icon"></span><span >首页</span></router-link >
       <router-link  to="member"><span class="base-icon member-icon"></span><span >会员</span></router-link >
       <router-link  to="cart"><span class="base-icon cart-icon"></span><span>购物车</span></router-link >
       <router-link  to="search"><span class="base-icon search-icon"></span><span>搜索</span></router-link >
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
  
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
 .header{
  background: rgba(51, 133, 255, 1); 
  /* background: rgba(255, 81, 80, 0.8); */
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
 .app-content{
  padding-top: 36px;
  overflow-x: hidden;
  
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: ease .5s;
}
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
    background-image: url('./assets/img/home.png')

}
.member-icon{
    background-image: url('./assets/img/member.png')

}
.cart-icon{
    background-image: url('./assets/img/cart.png')

}
.search-icon{
    background-image: url('./assets/img/search.png')

}
span{
    color: black;
}
a.router-link-active span{
    color: rgba(51, 133, 255, 1);
}
</style>
