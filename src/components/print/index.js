import Vue from 'vue';
import printComp from './index.vue'

let printConstractor = Vue.extend(printComp)

let test = function (comp){
    let instance = new printConstractor({
        data(){
            return {
                show:false
            }
        },
        components:{
            comp:comp
        }
    })
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el);
}

export const print = {
    install: (Vue) => {
        Vue.component('myPrint', printComp)
        Vue.prototype.$myPrint = test
    }
}