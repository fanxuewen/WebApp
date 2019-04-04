<template>
  <div class="cart-container">
    <div v-if="goods.length>0">
      <div class="card" v-for="item in goods" :key="item.imgUrl" id="item.title">
        <div class="body">
          <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="switchCheck(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
          <img :src="item.imgUrl">
          <div class="info">
            <h4>{{item.title}}</h4>
            <div class="content">
              <span class="price">￥{{item.price}}</span>
              <counter-shop
                :max="item.maxNum"
                class="counter"
                :current="$store.getters.getGoodsCount[item.id]"
                :goodsId="item.id"
              ></counter-shop>
              <a @click.prevent="del(item.id)" class="delete">删除</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="computed">
          <div class="info">
            <p>总计(不含运费)</p>
            <p>已选商品<strong class="num">{{$store.getters.getAll.count}}</strong>件，总价<strong class="num">￥{{$store.getters.getAll.sum}}</strong></p>
          </div>
          <button class="submit">结算</button>
        </div>
      </div>
    
    </div>
    <div v-else class="empty">购物车空空如也......</div>
  </div>
</template>


<script>
import CounterShop from "../commom/CounterShop.vue";
import axios from "axios";

export default {
  name: "cartcontainer",
  data() {
    return {
      value: true,
      goods: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      let ids = "";
      this.$store.state.goods.forEach(element => {
        ids += element.id + ",";
      });

      axios
        .get("api/phones/carts", {
          params: {
            ids: ids.substring(0, ids.length - 1)
          }
        })
        .then(response => {
          this.goods = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    del(id) {
      let leng = this.goods.length;
      for (let i = 0; i < leng; i++) {
        if (this.goods[i].id === id) {
          this.goods.splice(i, 1);
          break;
        }
      }
      this.$store.state.goods = this.goods;
      localStorage.setItem("cart", JSON.stringify(this.goods));
    },
    switchCheck(id,state){
      this.$store.commit('updateSelected',{id,state});
    }
  },
  components: {
    CounterShop
  }
};
</script>
<style scoped lang='scss'>
.cart-container {
  padding: 0 0.5rem;
  .card {
    .computed {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      font-size: 0.9rem;
      color: #b7b2b2;
      p {
        margin: 0.5rem 0;
        .num{
          color: red;
          margin: 0 .4rem;
        }
      }
      .submit {
        padding: 0.5rem 0.8rem;
        color: white;
        border-radius: 0.2rem;
        margin-right: 1rem;
        letter-spacing: 0.2rem;
        background: #f03d3d;
        border: 0;
        text-align: center;
      }
    }
    cursor: pointer;
    margin: 0.6rem auto;
    border-radius: 0.2rem;
    box-shadow: 0 4px 8px 0 rgba(83, 78, 78, 0.2),
      0 6px 20px 0 rgba(177, 151, 151, 0.19);
    .body {
      padding-bottom: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        height: 5.5rem;
      }
      .content {
        margin: 0.6rem 0;
        .counter {
          margin: 0 0.6rem;
        }
        .price {
          color: red;
          font-weight: 800;
        }
      }
    }
  }
  .empty {
    text-align: center;
     margin: 5rem;
    font-size: 1.5rem;
   
  }
}
</style>

