import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/my-offers',
    name: 'MyOffers',
    component: () => import('../views/MyOffers.vue')
  },
  {
    path: '/my-profil',
    name: 'MyProfil',
    component: () => import('../views/MyProfil.vue')
  },
  {
    path: '/offers',
    name: 'Offers',
    component: () => import('../views/Offers.vue')
  },
  {
    path: '/new-delegate',
    name: 'NewDelegate',
    component: () => import('../views/NewDelegate.vue')
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: () => import('../views/Accounts.vue')
  },
  {
    path: '/offer',
    name: 'Accounts',
    component: () => import('../views/Offer.vue')
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
