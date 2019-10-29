<template>
    <div>
        <!-- {{itemList}} -->
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
            :style="{width:i.width,height:i.height,zIndex:i.zIndex,top:i.top,left:i.left}">
                {{i.type}}
                <div :id="i.coorId" class="coor" v-if="status !== 'auto'"></div>
            </div>
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
             boxNodeOffsetTop: 0,
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
        this.boxNodeOffsetTop = this.boxNode.offsetTop
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
                zIndex: num + 1,
                coorId: 'coor'+num,
                top: '',
                left: ''
            })
            this.$nextTick(() => {
                this.setDrag('#item'+num, '#coor'+num, num)
            })
        },
        setDrag(dom, coorId, index) {
            let boxNodeOffsetTop = this.boxNodeOffsetTop, vm = this
            let $box = $(dom).mousedown(function(e) {
                let offset = $(this).offset(), 
                x = e.pageX - offset.left, 
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
                if(target.className === 'coor'){
                    target = target.parentNode
                }
                vm.itemList[index]['top'] = target.offsetTop + 'px'
                vm.itemList[index]['left'] = target.offsetLeft + 'px'
                vm.itemList[index]['width'] = target.offsetWidth + 'px'
                vm.itemList[index]['height'] = target.offsetHeight + 'px'
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
