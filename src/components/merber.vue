<template>
  <div >
  	<headbar></headbar>		
    <div id="setting" class="mui-page">
      <!--页面主内容区开始-->
      <div class="mui-page-content">
        <div id="li">
          <div class="mui-scroll">
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right" >
                  <img class="mui-media-object mui-pull-left head-img" id="head-img" src="">
                  <div class="mui-media-body">
                    {{this.$store.state.userinformation.name}}
                    <p class='mui-ellipsis'>账号:{{this.$store.state.userinformation.username}}</p>
                  </div>
                </a>
              </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron">
              <li class="mui-table-view-cell">
                <a  class="mui-navigate-right">个人信息</a>
              </li>
            </ul>
              <div class="mui-content" width="100%">
                <div class="mui-card">
                  <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse">
                      <a class="mui-navigate-right" href="#">所属社团</a>
                      <div class="mui-collapse-content" >
                        <h3 v-for="(item,index) in arr" v-if="index>=1">{{item}}</h3>
                      </div>
                    </li>
                     <li class="mui-table-view-cell mui-collapse">
                      <a class="mui-navigate-right" href="#">将要参加的活动</a>
                      <div class="mui-collapse-content">
                        <router-link v-for="item in see":key="item.id" :to="{path:'/notice/detail',query:{id:item.id}}">{{item.name}}{{item.atime}}<br></router-link>
                      </div>
                    </li>
                     <li class="mui-table-view-cell mui-collapse">
                      <a class="mui-navigate-right" href="#">已经参加过的活动</a>
                      <div class="mui-collapse-content">
                        <h3 v-for="item in seed">{{item.name}} {{item.atime}}</h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell" style="text-align: center;">
                <a>退出登录</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--页面主内容区结束-->
    </div>  	
  	<footbar></footbar>	
  </div>
</template>
<script>
import headbar from './headbar.vue'
import footbar from './footbar.vue'
  export default{
   data(){
    return{
      result:[]
    }
   },
   components:{headbar,footbar},
   computed :{
    arr (){
      return this.$store.state.userinformation.belong
    },
    see (){
      let timearr=this.$store.state.userinformation.atten;
      return timearr.filter(item=>new Date(item.atime).getTime()>Date.now())
    },
    seed (){
      let timearr=this.$store.state.userinformation.atten;
      return timearr.filter(item=>new Date(item.atime).getTime()<Date.now())
    }
   }
  }
</script>
<style scoped>
.mui-table-view:nth(2n){margin:0;font-size:30px;color:red;}
.mui-table-view {
  margin-top: 20px;
}
.mui-content{
  width:100%;
}
.mui-card{margin:0}
#li{width:100%;}
</style>