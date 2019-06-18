<template>
    <div>
        <div class="print-form">
            <h1>Travel Reimbursement</h1>
            <h2>差旅报销</h2>
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
                <div class="tit">Travel Detail&nbsp;&nbsp;差旅细节</div>
                <normalTable :data="listTable"></normalTable>
            </div>

            <!--table3-->
            <div class="print-form-item">
                <strangeTable :data="table3Data"></strangeTable>
            </div>  

        </div>

        <div class="print-form">
            <div class="print-form-item">
                <!--table4-->
                <div class="tit">签批信息</div>
                <strangeTable :data="table4Data"></strangeTable>   
                <!-- <strangeTable :data="table5Data"></strangeTable> -->
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
                    {text:['Departure Date','出发日期'],flex:4,key:'B'},
                    {text:['Return Date','返回日期'],flex:4,key:'C'},
                    {text:['Departure Place','出发地'],flex:4,key:'D'},
                    {text:['Destination','目的地'],flex:4,key:'E'},
                ],
                body:[
                    {B:'',C:'',D:'',E:''},
                    {B:'',C:'',D:'',E:''},
                    {B:'',C:'',D:'',E:''},
                ]
            }
        }
    },
    computed: {
        table1Data(){
            return [
                [
                    {text:['Applicant','申请人'],flex:'0 1 16.7%'},
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
                    {text:['Description','出差说明'], flex:'0 1 16.7%'},
                    {},
                ],
            ]
        },
        table3Data(){
            return [
                [
                    {text:['Current Type','币种单位'],flex:1},
                    {flex:1},
                    {text:['Total Price','总费用'],flex:1.5},
                    {flex:1},                  
                ],
                [
                    {text:['Flight Fee', '机票费用'], flex:1},
                    {flex:1},
                    {text:['Hotel Fee', '住宿费用'], flex:1},
                    {flex:1},            
                    {text:['Meal Fee', '餐补'], flex:1},
                    {flex:1},
                ],
                [
                    {text:['Other Transportation Fee', '其他交通费用'], flex:1},
                    {flex:1},
                    {text:['Other Fee (Please Specify)', '其他费用'], flex:1},
                    {flex:1},
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
                    {text:['Attachment','附件上传'],flex:1},
                    {flex:5.5},
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
                    {text:['公司财务负责人签字'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['公司会计签字'],flex:1,sign:true},
                    {flex:4},
                ],

                ...this.table5Data
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
                    {text:['公司财务负责人签字日期'],flex:1,sign:true},
                    {flex:4},
                ],
                [
                    {text:['公司会计签字'],flex:1,sign:true},
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
