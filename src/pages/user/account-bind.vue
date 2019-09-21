<template>
  <div class="account-bind">
    <p ref="loginRecord" class="last-login-record">
      上次登录时间：{{ userinfo.lastLoginTime }}  地点：<span @click="handleRecordClick">查看最近操作记录</span>
      <i class="iconfont" @click="handleCloseRecord">&#xe619;</i>
    </p>
    <dl>
      <dt class="bind-title">
        账号绑定
        <span class="bind-rate">完成 <strong>4/4</strong></span>
      </dt>
      <dd v-for="(item,index) in userinfo.binds" :key="index" class="bind-item">
        <i v-if="item.icon=='email'" class="iconfont">&#xe75d;</i>
        <i v-if="item.icon=='phone'" class="iconfont">&#xe61a;</i>
        <i v-if="item.icon=='password'" class="iconfont">&#xe61e;</i>
        <i v-if="item.icon=='social'" class="iconfont">&#xe671;</i>
        <div class="bind-introduction">
          <p class="bind-title">
            <span class="bind-type">{{ item.type }}</span>
            {{ getBindValue(item) }}
          </p>
          <p class="bind-subtitle">
            {{ item.desc }}
          </p>
          <ul v-if="item.icon=='social'" class="social-list">
            <li v-for="(social, index) in item.account" :key="index" class="social-item">
              <i v-if="social.type=='weibo'" class="iconfont" :class="{yellow: social.value}">&#xe699;</i>
              <i v-if="social.type=='qq'" class="iconfont" :class="{blue: social.value}">&#xe646;</i>
              <i v-if="social.type=='wechat'" class="iconfont" :class="{green: social.value}">&#xe6a0;</i>
              <div class="social-content">
                <p class="social-type">
                  {{ social.title }}
                </p>
                <p class="social-bind-type" :class="{green: social.value}">
                  {{ social.value ? '已绑定' : '未绑定' }}
                </p>
                <span class="social-bind-btn">{{ social.value ? '添加绑定' : '解除绑定' }}</span>
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
              &.blue
                color: #0788CA;
              &.green
                color: #13BC6C;
              &.yellow
                color: #FDD449;
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
                &.green
                  color: green;
              .social-bind-btn
                padding: 3px 5px;
                font-size: 12px;
                border: 1px solid #d9dde1;
                cursor: pointer;
</style>
