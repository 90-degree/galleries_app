import galleriesService from '../../services/GalleriesService'

export const actions = {
    async getGalleries(context, fresh = false) {
        fresh && context.commit('currentPage', 1);
        const response = await galleriesService.getAll();
        context.commit('currentPage', response.current_page);
        context.commit('isLastPage', !response.next_page_url);
        if (fresh) {
            context.commit('setGalleries', response.data)
            return;
        }
        context.commit('pushToGalleirs', response.data)
    }
}