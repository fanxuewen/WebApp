<template>
  <div class="comment">
    <h4>发表评论</h4>
    <textarea placeholder="请输入要BlaBla的内容(最多200个字)" maxlength="200" v-model="msg"></textarea>
    <button class="btn btn-primary" @click="postComments">发布评论</button>
    <ul class="comment-list">
      <li class="comment-item" v-for="(item,index) in comments" :key="index">
        <div
          class="content-title"
        >第{{index+1}}楼&nbsp;用户：{{item.name}} &nbsp;时间：{{item.time |dateFormat}}</div>
        <div class="content-body">{{ item.content}}</div>
      </li>
    </ul>
    <button class="btn btn-outline" @click="getMore">加载更多</button>
    <div class="no-more" v-show="more">没有更多了......</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "usercomment",
  props: ["id"],
  data() {
    return {
      comments: [],
      pageIndex: 1,
      more: false,
      msg: ""
    };
  },
  created() {
    this.getComments();
  },

  methods: {
    getComments() {
      let that = this;
      axios.get("api/comments", {
          params: {
            id: this.id,
            pageIndex: this.pageIndex
          }
        })
        .then(function(response) {
          that.more = response.data.length < 10 ? true : false;
          that.comments = that.comments.concat(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComments() {
      if (this.msg.trim() == "") {
        alert("消息不能为空");
        return;
      }
      let that=this;
      let time=new Date().toISOString();
      axios.post("api/comments", {
          id: this.id,
          comment: {
            content: this.msg,
            time: time
          }
        })
        .then(function(response) {
         that.comments.unshift({content:that.msg,time:time,name:response.data.name});
         that.msg="";
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.comment {
  margin: 0.5rem 0;
  padding: 0.3rem 0;
  border-top: 1px solid rgba(231, 222, 222, 0.8);
  textarea {
    width: 100%;
    height: 3.6rem;
    resize: none;
    border: 1px solid rgb(127, 115, 115);
  }
  h4 {
    margin: 0.3rem 0;
  }
  ul > li:first-child {
    padding-top: 0.5rem;
  }
  .btn {
    width: 100%;
    text-align: center;
    border-radius: 0.2rem;
    padding: 0.4rem;
    background-color: #eee;
    border-color: #eee;
    appearance: none;
    cursor: pointer;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .btn:hover {
    opacity: 0.8;
  }
  .btn-primary {
    background-color: rgba(51, 133, 255, 1);
    border-color: rgba(51, 133, 255, 1);
    color: white;
  }
  .btn-outline {
    color: rgb(219, 58, 58);
    background-color: white;
    border: 1px solid rgb(219, 58, 58);
  }
  .comment-item {
    list-style: none;
    .content-title {
      background: rgba(231, 222, 222, 0.8);
      padding: 0.2rem;
      font-size: 0.8rem;
    }
    .content-body {
      padding: 0.5rem 2rem;
    }
  }
  .no-more {
    text-align: center;
    padding-top: 0.5rem;
  }
}
</style>
