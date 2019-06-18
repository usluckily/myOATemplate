<template>
    <div class="print-table-strange">
        <div class="print-table-item"  v-for="(i, index) in data" :key="index">
                <div class="grid" 
                v-for="(j, jIndex) in i" 
                :key="jIndex"
                :style="{'flex':j.flex}"
                :class="{'sign':j.sign, 'normal-flex': j.text && j.text.length < 2}">
                    <p v-for="(k, kIndex) in j.text" :key="kIndex">{{k}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:[String,Array],
            default:''
        },
        data:{
            type:Array,
            default (){
                return []
            }
        }
    },
    data (){
        return {

        }
    }
}
</script>

<style lang="less">
    @import './table.less';
</style>
