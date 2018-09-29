import axios from 'axios';
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': window.csrf_token
};
export default{
	getListing(state) {
      return id => state.listings.find(listing => id == listing.id);
}
}