import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(VueRouter);

Vue.config.productionTip = false

import router from './router'
import '../node_modules/mint-ui/lib/swipe/style.css'

new Vue({
  el:'#app',
  render: h => h(App),
  router
})
