<template>
  <div >
  	<headbar></headbar>
     <div id="list">		
      <div  class="mui-card" v-for="news in newsList" :key="news._id">
        <div class="mui-card-header mui-card-media">
          <img class="center" :src="news.imgicon" />
          <div class="mui-media-body">
            <span class="center">{{news.own}}</span>
          </div>
          <!--<img class="mui-pull-left" src="../images/logo.png" width="34px" height="34px" />
          <h2>小M</h2>
          <p>发表于 2016-06-30 15:30</p>-->
        </div>
        <div class="mui-card-content" >
          <img :src="news.img" alt="" width="100%"/>
            <p>活动时间:{{news.time}} 上午</p>
            <p style="color: #333;">{{news.brief}}</p>          
        </div>
        <div class="mui-card-footer">
          <span class="mui-card-link">需要：{{news.need}}</span>
          <span class="mui-card-link">剩余:{{news.left}}个名额</span>
          <router-link class="mui-card-link" :to="{path:'/notice/detail',query:{id:news._id}}">查看更多和报名</router-link>
        </div>
      </div>          
     </div>     

  	<footbar></footbar>	
  </div>
</template>
<script>
import headbar from './headbar.vue'
import footbar from './footbar.vue'
import axios from 'axios'
  export default{
   data(){
    return{
      newsList:[],
    }
   },
   created () {
    axios.get('/active/list')
     .then(res=> {
       this.newsList=res.data.result;
     })
   },
   components:{headbar,footbar},
   methods:{
     report () {
     }
   }
  }
</script>
<style>
.mui-card-footer p{color:#007aff}
.center{
  vertical-align:middle;
  line-height:30px;
}
</style>