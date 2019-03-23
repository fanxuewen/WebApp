import Router from 'vue-router';
import Home   from './components/home/HomeContainer.vue'
import NewsList from './components/home/NewsList.vue'
import NewsInfo from './components/home/NewsInfo.vue'
import PicturesShare from './components/home/PicturesShare.vue'
import PictureInfo from './components/home/PictureInfo.vue'
import PhoneProduct from './components/home/PhoneProduct.vue'
import PhoneInfo from './components/home/PhoneInfo.vue'

import Member from './components/member/MemberContainer.vue'
import Cart   from './components/cart/CartContainer.vue'
import Search from './components/search/SearchContainer.vue'

let router =new Router({
routes:[
    {path:'/',redirect:'home'} ,
    {path:'/home',component:Home,},
    {path:'/home/news',component:NewsList},
    {path:'/member',component:Member},
    {path:'/cart',component:Cart},
    {path:'/search',component:Search},
    {path:'/home/newsinfo/:id',component:NewsInfo},
    {path:'/home/pictures',component:PicturesShare},
    {path:'/home/pictureinfo/:typeid/:id',component:PictureInfo},
    {path:'/home/phones',component:PhoneProduct},
    {path:'/home/phoneinfo/:id',component:PhoneInfo},
   ]

});
export default router