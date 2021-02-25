<template>
	<div>
		<form @submit.prevent="handleCreate" @reset="handleCancel">
			<div class="form-group">
				<label class="form-check-label" for="name">Gallery Title</label>
				<input v-model="formData.title" type="text" class="form-control" id="title" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="name">Description</label>
				<textarea v-model="formData.description" class="form-control" id="description"></textarea>
			</div>
			<div class="form-group" v-for="(url, index) in urls" :key="index">
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text" id="basic-addon3">Image Url {{ index + 1 }}</span>
					</div>
					<input v-model="urls[index]" type="text" class="form-control" id="title" aria-describedby="basic-addon" />
					<div class="input-group-append">
						<button @click="removeUrl(index)" type="button" class="btn btn-danger input-group-text">Remove</button>
					</div>
				</div>
			</div>
			<button type="button" class="btn btn-success mr-2" @click="addNewUrl">Add New Url</button>
			<button type="submit" class="btn btn-primary mr-2">Create</button>
			<button type="reset" class="btn btn-danger">Cancel</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'CreateGallery',
	data() {
		return {
			formData: {
				title: '',
				description: '',
				image_url_list: [''],
			},
		};
	},
	computed: {
		urls() {
			return this.formData.image_url_list;
		},
	},
	methods: {
		...mapActions('galleries', ['createNewGallery']),
		addNewUrl() {
			this.urls.push('');
		},
		removeUrl(id) {
			if (id) this.formData.image_url_list = this.urls.filter((e, index) => index !== id);
		},
		handleCancel() {
			this.$router.push('/my-galleries');
		},
		async handleCreate() {
			try {
				await this.createNewGallery(this.formData);
				this.$router.push('/my-galleries');
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
