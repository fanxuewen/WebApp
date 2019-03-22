<template>
  <div>
    <!-- 头部 -->
    <div class="scroller">
      <a
        href="#"
        :class="['scroller-item',item.id==selectedId? 'scroller-active':'']"
        v-for="item in pictures"
        :key="item.id"
        @click="getPictursById(item.id)"
      >{{item.title}}</a>
    </div>

    <ul class="picture-list">
      <li v-for="item in list" :key="item.imgUrl" class="pictur-item">
        <img v-lazy="item.imgUrl">
        <div class="info">
            <h4 class="info-title">{{item.title}}</h4>
            <div class="info-body">{{item.brife}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "picturesshare",

  data() {
    return {
      pictures: [{ id: 0, title: "全部" }],
      selectedId: 0,
      list: []
    };
  },
  created() {
    this.getPicturs();
  },

  methods: {
    getPicturs() {
      let that = this;
      axios
        .get("api/pictures")
        .then(function(response) {
          that.pictures = that.pictures.concat(response.data[0]);
          that.list = response.data[1];
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getPictursById(id) {
      this.selectedId = id;
      let that = this;
      axios
        .get("api/pictures/type", {
          params: {
            id,
            time: new Date().getTime()
          }
        })
        .then(function(response) {
          that.list = response.data.reverse();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
.scroller {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(152, 148, 145, 0.6);
  overflow-x: scroll;
  overflow-y: hidden;
  text-align: center;
  background: #eee;
  box-sizing: border-box;
  .scroller-item {
    display: inline-block;
    height: 100%;
    padding: 0 1rem;
  }
  .scroller-active {
    background: rgba(207, 228, 227, 0.8);
  }
  .scroller-item:hover {
    background: rgba(207, 228, 227, 0.8);
  }
}

.scroller::-webkit-scrollbar {
  display: none;
}
.picture-list {
  padding-top: 1rem;
  list-style: none;
  background-color: #e4dddd;
  li {
    text-align: center;
    padding: 0.2rem;
    display: inline-block;
    width: 98%;
    box-shadow: 0 0 0.2rem #c5b9b9;
    position: relative;
    .info{
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
      
        width: 100%;
        background: rgba(213, 207, 207, 0.8);
        .info-title{
          margin-bottom: .5rem;
        }
        .info-body{
              font-size: 0.8rem;
        }
    }
   
    img,
    img[lazy="loading"] {
      width: 100%;
      height: 25rem;
        
    }
  }
  li:hover{
     box-shadow: 0 0 0.2rem #774545;; 
  }
  @media (min-width: 576px) {
    li {
      width: 49%;
    }
  }

  @media (min-width: 992px) {
    li {
      width: 33.3%;
    }
  }

  @media (min-width: 1200px) {
    li {
      width: 25%;
    }
  }
}
</style>
