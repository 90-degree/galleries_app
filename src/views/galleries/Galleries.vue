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
	name: 'AllGalleries',
	methods: {
		...mapActions('galleries', ['getGalleriesFirstPage']),
		...mapMutations('galleries', ['authorFilter']),
	},
	async created() {
		this.authorFilter(0);
		await this.getGalleriesFirstPage();
	},
};
</script>

<style></style>
