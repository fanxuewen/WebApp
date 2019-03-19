/* eslint-disable */
<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in headers" :key="item.id">
        <img :src="item.src">
      </mt-swipe-item>
    </mt-swipe>
    <function-details></function-details>
  </div>
</template>


<script>
import axios from "axios";
import FunctionDetails from "./FunctionDetails.vue"

export default {
  data() {
    return {
      headers: []
    };
  },
  components:{
    FunctionDetails
  },
  created() {
    this.getHeaderData();
  },
  methods: {
    getHeaderData() {
      var that = this;
      axios
        .get("api/header")
        .then(function(response) {
          that.headers = response.data.result;
        })
        .catch(function(error) {

           console.log(error);
        });
    }
  }
};
</script>
<style scoped lang="scss">
.mint-swipe {
  height: 200px;
  .mint-swipe-item{
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>

