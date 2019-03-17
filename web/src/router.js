import Router from 'vue-router';
import Home   from './components/home/HomeContainer.vue'
import Member from './components/member/MemberContainer.vue'
import Cart   from './components/cart/CartContainer.vue'
import Search from './components/search/SearchContainer.vue'

let router =new Router({
routes:[
    {path:'/',redirect:'home'} ,
    {path:'/home',component:Home},
    {path:'/member',component:Member},
    {path:'/cart',component:Cart},
    {path:'/search',component:Search},
   ]

});
export default router