<template>
	<div class="container">
		<galleries-grid></galleries-grid>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import GalleriesGrid from '../../components/GalleriesGrid';
export default {
	name: 'Galleries',
	components: { GalleriesGrid },
	methods: {
		...mapActions('galleries', ['getGalleries']),
	},
	created() {
		this.getGalleries(true);
	},
};
</script>

<style></style>
