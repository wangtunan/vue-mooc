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
    <li class="item sign">
      <span class="sign-btn" @click="handleLoginClick">登录</span>/<span class="sign-btn" @click="handleRegisterClick">注册</span>
    </li>
  </ul>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    // 登录点击
    handleLoginClick () {
      this.setShowLogin(true)
    },
    // 注册点击
    handleRegisterClick () {
      this.etShowLogin(true)
    },
    // vuex
    ...mapMutations({
      'setShowLogin': 'login/SET_SHOW_LOGIN'
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl'
  .login-area
    float: right;
    position: relative;
    overflow: hidden;
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
</style>
