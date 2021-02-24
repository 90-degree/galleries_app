<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link class="navbar-brand" to="/">Galleries App</router-link>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<slot></slot>
				<slot name="auth-links" v-if="isAuthenticated"> </slot>
			</ul>
			<div class="form-inline my-2 my-lg-0" v-if="!isAuthenticated">
				<router-link class="nav-link" to="/login">Login</router-link>
				<router-link class="nav-link" to="/register">Register</router-link>
			</div>
			<div v-if="isAuthenticated">
				<span class="text-capitalize"> {{ this.user.first_name }} </span>
				<button @click="handleLogout" type="button" class="btn btn-outline-success my-2 my-sm-0">Logout</button>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'navbar',
	computed: {
		...mapGetters('auth', ['user', 'isAuthenticated']),
	},
	methods: {
		handleLogout() {
			this.$emit('logout');
		},
	},
};
</script>

<style>
.navbar-brand {
	color: #2c3e50 !important;
}
</style>
