<template>
  <div>
     <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.src" :class="{full:isFull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props:['list','isFull'],
  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item{
    text-align: center;
    img{
    
      height: 100%;
    }
    .full{
      width: 100%;
      
    }
  }
}
</style>
