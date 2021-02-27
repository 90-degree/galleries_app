import galleriesService from '../../services/GalleriesService'

export const actions = {
    async getGalleriesFirstPage(context) {
        context.commit('currentPage', 1);
        const response = await galleriesService.getAll();
        context.commit('isLastPage', !response.next_page_url);
        context.commit('setGalleries', response.data);
    },
    async getGalleriesNextPage(context) {
        context.commit('nextPage');
        const response = await galleriesService.getAll();
        context.commit('isLastPage', !response.next_page_url);
        context.commit('pushToGalleries', response.data);
    },
    async createNewGallery(context, galleryData) {
        const response = await galleriesService.createGallery(galleryData);
        context.commit('pushToGalleries', [response]);
    },
    async getGallery(context, id) {
        const response = await galleriesService.getGallery(id);
        return response;
    },
    async editGallery(context, params) {
        const response = await galleriesService.editGallery(params.id, params.data);
        return response;
    },
    async createComment(context, commentData) {
        const response = await galleriesService.createComment(commentData);
        return response;
    },
    async deleteGallery(context, id) {
        const response = await galleriesService.deleteGallery(id);
        return response;
    },
    async deleteComment(context, id) {
        const response = await galleriesService.deleteComment(id);
        return response;
    },
}