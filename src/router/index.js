import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import admin from './admin'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    ...admin
  ]
})

router.addRoutes([
  {path:'/xxxxx', component: login}
])

export default router
