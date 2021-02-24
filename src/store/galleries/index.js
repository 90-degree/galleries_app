import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const galleriesStore = {
    namespaced: true,
    state: {
        galleries: [],
        currentPage: 1,
        isLastPage: false,
        searchFilter: '',
        authorFilter: 0
    },
    getters,
    mutations,
    actions
}