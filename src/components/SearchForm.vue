<template>
	<div>
		<form class="form-inline" @submit.prevent="search">
			<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			<input v-model="searchData" class="form-control ml-lg-1 col-md-10" type="search" placeholder="Search through title, description or author" aria-label="Search" />
		</form>
	</div>
</template>

<script>
export default {
	name: 'search-form',
	data() {
		return {
			searchData: '',
		};
	},
	methods: {
		search() {
			this.$emit('onSearch', this.searchData);
			this.searchData = '';
		},
	},
};
</script>

<style></style>
