<template>
    <div>
        <div class="print-form">
            <h1>Purchase/Events Reimbursement</h1>
            <h2>采购/活动报销</h2>
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

            <!--table2 listTable-->
            <div class="print-form-item">
                <div class="tit">Detail&nbsp;&nbsp;明细</div>
                <normalTable :data="listTable"></normalTable>
            </div>

            <!--table3-->
            <div class="print-form-item">
                <strangeTable :data="table3Data"></strangeTable>
            </div>        

            <!--table4-->
            <div class="print-form-item">
                <div class="tit">签批信息</div>
                <strangeTable :data="table4Data"></strangeTable>
            </div>
        </div>

        <div class="print-form">

            <div class="print-form-item">
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
            listTable:{
                head:[
                    {text:['序号'],type:'autoNum',flex:1,_class:"normal-flex",key:'A'},
                    {text:['Categories','类别'],flex:4,key:'Categories'},
                    {text:['Item','项目'],flex:4,key:'Item'},
                    {text:['Note','备注'],flex:4,key:'Note'},
                ],
                body:[
                    {Categories:'1',Item:'2', Note:'3'},
                ]
            },
        }
    },
    computed: {
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
                    {text:['Description','采购/活动说明'], flex:'0 1 16.7%'},
                    {},
                ],
            ]
        },
        table3Data(){
            return [
                [
                    {text:['Currency Type','币种单位'],flex:'0 1 16.7%'},
                    {flex:2},
                    {text:['Total Fee','总费用'],flex:'0 1 19%'},
                    {flex:2},
                ],
                [
                    {text:['Payee', '收款人'], flex:1},
                    {flex:1},
                    {text:['Bank', '收款银行'], flex:1},
                    {flex:1},
                    {text:['Account', '收款账户'], flex:1},
                    {flex:2},
                ],
                [
                    {text:['Attachment','附件上传'],flex:'0 1 16.7%'},
                    {flex:5},
                ]
            ]
        },
        table4Data(){
            return [
                [
                    {text:['申请人签字'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['直接审批人签字'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['上级审批人签字'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['公司行政负责人/Branding Studio负责人签字'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['公司财务负责人签字'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['一级部门负责人签字'],flex:1,sign:true},
                    {flex:3},
                ],
            ]
        },
        table5Data(){
            return [
                [
                    {text:['申请人签字日期'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['直接审批人签字日期'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['上级审批人签字日期'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['公司行政负责人/Branding Studio负责人签字日期'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['公司财务负责人签字日期'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['一级部门负责人签字日期'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['ZATI CEO签字日期'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['公司会计签字日期'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['ZATI CEO签字'],flex:1,sign:true},
                    {flex:3},
                ],
                [
                    {text:['公司会计签字'],flex:1,sign:true},
                    {flex:3},
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
