import { http } from "./HTTP";
import store from '../store'

const endPoints = {
    galleries: () => '/galleries',
    gallery: (id) => '/galleries/' + id
}

class GalleriesService {
    async getAll() {
        const response = await http.get(endPoints.galleries(), {
            params: { ...store.getters['galleries/params'] }
        });
        return response.data;
    }
}

export default new GalleriesService();