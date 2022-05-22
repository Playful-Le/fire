<template>
  <div>{{"页面不存在"+s+"秒以后为您跳转至主页"}}</div>
</template>
<script>
export default {
  data(){return{s:3,}},
  mounted(){
    let timer=setInterval(()=>{
      this.s-=1;
      if(this.s<=0){
        clearInterval(timer);
        console.log(this.s);
        this.$router.push({name:'index'});
      }},1000);
  }}
</script>