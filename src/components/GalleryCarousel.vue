<template>
	<div>
		<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item" :class="!index && 'active'" v-for="(url, index) in images" :key="index">
					<img @click="openImage(url)" class="d-block w-100" :src="url" :alt="'slide ' + index + 1" />
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
export default {
	name: 'gallery-carousel',
	props: ['images'],
	methods: {
		openImage(url) {
			window.open(url);
		},
	},
};
</script>

<style></style>
