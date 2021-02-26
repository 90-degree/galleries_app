<template>
	<div>
		<create-gallery-form mode="Edit" @submited="handleEdit"></create-gallery-form>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CreateGalleryForm from '../../components/CreateGalleryForm.vue';
export default {
	name: 'EditGallery',
	components: {
		CreateGalleryForm,
	},
	computed: {
		...mapGetters('galleries', ['galleries']),
		galleryId() {
			return Number(this.$route.params.id);
		},
	},
	methods: {
		...mapActions('galleries', ['editGallery', 'getGallery']),
		async handleEdit(galleryData) {
			try {
				await this.editGallery({ id: this.galleryId, data: galleryData });
				this.$router.push('/my-galleries');
			} catch (error) {
				console.log('edit', error);
			}
		},
	},
};
</script>

<style></style>
