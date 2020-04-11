<template>
  <div class="account-bind">
    <p ref="loginRecord" class="last-login-record">
      <span>上次登录时间：{{ userinfo.lastLoginTime }}</span>
      <span>地点：{{ userinfo.lastLoginCity }}</span>
      <span class="record-btn" @click="handleRecordClick">查看最近操作记录</span>
      <i class="iconfont" @click="handleCloseRecord">&#xe619;</i>
    </p>
    <dl>
      <dt class="bind-title">
        账号绑定
        <span class="bind-rate">完成 <strong>5/5</strong></span>
        <mooc-button class="bind-btn" size="mini" round @click="handleEditClick">
          <i class="iconfont">&#xe600;</i>编辑
        </mooc-button>
      </dt>
      <dd class="bind-item">
        <i class="iconfont">&#xe75d;</i>
        <div class="bind-introduction">
          <p class="bind-title">
            <span class="bind-type">邮箱</span>
            {{ userinfo.email }}
          </p>
          <p class="bind-subtitle">可用邮箱加密码登录慕课网，可用邮箱找回密码</p>
        </div>
      </dd>
      <dd class="bind-item">
        <i class="iconfont">&#xe61a;</i>
        <div class="bind-introduction">
          <p class="bind-title">
            <span class="bind-type">手机</span>
            {{ userinfo.phone }}
          </p>
          <p class="bind-subtitle">可用手机号加密码登录慕课网，可通过手机号找回密码</p>
        </div>
      </dd>
      <dd class="bind-item">
        <i class="iconfont">&#xe61e;</i>
        <div class="bind-introduction">
          <p class="bind-title">
            <span class="bind-type">密码</span>
          </p>
          <p class="bind-subtitle">用于保护账号信息和登录安全</p>
        </div>
      </dd>
      <dd class="bind-item">
        <i class="iconfont">&#xe6a0;</i>
        <div class="bind-introduction">
          <p class="bind-title">
            <span class="bind-type">QQ</span>
            {{ userinfo.qq }}
          </p>
          <p class="bind-subtitle">可用第三方QQ账号快速登录慕课网</p>
        </div>
      </dd>
      <dd class="bind-item">
        <i class="iconfont">&#xe646;</i>
        <div class="bind-introduction">
          <p class="bind-title">
            <span class="bind-type">微信</span>
            {{ userinfo.wechat }}
          </p>
          <p class="bind-subtitle">可用第三方微信账号快速登录慕课网</p>
        </div>
      </dd>
    </dl>

    <!-- 账号绑定信息弹窗 -->
    <mooc-dialog title="编辑账号绑定信息" :visible.sync="dialogVisible" width="600px">
      <el-form ref="editForm" :model="editForm" :rules="rules" label-width="80px" label-position="right">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model.trim="editForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model.trim="editForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="editForm.password" type="password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="ckpassword">
          <el-input v-model.trim="editForm.ckpassword" type="password" show-password placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item label="QQ账号" prop="qq">
          <el-input v-model.trim="editForm.qq" placeholder="请输入QQ账号"></el-input>
        </el-form-item>
        <el-form-item label="微信账号" prop="wechat">
          <el-input v-model.trim="editForm.wechat" placeholder="请输入微信账号"></el-input>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <mooc-button size="small" @click="dialogVisible = false">关闭</mooc-button>
        <mooc-button size="small" type="primary" :disable="isLoading" @click="handleValidateForm">保存</mooc-button>
      </template>
    </mooc-dialog>
  </div>
