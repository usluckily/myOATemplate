<template>
    <div>
        <el-row>异步组件</el-row>
        <el-row>
            <el-radio-group v-model="checkedComp">
                <el-radio-button label="comp1">组件一</el-radio-button>
                <el-radio-button label="comp2">组件二</el-radio-button>
            </el-radio-group>
        </el-row>

        <component :is="checkedComp"></component>
    </div>
</template>

<script>
import Vue from 'vue'
import error from '@/view/admin/404.vue'
import loading from '@/components/loading/normal.vue'

// const comp1 = Vue.component('comp1', function (resolve) {
//     require(['./comp1.vue'], resolve)
// });

// const comp2 = Vue.component('comp2', function (resolve) {
//     require(['./comp2.vue'], resolve)
// });

export default {
    data (){
        return {
            checkedComp:'comp1',
            loading:true
        }
    },
    components:{
        comp1: () => ({
            component:import('./comp1'),
            loading:loading,
            error:error,
            delay:500
        }),
        comp2: () => ({
            component:import('./comp2'),
            loading:loading,
            error:error,
            delay:500
        })
    }
}
</script>

<style lang="less" scoped>

</style>
