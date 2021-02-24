<template>
	<div>
		<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block w-100" src="https://via.placeholder.com/800x600.jpg/b37a7a" alt="First slide" />
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="https://via.placeholder.com/800x600.jpg/8e1a1a" alt="Second slide" />
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="https://via.placeholder.com/800x600.jpg/1c1a8e" alt="Third slide" />
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'gallery-carousel',
	computed: {
		...mapGetters('galleries', ['galleries']),
		gallery() {
			return this.galleries.find((e) => e.id === Number(this.$route.params.id));
		},
	},
};
</script>

<style></style>
