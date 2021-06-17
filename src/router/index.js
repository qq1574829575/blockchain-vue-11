import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      keepAlive: true, // 需要被缓存
    },
    component: () => import('../views/login')
  },
]

const router = new VueRouter({
  routes
})

export default router
