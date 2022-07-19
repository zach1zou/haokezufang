import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/login',
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
  },
  {
    path: '/favorate',
    component: () => import('@/views/ProFile/Favorites/favoriteList.vue')
  },
  {
    path: '/rent',
    component: () => import('@/views/ProFile/Rent/RentList.vue')
  },
  {
    path: '/city',
    component: () => import('@/views/Home/City/city.vue')
  },
  {
    name: 'details',
    path: '/details/:username',
    component: () => import('@/views/Compoments/HouseCode.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
