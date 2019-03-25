
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        goods: JSON.parse(localStorage.getItem('cart')||'[]') 
        
        //{"id":1,"nums":2,"price":12，"selected":true}
    },
    getters: {
        getAllCount(state) {
            return state.goods.reduce((pre, cur) => { return pre + cur.nums }, 0);

        }
    },
    mutations: {
        addToCart(state, phoneinfo) {

            setTimeout(() => {
                let flag = true;
                for (let i = 0; i < state.goods.length; i++) {
                    if (state.goods[i].id == phoneinfo.id) {
                        state.goods[i].nums = state.goods[i].nums + phoneinfo.nums;
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    state.goods.push(phoneinfo);

                }
                localStorage.setItem('cart',JSON.stringify(state.goods));
            }, 1200);


        }
    }
});

export default store