<template>
	<div v-if="isVisible" style="height:100px;" class="d-flex align-items-center">
		<button @click="next" type="button" class="btn btn-primary mx-auto">Load More...</button>
	</div>
</template>

<script>
export default {
	name: 'pagination',
	methods: {
		next() {
			this.$emit('nextPage');
		},
	},
	props: {
		isVisible: Boolean,
	},
};
</script>

<style></style>
