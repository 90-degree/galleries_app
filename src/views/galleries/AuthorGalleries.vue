<template>
	<div>
		<galleries-grid-view></galleries-grid-view>
	</div>
</template>

<script>
import GalleriesGridView from './GalleriesGridView.vue';
import { mapActions, mapMutations } from 'vuex';
export default {
	components: { GalleriesGridView },
	name: 'AuthorGalleries',
	data() {
		return {
			author: this.$route.params.id,
		};
	},
	methods: {
		...mapActions('galleries', ['getGalleriesFirstPage']),
		...mapMutations('galleries', ['authorFilter']),
	},
	async mounted() {
		this.authorFilter(this.author);
		await this.getGalleriesFirstPage();
	},
};
</script>

<style></style>