</template>
<script>
import { updateUserBinds } from 'api/user.js'
import { ERR_OK } from 'api/config.js'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import crypto from 'crypto-js'
export default {
  props: {
    userinfo: {
      type: Object
    }
  },
  data () {
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.editForm.password) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }
    const rules = {
      email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' }
      ],
      phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ],
      ckpassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { validator: validatePassword, trigger: 'blur' }
      ],
      qq: [
        { required: true, message: '请输入QQ账号', trigger: 'blur' }
      ],
      wechat: [
        { required: true, message: '请输入微信账号', trigger: 'blur' }
      ]
    }
    return {
      rules: rules,
      isLoading: false,
      dialogVisible: false,
      editForm: {
        email: '',
        phone: '',
        password: '',
        ckpassword: '',
        qq: '',
        wechat: ''
      }
    }
  },
  methods: {
    // 关闭记录
    handleCloseRecord () {
      const loginRecord = this.$refs.loginRecord
      loginRecord.style.height = 0
      loginRecord.style.opacity = 0
    },
    // 记录点击
    handleRecordClick () {
      this.$emit('componentClick', 'record')
    },
    // 编辑账号绑定信息
    handleEditClick () {
      this.dialogVisible = true
      this.editForm = {
        email: this.userInfo.email,
        phone: this.userInfo.phone,
        password: '',
        ckpassword: '',
        qq: this.userInfo.qq,
        wechat: this.userInfo.wechat
      }
      this.$nextTick(() => {
        this.$refs.editForm.resetFields()
      })
    },
    // 校验账号绑定信息
    handleValidateForm () {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.handleSaveClick()
        }
      })
    },
    // 保存账号绑定信息
    handleSaveClick () {
      this.isLoading = true
      const parmas = Object.assign({}, this.editForm, {
        password: crypto.MD5(this.editForm.password).toString()
      })
      updateUserBinds(parmas).then(res => {
        this.isLoading = false
        const { code, msg } = res
        if (code === ERR_OK) {
          this.$message.success(msg)
          this.dialogVisible = false
          // 修改成功后，退出登录，调整到首页弹窗登录框
          this.timer = setTimeout(() => {
            this.logout()
            this.$router.replace('/home')
            this.showLogin(true)
          }, 500)
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
        this.isLoading = false
      })
    },
    // vuex
    ...mapActions({
      'logout': 'login/logout'
    }),
    ...mapMutations({
      'showLogin': 'login/SET_SHOW_LOGIN' 
    })
  },
  computed: {
    // vuex
    ...mapGetters(['userInfo'])
  },
  beforeDestroy () {
    clearTimeout(this.timer)
    this.timer = null
  }
}
</script>

<style lang="stylus" scoped>
  .account-bind
    .last-login-record
      margin-bottom: 20px;
      padding: 0 20px;
      height: 40px;
      line-height: 40px;
      background-color: #fff4e5;
      transition: all 0.1s linear;
      opacity: 1;
      font-size: 12px;
      color: #f56108;
      & > span:not(:first-child) {
        margin-left: 10px;
      }
      .iconfont
        float: right;
        margin-right: -10px;
        padding: 0 10px;
        cursor: pointer;
        font-size: 12px;
      .record-btn
        color: #008cc8;
        cursor: pointer;
    .bind-title
      position: relative;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-weight: 700;
      color: #333;
      .bind-rate
        margin-left: 15px;
        font-size: 12px;
        color: #93999f;
        &>strong
          font-weight: 700;
          color: #ef1514
      .bind-btn
        float: right;
        border: none;
        font-size: 15px;
    .bind-item
      position: relative;
      display: flex;
      align-items: center;
      height: 88px;
      padding: 0 15px;
      border-top: 1px solid #d0d6d9;
      .iconfont
        flex: 0 0 60px
        width: 60px;
        height: 100%;
        line-height: 88px;
        margin-right: 20px;
        font-size: 36px;
        color: #d9dde1;
        text-align: center;
      .bind-introduction
        flex: 1;
        position: relative;
        .bind-title
          font-size: 14px;
          color: #2b333b;
          font-weight: 400;
          .bind-type
            font-size: 16px;
            font-weight: 700;
            color: #333;
        .bind-subtitle
          font-size: 14px;
          color: #93999f;
    >>> .mooc-dialog
      .mooc-dialog-body
        padding: 30px 30px 30px 20px;
</style>
