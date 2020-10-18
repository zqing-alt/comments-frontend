import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      { path: '/', name: 'home', component: () => import('@/views/home') }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('@/views/comment')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('@/views/details')
  }
]

const router = new VueRouter({
  routes
})

export default router
