<template>
	<div>
		<h1>{{ gallery.title }}</h1>
		<h4 @click="goToAuthor">{{ galleryAuthor }}</h4>
		<gallery-carousel :images="galleryImages"></gallery-carousel>
	</div>
</template>

<script>
import GalleryCarousel from '../../components/GalleryCarousel.vue';
import { mapActions } from 'vuex';
export default {
	name: 'Gallery',
	components: { GalleryCarousel },
	data() {
		return {
			gallery: {
				title: '',
				description: '',
				user: {},
				created_at: '',
				image_urls: [],
			},
		};
	},
	computed: {
		galleryId() {
			return this.$route.params.id;
		},
		galleryImages() {
			return this.gallery.image_urls.map((e) => e.url);
		},
		galleryAuthor() {
			return `${this.gallery.user.first_name} ${this.gallery.user.last_name}`;
		},
	},
	methods: {
		...mapActions('galleries', ['getGallery']),
		goToAuthor() {
			this.$router.push('/authors/' + this.gallery.user_id);
		},
	},
	async created() {
		try {
			this.gallery = await this.getGallery(this.galleryId);
		} catch (error) {
			console.log('gallery get', error);
		}
	},
};
</script>

<style></style>
