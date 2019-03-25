<template>

      <span class="counter-box">
       <button :class="['btn',{'disable':decEnable}]" @click="decrease" :disabled="decEnable">-</button>
       <input type="text" class="num" :value="currentNum" @change="setCount" ref="nums">
       <button :class="['btn',{disable:addEnable}]" @click="increase" :disabled="addEnable">+</button>
    </span>
 
</template>

<script>
export default {
  props:["max"],
data(){
  return {
    currentNum:1,
    addEnable:false,
    decEnable:false
  }
},
methods:{
  increase(){
   if( this.currentNum>=this.max){
      this.addEnable=true;
      return;
    }
   this.currentNum=this.currentNum+1;
     this.$emit('getcount', this.currentNum);
   if( this.currentNum>=this.max){
      this.addEnable=true;
      
    }
  },
  decrease(){
    
    this.currentNum=this.currentNum-1;
      this.$emit('getcount',this.currentNum);
    if(this.currentNum<=0){
           this.decEnable=true;
           
      }
  },
  setCount(e){
  
    
   this.$emit('getcount',parseInt(this.$refs.nums.value));
   
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
