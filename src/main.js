// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import store from './store/'

import util from './assets/js/util'
import directive from './assets/js/directive'
import {print} from '@/components/print/index.js'

import './assets/css/base.css'
import './assets/css/element-reset.css'
import './assets/css/animate.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(util)
Vue.use(directive)
Vue.use(print)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

if(!sessionStorage.getItem('isLogin')){
  router.push({ path:'/login' })
}

router.beforeEach(function(to,from,next){
  NProgress.start();
  let isLogin = sessionStorage.getItem('isLogin')

  if(to.name != 'login' && to.name != 'rootTest'){
    if(isLogin){
      next();
    }else{
      console.log('please login');
      next('/login')
    }
  }else{
    if(isLogin){
      next('/admin')
    }else{
      next()
    }

  }
})

router.afterEach(() => {
  NProgress.done();
});
