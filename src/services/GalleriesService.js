import { http } from "./HTTP";
import store from '../store'

const endPoints = {
    galleries: () => '/galleries',
    gallery: (id) => '/galleries/' + id,
    comments: () => '/comments',
    comment: (id) => '/comments/' + id
}

class GalleriesService {
    async getAll() {
        const response = await http.get(endPoints.galleries(), {
            params: { ...store.getters['galleries/params'] }
        });
        return response.data;
    }
    async createGallery(galleryData) {
        const response = await http.post(endPoints.galleries(), galleryData);
        return response.data;
    }
    async getGallery(id) {
        const response = await http.get(endPoints.gallery(id));
        return response.data;
    }
    async editGallery(id, galleryData) {
        const response = await http.put(endPoints.gallery(id), galleryData);
        return response.data;
    }
    async createComment(commentData) {
        const response = await http.post(endPoints.comments(), commentData);
        return response.data;
    }
    async deleteGallery(id) {
        const response = await http.delete(endPoints.gallery(id));
        return response.data;
    }
    async deleteComment(id) {
        const response = await http.delete(endPoints.comment(id));
        return response.data;
    }
}

export default new GalleriesService();