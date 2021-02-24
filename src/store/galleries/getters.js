export const getters = {
    galleries: (state) => state.galleries,
    hasGalleries: (state) => !!state.galleries.length,
    currentPage: (state) => state.currentPage,
    isLastPage: (state) => state.isLastPage,
    params: (state) => ({ 'page': state.currentPage, 'searchFilter': state.searchFilter, 'authorFilter': state.authorFilter })
}