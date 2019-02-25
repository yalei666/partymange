<template>
  <div class="tmp1">
  	<nav-bar title="社团详情"></nav-bar>	
  	<div class="news-title">
  		<p style="text-align:center" v-text="partyDetail.name"></p>
  	</div>
  	<div class="news-content" >
  		<p>社团名称：{{partyDetail.name}}</p>
  		<p>社团简介：{{partyDetail.content}}</p>
      <img :src="partyDetail.img" alt="" width="100%">
  	</div>
		<span class="mui-btn mui-btn-primary" @click=report>
		我要报名
		</span>	
  </div>
</template>
<script>
import axios from 'axios'
import mui from '../../static/vendor/mui/dist/js/mui.min.js'
export default{
	data(){
	  return {
	  	partyDetail:{},
	  	msg:"",
      username:""
	  }	
	},
	created () {    
		let id=this.$route.query.id;
		axios.get('/partys/detail',{
			params: {
				id
			}
		}).then(res=>{
    	this.partyDetail=res.data.result[0];
    })
    .catch(err=>{
    	console.log(err)
    })
	},
	methods:{
      report () {
         axios.get('/partys/report',{
          params:{
            username:this.$store.state.userinformation.username,
            name:this.partyDetail.name
          }
        })
        .then(res=>{
        this.msg=res.data.msg
        mui.toast(this.msg)
        this.$store.commit('add',this.partyDetail.name)
        })
        .catch(err=>{
        console.log(err)
        })
      }
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
.news-content p{color:black;}
.mui-btn{margin:0 auto;display:block;width:80px;}

</style>