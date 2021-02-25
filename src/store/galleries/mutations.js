export const mutations = {
    setGalleries: (state, galleries) => state.galleries = galleries,
    pushToGalleries: (state, array) => state.galleries = [...state.galleries, ...array],
    currentPage: (state, currentPage) => state.currentPage = currentPage,
    nextPage: (state) => state.currentPage = state.currentPage + 1,
    isLastPage: (state, isLastPage) => state.isLastPage = isLastPage,
    searchFilter: (state, searchFilter) => state.searchFilter = searchFilter,
    authorFilter: (state, authorFilter) => state.authorFilter = authorFilter,
}