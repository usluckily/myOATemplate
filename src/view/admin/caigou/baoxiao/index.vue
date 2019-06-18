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
import printForm from '@/print-page/active-reim.vue'

export default {
    data (){
        return {
            print:false,
            search:{
                type:'',
                num:'',
                dept:'',
                amount:'',
                explain:'',
                file: []
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
                    prop: 'num',
                    type: 'textarea',
                    label: '单据编号:',
                    placeholder: '请填写单据编号，多个用,分隔',
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
                    label: '报销金额:',
                    rules: 'default'
                },
                {
                    prop: 'explain',
                    type: 'textarea',
                    label: '报销说明:',
                    rules: 'default'
                },
                {
                    prop: 'file',
                    type: 'e-upload',
                    limit: 999,
                    label: '单据附件:',
                    rules: [
                        {required: true, message: '请上传单据附件'}
                    ]
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



