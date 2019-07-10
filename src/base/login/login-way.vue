<template>
  <div class="login-way">
    <el-form :model="loginWayForm">
      <el-form-item>
        <el-input v-model="loginWayForm.accout" placeholder="请输入登陆手机号/邮箱"></el-input>
      </el-form-item>
      <el-form-item class="password-item">
        <el-input v-model="loginWayForm.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item class="auto-login-item">
        <el-checkbox  v-model="loginWayForm.autoLogin">七天内自动登录</el-checkbox>
        <div class="auto-login-btn-box">
          <span>找回密码</span>
          <span>无法登陆</span>
        </div>
      </el-form-item>
    </el-form>
    <div class="login-btn">登陆</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginWayForm: {
        account: '',
        password: '',
        autoLogin: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/login-form.styl';
</style>
