<template>
  <div class="tmp1">
  	<nav-bar title="活动详情"></nav-bar>	
  	<div class="news-title">
  		<p style="text-align:center" v-text="noticeDetail.name"></p>
  	</div>
  	<div class="news-content" >
  		<p>活动发起部门：{{noticeDetail.own}}</p>
  		<p>活动时间：{{noticeDetail.time}}</p>
  		<p>活动地点：{{noticeDetail.place}}</p>
  		<p>活动内容：{{noticeDetail.content}}</p>
  		<p>活动要求：{{noticeDetail.ask}}</p>
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
	  	noticeDetail:{},
	  	msg:"",
      username:""
	  }	
	},
	created () {    
		let id=this.$route.query.id;
		axios.get('/active/detail',{
			params: {
				id,
			}
		}).then(res=>{
    	this.noticeDetail=res.data.result[0];
    })
    .catch(err=>{
    	console.log(err)
    })
	},
	methods:{
    report () {
    let infor=this.$store.state.userinformation;
    let param=this.noticeDetail;
      if(infor.belong.length==1&&!param.allow){
       mui.toast("您还没有报名参加社团，请前去报名") 
       return  
      }
      if(infor.belong.indexOf(param.own)==-1&&!param.allow){
        mui.toast("该活动仅对本社团成员开放")  
        return
      }
      let result=infor.atten.some(item=>item.name==param.name)
      if(result){
        mui.toast("你已经报名过该活动啦")  
        return
      }
      axios.get('active/report',{
        params:{
          username:infor.username,
          name:param.name,
          id:param._id,
          atime:param.time
        }
      })
      .then(res=>{
      this.msg=res.data.msg
      mui.toast(this.msg)
      this.$store.commit('addac',{name:param.name,time:param.time,id:param._id})
      console.log(infor.atten)
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