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
import printForm from '@/print-page/computed-apply.vue'

export default {
    data (){
        return {
            print:false,
            search:{
                type:'',
                brand:'',
                date:'',
                explain:'',
                num: '',
                state:'',
                approve: [],
                send: []
            },
            items:[
                {
                    prop: 'type',
                    type: 'select',
                    label: '电脑类型:',
                    options: [
                        {value:1,text:'台式电脑'},
                        {value:2,text:'笔记本电脑'},
                    ],
                    rules: 'default'
                },
                {
                    prop: 'brand',
                    type: 'select',
                    label: '品牌:',
                    options: [
                        {value:1,text:'戴尔'},
                        {value:2,text:'华硕'},
                        {value:3,text:'苹果'},
                        {value:4,text:'神州'},
                    ],
                    rules: 'default'
                },
                {
                    prop: 'date',
                    type: 'dateRange',
                    label: '申请时间:',
                    rules: 'default'
                },
                {
                    prop: 'explain',
                    type: 'textarea',
                    label: '申请说明:',
                    rules: 'default'
                },
                {
                    prop: 'num',
                    type: 'number',
                    label: '申请数量:',
                    rules: 'default'
                },
                {
                    prop: 'state',
                    type: 'radio',
                    label: '紧急程度:',
                    options: [
                        {value:1,text:'紧急'},
                        {value:2,text:'一般'},
                        {value:3,text:'不急'}
                    ],
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
                    prop: 'send',
                    type: 'select',
                    options:[
                        {value:1,text:'人员一'},
                        {value:2,text:'人员二'},
                        {value:3,text:'人员三'},
                    ],
                    label: '抄送人:',
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



