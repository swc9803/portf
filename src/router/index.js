import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Test1 from '@/pages/Test1'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    }
  ]
})

export default router
