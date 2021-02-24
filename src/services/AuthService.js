import { endPoints, http } from "./HTTP";

class AuthService {
    async register(userData) {
        const response = await http.post(endPoints.register(), userData);
        return response.data;
    }
    async login(credentials) {
        const response = await http.post(endPoints.login(), credentials);
        return response.data;
    }
    async me() {
        const response = await http.get(endPoints.me());
        return response.data;
    }
    async logout() {
        const response = await http.post(endPoints.logout());
        return response.data;
    }
}

export default new AuthService();