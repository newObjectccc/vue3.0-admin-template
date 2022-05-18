import { createRouter, createWebHashHistory } from 'vue-router'
// import { ElMessage } from 'element-plus'
import routes from './routes'

const premissionRoutes = routes
export function usePremissionRoutes() {
  // TODO
  return JSON.parse(JSON.stringify(premissionRoutes))
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: premissionRoutes
})

router.beforeEach((to, from, next) => {
  // ElMessage.success({ message: '跳转啦' })
  next()
})

export default router
