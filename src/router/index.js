import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/home.vue'
import login from './../components/login.vue'
import Add from './../components/add.vue'
import Merber from './../components/merber.vue'
import Notice from './../components/notice.vue'
import Footbar from './../components/footbar.vue'
import Headbar from './../components/headbar.vue'
import NewsDetail from './../components/newsDetail.vue'
import NoticeDetail from './../components/noticeDetail.vue'
import Party from './../components/party.vue'
import PartyDetail from './../components/PartyDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'login'}
    },
    {
      name: 'home',
      path: '/home',
      component: Home,      
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name:'add',
      path:'/add',
      component:Add
    },
    {
      name:'merber',
      path:'/merber',
      component:Merber      
    },
    {
     name:'notice',
     path:'/notice',
     component:Notice
    },
    {
      name:'headbar',
      path:'/headbar',
      component:Headbar
    },
    {
      name:'footbar',
      path:'/footbar',
      component:Footbar      
    },
    {
      name:'news.detail',
      path:'/news/detail',
      component:NewsDetail
    },
    {
      name:'notice.detail',
      path:'/notice/detail',
      component:NoticeDetail     
    },
    {
      name:'party',
      path:'/party',
      component:Party           
    },
    {
      name:'party.detail',
      path:'/party/detail',
      component:PartyDetail  
    }
  ],
  linkActiveClass:'mui-active'
})
