<template>
  <div id="app">
		<header class="mui-bar mui-bar-nav">
			<p class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack"></p>
			<h1 class="mui-title">{{title}}</h1>
		</header>  	
  </div>
</template>
<script>
  export default{
   data(){
    return{
    }
   },
   props:['title'],
   methods:{
   	goBack () {
   		this.$router.push({name:'home'});
   	}
   }
  }
</script>
<style scoped>
.mui-bar.mui-bar-nav{
	position:relative;
}
</style>