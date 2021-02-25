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
		...mapActions('galleries', ['getGalleriesFirstPage']),
	},
	created() {
		this.getGalleriesFirstPage();
	},
};
</script>

<style></style>
