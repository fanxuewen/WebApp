<template>
 <div id="app">
    <!-- 头部 -->
    <div class="header">
     简易手机网站
    </div>
     <!-- 正文 -->
    <div class="app-content">
      <transition>
           <router-view></router-view>
      </transition>
    </div> 
     <!-- 底部导航 -->
    <footer class="app-footer">
      <div class="app-link">
       <router-link  to="/home"><span class="base-icon home-icon"></span><span >首页</span></router-link >
       <router-link  to="/member"><span class="base-icon member-icon"></span><span >会员</span></router-link >
       <router-link  to="/cart"><span class="base-icon cart-icon"></span><span>购物车</span></router-link >
       <router-link  to="/search"><span class="base-icon search-icon"></span><span>搜索</span></router-link >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
  
}
</script>

<style lang="scss">
 *{
   margin: 0;
   padding: 0;
 }

 body{
   font-size: 16px;
   font-family:'宋体', Helvetica, sans-serif;
 }
  a{
     text-decoration: none;
 }
 .ql-align-justify+h4{
   margin-bottom: 0.8rem !important;
 }
 .header{
  background: rgba(51, 133, 255, 1); 
  text-align: center;
  padding: 8px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  position: fixed;
  z-index: 9999;
  width: 100%;
}
 .app-content{
  padding: 37px 0 60px 0;
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
    a{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 
    padding-top: 4px;
}
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
