<template>
  <div class="login-way">
    <el-form :model="registerForm">
      <el-form-item>
        <el-input v-model="registerForm.phone" placeholder="请输入注册手机号" />
      </el-form-item>
      <el-form-item class="password-item">
        <el-input v-model="registerForm.code" placeholder="请输入验证码" />
      </el-form-item>
      <el-form-item class="auto-login-item">
        <el-checkbox v-model="registerForm.argement">
          同意
        </el-checkbox>
        <span class="agreement">《慕课网注册协议》</span>
      </el-form-item>
    </el-form>
    <div class="login-btn" @click="handleRegisterClick">
      注册
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { userRegister } from 'api/user.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      registerForm: {
        phone: '',
        code: '',
        argement: false
      }
    }
  },
  methods: {
    // 注册点击事件
    handleRegisterClick () {
      userRegister(this.registerForm).then(res => {
        let { code, data } = res
        if (code !== ERR_OK) {
          this.$message.error('注册失败')
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

  .login-way
    .agreement
      color: #37f;
      cursor: pointer;
    >>> .el-checkbox__label
      color: #9199a1!important;
</style>
