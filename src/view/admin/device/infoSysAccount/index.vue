<template>
    <div>
        <searchForm :model="search" :items="items" ref="normalForm" :showMessage="true"
        labelWidth="120px"></searchForm>
    </div>
</template>

<script>
import searchForm from '@/components/search-form'

export default {
    data (){
        return {
            search:{
                type:'',
                brand:'',
                state:'',
                explain:'',
                approve: [],
                send: []
            },
            items:[
                {
                    prop: 'type',
                    type: 'select',
                    label: '账号类型:',
                    options: [
                        {value:1,text:'普通'},
                        {value:2,text:'管理员'},
                    ],
                    rules: 'default'
                },
                {
                    prop: 'brand',
                    type: 'select',
                    label: '账号:',
                    options: [
                        {value:1,text:'admin'},
                        {value:2,text:'cs1'},
                        {value:3,text:'cs2'},
                        {value:4,text:'cs3'},
                    ],
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
                    prop: 'explain',
                    type: 'textarea',
                    label: '申请说明:',
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
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        save(){
            this.$message.success('提交成功')
        }
    },
    components:{
        searchForm
    }
}
</script>

<style lang="less" scoped>

</style>



