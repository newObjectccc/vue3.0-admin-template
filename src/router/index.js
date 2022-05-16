import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '@/views/home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home // () => import('@/views/axios.vue') // 懒加载组件
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
