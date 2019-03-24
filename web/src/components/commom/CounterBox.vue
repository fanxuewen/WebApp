<template>

      <span class="counter-box">
       <button :class="['btn',{'disable':decEnable}]" @click="decrease" :disabled="decEnable">-</button>
       <input type="text" class="num" :value="currentNum">
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
   if( this.currentNum>=this.max){
      this.addEnable=true;
      
    }
  },
  decrease(){
    
    this.currentNum=this.currentNum-1;
    if(this.currentNum<=0){
           this.decEnable=true;
           
      }
  },
  inputValue(e){
   let target =e.target||e.srcElement;
   let value =Number(target.value);
 
   if(Number.isNaN(value)){
       this.currentNum=0;
       target.value='';
       return false;
   }
   console.log(value);
   console.log(typeof value);
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
