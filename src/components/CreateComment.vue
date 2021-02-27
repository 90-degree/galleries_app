<template>
	<div>
		<form @submit.prevent="handleSubmit">
			<div class="form-group">
				<label class="form-check-label" for="name">Leave a comment</label>
				<textarea v-model="commentData.text" class="form-control" id="comment"></textarea>
				<div class="invalid-feedback">Comment must not be empty</div>
			</div>
			<button type="submit" class="btn btn-primary">Comment</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'CreateComment',
	data() {
		return {
			commentData: {
				text: '',
			},
		};
	},
	computed: {
		galleryId() {
			return this.$route.params.id;
		},
	},
	methods: {
		handleSubmit() {
			this.commentData.gallery_id = this.galleryId;
			this.$emit('onComment', this.commentData);
		},
	},
};
</script>

<style></style>
