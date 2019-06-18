<template>
    <div>
        <searchForm :model="search" :items="items" ref="normalForm" :showMessage="true"
        labelWidth="120px"></searchForm>

        <myPrint v-if="print" :printState="print" @printState="changePrintState">
            <printForm slot="print-slot"></printForm>
        </myPrint>
    </div>
</template>

<script>
import searchForm from '@/components/search-form'
import printForm from '@/print-page/active-apply.vue'

export default {
    data (){
        return {
            print:false,
            search:{
                type:'',
                dept:'',
                amount:'',
                explain:'',
                approve: []
            },
            items:[
                {
                    prop: 'type',
                    type: 'select',
                    label: '活动类型:',
                    options: [
                        {value:1,text:'类型一'},
                        {value:2,text:'类型二'},
                        {value:3,text:'类型三'},
                    ],
                    rules: 'default'
                },
                {
                    prop: 'dept',
                    type: 'select',
                    options: [
                        {value:1,text:'部门一'},
                        {value:2,text:'部门二'},
                        {value:3,text:'部门三'}
                    ],
                    label: '申请部门:',
                    rules: 'default'
                },
                {
                    prop: 'amount',
                    type: 'number',
                    min: 0,
                    label: '活动经费:',
                    rules: 'default'
                },
                {
                    prop: 'explain',
                    type: 'textarea',
                    label: '活动说明:',
                    rules: 'default'
                },
                {
                    prop: 'approve',
                    type: 'select',
                    options:[
                        {value:1,text:'人员一'},
                        {value:2,text:'人员二'},
                        {value:3,text:'人员三'},
                    ],
                    label: '审批人:',
                    multiple:true,
                    filterable:true,
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
        printForm
    }
}
</script>

<style lang="less" scoped>

</style>



