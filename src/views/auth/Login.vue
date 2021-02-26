<template>
	<div class="container">
		<form @submit.prevent="handleLogin">
			<div class="form-group">
				<label class="form-check-label" for="email">Enter your email</label>
				<input v-model="formData.email" type="email" class="form-control" id="email" :class="validation || 'is-invalid'" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="password">Enter password</label>
				<input v-model="formData.password" type="password" class="form-control" id="password" :class="validation || 'is-invalid'" />
				<div class="invalid-feedback">
					Wrong email or password
				</div>
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
			validation: true,
		};
	},
	methods: {
		...mapActions('auth', ['login']),
		async handleLogin() {
			try {
				this.validation = true;
				await this.login(this.formData);
				this.$router.push('/');
			} catch (error) {
				this.validation = false;
			}
		},
	},
};
</script>

<style></style>
