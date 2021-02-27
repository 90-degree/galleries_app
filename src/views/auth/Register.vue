<template>
	<div class="container">
		<form @submit.prevent="handleRegister">
			<div class="form-group">
				<label class="form-check-label is-valid" for="name">First name</label>
				<input required v-model="formData.first_name" type="text" class="form-control" id="first_name" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="name">Last name</label>
				<input required v-model="formData.last_name" type="text" class="form-control" id="last_name" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="email">Email address</label>
				<input required v-model="formData.email" type="email" class="form-control" id="email" />
			</div>
			<div class="form-group">
				<label class="form-check-label" for="password">Set password</label>
				<input v-model="formData.password" type="password" class="form-control" :class="validation.password || 'is-invalid'" id="password" />
				<div class="invalid-feedback">
					Pasword must have at least 8 characters and 1 need to be a number.
				</div>
			</div>
			<div class="form-group">
				<label class="form-check-label" for="confirm_password">Confirm password</label>
				<input v-model="formData.confirm_password" type="password" class="form-control" :class="validation.confirm_password || 'is-invalid'" id="confirm_password" />
				<div class="invalid-feedback">
					Confirm password must match password.
				</div>
			</div>
			<div class="form-check">
				<input v-model="formData.terms" type="checkbox" class="form-check-input" :class="validation.terms || 'is-invalid'" id="terms" />
				<label class="form-check-label" for="exampleCheck1">I accept terms and conditions</label>
				<div class="invalid-feedback">
					To register you must accept terms and conditions.
				</div>
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
			validation: {
				password: true,
				confirm_password: true,
				terms: true,
			},
		};
	},
	methods: {
		...mapActions('auth', ['register']),
		validate() {
			let errors = 0;
			const passwordRegex = /^(?=.*\d).+$/;
			if (this.formData.password.length < 8 || !passwordRegex.test(this.formData.password)) {
				this.validation.password = false;
				errors++;
			} else this.validation.password = true;
			if (!(this.formData.password === this.formData.confirm_password)) {
				this.validation.confirm_password = false;
				errors++;
			} else this.validation.confirm_password = true;
			if (!this.formData.terms) {
				this.validation.terms = false;
				errors++;
			} else this.validation.terms = true;
			return !errors;
		},
		async handleRegister() {
			try {
				if (!this.validate()) return;
				await this.register(this.formData);
				this.$router.push('/');
			} catch (error) {
				console.log('register', error);
			}
		},
	},
};
</script>

<style></style>
