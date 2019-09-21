<template>
  <div class="login-way">
    <el-form :model="loginWayForm">
      <el-form-item>
        <el-input v-model="loginWayForm.accout" placeholder="请输入登陆手机号/邮箱" />
      </el-form-item>
      <el-form-item class="password-item">
        <el-input v-model="loginWayForm.password" placeholder="请输入密码" show-password />
      </el-form-item>
      <el-form-item class="auto-login-item">
        <el-checkbox v-model="loginWayForm.autoLogin">
          七天内自动登录
        </el-checkbox>
        <div class="auto-login-btn-box">
          <span>找回密码</span>
          <span>无法登陆</span>
        </div>
      </el-form-item>
    </el-form>
    <div class="login-btn" @click="handleLoginClick">
      登陆
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { userLogin } from 'api/user.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      loginWayForm: {
        account: '',
        password: '',
        autoLogin: true
      }
    }
  },
  methods: {
    // 登录
    handleLoginClick () {
      userLogin(this.loginWayForm).then(res => {
        let { code, data } = res
        if (code !== ERR_OK) {
          this.$message.error('登录失败')
          return false
        }
        // 缓存用户数据
        this.setUserInfo(data)
        // 关闭弹窗
        this.setShowLogin(false)
        // 重载页面
        window.location.reload()
      })
    },
    // vuex
    ...mapMutations('login', {
      'setUserInfo': 'SET_USER_INFO',
      'setShowLogin': 'SET_SHOW_LOGIN'
    })
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/login-form.styl';
</style>
