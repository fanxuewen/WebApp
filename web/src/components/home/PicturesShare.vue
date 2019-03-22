<template>
  <div>
    <!-- 头部 -->
    <div class="scroller">
      <a
        href="#"
        :class="['scroller-item',item.id==selectedId? 'scroller-active':'']"
        v-for="item in pictures"
        :key="item.id"
        @click="selectedId=item.id"
      >{{item.title}}</a>
    </div>

    <ul>
  <li v-for="item in list" :key="item.id">
    <img v-lazy="item">
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
      selectedId: 0
    };
  },
  created() {
    this.getPictursHeader();
  },

  methods: {
    getPictursHeader() {
      let that = this;
      axios
        .get("api/pictures")
        .then(function(response) {
            console.log(response);
          that.pictures = that.pictures.concat(response.data.result);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang='scss' scoped>
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
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
