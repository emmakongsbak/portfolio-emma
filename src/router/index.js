import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Design from '../views/Design.vue'
import Photo from '../views/Photo.vue'
import Video from '../views/Video.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/design',
    name: 'Design',
    component: Design
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
