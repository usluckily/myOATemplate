<template>
  <div class="all">

    <div class="layout">

      <div class="my-aside" >
        <el-menu
            class="my-menu el-menu-vertical-demo"
            unique-opened
            background-color="#20222a"
            :collapse="isCollapse">
            
          <m_menu :itemData="i" :collapse="isCollapse" v-for="(i, index) in localMenuList" :key="index"></m_menu>

        </el-menu>

      </div>

      <div class="top-bar">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="setCollapse" style="font-size: 24px;"></i>
        <div class="top-right" @click="logOut">
          <img :src="userInfo.headPic" style="width:45px;height:45px;border-radius:50%;">
          &nbsp;&nbsp;&nbsp;
          <span>{{userInfo.account}}，退出</span>
        </div>
      </div>

      <el-main class="my-content">
        <router-view class="main-content"></router-view>
      </el-main>

    </div>

  </div>
</template>

<script>
import m_menu from './menu'
import {menuData} from '@/config/menuData'
import {mapGetters} from 'vuex'

  export default {
    name: 'admin-main',
    data(){
      return {
        isCollapse: false,
        localMenuList: menuData,
        active: -1,
        routerCache: [],
        nav_list: {
          cur: 0,
        },
        isTeacher: true,
        menus: JSON.parse(sessionStorage.getItem('menus')),
        menusCheckedUrl: '',
        headCur:'',//头部选中index
        defaultActive:''
      }
    },
    created(){
      

    },
    mounted(){
//        this.$Loading.finish();
    },
    methods: {
      setCollapse() {
        this.isCollapse = !this.isCollapse
      },
      logOut(){
        this.$confirm('确认退出？','提示').then(() => {
          this.s.clear()
          this.$routerGo('/login')
        }).catch(() => {
          return
        })
      },
      addRouter(val, active) {
        this.routerCache = val;
        this.active = active != undefined ? active : val.length - 1;
      },
      go(url, index) {
        this.active = index;
        this.$router.push({path: url});
      },
      deleteRouter(index) {
        if(this.routerCache.length == 1) return;
        this.routerCache.splice(index, 1);
        this.$refs.submenus.urlCache.splice(index, 1);
        let reActive, url;
        if(index == this.active && index == 0) {
          this.active = reActive = 0;
        }else if(index == this.active && index == this.routerCache.length) {
          this.active = reActive = index - 1;
        }else if(index < this.active) {
          this.active = reActive = this.active - 1;
        }else if(index >= this.active) {
          reActive = this.active;
        }
        url = this.routerCache[reActive].url;
        this.$router.push({path: url});
      },
      goModule(url, e){
        if (!url) {
          return
        }
        let r_url = '/admin' + this.menusCheckedUrl + url;
        this.$router.push({path: r_url})
      }
    },
    computed:{
      routeMatched(){
        let arr = []
        for(var i in this.$route.matched){
          arr.push(this.$route.matched[i].name)
        }
        return arr
      },
      ...mapGetters(['userInfo'])
    },
    components: {
      m_menu
    },
    watch: {
    }
  }
</script>
<style lang="less" scoped>
  @topH:64px;
  .layout{
    width: 100%;
    height: 100%;
  }
  .top-bar{
    padding: 0 20px;
    overflow: hidden;
    height: @topH;
    line-height: @topH;
    border-bottom: 1px solid #eee;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .top-right{
      position: absolute;
      right: 20px;
      top: 0;
      line-height: @topH;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .my-aside{
    position: relative;
    height: 100%;
    float: left;
    box-shadow: 0px 0px 8px #000;
    z-index:1;
    .my-menu{
      height: 100%;
      border-right: none !important;
    }
    .my-menu:not(.el-menu--collapse) {
      width: 240px;
      min-height: 400px;
    }
  }
  .my-content{
    height:calc(100% - @topH);
  }
</style>

