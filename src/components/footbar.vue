<template>
  <div >
  	<nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " :to="{path:'/home'}">                             
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{path:'/notice'}">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">活动</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{path:'/party'}">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">社团</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{path:'/merber'}">
        <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">个人中心</span>
      </router-link>
    </nav>  
  </div>
</template>
<script>
  export default{
  	name:'footbar',
    data(){
    return{
    }
   },
   
  }
</script>
<style>
</style>