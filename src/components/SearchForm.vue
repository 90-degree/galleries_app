<template>
	<div>
		<form @submit.prevent="search">
			<div class="input-group">
				<div class="input-group-prepend">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</div>
				<input v-model="searchData" class="form-control" type="search" placeholder="title, description, author" aria-label="Search" />
				<div v-if="searchFilter" class="input-group-append">
					<span class="input-group-text">{{ searchFilter }}</span>
					<button @click="cancelSearch" type="button" class="btn btn-danger input-group-text">X</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'search-form',
	data() {
		return {
			searchData: '',
		};
	},
	computed: {
		...mapGetters('galleries', ['searchFilter']),
	},
	methods: {
		search() {
			this.$emit('onSearch', this.searchData);
			this.searchData = '';
		},
		cancelSearch() {
			this.$emit('onSearchCanceled');
			this.searchData = '';
		},
	},
};
</script>

<style></style>
