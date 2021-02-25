<template>
	<div>
		<search-form @onSearch="handleSearch"></search-form>
		<div class="row">
			<div v-for="gallery in galleries" :key="gallery.id" class="col-sm-6 col-md-4">
				<gallery-card :gallery="gallery"></gallery-card>
			</div>
		</div>
		<pagination @nextPage="handleNextPage" :isVisible="!isLastPage"></pagination>
	</div>
</template>

<script>
import GalleryCard from './GalleryCard.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Pagination from './Pagination.vue';
import SearchForm from './SearchForm.vue';
export default {
	name: 'galleries-grid',
	components: { GalleryCard, Pagination, SearchForm },
	computed: {
		...mapGetters('galleries', ['galleries', 'isLastPage']),
	},
	methods: {
		...mapActions('galleries', ['getGalleriesFirstPage', 'getGalleriesNextPage']),
		...mapMutations('galleries', ['searchFilter']),
		async handleNextPage() {
			await this.getGalleriesNextPage();
		},
		async handleSearch(searchData) {
			this.searchFilter(searchData);
			await this.getGalleriesFirstPage();
		},
	},
};
</script>

<style></style>
