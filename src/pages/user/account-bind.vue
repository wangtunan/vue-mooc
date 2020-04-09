<template>
  <div class="account-bind">
    <p ref="loginRecord" class="last-login-record">
      上次登录时间：{{ userinfo.lastLoginTime }}  地点：<span @click="handleRecordClick">查看最近操作记录</span>
      <i class="iconfont" @click="handleCloseRecord">&#xe619;</i>
    </p>
    <dl>
      <dt class="bind-title">
        账号绑定
        <span class="bind-rate">完成 <strong>5/5</strong></span>
      </dt>
      <dd class="bind-item">
        <i class="iconfont">&#xe75d;</i>
        <div class="bind-introduction">
          <p class="bind-title">
            <span class="bind-type">邮箱</span>
            {{ userinfo.email }}
          </p>
          <p class="bind-subtitle">可用邮箱加密码登录慕课网，可用邮箱找回密码</p>
          <mooc-button class="bind-btn" size="medium" round>
            {{ userinfo.email ? '更改' : '去绑定' }}
          </mooc-button>
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
          <mooc-button class="bind-btn" size="medium" round>
            {{ userinfo.phone ? '更改' : '去绑定' }}
          </mooc-button>
        </div>
      </dd>
      <dd class="bind-item">
        <i class="iconfont">&#xe61e;</i>
        <div class="bind-introduction">
          <p class="bind-title">
            <span class="bind-type">密码</span>
          </p>
          <p class="bind-subtitle">用于保护账号信息和登录安全</p>
          <mooc-button class="bind-btn" size="medium" round>修改</mooc-button>
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
          <mooc-button class="bind-btn" size="medium" round>
            {{ userinfo.qq ? '更改' : '去绑定' }}
          </mooc-button>
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
          <mooc-button class="bind-btn" size="medium" round>
            {{ userinfo.wechat ? '更改' : '去绑定' }}
          </mooc-button>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    userinfo: {
      type: Object
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
    // 获取绑定的值
    getBindValue (item) {
      if (item.icon !== 'password' && item.icon !== 'social') {
        return item.value ? `${item.value} 已绑定` : '未绑定'
      } else if(item.value) {
        return '已设置'
      } else {
        return ''
      }
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
      & > span
        color: #008cc8;
        cursor: pointer;
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
        .bind-btn
          z-index: 100;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
</style>
