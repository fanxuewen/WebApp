<template>
  <div v-if="isShow" class="container">
    <h4 class="title">{{content.title}}</h4>
    <div class="sub-title">
      <span>发表时间:{{content.addTime}}</span>
      <span>点击：{{content.clickTime}}次</span>
    </div>
    
    <vue-preview
      :list="list"
      :thumbImageStyle="{width: '100px', height: '100px', margin: '10px'}"
      :previewBoxStyle="{border: '1px solid #eee'}"
      :tapToClose="true"
      @close="closeHandler"
      @destroy="destroyHandler"
      class="images"
    />
    <div class="content" v-html="content.content"></div>
    <user-comment :id="id"></user-comment>
  </div>

  <div v-else class="buliding">
    <h4>正在拼命构建中......</h4>
  </div>
</template>

<script>
import axios from "axios";
import UserComment from '../commom/UserComment.vue'
export default {
  name: "pictureinfo",

  data() {
    return {
      id: this.$route.params.id,
      typeid: this.$route.params.typeid,
      isShow: false,
      content: {},
      list: [
       
      ]
    };
  },
  components:{
   UserComment
  },
  created() {
    this.getPictureInfo();
    this.getImages();
  },
  methods: {
    getPictureInfo() {
      let that = this;
      axios
        .get("api/pictures/pictureinfo", {
          params: {
            id: that.id,
            typeid: that.typeid,
            time: new Date().getTime()
          }
        })
        .then(function(response) {
          that.isShow = response.data.success;
          that.content = response.data.content;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getImages() {
      let that = this;
      axios
        .get("api/pictures/picturepreview", {
          params: {
           typeid: that.typeid,
            time: new Date().getTime()
          }
        })
        .then(function(response) {
       
          that.list = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    closeHandler() {
      console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
 
  padding: 1rem;

  .title {
    text-align: center;
    padding-top: 0.5rem;
    color: #6516f0;
  }
  .sub-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #bdaeae;
    span {
      color: #ac9191;
    }
  }
  .images{
    text-align: center;
  }
  .content {
    font-size: 1rem;
    font-size: 0.9rem;
    line-height: 2rem;
   @media (max-width: 992px){
      text-indent: 2rem;
    }
    
  }
}

.buliding {
  text-align: center;
  padding-top: 2rem;
}
</style>

