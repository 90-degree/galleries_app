<template>
	<div>
		<create-gallery-form @submited="handleCreate"></create-gallery-form>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CreateGalleryForm from '../../components/CreateGalleryForm.vue';
export default {
	name: 'CreateGallery',
	components: {
		CreateGalleryForm,
	},
	computed: {
		...mapGetters('galleries', ['galleries']),
	},
	methods: {
		...mapActions('galleries', ['createNewGallery']),
		async handleCreate(galleryData) {
			try {
				await this.createNewGallery(galleryData);
				this.$router.push('/my-galleries');
			} catch (error) {
				console.log('create', error);
			}
		},
	},
};
</script>

<style></style>
