import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui';
import moment from 'moment'
import VuePreview from 'vue2-preview'

Vue.use(VuePreview)
Vue.use(MintUI);
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
