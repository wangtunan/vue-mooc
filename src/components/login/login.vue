<template>
  <div class="login-way">
    <el-form ref="loginForm" :model="loginForm" :rules="rules">
      <el-form-item prop="username">
        <el-input ref="username" v-model.trim="loginForm.username" placeholder="请输入手机号/邮箱" clearable />
      </el-form-item>
      <el-form-item prop="password">
        <el-input ref="passowrd" v-model.trim="loginForm.password" placeholder="请输入密码" show-password />
      </el-form-item>
      <el-form-item v-if="index === 1" prop="ckpassword">
        <el-input v-model.trim="loginForm.ckpassword" placeholder="请再次输入密码" show-password />
      </el-form-item>
      <el-form-item class="auto-login-item">
        <template v-if="index == 0">
          <el-checkbox v-model="loginForm.auto">
            七天内自动登录
          </el-checkbox>
          <div class="auto-login-btn-box">
            <span>找回密码</span>
            <span>无法登陆</span>
          </div>
        </template>
        <template v-else>
          <el-checkbox v-model="loginForm.argement">
            同意
          </el-checkbox>
          <span class="agreement">《慕课网注册协议》</span>
        </template>
      </el-form-item>
    </el-form>
    <button
      class="login-btn"
      :class="{'is-loading': isLoading || (index == 1 && !loginForm.argement)}"
      @click="handleValidateForm"
    >
      {{ btnText }}
    </button>
  </div>
</template>
<script>
import crypto from 'crypto-js'
import { mapMutations } from 'vuex'
import { userLogin, userRegister } from 'api/user.js'
import { ERR_OK } from 'api/config.js'
export default {
  props: {
    index: Number
  },
  data () {
    const checkPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.loginForm.password) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }
    const rules = {
      username: [
        { required: true, message: '请输入手机号/邮箱', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ],
      ckpassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { validator: checkPassword, trigger: 'blur' }
      ]
    }
    return {
      isLoading: false,
      rules: rules,
      loginForm: {
        username: 'why',
        password: '123456',
        ckpassword: '',
        auto: true,
        argement: false
      }
    }
  },
  mounted () {
    // 自动聚焦
    const usernameRef = this.$refs.username
    const passwordRef = this.$refs.password
    if (!this.loginForm.username) {
      usernameRef.focus()
    } else if (!this.loginForm.password) {
      passwordRef.focus()
    }
    // 监听enter事件
    window.addEventListener('keyup', this.handleListenKeyup)
  },
  methods: {
    // 表单校验
    handleValidateForm () {
      if (this.isLoading || (this.index === 1 && !this.loginForm.argement)) {
        return false
      }
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.handleBtnClick()
        }
      })
    },
    // 按钮点击
    handleBtnClick () {
      const params = {
        username: this.loginForm.username,
        password: crypto.MD5(this.loginForm.password).toString()
      }
      // 判断是登陆还是注册
      const func = this.index === 0 ? userLogin : userRegister
      const tips = this.index === 0 ? '登录' : '注册'
      this.isLoading = true
      func(params).then(res => {
        this.isLoading = false
        let { code, data, msg } = res
        if (code !== ERR_OK) {
          this.loginForm.password = ''
          this.loginForm.ckpassword = ''
          this.loginForm.argement = false
          this.$message.error(msg)
          return false
        }
        this.$message.success(`${tips}成功`)
        this.loginForm = {}
        // 缓存用户数据
        this.setUserInfo(data)
        // 关闭弹窗
        this.setShowLogin(false)
      }).catch(() => {
        this.isLoading = false
        this.$message.error('服务器异常')
      })
    },
    // 监听页面enter事件
    handleListenKeyup (e) {
      if (e.keyCode === 13) {
        this.handleValidateForm()
      }
    },
    // vuex
    ...mapMutations('login', {
      'setUserInfo': 'SET_USER_INFO',
      'setShowLogin': 'SET_SHOW_LOGIN'
    })
  },
  watch: {
    index () {
      this.$refs.loginForm.resetFields()
    }
  },
  computed: {
    btnText () {
      let text = ''
      if (this.index === 0) {
        text = this.isLoading ? '登录中...' : '登录'
      } else {
        text = this.isLoading ? '注册中...' : '注册'
      }
      return text
    }
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.handleListenKeyup)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/login-form.styl';
</style>
