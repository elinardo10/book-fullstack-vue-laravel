import router from '../router';

import axios from 'axios';
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': window.csrf_token
};

export default{

	toggleSaved({ commit, state }, id) {
		if (state.auth) {
			axios.post('/api/user/toggle-saved', { id }).then(
				() => commit('TOGGLE_SAVED', id)
				);
		} else {
			router.push('/login');
		}
	}
}