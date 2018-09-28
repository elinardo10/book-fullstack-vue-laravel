<template>
    <div>
        <header-image
                :image-url="listing.images[0]"
                @header-clicked="openModal"
                :id="listing.id"
        ></header-image>
        <div class="listing-container">
            <div class="heading">
                <h1>{{ listing.title }}</h1>
                <p>{{ listing.address }}</p>
            </div>
            <hr>
            <div class="about">
                <h3>About this listing</h3>
                <expandable-text>{{ listing.about }}</expandable-text>
            </div>
            <div class="lists">
                <feature-list title="Amenities" :items="listing.amenities">
                    <template slot-scope="amenity">
                        <i class="fa fa-lg" :class="amenity.icon"></i>
                        <span>{{ amenity.title }}</span>
                    </template>
                </feature-list>
                <feature-list title="Prices" :items="listing.prices">
                    <template slot-scope="price">
                        {{ price.title }}: <strong>{{ price.value }}</strong>
                    </template>
                </feature-list>
            </div>
        </div>
        <modal-window ref="imagemodal">
            <image-carousel :images="listing.images"></image-carousel>
        </modal-window>
    </div>
</template>
<script>
	import { populateAmenitiesAndPrices } from '../helpers';

	import  HeaderImage from './shared/HeaderImage.vue';
	import  ImageCarousel from './shared/ImageCarousel.vue';
	import  ModalWindow from './shared/ModalWindow.vue';
	import  FeatureList from './shared/FeatureList.vue';
	import ExpandableText from './shared/ExpandableText.vue';

	export default {

		components: {
			'feature-list': FeatureList,
			'header-image': HeaderImage,
			'modal-window': ModalWindow,
			'image-carousel':ImageCarousel,
			'expandable-text':ExpandableText
		},
		computed: {
			listing() {
				return populateAmenitiesAndPrices(
					this.$store.getters.getListing(this.$route.params.listing)
					);
			}	
		},

		methods: {
			openModal() {
				this.$refs.imagemodal.modalOpen = true;
			}
		}
	}
</script>
<style>
	.heading {
		margin-bottom: 2em;
	}
	.heading h1 {
		font-size: 32px;
		font-weight: 700;
	}
	.heading p {
		font-size: 15px;
		color: #767676;;
	}
	.about {
		margin: 2em 0;
	}
	.about h3 {
		font-size: 22px;
	}
</style>
</script>