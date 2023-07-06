import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Products',
      name: 'Products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/Features',
      name: 'Features',
      component: () => import('../views/FeaturesView.vue')
    },
    {
      path: '/Marketplace',
      name: 'Marketplace',
      component: () => import('../views/Marketplace.vue')
    },
    {
      path: '/Company',
      name: 'Company',
      component: () => import('../views/Company.vue')
    },
    {
      path: '/Products/:id',
      name: 'ProductDescription',
      component: () => import('../views/ProductDescription.vue')
    },
    {
      path: '/Cart',
      name: 'MyCart',
      component: () => import('../views/Cart.vue')
    }
  ]
})

export default router