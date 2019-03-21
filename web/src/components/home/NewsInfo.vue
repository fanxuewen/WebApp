<template>
  <div class="new-container">
    <h4>{{article.title}}</h4>
    <div class="newmark">
      <span>发表时间:{{article.postTime | dateFormat}}</span>
      <span>点击次数:{{article.clickTimes}}</span>
    </div>
    <div class="content" v-html="article.content"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "newsinfo",
  data() {
    return {
      id: this.$route.params.id,
      article: {}
    };
  },
  created() {
    this.getNew();
  },
  methods: {
    getNew() {
      let that = this;
      axios
        .get("api/news", {
          params: {
            id: this.id
          }
        })
        .then(function(response) {
          that.article = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped  lang="scss">
.new-container {
  h4 {
    text-align: center;
  }
  padding: 0.8rem;
  .newmark {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;
    span {
      padding: 0.8rem 1.2rem;
      font-size: 0.8rem;
      color: rgba(51, 133, 255, 1);
    }
  }
  .content {
    padding-top: 1rem;
    h4{
      margin-bottom: 0.8rem;
    }
   
  }
}

</style>

