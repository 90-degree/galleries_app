<template>
	<div class="container">
		<form @submit.prevent="handleRegister">
			<div class="form-group">
				<label class="form-check-label" for="name">First name</label>
				<input v-model="formData.first_name" type="text" class="form-control" id="first_name" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="name">Last name</label>
				<input v-model="formData.last_name" type="text" class="form-control" id="last_name" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="email">Email address</label>
				<input v-model="formData.email" type="email" class="form-control" id="email" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="password">Set password</label>
				<input v-model="formData.password" type="password" class="form-control" id="password" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="confirm_password">Confirm password</label>
				<input v-model="formData.confirm_password" type="password" class="form-control" id="confirm_password" />
			</div>
			<div class="form-check">
				<input v-model="formData.terms" type="checkbox" class="form-check-input" id="terms" />
				<label class="form-check-label" for="exampleCheck1">I accept terms and conditions</label>
			</div>
			<button type="submit" class="btn btn-primary">Register</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'register',
	data() {
		return {
			formData: {
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				confirm_password: '',
				terms: false,
			},
		};
	},
	methods: {
		...mapActions('auth', ['register']),
		async handleRegister() {
			try {
				await this.register(this.formData);
				this.$router.push('/');
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
