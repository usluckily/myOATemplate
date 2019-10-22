<template>
    <div class="main-box">
        <div id="content">
            <div v-for="i in 7" :key="i" draggable="true">{{i}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            content:{},
            contentGrid:[2,2]
        }
    },
    created() {

    },
    methods:{
        renderContent() {
            this.content = document.querySelector('#content')
            let child = ''

        }
    }
}
</script>

<style lang="less" scoped>
.main-box{
    width:100%;
    height:500px;
}
#content{
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: 33.33% 33.33% 33.33%;
    div{
        border:1px solid #ccc;
        // height:100px;
    }
}
</style>
