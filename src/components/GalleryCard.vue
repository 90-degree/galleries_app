<template>
	<div class="card mt-4">
		<div class="card-body">
			<h5 @click="showGallery" class="card-title">{{ gallery.title }}</h5>
			<h6 class="card-subtitle mb-2 text-muted">{{ author }}</h6>
			<h6 class="card-subtitle mb-2 text-muted">{{ gallery.created_at }}</h6>
		</div>
		<img class="card-img-top" :src="firstImageUrl" alt="Card image cap" />
	</div>
</template>

<script>
export default {
	name: 'gallery-card',
	props: {
		gallery: Object,
	},
	computed: {
		author() {
			return `${this.gallery.user.first_name} ${this.gallery.user.last_name}`;
		},
		firstImageUrl() {
			if (this.gallery.image_urls[0]) return this.gallery.image_urls[0].url;
			return '';
		},
	},
	methods: {
		showGallery() {
			this.$router.push('/galleries/' + this.gallery.id);
		},
	},
};
</script>

<style></style>
