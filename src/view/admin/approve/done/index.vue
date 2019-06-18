<template>
    <div>
        <SearchForm :model="search" :items="items" :inline="true"></SearchForm>
        <DataTable :columns="columns" :data="tableData"></DataTable>
    </div>
</template>

<script>
import SearchForm from '@/components/search-form/'
import DataTable from '@/components/data-table/'

export default {
    data(){
        return {
            tableData:[
                {num:123,type:'业务类型',now:'当前任务',applyPerson:'张三',endDate:'2011-11-11 11:11:11',operationDate:'2011-11-11 11:11:1'},
                {num:123,type:'业务类型',now:'当前任务',applyPerson:'张三',endDate:'2011-11-11 11:11:11',operationDate:'2011-11-11 11:11:1'}
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
                            text: '办理',
                            handleClick: () => {

                            }
                        }
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
