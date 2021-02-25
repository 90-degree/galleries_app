<template>
	<div class="container">
		<search-form @onSearch="handleSearch"></search-form>
		<galleries-grid></galleries-grid>
		<pagination @nextPage="handleNextPage" :isVisible="!isLastPage"></pagination>
	</div>
</template>

<script>
import GalleriesGrid from '../../components/GalleriesGrid';
import Pagination from '../../components/Pagination.vue';
import SearchForm from '../../components/SearchForm.vue';

import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
	name: 'GalleriesGridView',
	components: { GalleriesGrid, Pagination, SearchForm },
	computed: {
		...mapGetters('auth', ['user']),
		...mapGetters('galleries', ['galleries', 'isLastPage']),
	},
	methods: {
		...mapActions('galleries', ['getGalleriesFirstPage', 'getGalleriesNextPage']),
		...mapMutations('galleries', ['authorFilter', 'searchFilter']),
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
