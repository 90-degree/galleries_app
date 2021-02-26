

export const authGuard = (to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token')
  if (!isAuthenticated) {
    next('/')
    return;
  }
  next()
}