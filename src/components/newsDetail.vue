<template>

  <div class="tmp1">
  	<nav-bar title="新闻详情"></nav-bar>	
  	<div class="news-title">
  		<p v-text="newsDetail.title"></p>
  		<div>
  			<span>{{newsDetail.author}}</span>
  			<span>{{newsDetail.time}}</span>
  		</div>
  	</div>
  	<div class="news-content" v-text="newsDetail.text"></div>
  </div>
</template>
<script>
import axios from 'axios'
  export default{
   data(){
    return{
      newsDetail:{},
    }
   },
   created (){
   	 let id=this.$route.query.id;
     axios.get('/news/detail',{
     	params:{
     	  id
     	}
     })
     .then(res=>{
        this.newsDetail=res.data.result[0];  
     })
     .catch(err=>{
     	console.log(err);
     })
   }
  }
</script>
<style scoped>
.news-title p{
	color:#0a87f8;
	font-size:20px;
	font-weight:bold; 
}
.news-title span{
	margin-right:30px;
}
.news-title{
	margin-top:5px;
	border-bottom:1px solid rgba(0,0,0,0.2);
}
.news-content {
	padding:10 5;
}
</style>