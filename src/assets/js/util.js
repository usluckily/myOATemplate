import router from '@/router'
import qs from 'qs'

export const storeHelper = {
  get(key){
      return sessionStorage.getItem(key)
  },
  getJ(key){
      return JSON.parse(sessionStorage.getItem(key))
  },
  set(key, val){
      sessionStorage.setItem(key, val)
  },
  setJ(key, val){
      sessionStorage.setItem(key, JSON.stringify(val))
  },
  clear(key){
      if (key) {
          sessionStorage.setItem(key, '')
      } else {
          sessionStorage.clear()
      }
  }
}

export default{
    install(Vue, options){
    //验证提示
        Vue.prototype.formValidate = function (target, fun) {
            this.$refs[target].$refs['form'].validate((valid) => {
                if (valid) {
                    fun();
                } else {
                    return false;
                }
            });
        }

        Vue.prototype.$routerGo = function (url, query) {
            let q
            if (query) {
              try {
                q = encodeURI(qs.stringify(query))
              } catch (e) {
                throw e
              }
            }
      
            if (typeof url == 'number') {
              router.go(url)
            } else {
              router.push(q ? url + '?' + q : url)
            }
          }
      
        //sessionStorage helper
        Vue.prototype.s = storeHelper

          Vue.prototype.setEletoArr = function (arr, ele) {
            let res = []
            arr.forEach(function (i) {
              res.push(i[ele])
            })
            return res
          }
    }
}