<template>
    <div>
        <el-row>
            <el-select v-model="selectItemType">
                <el-option :value="i" :label="i" v-for="(i, index) in localItemTypeList" :key="index"></el-option>
            </el-select>
            <el-button @click="addNode">add</el-button>
        </el-row>
        <br>

        <el-row>
            <el-input-number v-model="rowNum" size="mini" :step="1" :precision='0' :max="10" :min="0"></el-input-number> x 
            <el-input-number v-model="colNum" size="mini" :step="1" :precision='0' :max="10" :min="0"></el-input-number>
            <el-button @click="autoCreate">自动划分</el-button>
        </el-row>
        <br/>

        <div class="content" :class="{'auto':status==='auto'}" id="view-box" :style="{width:boxWidth,height:boxHeight}">
            <div class="item"
            v-for="(i, index) in itemList" 
            :key="index" 
            :id="i.id"
            :style="{width:i.width,height:i.height,zIndex:i.zIndex}">{{i.type}}</div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
require('@static/plugins/drag.js')

export default {
    data(){
         return {
             status: 'handle',
             boxNode:{},
             boxWidth: '1000px',
             boxHeight: '600px',
             selectItemType: '',
             localItemTypeList: ['image','scroll','text','video'],
             itemList: [],
             rowNum: '',
             colNum: ''
         }
    },
    mounted() {
        this.boxNode = document.getElementById('view-box')
    },
    methods:{
        addNode() {
            let num = this.itemList.length
            this.status = 'handle'
            this.itemList.push({
                type:this.selectItemType,
                id:'item'+num,
                width:'150px',
                height:'100px',
                zIndex: num + 1
            })
            this.$nextTick(() => {
                $('#item'+num).mousedown(function(e) {
                    var offset = $(this).offset();
                    
                    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
                    $.extend(document, {'move': true, 'move_target': this});
                });
            })
        },
        autoCreate() {
            this.itemList = []
            this.status = 'auto'
            let num = this.rowNum * this.colNum
            this.boxNode.style.display = 'grid'
            this.boxNode.style.gridTemplateColumns = 'repeat('+this.rowNum+', '+(100/this.rowNum)+'%)'
            this.boxNode.style.gridTemplateRows = 'repeat('+this.colNum+', '+(100/this.colNum)+'%)'
            for(let i=0;i<num;i++){
                this.itemList.push({
                    type:'',
                    id:'item'+i,
                    // width:'150px',
                    // height:'100px',
                    zIndex: i + 1
                })
            }
        }

    },
    components:{

    }
}
</script>

<style lang="less" scoped>
    #view-box{
        overflow: hidden;
        border: 1px solid #ccc;
        position:relative;
        .item{
            position: absolute;
            border: 1px solid #eee;
        }
        &.auto{
            .item{
                position:relative;
            }
        }
    }
</style>
