export const getters = {
    token: (state) => state.token,
    isAuthenticated: (state) => !!state.token,
    user: (state) => state.user
}