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
    component: () => import('@/views/comment'),
    beforeEnter: (to, from, next) => {
      const USER_ID = sessionStorage.getItem('USER_ID')
      if (!USER_ID) return next('/login')
    }
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

// 路由拦截器
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   const USER_ID = sessionStorage.getItem('USER_ID')
//   if (!USER_ID) return next('/login')
//   next()
// })

export default router
