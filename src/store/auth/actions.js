import authService from '../../services/AuthService';
import router from "../../router";

export const actions = {
    async register(context, userData) {
        const response = await authService.register(userData);
        context.dispatch('handleAuthResponse', response);
    },
    async login(context, credentials) {
        const response = await authService.login(credentials);
        context.dispatch('handleAuthResponse', response);
    },
    async me(context) {
        try {
            const response = await authService.me();
            context.dispatch('handleAuthResponse', response)
        } catch (error) {
            console.log('actions me', error);
            router.go();
        }

    },
    async logout(context) {
        const response = await authService.logout();
        context.dispatch('handleAuthResponse', response);
    },

    handleAuthResponse(context, response) {
        const logout = response.logout;
        const token = response.token;
        const user = response.user;
        if (logout) {
            context.commit('token', '');
            context.commit('user', {});
            localStorage.removeItem('token');
            return;
        }
        if (token) {
            context.commit('token', token);
            localStorage.setItem('token', token);
        }
        if (user) {
            context.commit('user', user);
        }
    }
}