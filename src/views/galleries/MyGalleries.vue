<template>
	<div>
		<h1>My Galleries</h1>
		<galleries-grid-view></galleries-grid-view>
	</div>
</template>

<script>
import GalleriesGridView from './GalleriesGridView.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';
export default {
	components: { GalleriesGridView },
	name: 'MyGalleries',
	computed: {
		...mapGetters('auth', ['user']),
	},
	methods: {
		...mapActions('auth', ['me']),
		...mapActions('galleries', ['getGalleriesFirstPage']),
		...mapMutations('galleries', ['authorFilter']),
	},
	async mounted() {
		if (!this.user.id) await this.me();
		this.authorFilter(this.user.id);
		await this.getGalleriesFirstPage();
	},
};
</script>

<style></style>
