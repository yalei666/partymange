import Vuex from 'vuex'
import Vue from 'vue'
import defaultState from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
export default () =>{
	return new Vuex.Store({
	 state:defaultState,
	 mutations,
	 getters,
	 actions
	})
}