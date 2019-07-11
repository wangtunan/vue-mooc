<template>
  <div class="account-bind">
    <p class="last-login-record" ref="loginRecord">
      上次登录时间：2019-07-10 22:04:17 地点：
      <span>查看最近操作记录</span>
      <i class="iconfont" @click="handleCloseRecord">&#xe619;</i>
    </p>
    <dl>
      <dt class="bind-title">
        账号绑定
        <span class="bind-rate">完成 <strong>4/4</strong></span>
      </dt>
      <dd class="bind-item" v-for="(item,index) in bindList" :key="index">
        <i class="iconfont" v-if="item.icon=='email'">&#xe75d;</i>
        <i class="iconfont" v-if="item.icon=='phone'">&#xe61a;</i>
        <i class="iconfont" v-if="item.icon=='password'">&#xe61e;</i>
        <i class="iconfont" v-if="item.icon=='social'">&#xe671;</i>
        <div class="bind-introduction">
          <p class="bind-title">
            <span class="bind-type">{{item.type}}</span>
            {{item.title}}
          </p>
          <p class="bind-subtitle">{{item.subtitle}}</p>
          <ul class="social-list" v-if="item.icon=='social'">
            <li class="social-item">
              <i class="iconfont">&#xe699;</i>
              <div class="social-content">
                <p class="social-type">微博</p>
                <p class="social-bind-type">未绑定</p>
                <span class="social-bind-btn">立即绑定</span>
              </div>
            </li>
            <li class="social-item">
              <i class="iconfont">&#xe646;</i>
              <div class="social-content">
                <p class="social-type">微信</p>
                <p class="social-bind-type">未绑定</p>
                <span class="social-bind-btn">立即绑定</span>
              </div>
            </li>
            <li class="social-item">
              <i class="iconfont">&#xe6a0;</i>
              <div class="social-content">
                <p class="social-type">QQ</p>
                <p class="social-bind-type">未绑定</p>
                <span class="social-bind-btn">立即绑定</span>
              </div>
            </li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bindList: []
    }
  },
  created () {
    this.bindList = [
      { id: 1, icon: 'email', type: '邮箱', title: '5834xxx138@qq.com 已绑定', subtitle: '可用邮箱加密码登录慕课网，可用邮箱找回密码' },
      { id: 2, icon: 'phone', type: '手机', title: '187******92', subtitle: '可用手机号加密码登录慕课网，可通过手机号找回密码' },
      { id: 3, icon: 'password', type: '密码', title: '已设置', subtitle: '用于保护账号信息和登录安全' },
      { id: 4, icon: 'social', type: '社交账号', title: '', subtitle: '绑定第三方账号，可以直接登录，还可以将内容同步到以下平台，与更多好友分享' }
    ]
  },
  methods: {
    handleCloseRecord () {
      const loginRecord = this.$refs.loginRecord
      loginRecord.style.height = 0
      loginRecord.style.opacity = 0
    }
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
      .iconfont
        float: right;
        margin-right: -10px;
        padding: 0 10px;
        cursor: pointer;
        font-size: 12px;
    .bind-title
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
    .bind-item
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
        .social-list
          position: absolute;
          left: 0;
          top: 80px;
          .social-item
            display: inline-flex;
            align-items: center;
            margin-right: 60px;
            .iconfont
              display: inline-block;
              margin-right: 10px;
              width: 80px;
              height: 80px;
              font-size: 80px;
              text-align: center;
              line-height: 80px;
              color: #c8cdd2;
            .social-content
              display: inline-block;
              margin-top: 4px;
              .social-type
                font-size: 16px;
                color: #333;
                font-weight: 700;
              .social-bind-type
                margin: 5px 0 8px;
                font-size: 12px;
                color: #ef1514;
              .social-bind-btn
                padding: 3px 5px;
                font-size: 12px;
                border: 1px solid #d9dde1;
                cursor: pointer;
</style>
