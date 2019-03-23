<template>
  <ul class="goods-list">
    <!-- <router-link class="goods-item" v-for="item in phones" :key="item.id" tag="li" :to="'/home/phoneinfo/'+item.id">
      <img :src="item.imgUrl" alt>
      <h4>{{item.title}}</h4>
      
      <div class="info">
        <p class="price">
          <span class="now">{{item.now}}</span>
          <span class="old">{{item.old}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{item.number}}件</span>
        </p>
      </div>
    </router-link> -->
    <li class="goods-item" v-for="item in phones" :key="item.id" @click="goPhoneInfo(item.id)">
      <img :src="item.imgUrl" alt>
      <h4>{{item.title}}</h4>
      
      <div class="info">
        <p class="price">
          <span class="now">{{item.now}}</span>
          <span class="old">{{item.old}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{item.number}}件</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: "phoneproduct",
  data() {
    return {
      phones: []
    };
  },
  created() {
    this.getPhones();
  },
  methods: {
    getPhones() {
      var that = this;
      axios
        .get("api/phones")
        .then(function(response) {
          that.phones = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    goPhoneInfo(id){
     this.$router.push('/home/phoneinfo/'+id);
    }
  }
};
</script>

<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
ul {
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    border: 1px solid #ccc;
    box-shadow: 0 0 0.5rem rgb(209, 190, 190);
    width: 48%;
    margin: 1%;
     display: flex;
      flex-direction: column;
      justify-content: space-between;
    img {
      width: 100%;
      height: 14rem;
    }
    .info {
      background-color: #d9dbd287;
     
      .price {
        text-align: left;
        margin: 1rem;
        padding-top: 1rem;
        .now {
          color: red;
          font-weight: 900;
          margin-right: 2rem;
          font-size: 1.2rem;
        }
        .old {
          color: #666;
          text-decoration: line-through;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;

        padding: 0 1rem 0.5rem;
        span {
          color: #666;
        }
      }
    }
  }
  li:hover {
    border: 1px solid rgb(180, 158, 158);
    box-shadow: 0 0 0.5rem rgb(134, 96, 96);
  }
  @media (min-width: 576px) {
    li {
      width: 44%;
      margin: 1% 3%;
    }
  }

  @media (min-width: 992px) {
    li {
      margin: 1%;
      width: 31%;
    }
  }

  @media (min-width: 1200px) {
    li {
      margin: 1% 2%;
      width: 21%;
    }
  }
}
</style>
