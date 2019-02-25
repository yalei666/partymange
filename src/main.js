// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './../static/vendor/mui/dist/css/mui.css'
import mui from './../static/vendor/mui/dist/js/mui.min.js'
import './../static/css/global.css'
import NavBar from './components/common/navBar.vue'
import Store from './store/index.js'

mui('body').on('tap','a',function(){document.location.href=this.href;});
Vue.use(Mint)
Vue.use(Vuex)

Vue.component('navBar',NavBar);

Vue.config.productionTip = false

Vue.prototype.Axios = Axios;

const store=Store()

/* eslint-disable no-new */
new Vue({
  el: '#App',
  router,
  store,
  components: { App },
  template: '<App/>'
})
