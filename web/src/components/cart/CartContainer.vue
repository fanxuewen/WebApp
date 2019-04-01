<template>
  <div class="cart-container">
    
    <div v-if="goods.length>0">
             <div class="card" v-for="item in goods" :key="item.imgUrl" id="item.title">
      <div class="body">
        <mt-switch v-model="item.selected"></mt-switch>
        <img
          :src="item.imgUrl"
          
        >
        <div class="info">
          <h4>{{item.title}}</h4>
          <div class="content">
            <span class="price">￥{{item.price}}</span>
            <counter-box :max="item.maxNum" class="counter"></counter-box>
            <a  @click.prevent="del(item.id)" class="delete">删除</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div v-else class="empty">
       购物车空空如也......
    </div>

  
  </div>
</template>


<script>
import CounterBox from "../commom/CounterBox.vue";
import axios from 'axios'
import $ from "jquery";
export default {
  name: "cartcontainer",
  data() {
    return {
      value: true,
      goods:[]
    };
  },
  created(){
    this.getGoodsList();
  },
  methods:{
    getGoodsList(){
      let ids=''
      this.$store.state.goods.forEach(element => {
        ids+=element.id+','
      });
     
      axios
        .get("api/phones/carts", {
          params: {
           ids:ids.substring(0,ids.length-1),
           
          }
        })
        .then(response=>
          this.goods=response.data
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    del(id){
      let leng= this.goods.length;
      for(let i=0;i<leng;i++){
        if(this.goods[i].id===id){
          this.goods.splice(i,1);
          break;
        }
      }

    }
  },
  components: {
    CounterBox
  }
};
</script>
<style scoped lang='scss'>
.cart-container {
  padding: 0 0.5rem;
  .card {
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
      .content{
        margin: .6rem 0;
        .counter{
            margin :0 0.6rem
        }
        .price{
          
          color: red;
          font-weight: 800;
        }
      }
    }
  }
  .empty{
    text-align: center;
   
    margin: 10rem;
    font-size: 1.5rem;
    animation: empty 2s infinite ease-in alternate;
    @keyframes empty {
      from{
        transform: rotate(0);
      }
      to{
          transform: rotate(50deg);
      }
    }
  }
}
</style>

