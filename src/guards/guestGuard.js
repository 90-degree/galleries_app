export const guestGuard = (to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token')
    if (isAuthenticated) {
        next('/')
        return;
    }
    next()
}