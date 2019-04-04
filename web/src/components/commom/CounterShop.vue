<template>

      <span class="counter-box">
       <button :class="['btn',{'disable':decEnable}]" @click="decrease" :disabled="decEnable">-</button>
       <input type="text" class="num" :value="currentNum" @change="setCount" ref="nums">
       <button :class="['btn',{disable:addEnable}]" @click="increase" :disabled="addEnable">+</button>
    </span>
 
</template>

<script>
export default {
  name:"countershop",
  props:["max","current","goodsId"],
data(){
  return {
     currentNum:this.current,
    addEnable:false,
    decEnable:false
  }
},
methods:{
  increase(){
   if( this.currentNum>=this.max){
      this.addEnable=true;
       this.decEnable=false;
      return;
    }
       this.decEnable=false;
    
   this.currentNum=parseInt(this.currentNum) +1;
     this.setCount();
   if( this.currentNum>=this.max){
      this.addEnable=true;
       this.decEnable=false;
    }
  },
  decrease(){
    this.currentNum=parseInt(this.currentNum) -1;
    this.setCount();
    if(this.currentNum<=0){
           this.decEnable=true;
           this.addEnable=false;
      }
  },
  setCount(){
  this.$store.commit("updateCart",{"id":this.goodsId,"nums":this.currentNum})
    
  
   
  }
  
}

};
</script>

<style lang='scss' scoped>
.counter-box{
   .num{
     padding: .2rem;
     width:2rem;
   }
   .btn{
      padding:.2rem .5rem;
      background: #d1cccc;
   }
   .disable{
     cursor:not-allowed;
     background: #ccc;
   }

}
</style>
