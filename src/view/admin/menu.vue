<template>
    <div class="menu-wrapper">
        <el-submenu v-if="type === 'Group'" :index="localItem.id">
            <template slot="title">
                <i :class="localItem.icon" v-if="localItem.icon != '' && localItem.icon != 'string' "></i>
                <i class="el-icon-info" v-else></i>
                <span slot="title" :class="{'sub-menu-display':collapse}">{{ localItem.title }}</span>
            </template>
            <template v-for="(i,index) in localItem.children">
                <m_menu :itemData="i" :collapse="collapse" :key="index" v-if="i.children && i.children.length"></m_menu>
                    
                <el-menu-item
                v-else
                :index="i.id"
                :key="index"
                @click="goModule(i.src)">
                    <i :class="localItem.icon" v-if="localItem.icon != '' && localItem.icon != 'string' "></i>
                    <span slot="title">{{ i.title }}</span>
                </el-menu-item>
            </template>
        </el-submenu>

        <el-menu-item v-else
        :index="localItem.id"
        @click="goModule(localItem.src)"
        >
            <i :class="localItem.icon" v-if="localItem.icon != '' && localItem.icon != 'string' "></i>
            <span slot="title">{{ localItem.title }}</span>
        </el-menu-item>
    </div>
</template>

<script>
export default {
    name: 'm_menu',
    props: {
        itemData: {
            type: Object,
            default(){
                return {}
            }
        },
        collapse: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        goModule (url,item) {
            this.$router.push({path: '/admin' + url})
        }
    },
    computed: {
        localItem () {
            return this.itemData
        },
        type () {
            return this.localItem.children ? 'Group' : 'single'
        }
    }
}
</script>

<style lang="less" scoped>
    .sub-menu-display{
        display: none;
    }
</style>

