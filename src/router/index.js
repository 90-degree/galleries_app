import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/auth/Register'
import Login from '../views/auth/Login'
import Galleries from '../views/galleries/Galleries'
import Gallery from '../views/galleries/Gallery'
import CreateGallery from '../views/galleries/CreateGallery'
import MyGalleries from '../views/galleries/MyGalleries'
import AuthorGalleries from '../views/galleries/AuthorGalleries'
import EditGallery from '../views/galleries/EditGallery'
import PageNotFound from '../views/404'
import { authGuard } from '../guards/authGuard'
import { guestGuard } from '../guards/guestGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'galleries',
    component: Galleries
  },
  {
    path: '/galleries/:id',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/create',
    name: 'create-gallery',
    component: CreateGallery,
    beforeEnter: authGuard
  },
  {
    path: '/my-galleries',
    name: 'my-gallery',
    component: MyGalleries,
    beforeEnter: authGuard
  },
  {
    path: '/edit-gallery/:id',
    name: 'edit-gallery',
    component: EditGallery,
    beforeEnter: authGuard
  },
  {
    path: '/authors/:id',
    name: 'author-galleries',
    component: AuthorGalleries
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: guestGuard
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: guestGuard
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: authGuard
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
