<template>
	<div>
		<form @submit.prevent="handleSubmit" @reset="handleCancel">
			<div class="form-group">
				<label class="form-check-label" for="name">Gallery Title</label>
				<input v-model="formData.title" type="text" class="form-control" id="title" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="name">Description</label>
				<textarea v-model="formData.description" class="form-control" id="description"></textarea>
			</div>
			<div class="form-group" v-for="(url, index) in formData.image_urls" :key="index">
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text" id="basic-addon3">Image Url {{ index + 1 }}</span>
					</div>
					<input v-model="url.url" type="text" class="form-control" id="title" aria-describedby="basic-addon" />
					<div class="input-group-append">
						<button @click="moveUp(index)" type="button" class="btn btn-info input-group-text">Move Up</button>
					</div>
					<div class="input-group-append">
						<button @click="moveDown(index)" type="button" class="btn btn-info input-group-text">Move Down</button>
					</div>
					<div class="input-group-append">
						<button @click="removeUrl(index)" type="button" class="btn btn-danger input-group-text">Remove</button>
					</div>
				</div>
			</div>
			<button type="button" class="btn btn-success mr-2" @click="addNewUrl">Add New Url</button>
			<button type="submit" class="btn btn-primary mr-2">{{ galleryId ? 'Edit' : 'Create' }}</button>
			<button type="reset" class="btn btn-danger">Cancel</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'GalleryForm',
	data() {
		return {
			formData: {
				title: '',
				description: '',
				image_urls: [{ url: '' }],
			},
		};
	},
	computed: {
		galleryId() {
			return this.$route.params.id;
		},
	},
	methods: {
		...mapActions('galleries', ['getGallery']),
		addNewUrl() {
			this.formData.image_urls.push({ url: '' });
		},
		removeUrl(id) {
			if (id) this.formData.image_urls = this.formData.image_urls.filter((e, index) => index !== id);
		},
		moveUp(index) {
			if (!index) return;
			const temp = this.formData.image_urls[index - 1];
			this.formData.image_urls[index - 1] = this.formData.image_urls[index];
			this.formData.image_urls[index] = temp;
			this.formData.image_urls = this.formData.image_urls.map((el) => el);
		},
		moveDown(index) {
			if (this.formData.image_urls.length - index === 1) return;
			const temp = this.formData.image_urls[index + 1];
			this.formData.image_urls[index + 1] = this.formData.image_urls[index];
			this.formData.image_urls[index] = temp;
			this.formData.image_urls = this.formData.image_urls.map((el) => el);
		},
		handleCancel() {
			this.$router.push('/my-galleries');
		},
		async handleSubmit() {
			this.formData.image_url_list = this.formData.image_urls.map((e) => e.url);
			this.$emit('submited', this.formData);
		},
	},
	async created() {
		if (this.galleryId) {
			this.formData = await this.getGallery(this.galleryId);
		}
	},
};
</script>

<style></style>
