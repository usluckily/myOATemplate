import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import test from '@/view/test/index'
import admin from './admin'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/test'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/test',
      name: 'rootTest',
      component: test
    },
    ...admin
  ]
})

router.addRoutes([
  {path:'/xxxxx', component: login}
])

export default router
