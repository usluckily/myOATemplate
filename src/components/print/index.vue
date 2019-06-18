<template>
    <div class="print-layout">
        <div id="print-mount-box">
            <div id="print">
                <slot name="print-slot" v-if="printType === ''"></slot>
                <component v-else :is="loadComp"></component>
            </div>
        </div>
    </div>
</template>

<script>
import printJs from 'print-js'
import Vue from 'vue'
import * as printConfig from '@/print-page/'

let asyncComp

export default {
    props: {
        printState:false,
        printType:{
            type:String,
            default:''
        }
    },
    data (){
        return {
            show:true,
            loadComp:''
        }
    },
    mounted (){
        if(this.printType) this.loadPrintComp(this.printType)
        this._print()
    },
    methods: {
        _print(){
            if(!this.printState) return
            
            setTimeout(() => {
                printJs({
                    // header: '123321',
                    printable:'print',
                    type:'html',
                    // 继承原来的所有样式
                    targetStyles: ['*'],
                })
                this.$emit('printState', false)
            }, 100)
        },
        loadPrintComp(target) {
            this.loadComp = () => import(`@/print-page/${target}.vue`)

            // this.loadComp = target
        }
    },
    components: {
        // ...printConfig
        // travel: () => ({
        //     component: import('@/print-page/travel.vue')
        // }),
        // travelReim: () => ({
        //     component: import('@/print-page/travel-reim.vue')
        // })
    },
}
</script>

<style lang="less">
.print-layout{
    position: fixed;
    top: 10px;
    // left: 0;
    z-index: 9999;
    overflow: auto;
    width:1000px;
    background: #fff;
    box-shadow: 0px 0px 10px #ccc;
    padding: 40px 30px;
    z-index: 100;
    height: calc(100% - 100px);
}
#print{
    background: #fff;
    width:100%;
}

@media print {
    .my-aside{
        display: none;
    }
}

</style>

