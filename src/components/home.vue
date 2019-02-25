<template>
  <div>
     <headbar></headbar>
     <div id="swipe">
       <mt-swipe  :show-indicators="false">
         <mt-swipe-item>
           <img src="./../assets/pc1.png" alt="">
         </mt-swipe-item>
         <mt-swipe-item>
           <img src="./../assets/pic2.png" alt="">
         </mt-swipe-item>
       </mt-swipe>
     </div>
     <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
        </ul> 
     </div>
     <div id="list">
       <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="news in newsList" :key="news._id" >
          <router-link :to="{path:'/news/detail',query:{id:news._id}}">
            <img class="mui-media-object mui-pull-left" :src="news.img">
            <div class="mui-media-body">
              <span>{{news.title}}</span>
              <div class="message">
                <p>文章作者:{{news.author}}</p>
                <p>发表时间:{{news.time}}</p>
              </div>
            </div>
          </router-link>
        </li>
       </ul>
     </div>
     <footbar></footbar>  
  </div>
</template>
<script>
import headbar from './headbar.vue'
import footbar from './footbar.vue'
import axios from 'axios'
export default{
  data () {
    return {
      newsList:[],
    }
  },
  created () {
     axios.get('/news/list')
      .then(res=>{
        this.newsList=res.data.result;
      })
  },
  components:{headbar,footbar}
}
</script scoped>
<style>

#swipe{
  width:100%;
   height:200px;
}
#swipe img{
  width:100%;
  height:100%;
}
#list{
  margin-top:5px;
}
</style>
