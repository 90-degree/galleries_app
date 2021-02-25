import galleriesService from '../../services/GalleriesService'

export const actions = {
    async getGalleriesFirstPage(context) {
        context.commit('currentPage', 1);
        const response = await galleriesService.getAll();
        context.commit('isLastPage', !response.next_page_url);
        context.commit('setGalleries', response.data)
    },
    async getGalleriesNextPage(context) {
        context.commit('nextPage');
        const response = await galleriesService.getAll();
        context.commit('isLastPage', !response.next_page_url);
        context.commit('pushToGalleirs', response.data)
    }
}