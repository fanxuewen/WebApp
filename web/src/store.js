
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        goods: JSON.parse(localStorage.getItem('cart') || '[]')

        //{"id":1,"nums":2,"price":12，"selected":true}
    },
    getters: {
        getAllCount(state) {
            return state.goods.reduce((pre, cur) => { return pre + cur.nums }, 0);

        },
        getGoodsCount(state) {
            var o = {};
            state.goods.forEach(item => {
                o[item.id] = item.nums;
            });
            return o;
        },
        getGoodsSelected(state) {
            var o = {};
            state.goods.forEach(item => {
                o[item.id] = item.selected;
            });
            return o;
        },
        getAll(state){
            let leng= state.goods.length;
            let o={sum:0,count:0};
            for(let i=0;i<leng;i++){
               if(state.goods[i].selected){
                  o.sum+=parseInt(state.goods[i].nums)*parseInt(state.goods[i].price);
                  o.count+=parseInt(state.goods[i].nums);
               }
            }
            return o;
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
                localStorage.setItem('cart', JSON.stringify(state.goods));
            }, 1200);
        },
        updateCart(state, phoneInfo) {
            state.goods.some(item => {
                if (item.id == phoneInfo.id) {
                    item.nums = parseInt(phoneInfo.nums);
                    return true;
                }
            });
            localStorage.setItem('cart', JSON.stringify(state.goods));
        },
        updateSelected(state,info){
            state.goods.some(item=>{
                if (item.id==info.id){
                    item.selected=info.state;
                    return true;
                }
            });
            localStorage.setItem('cart', JSON.stringify(state.goods));
        }

    }
});

export default store