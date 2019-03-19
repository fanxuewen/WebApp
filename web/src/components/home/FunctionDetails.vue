<template>
  <div class="main">
    <div class="row">
      <a class="box">
        <span class="base-icon fruit-icon"></span>
        <span class="content">水果</span>
      </a>
      <a class="box">
        <span class="base-icon vagetables-icon"></span>
        <span class="content">蔬菜</span>
      </a>
      <a class="box">
        <span class="base-icon snacks-icon"></span>
        <span class="content">零食</span>
      </a>
    </div>
    <div class="row">
      <a class="box">
        <span class="base-icon shoes-icon"></span>
        <span class="content">鞋类</span>
      </a>
      <a class="box">
        <span class="base-icon ball-icon"></span>
        <span class="content">球类</span>
      </a>
      <a class="box">
        <span class="base-icon phone-icon"></span>
        <span class="content">手机</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FunctionDetails"
};
</script>
<style scoped lang="scss">
.main {
  background-color: rgba(255, 81, 80, 0.8);
  .row {
    display: flex;
    .box {
      border: 1px solid white;
      width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5px;
      .base-icon {
      
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: blue;
     
        
      }
      .fruit-icon{
           background: url("../../assets/img/fruit.png") no-repeat 8px;
           background-color: rgba(5, 236, 36, 0.8);
      }
      .vagetables-icon{
           background: url("../../assets/img/vagetables.png") no-repeat 8px;
            background-color: rgba(5, 97, 236, 0.925);
      }
      .snacks-icon{
           background: url("../../assets/img/snacks.png") no-repeat 8px;
            background-color: rgba(236, 26, 156, 0.8);
      }
      .shoes-icon{
           background: url("../../assets/img/shoes.png") no-repeat 8px;
            background-color: rgba(14, 250, 117, 0.8);;
      }
      .ball-icon{
           background: url("../../assets/img/ball.png") no-repeat 8px;
            background-color: rgba(161, 209, 30, 0.8);
      }
       .phone-icon{
           background: url("../../assets/img/phone.png") no-repeat 8px;
            background-color: rgba(226, 12, 112, 0.8);
      }
      .content {
        color: white;
        font-family: "\5B8B\4F53";
        margin-top: 5px;
        font-size: 1.1rem;
      }
    }
  }
}
</style>