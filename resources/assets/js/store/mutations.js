
export default {

	TOGGLE_SAVED(state, id) {
		let index = state.saved.findIndex(saved => saved === id);
		if (index === -1) {
			state.saved.push(id);
		} else {
			state.saved.splice(index, 1);
		}
	},

	addData(state, { route, data }) {
		if (data.auth) {
			state.auth = data.auth;
		}
		if (route === 'listing') {
			state.listings.push(data.listing);
		} else {
			state.listing_summaries = data.listings;
		}
	}
}

