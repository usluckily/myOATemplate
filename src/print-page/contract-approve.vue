<template>
    <div>
        <div class="print-form">
            <h1>Contract Approval Application</h1>
            <h2>合同审批申请</h2>
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

        </div>

        <div class="print-form" style="page-break-before: auto;page-break-after: always;">
            <!--table4-->
            <div class="print-form-item">
                <div class="tit">签批信息</div>
                <strangeTable :data="table4Data"></strangeTable>
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
                    {text:['Description & Summary','说明及摘要'], flex:'0 1 16.7%'},
                    {},
                ],
            ]
        },
        table3Data(){
            return [
                [
                    {text:['Category of Contract','合同类型'],flex:2},
                    {flex:1},
                    {text:['If Master Agreement','是否主协议'],flex:2},
                    {flex:1},
                    {text:['If Standard Contract','是否标准协议'],flex:2},
                    {flex:1},
                ],
                [
                    {text:['Contract Title','合同名称'],flex:1},
                    {flex:5},
                ],
                [
                    {text:['Party A','甲方'],flex:1},
                    {flex:5},
                ],
                [
                    {text:['Party B','乙方'],flex:1},
                    {flex:5},
                ],
                [
                    {text:['Party C','丙方'],flex:1},
                    {flex:5},
                ],
                [
                    {text:['Start Date','起始日'],flex:1},
                    {flex:1},
                    {text:['End Date','到期日'],flex:1},
                    {flex:1},
                ],
                [
                    {text:['If Automatically Renewal','是否自动续约'],flex:2},
                    {flex:1},
                    {text:['If Payments Involved','是否涉及付款'],flex:2},
                    {flex:1},
                ],
                [
                    {text:['Currency Type','币种'],flex:1},
                    {flex:1},
                    {text:['Contract Sum','合同款项'],flex:1},
                    {flex:1},
                    {text:['If chop needed','是否需要用印'],flex:1},
                    {flex:1},
                ],
                [
                    {text:['Note','备注'],flex:1},
                    {flex:5},
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
                    {text:['法务签字'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['财务负责人签字（如涉及付款）'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['公司秘书签字'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['一级部门负责人签字'],flex:1,sign:true},
                    {flex:4},
                ],

                [
                    {text:['申请人签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['直接审批人签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['法务签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['财务负责人签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['公司秘书签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['一级部门负责人签字日期'],flex:1,sign:true},
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
