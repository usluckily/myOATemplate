<template>
    <div>
        <div class="print-form">
            <h1>IT Facilities Application</h1>
            <h2>计算机设备领用申请</h2>
            <br />
            
            <div class="print-form-item print-form-right">
                <p>Document No.</p>
                <p>单据编号</p>
            </div>

            <!--table1-->
            <div class="print-form-item">
                <div class="tit">Application infomation&nbsp;&nbsp;申请信息</div>
                <strangeTable :data="table1Data"></strangeTable>
            </div>

            <!--table3-->
            <div class="print-form-item">
                <div class="tit">Detail&nbsp;&nbsp;明细</div>
                <strangeTable :data="table3Data"></strangeTable>
            </div>

            <!--table4-->
            <div class="print-form-item">
                <div class="tit">签批信息</div>
                <strangeTable :data="table4Data"></strangeTable>
            </div>     

        </div>
        <div class="print-form" style="page-break-before: auto;page-break-after: always;">
            <!--table4-->
            <div class="print-form-item">
                <div class="tit">签批日期</div>
                <strangeTable :data="table5Data"></strangeTable>
            </div>  
        </div>
    </div>
</template>

<script>
import strangeTable from './comp/strange-table'
import normalTable from './comp/normal-table'

export default {
    data (){
        return {
            
        }
    },
    computed:{
        table1Data(){
            return [
                [
                    {text:['Applicant','申请人'], flex:'0 1 16.7%'},
                    {},
                    {text:['Department','申请部门']},
                    {},
                    {text:['Date','填表时间']},
                    {},
                ],
                [
                    {text:['Subject','主题'], flex:'0 1 16.7%'},
                    {},
                ],
                [
                    {text:['Description','领用说明'], flex:'0 1 16.7%'},
                    {},
                ],
            ]
        },
        table3Data(){
            return [
                [
                    {text:['Categories','类别'],flex:1},
                    {flex:2},
                    {text:['Purpose','用途'],flex:1},
                    {flex:2},
                ],
                [
                    {text:['If Temporary Use','是否临时借用'],flex:1},
                    {flex:2},
                    {text:['Return Date','归还日期'],flex:1},
                    {flex:2},
                ],
                [
                    {text:['Office','使用人办公地点'],flex:1},
                    {flex:2},
                ],
                [
                    {text:['Note','备注'],flex:1},
                    {flex:2},
                ],
                [
                    {text:['Attachment','附件上传'],flex:1},
                    {flex:5},
                ]
            ]
        },
        table4Data(){
            return [
                [
                    {text:['申请人签字'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['直接审批人签字'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['上级负责人签字'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['公司IT负责人签字'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['公司IT专员签字'],flex:1,sign:true},
                    {flex:4},
                ],
            ]
        },
        table5Data(){
            return [
                [
                    {text:['申请人签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['直接审批人签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['上级负责人签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['公司IT负责人签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['公司IT专员签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
            ]
        }
    },
    components: {
        strangeTable,
        normalTable
    }
}
</script>

<style lang="less">
    .print-form{
        .el-table .cell{
            font-size: 16px !important;
            font-weight:normal !important;
            white-space: pre-line !important;
            color:#666;
            & *{
                border-color: #DCDCDC !important;
            }
        }
    }
</style>


<style lang="less" scoped>
    @import './index.less';
</style>
