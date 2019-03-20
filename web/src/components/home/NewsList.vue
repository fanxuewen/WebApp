/* eslint-disable */
<template>
  <div>
    <ul>
       <li v-for="item in news"  :key="item.id">
        <img :src="item.imgUrl">
        <div class="brife">
          <h4>{{item.title}}</h4>
          <div class="operator">
            <span>时间:{{item.postTime}}</span>
            <span>点击次数:{{item.clickTimes}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'newslist',
    data(){
        return {
            news:[]
        }
    },
    created(){
        this.getNews();
    },
    methods:{
      getNews(){
          var that = this;
      axios
        .get("api/news")
        .then(function(response) {
          that.news = response.data.result;
        })
        .catch(function(error) {

           console.log(error);
        });
      }
    }
};
</script>
<style scoped  lang="scss">
li {
   height: 3.1rem;
   padding: .5rem;
   min-width: 200px;
  border-bottom: 1px solid #dedbdb;
  img {
    float: left;
    height: 3rem;
  }
  .brife {
    display: flex;
    height: 3rem;
    flex-direction: column;
    h4{
        padding-left: 5px;
        overflow: hidden;
       white-space:nowrap;
        text-overflow: ellipsis;
    }
    .operator{
        display: flex;
        justify-content:space-between;
        font-size: 0.8rem;
          padding: .5rem;
        span{
          color:rgba(21, 34, 219, 0.8)
        }
        
    }
  }
}
</style>

