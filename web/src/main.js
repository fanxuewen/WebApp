import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Swipe, SwipeItem } from 'mint-ui';
import moment from 'moment'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.filter('dateFormat',function(date,pattern="YYYY-MM-DD HH:mm:ss"){
   
     return moment(date).format(pattern);
})

import router from './router'
import '../node_modules/mint-ui/lib/swipe/style.css'

new Vue({
  el:'#app',
  render: h => h(App),
  router
})
