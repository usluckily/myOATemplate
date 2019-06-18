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
                holiday:'',
                explain:'',
                approve: [],
                send: []
            },
            items:[
                {
                    prop: 'holiday',
                    type: 'select',
                    label: '我的假期:',
                    options: [
                        {value:1,text:'假期一'},
                        {value:2,text:'假期二'},
                        {value:3,text:'假期三'},
                    ],
                    rules: 'default'
                },
                {
                    prop: 'explain',
                    type: 'textarea',
                    label: '销假缘由:',
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



