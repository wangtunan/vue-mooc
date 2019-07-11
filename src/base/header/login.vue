<template>
  <ul class="login-area">
    <li class="item invite">
      <router-link to="/">
        <img src="https://www.imooc.com/static/img/index/redPacket.png" width="14" height="16" alt="">
        <span class="login-text">邀请有奖</span>
      </router-link>
    </li>
    <li class="item download">
      <a href="javascript:;">
        <span class="login-text">下载APP</span>
      </a>
    </li>
    <li class="item cart">
      <a href="javascript:;">
        <i class="iconfont">&#xe63b;</i>
        <span class="login-text">购物车</span>
      </a>
    </li>
    <template v-if="userInfo && userInfo.avatar">
      <li class="item bell">
        <i class="iconfont">&#xe6eb;</i>
      </li>
      <li class="item userinfo" @mouseenter="showUserInfo = true" @mouseleave="showUserInfo = false">
        <div class="img-box">
          <img :src="userInfo.avatar" alt="">
        </div>
        <div class="userinfo-wrapper" v-show="showUserInfo">
          <div class="userinfo-message-wrapper">
            <img :src="userInfo.avatar" alt="">
            <div class="userinfo-message">
              <p class="name ellipsis">{{userInfo.name}}</p>
              <p class="number">
                <span class="number-item">经验 <b>{{userInfo.experience}}</b></span>
                <span class="number-item">积分 <b>{{userInfo.integral}}</b></span>
              </p>
            </div>
          </div>
          <div class="fast-nav" @click="showUserInfo = false">
            <div class="fast-nav-item">
              <i class="iconfont">&#xe60e;</i>
              我的课程
            </div>
            <div class="fast-nav-item">
              <i class="iconfont">&#xe611;</i>
              订单中心
            </div>
            <div class="fast-nav-item">
              <i class="iconfont">&#xe61b;</i>
              积分商城
            </div>
            <div class="fast-nav-item" @click="handleSettingClick">
              <i class="iconfont">&#xe680;</i>
              个人设置
            </div>
          </div>
          <p class="exit-btn" >
            <span @click="handleUserLogout">安全退出</span>
          </p>
        </div>
      </li>
    </template>
    <li class="item sign" v-else>
      <span class="sign-btn" @click="handleLoginClick">登录</span>/
      <span class="sign-btn" @click="handleRegisterClick">注册</span>
    </li>
  </ul>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      showUserInfo: false
    }
  },
  methods: {
    // 登录点击
    handleLoginClick () {
      this.setShowLogin(true)
      this.setLoginAction('login')
    },
    // 注册点击
    handleRegisterClick () {
      this.setShowLogin(true)
      this.setLoginAction('register')
    },
    // 安全退出
    handleUserLogout () {
      this.setUserInfo({})
      this.$router.push('/home')
    },
    // 个人设置点击
    handleSettingClick () {
      this.$router.push('/user')
    },
    // vuex
    ...mapMutations('login', {
      'setShowLogin': 'SET_SHOW_LOGIN',
      'setLoginAction': 'SET_LOGIN_ACTION',
      'setUserInfo': 'SET_USER_INFO'
    })
  },
  computed: {
    // vuex
    ...mapGetters(['userInfo'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl'
  .login-area
    float: right;
    position: relative;
    .item
      float: left;
      line-height: 72px;
      font-size: 14px;
      color: #71777d;
      &:hover
        .login-text
          color: $red
      &.invite > a
        display: block;
        width: 100px;
        text-align: center;
        & > img
          margin-right: 8px
          dispaly: inline-block;
          vertical-align: middle;
        & > span
          dispaly: inline-block;
          vertical-align: middle;
      &.download
        position: relative;
        line-height: 74px;
        & > a
          display: block;
          padding: 0 12px;
          width: 60px;
      &.cart
        margin: 18px 0;
        padding: 0 18px;
        border: 1px solid #d9dde1;
        border-radius: 18px;
        line-height: 36px;
        cursor: pointer;
        &:hover
          background-color: #f8fafc;
        .iconfont
          margin-right: 5px;
          font-weight: 700;
      &.sign
        margin-left: 10px;
        .sign-btn
          display: inline-block;
          padding: 0 18px;
          cursor: pointer;
          &:hover
            color: $red;
      &.bell
        padding: 2px 20px 0;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        &:hover
          .iconfont
            color: #F01414
        .iconfont
          font-size: 22px;
      &.userinfo
        position: relative;
        padding: 0 20px 0 15px;
        height: 75px;
        cursor: pointer;
        &:hover
          .img-box
            box-shadow: 0 0 0 2px #F01414;
        .img-box
          margin-top: 22px;
          width: 32px;
          height: 32px;
          background-color: #ccc;
          border-radius: 50%;
          &>img
            display:block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        .userinfo-wrapper
          position: absolute;
          right: 0;
          top: 72px;
          width: 306px;
          padding: 24px;
          background-color: #fff;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          box-shadow: 0 4px 8px $shadow;
          box-sizing: border-box;
          .userinfo-message-wrapper
            display: flex;
            align-items: center;
            & > img
              display: block;
              margin-right: 20px;
              width: 72px;
              height: 72px;
              border-radius: 50%;
            .userinfo-message
              flex: 1;
              & > p
                line-height: 1;
                &.name
                  font-size: 16px;
                  color: #07111b;
                  line-height: 24px;
                &.number
                  margin-top: 4px;
                  font-size: 12px;
                  line-height: 12px;
                  .number-item
                    margin-right: 10px;
                    & > b
                      margin-left: 2px;
                      font-weight: 750;
                      color: #93999f;
          .fast-nav
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin: 20px 0;
            .fast-nav-item
              flex: 0 0 126px;
              width: 126px;
              height: 36px;
              margin-right: 2px;
              margin-bottom: 2px;
              line-height: 36px;
              color: #4d555d;
              background-color: #F8FAFC;
              border-radius: 2px;
              text-indent: 10px;
              &:hover
                background-color: #D9DDE1;
              .iconfont
                margin-right: 5px;
                color: #000;
                font-weight: 700;
                font-size: 16px;
          .exit-btn
            line-height: 24px;
            & > span
              font-size: 14px;
              line-height: 24px;
            &:hover
              color: #F01414;
</style>
