<template>
	<div v-if="!isLastPage" style="height:100px;" class="d-flex align-items-center">
		<button @click="next" type="button" class="btn btn-primary mx-auto">Load More...</button>
	</div>
</template>

<script>
export default {
	name: 'pagination',
	methods: {
		next() {
			this.$store.commit('galleries/nextPage');
			this.$emit('nextPage');
		},
	},
	computed: {
		isLastPage() {
			return this.$store.getters['galleries/isLastPage'];
		},
	},
};
</script>

<style></style>
