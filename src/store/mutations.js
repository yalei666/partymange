export default {
	saveUser (state,arr){
		state.userinformation=arr
	},
	add(state,value){
		state.userinformation.belong.push(value)
	},
	addac(state,para){
		state.userinformation.atten.push(para)
	}
}