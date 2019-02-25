<template>
  <div >
  		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">注册</h1>
		</header>
		<div class="mui-content">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" v-model= 'username'>
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model= 'userpassword'>
				</div>
				<div class="mui-input-row">
					<label>姓名</label>
					<input  type="text" class="mui-input-clear mui-input" placeholder="请输入真实姓名" v-model= 'name'>
				</div>
				<div class="mui-input-row">
					<label>班级</label>
					<input  type="text" class="mui-input-clear mui-input" placeholder="如 15级计算机1班" v-model= 'classnum'>
				</div>
				<div class="mui-input-row">
					<label>QQ</label>
					<input  type="text" class="mui-input-clear mui-input" placeholder="请输入QQ" v-model= 'QQ'>
				</div>
				<div class="mui-input-row">
					<label>手机号</label>
					<input  type="text" class="mui-input-clear mui-input" placeholder="请输入常用手机号" v-model= 'phone'>
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='reg' class="mui-btn mui-btn-block mui-btn-primary" @click=add>注册</button>
			</div>
		</div>
  </div>
</template>
<script>
import axios from 'axios' 
import mui from '../../static/vendor/mui/dist/js/mui.min.js'
export default{
   data(){
    return { 
      username: '',
      userpassword:'',
      name: '',
      classnum:'',
      QQ:'',
      phone:'',
      belong:[1], 
      atten:[1]
    }
   },
   methods: {
    add () { 
      axios.post('/users/add',{
       username:this.username,
       userpassword:this.userpassword,
       name:this.name,
       classnum:this.classnum,
       QQ:this.QQ,
       phone:this.phone,
       belong:this.belong,
       atten:this.atten
      }).then((response)=>{
       let res = response.data;
           if (res.status == '1') {
            mui.toast('注册成功');
        this.$router.push({name:'login'});
        	} else {
             mui.toast(res.msg);
            }
      })
    } 
   }
  }
</script>
<style scoped>
.area {
	margin: 20px auto 0px auto;
}
.mui-input-group:first-child {
	margin-top: 20px;
}
.mui-input-group label {
	width: 26%;
}
.mui-input-row label~input,
.mui-input-row label~select,
.mui-input-row label~textarea {
	width: 74%;
}
.mui-checkbox input[type=checkbox],
.mui-radio input[type=radio] {
	top: 6px;
}
.mui-content-padded {
	margin-top: 25px;
}
.mui-btn {
	padding: 10px;
}
</style>