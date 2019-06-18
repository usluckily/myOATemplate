<template>
    <div>
        <searchForm :model="search" :items="items" ref="normalForm" :showMessage="true"
        labelWidth="120px"></searchForm>

        <myPrint v-if="print" :printState="print" @printState="changePrintState">
            <travelPrint slot="print-slot"></travelPrint>
        </myPrint>
    </div>
</template>

<script>
import searchForm from '@/components/search-form'
import travelPrint from '@/print-page/travel.vue'

export default {
    data (){
        return {
            print:false,
            search:{
                address:'',
                type:'',
                date:'',
                days:'',
                reason:'',
                approve:[],
                send:[]
            },
            items:[
                {
                    prop: 'address',
                    type: 'input',
                    label: '差旅地点:',
                    placeholder: '如北京,上海',
                    rules: 'default'
                },
                {
                    prop: 'type',
                    type: 'select',
                    options: [
                        {value:1,text:'选项一'},
                        {value:2,text:'选项二'},
                        {value:3,text:'选项三'}
                    ],
                    label: '出行方式:',
                    rules: 'default'
                },
                {
                    prop: 'date',
                    type: 'dateRange',
                    label: '时间:',
                    rules: 'default'
                },
                {
                    prop: 'days',
                    type: 'number',
                    label: '时长（天）:',
                    min: 1,
                    rules: 'default'
                },
                {
                    prop: 'reason',
                    type: 'textarea',
                    label: '差旅事由:',
                    placeholder: '差旅事由',
                    rules: 'default'
                },
                {
                    prop: 'approve',
                    type: 'select',
                    options: [
                        {value:1,text:'人员一'},
                        {value:2,text:'人员二'},
                        {value:3,text:'人员三'}
                    ],
                    multiple:true,
                    filterable:true,
                    label: '审批人:',
                    placeholder: '输入以搜索',
                    rules: 'default'
                },
                {
                    prop: 'send',
                    type: 'select',
                    options: [
                        {value:1,text:'人员一'},
                        {value:2,text:'人员二'},
                        {value:3,text:'人员三'}
                    ],
                    multiple:true,
                    filterable:true,
                    label: '抄送人:',
                    placeholder: '输入以搜索',
                    rules: 'default'
                },
                {
                    type: 'action',
                    actionList: [
                        {
                            text: '提交',
                            btnType: 'primary',
                            handleClick: (row) => {
                                this.formValidate('normalForm', this.save);
                            }
                        },
                        {
                            text: '打印',
                            btnType: 'primary',
                            handleClick: (row) => {
                                this.doPrint()
                            }
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        save(){
            this.$message.success('提交成功')
        },
        doPrint(){
            this.print = true
        },
        changePrintState(state){
            this.print = state
        }
    },
    components:{
        searchForm,
        travelPrint
    }
}
</script>

<style lang="less" scoped>

</style>



