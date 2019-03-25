<template>
  <div class="build">
    <h4>正在拼命构建中......</h4>
    <img src="../../assets/img/ing.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'build',

}
</script>

<style lang='scss' scoped>
  .build{
      text-align: center;
      border: 1px solid;
      width: 20rem;
      padding: 1rem;
      margin: 1rem auto;
      border-radius: .5rem;
      img{
          width: 11rem;
      }
  }
</style>
