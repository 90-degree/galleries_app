<template>
	<div id="app">
		<div id="nav">
			<navbar @logout="handleLogout">
				<router-link class="nav-link" to="/"> All Galleries </router-link>
				<template v-slot:auth-links>
					<router-link class="nav-link" to="/my-galleries"> My Galleries </router-link>
					<router-link class="nav-link" to="/create"> Create New Gallery </router-link>
				</template>
			</navbar>
		</div>
		<router-view />
	</div>
</template>

<script>
import navbar from './components/Navbar';
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'App',
	components: {
		navbar,
	},
	computed: {
		...mapGetters('auth', ['isAuthenticated']),
	},
	methods: {
		...mapActions('auth', ['me', 'logout']),
		...mapActions('galleries', ['getGalleries']),
		async handleLogout() {
			try {
				await this.logout();
				this.$router.push('/login');
			} catch (error) {
				console.log(error);
			}
		},
	},
	async created() {
		if (this.isAuthenticated) {
			await this.me();
		}
		// await this.getGalleries();
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
