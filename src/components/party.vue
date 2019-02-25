<template>
  <div >
    <headbar></headbar>
     <div id="list">    
      <div  class="mui-card" v-for="partys in partyList" :key="partys._id">
        <div class="mui-card-header mui-card-media">
          <img class="center" :src="partys.imgicon" />
          <div class="mui-media-body">
            <span class="center">{{partys.name}}</span>
          </div>
          <!--<img class="mui-pull-left" src="../images/logo.png" width="34px" height="34px" />
          <h2>小M</h2>
          <p>发表于 2016-06-30 15:30</p>-->
        </div>
        <div class="mui-card-content" >
          <img :src="partys.img" alt="" width="100%"/>
            <p style="color: #333;">{{partys.breif}}</p>          
        </div>
        <div class="mui-card-footer">
          <router-link class="mui-card-link" :to="{path:'/party/detail',query:{id:partys._id}}">查看更多和报名</router-link>
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
      partyList:[],
    }
   },
   created () {
    axios.get('/partys/list')
     .then(res=> {
       this.partyList=res.data.result;
     })
   },
   components:{headbar,footbar}
  }
</script>
<style>
.mui-card-footer p{color:#007aff}
.center{
  vertical-align:middle;
  line-height:30px;
}
</style>