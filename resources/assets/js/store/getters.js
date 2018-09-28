export default{
	getListing(state) {
      return id => state.listings.find(listing => id == listing.id);
}
}