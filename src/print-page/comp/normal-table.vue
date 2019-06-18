
<script>
export default {
    props:{
        data:{
            type:Object,
            default (){
                return {
                    head:[],
                    body:[]
                }
            }
        }
    },
    data (){
        return {

        }
    },
    methods:{
        createHead (h){
            return h('div', {
                staticClass: 'print-table-item print-table-head'
            },[
                this.data.head.map((item, index) => {
                    return <div class="grid" style={ {'flex':item.flex} }>
                        {
                            item.text.map((text, jIndex) => {
                                return <p>{text}</p>
                            })
                        }
                    </div>
                })
            ])
        },
        creareBody (h){
            return h('div', {
                staticClass: 'print-table-body'
            }, [
                this.data.body.map((item, index) => {
                    return <div class="print-table-item">{
                        this.data.head.map((jItem, jIndex) => {
                            if(jItem.type == 'autoNum'){
                                return <div class="grid normal-flex" style={ {'flex':jItem.flex} }> { index + 1 } </div>
                            }
                            return <div class="grid" style={ {'flex':jItem.flex} }> { item[jItem.key] } </div>
                        })
                    }</div>
                })
            ])
        }
    },
    render(h){
        return h('div',{
            staticClass: 'print-table-normal'
        },[
            this.createHead(h),
            this.creareBody(h)
        ])
    }
}
</script>

<style lang="less">
    @import './table.less';
</style>
