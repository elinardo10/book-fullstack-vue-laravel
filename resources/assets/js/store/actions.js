
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