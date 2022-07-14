import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/home/list',
        component: () => import('@/views/Search')
      },
      {
        path: '/home/news',
        component: () => import('@/views/News')
      },
      {
        path: '/home/profile',
        component: () => import('@/views/ProFile')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
