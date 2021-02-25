<template>
	<div>
		<div class="row">
			<div v-for="gallery in galleries" :key="gallery.id" class="col-sm-6 col-md-4">
				<gallery-card :gallery="gallery"></gallery-card>
			</div>
		</div>
	</div>
</template>

<script>
import GalleryCard from './GalleryCard.vue';
import { mapGetters } from 'vuex';
export default {
	name: 'galleries-grid',
	components: { GalleryCard },
	computed: {
		...mapGetters('galleries', ['galleries']),
	},
};
</script>

<style></style>
