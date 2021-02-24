<template>
	<div class="container">
		<form @submit.prevent="handleLogin">
			<div class="form-group">
				<label class="form-check-label" for="email">Enter your email</label>
				<input v-model="formData.email" type="email" class="form-control" id="email" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="password">Enter password</label>
				<input v-model="formData.password" type="password" class="form-control" id="password" />
			</div>
			<button type="submit" class="btn btn-primary">Login</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'login',
	data() {
		return {
			formData: {
				email: '',
				password: '',
			},
		};
	},
	methods: {
		...mapActions('auth', ['login']),
		async handleLogin() {
			try {
				await this.login(this.formData);
				this.$router.push('/');
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
