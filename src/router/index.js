import Vue from 'vue'
import VueRouter from 'vue-router'
import Galleries from '../views/galleries/Galleries'
import Register from '../views/auth/Register'
import Login from '../views/auth/Login'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'galleries',
    component: Galleries
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
