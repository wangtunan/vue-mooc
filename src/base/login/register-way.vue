<template>
  <div class="login-way">
    <el-form :model="loginWayForm">
      <el-form-item>
        <el-input v-model="loginWayForm.phone" placeholder="请输入注册手机号"></el-input>
      </el-form-item>
      <el-form-item class="password-item">
        <el-input v-model="loginWayForm.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item class="auto-login-item">
        <el-checkbox  v-model="loginWayForm.argement">同意</el-checkbox>
        <span class="agreement">《慕课网注册协议》</span>
      </el-form-item>
    </el-form>
    <div class="login-btn">注册</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginWayForm: {
        phone: '',
        code: '',
        argement: false
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/login-form.styl';

  .login-way
    .agreement
      color: #37f;
      cursor: pointer;
    >>> .el-checkbox__label
      color: #9199a1!important;
</style>
