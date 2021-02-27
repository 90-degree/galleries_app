<template>
	<div>
		<h1>{{ gallery.title || '' }}</h1>
		<h4 @click="goToAuthor">{{ galleryAuthor }}</h4>
		<h4>{{ gallery.created_at | formatDateString }}</h4>
		<router-link v-if="isOwner" class="nav-link" :to="'/edit-gallery/' + galleryId"> Edit </router-link>
		<button v-if="isOwner" @click="handleDeleteGallery" class="btn btn-danger" type="button">Delete Gallery</button>
		<gallery-carousel :images="galleryImages"></gallery-carousel>
		<div v-for="comment in gallery.comments" :key="comment.id">
			<p>{{ comment.text }}</p>
			<p>{{ comment.user.first_name + ' ' + comment.user.last_name }}</p>
			<p>{{ comment.created_at | diffForHumans }}</p>
			<button v-if="comment && user.id === comment.user.id" @click="handleDeleteComment(comment.id)">Delete comment</button>
			<hr />
		</div>
		<create-comment @onComment="handleComment"></create-comment>
	</div>
</template>

<script>
import GalleryCarousel from '../../components/GalleryCarousel.vue';
import { mapActions, mapGetters } from 'vuex';
import CreateComment from '../../components/CreateComment.vue';
import { formatDateString, diffForHumans } from '../../filters/dateFilters';
export default {
	name: 'Gallery',
	components: { GalleryCarousel, CreateComment },
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
		...mapGetters('auth', ['user']),
		galleryId() {
			return this.$route.params.id;
		},
		galleryImages() {
			return this.gallery.image_urls.map((e) => e.url);
		},
		galleryAuthor() {
			return `${this.gallery.user.first_name || ''} ${this.gallery.user.last_name || ''}`;
		},
		isOwner() {
			return this.user.id === this.gallery.user_id;
		},
	},
	methods: {
		...mapActions('galleries', ['getGallery', 'createComment', 'deleteGallery', 'deleteComment']),
		goToAuthor() {
			this.$router.push('/authors/' + this.gallery.user_id);
		},
		async handleComment(commentData) {
			const response = await this.createComment(commentData);
			this.gallery.comments.push(response);
		},
		async handleDeleteGallery() {
			if (confirm('Do you really want to delete this gallery?')) {
				await this.deleteGallery(this.galleryId);
				this.$router.push('/my-galleries');
			}
		},
		async handleDeleteComment(id) {
			if (confirm('Do you really want to delete this comment?')) {
				this.gallery.comments = this.gallery.comments.filter((e) => e.id !== id);
				await this.deleteComment(id);
			}
		},
	},
	filters: {
		formatDateString,
		diffForHumans,
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
