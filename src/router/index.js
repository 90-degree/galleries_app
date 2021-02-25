import Vue from 'vue'
import VueRouter from 'vue-router'
import Galleries from '../views/galleries/Galleries'
import Register from '../views/auth/Register'
import Login from '../views/auth/Login'
import Gallery from '../views/galleries/Gallery'
import CreateGallery from '../views/galleries/CreateGallery'
import MyGalleries from '../views/galleries/MyGalleries'
import AuthorGalleries from '../views/galleries/AuthorGalleries'

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
    component: CreateGallery
  },
  {
    path: '/my-galleries',
    name: 'create-gallery',
    component: MyGalleries
  },
  {
    path: '/authors/:id',
    name: 'author-galleries',
    component: AuthorGalleries
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
