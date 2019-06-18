<template>
    <div>
        <SearchForm :model="search" :items="items" :inline="true"></SearchForm>
        <DataTable :columns="columns" :data="tableData"></DataTable>
        <myPrint v-if="print" :printState="print" @printState="changePrintState" :printType="printType"></myPrint>
    </div>
</template>

<script>
import SearchForm from '@/components/search-form/'
import DataTable from '@/components/data-table/'

export default {
    data(){
        return {
            printType:'',//要动态加载的组件名
            print: false,
            tableData:[
                {num:123,type:'travel',now:'差旅申请',applyPerson:'张三',endDate:'2011-11-11 11:11:11',operationDate:'2011-11-11 11:11:1'},
                {num:123,type:'travel-reim',now:'差旅报销',applyPerson:'张三',endDate:'2011-11-11 11:11:11',operationDate:'2011-11-11 11:11:1'},
                {num:123,type:'active-apply',now:'采购/活动申请',applyPerson:'张三',endDate:'2011-11-11 11:11:11',operationDate:'2011-11-11 11:11:1'},
                {num:123,type:'active-reim',now:'采购/活动报销',applyPerson:'张三',endDate:'2011-11-11 11:11:11',operationDate:'2011-11-11 11:11:1'},
                {num:123,type:'computed-apply',now:'计算机设备领用申请',applyPerson:'张三',endDate:'2011-11-11 11:11:11',operationDate:'2011-11-11 11:11:1'},
                {num:123,type:'contract-approve',now:'合同审批申请',applyPerson:'张三',endDate:'2011-11-11 11:11:11',operationDate:'2011-11-11 11:11:1'},
            ],
            search:{
                name: '',
                date:[]
            },
            items:[
                {
                    prop: 'name',
                    label: '',
                    placeholder: '请输入关键字查询',
                    type: 'input'
                },
                {
                    prop: 'date',
                    label: '',
                    type: 'dateRange'
                },
                {
                    type:'action',
                    actionList: [
                        {
                            text: '搜索',
                            handleClick: () => {

                            }
                        },
                        {
                            text: '清空',
                            handleClick: () => {
                                this.clearSearch()
                            }
                        }
                    ]
                }
            ],
            columns:[
                {
                    label: 'No',
                    type: 'index'
                },
                {
                    label: '业务单号',
                    prop: 'num',
                    width: '100',
                },
                {
                    label: '业务类型',
                    prop: 'type',
                    width: '150',
                },
                {
                    label: '当前任务',
                    prop: 'now',
                    width: '150',
                },
                {
                    label: '申请人',
                    prop: 'applyPerson',
                    width: '150',
                },
                {
                    label: '到期时间',
                    prop: 'endDate',
                    width: '200',
                },
                {
                    label: '操作时间',
                    prop: 'operationDate',
                    width: '200',
                },
                {
                    label: '操作',
                    type: 'action',
                    fixed: 'right',
                    width: '200',
                    actionList: [
                        {
                            text: '打印',
                            handleClick: (row) => {
                                this.doPrint(row.type)
                            }
                        },
                        {
                            text: '办理',
                            handleClick: () => {

                            }
                        },
                    ]
                },
            ],
        }
    },
    methods: {
        clearSearch(){
            for(let key in this.search){
                this.search[key] = ''
            }
        },
        doPrint(type){
            this.printType = type
            this.print = true
        },
        changePrintState(state){
            this.print = state
        }
    },
    components: {
        SearchForm,
        DataTable
    }
}
</script>

<style lang="less" scoped>

</style>
