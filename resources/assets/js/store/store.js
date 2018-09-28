import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import axios from 'axios';
Vue.use(Vuex);

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': window.csrf_token
};

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions

	
});