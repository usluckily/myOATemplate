<template>
  <div class="all">
    <div class="login_box">
      <spiderWeb></spiderWeb>
      <div class="login-box-main">
        <div class="item">
            <h5 class="item-text">用户名</h5>
            <el-input v-model="user.account" placeholder="用户名" class="my-login-input"></el-input>
          </div>

          <div class="item">
            <h5 class="item-text">密码</h5>
            <el-input type="password" v-model="user.pwd" placeholder="密码" @keyup.enter.native="login()" class="my-login-input"></el-input>
          </div>

          <div class="item">
            <el-button class="my-login-button" type="primary" style="width:100%;" :loading="btnLoad" @keyup.enter="login()" @click="login()">立即登陆</el-button>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import spiderWeb from '@/components/spider-web/index.vue'

  export default {
    name:'login',
    data(){
      return{
        msg:'page login',
        btnLoad:false,
        modal:{//控制modal
          show:false,
          title:'提示',
          cancelText:'取消',
          okText:'确认',
          contentText:'提示'
        },
        user:{
          account:'admin',
          pwd:'admin'
        }
      }
    },
    mounted(){
    },
    components:{
      spiderWeb
    },
    methods:{
      login (){
        // if(!this.user.account || !this.user.pwd) return this.$message.error('请填写用户密码')
        return this.$message('登录功能后端开发中...')

        this.$store.dispatch('login', this.user).then(res => {
          sessionStorage.setItem('isLogin',true)
          this.$router.push('/admin')
        }).catch(e => {
          this.$message.error(e)
        })
      }
    }
  }
</script>
<style lang="less">
.left {
  img{
    float: left;
    vertical-align: top;
  }
}
  .all{
    .login_box {
      background: -webkit-linear-gradient(to bottom right, #0580f3, rgba(5,128,243,0.6));
      background: linear-gradient(to bottom right, #0580f3, rgba(5,128,243,0.6));
      background: -ms-linear-gradient(to bottom right, #0580f3, rgba(5,128,243,0.6));
      .login-box-main{
        animation: loginBox 0.6s;
        width: 500px;
        background: white;
        height: auto;
        margin: 0 auto;
        position: relative;
        top: 150px;
        border-radius: 3px;
        padding: 30px;
        box-shadow: 0px 2px 15px 5px rgba(4, 0, 0, 0.15);
        .item{
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 40px;
          width: 100%;
          margin: 20px 0;
          .item-text{
            width: 80px;
          }
        }
        .my-login-input,.my-login-button{
          width:100%;
        }
      }
      // background: url(../assets/image/bg.png) no-repeat;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
</style>
