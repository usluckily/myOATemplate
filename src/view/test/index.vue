<template>
    <div style="padding:20px;">
        <el-row>
            <el-select v-model="selectItemType">
                <el-option :value="i" :label="i" v-for="(i, index) in localItemTypeList" :key="index"></el-option>
            </el-select>
            <el-button @click="addNode" type="primary">add</el-button>
            <el-button @click="dialogVisible = true" type="primary">预览</el-button>
        </el-row>
        <br>

        <el-row>
            <el-input-number v-model="rowNum" size="mini" :step="1" :precision='0' :max="10" :min="0"></el-input-number> x 
            <el-input-number v-model="colNum" size="mini" :step="1" :precision='0' :max="10" :min="0"></el-input-number>
            <el-button @click="autoCreate" type="primary">自动划分</el-button>
        </el-row>
        <br/>

        <div class="content" :class="{'auto':status==='auto'}" id="view-box" :style="{width:boxWidth,height:boxHeight}">
            <div class="item"
            v-for="(i, index) in itemList" 
            :key="index" 
            :id="i.id"
            :style="{width:i.width + 'px',height:i.height + 'px',zIndex:i.zIndex,top:i.top + 'px',left:i.left + 'px'}">
                <div>{{i.type}}</div>
                <br>
                <el-row><el-input v-model="i.value" placeholder="填写url或文字，多个url‘,’分隔"></el-input></el-row>
                <br>
                <el-row><el-button type="primary">保存</el-button></el-row>
                <div :id="i.coorId" class="coor" v-if="status !== 'auto'"></div>
            </div>
        </div>

        <mView :itemList="itemList" :status="status" :gridConfig="gridConfig" v-if="dialogVisible" @close="dialogVisible = false"></mView>

        <!-- {{itemList}} -->
    </div>
</template>

<script>
import $ from 'jquery'
import mView from './view'
import { debug } from 'util'

require('@static/plugins/drag.js')

export default {
    data(){
         return {
             dialogVisible: false,
             status: 'handle',
             boxNode:{},
             boxNodeOffsetTop: 0,
             boxNodeOffsetLeft: 0,
             boxWidth: '1000px',
             boxHeight: '600px',
             selectItemType: '',
             localItemTypeList: ['image','swiper','text','video'],
             itemList: [],
             rowNum: '',
             colNum: '',
             gridConfig:{
                 gridTemplateColumns:'',
                 gridTemplateRows:''
             }
         }
    },
    mounted() {
        this.boxNode = document.getElementById('view-box')
        this.boxNodeOffsetTop = this.boxNode.offsetTop
        this.boxNodeOffsetLeft = this.boxNode.offsetLeft
    },
    methods:{
        addNode() {
            let num = this.itemList.length
            this.status = 'handle'
            this.itemList.push({
                type:this.selectItemType,
                id:'item'+num,
                width:'300',
                height:'180',
                zIndex: num + 1,
                coorId: 'coor'+num,
                top: '',
                left: '',
                value: ''
            })
            this.$nextTick(() => {
                this.setDrag('#item'+num, '#coor'+num, num)
            })
        },
        setDrag(dom, coorId, index) {
            let boxNodeOffsetTop = this.boxNodeOffsetTop, boxNodeOffsetLeft = this.boxNodeOffsetLeft, vm = this
            let $box = $(dom).mousedown(function(e) {
                let offset = $(this).offset(), 
                x = e.pageX - offset.left + boxNodeOffsetLeft, 
                y = e.pageY - offset.top + boxNodeOffsetTop
                
                this.posix = {'x': x, 'y': y};
                $.extend(document, {'move': true, 'move_target': this});
            }).on('mousedown', coorId, function(e) {
                var posix = {
                        'w': $box.width(), 
                        'h': $box.height(), 
                        'x': e.pageX, 
                        'y': e.pageY
                    };
                
                $.extend(document, {'move': true, 'call_down': function(e) {
                    $box.css({
                        'width': Math.max(30, e.pageX - posix.x + posix.w),
                        'height': Math.max(30, e.pageY - posix.y + posix.h)
                    });
                }});
                return false;
            }).on('mouseup',function(e){
                let target = e.target
                target = vm.getParentNode(target, 'item')

                vm.itemList[index]['top'] = target.offsetTop
                vm.itemList[index]['left'] = target.offsetLeft
                vm.itemList[index]['width'] = target.offsetWidth
                vm.itemList[index]['height'] = target.offsetHeight
            })
        },
        autoCreate() {
            this.itemList = []
            this.status = 'auto'
            let num = this.rowNum * this.colNum
            this.boxNode.style.display = 'grid'
            this.boxNode.style.gridTemplateColumns = this.gridConfig.gridTemplateColumns = 'repeat('+this.rowNum+', '+(100/this.rowNum)+'%)'
            this.boxNode.style.gridTemplateRows = this.gridConfig.gridTemplateRows = 'repeat('+this.colNum+', '+(100/this.colNum)+'%)'
            for(let i=0;i<num;i++){
                this.itemList.push({
                    type:'text',
                    id:'item'+i,
                    zIndex: i + 1,
                    value:''
                })
            }
        },
        getParentNode(target, parentClass) {
            let resultTarget = target
            if(resultTarget.className !== parentClass){
                return this.getParentNode(resultTarget.parentNode, parentClass)
            }else{
                return resultTarget
            }
        }

    },
    components:{
        mView
    }
}
</script>

<style lang="less" scoped>
    #view-box{
        overflow: hidden;
        border: 1px solid #ccc;
        position:relative;
        .item{
            padding: 10px;
            position: absolute;
            border: 1px solid #eee;
            background:#fff;
            .coor { width: 10px; height: 10px; overflow: hidden; cursor: se-resize; position: absolute; right: 0; bottom: 0; background-color: #09C; }
        }
        &.auto{
            .item{
                position:relative;
            }
        }
    }
</style>
