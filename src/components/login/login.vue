<template>
  <div class="login-container">
    <div class="login-mask" @click="handleMaskClick" />
    <div class="login-main">
      <div class="login-tab">
        <span
          v-for="(item,index) in loginTabs"
          :key="index"
          class="login-tab-item"
          :class="{active: index==currentTabIndex}"
          @click="handleLoginTabClick(index)"
        >{{ item }}</span>
        <span class="login-close iconfont" @click="setShowLogin(false)">&#xe619;</span>
      </div>
      <component :is="componentName" />
      <div v-show="componentName!='qrcode-way'" class="three-login-way">
        <span class="phone-login">{{ threeTitle }}</span>
        <span class="three-way-item">
          <i class="iconfont weibo">&#xe653;</i>
          <i class="iconfont wechart">&#xe646;</i>
          <i class="iconfont qq">&#xe6a0;</i>
        </span>
      </div>
      <div class="qrcode-way" :style="getQrcodeBackground" @click="handleQrcodeClick" />
    </div>
  </div>
</template>
<script>
import LoginWay from './login-way.vue'
import RegisterWay from './register-way.vue'
import QrcodeWay from './qrcode-way.vue'
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      loginTabs: ['登录', '注册'],
      currentTabIndex: 0,
      componentName: 'login-way'
    }
  },
  created () {
    this.currentTabIndex = this.loginAction === 'login' ? 0 : 1
  },
  methods: {
    // 遮罩点击
    handleMaskClick () {
      this.$emit('maskClick')
    },
    // 登陆tab点击
    handleLoginTabClick (index) {
      this.currentTabIndex = index
    },
    // 二维码点击事件
    handleQrcodeClick () {
      this.componentName = this.componentName === 'qrcode-way' ? 'login-way' : 'qrcode-way'
    },
    // vuex
    ...mapMutations({
      'setShowLogin': 'login/SET_SHOW_LOGIN'
    })
  },
  computed: {
    getQrcodeBackground () {
      let background = this.componentName === 'qrcode-way' ? `url('https://www.imooc.com/static/img/pcLogin.png') no-repeat 0 0` : `url('https://www.imooc.com/static/img/erweima.png') no-repeat 0 0`
      return {
        background: background
      }
    },
    threeTitle () {
      return this.currentTabIndex === 0 ? '手机短信登陆' : '其它登陆方式'
    },
    // vuex
    ...mapGetters(['loginAction'])
  },
  watch: {
    currentTabIndex (newVal) {
      this.componentName = newVal === 0 ? 'login-way' : 'register-way'      
    }
  },
  components: {
    LoginWay,
    RegisterWay,
    QrcodeWay
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl';
  $red = #f20d0d;
  .login-container
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    .login-mask
      mask(rgba(0,0,0,0.6), 1000);
    .login-main
      z-index: 100000;
      position: absolute;
      left: 50%;
      top: 50%;
      padding: 10px 0 30px;
      width: 384px;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border-radius: 12px;
      min-height: 300px;
      .login-tab
        position: relative;
        padding: 0 20px 25px;
        .login-close
          float: right;
          display: inline-block;
          padding: 0 10px;
          line-height: 50px;
          font-size: 24px;
          color: #787d82;
          cursor: pointer;
          &:hover
            transform: scale(1.2);
            color:$red;
        .login-tab-item
          display: inline-block;
          width: 80px;
          font-size: 16px;
          line-height: 50px;
          color: #787d82;
          text-align: center;
          font-weight: 700;
          cursor: pointer;
          &.active
            color: $red;
            &::after
              content: '';
              display: block;
              margin: 0 auto;
              width: 16px;
              height: 4px;
              border-radius: 4px;
              background-color: $red; 
      .three-login-way
        margin-top: 22px;
        padding: 0 32px;
        .phone-login
          display: inline-block;
          vertical-align: middle;
          margin-right: 24px;
          padding-left: 24px;
          padding-right: 24px;
          border-right: 1px solid #1a1C1F21
          line-height: 24px;
          font-size: 14px;
          color: #f20d0d;
        .three-way-item
          display: inline-block;
          vertical-align: middle;
          line-height: 24px;
          .iconfont
            margin: 0 12px;
            display: inline-block;
            vertical-align: middle;
            color: #b5b9bc;
            font-size: 24px;
            cursor: pointer;
            &.weibo:hover
              color: #f20d0d;
            &.wechart:hover
              color: #00B33B;
            &.qq:hover
              color: #0088CC;
      .qrcode-way
        position: absolute;
        bottom: 0;
        right: 0;
        width: 60px;
        height: 60px;
        background:url('https://www.imooc.com/static/img/erweima.png') no-repeat 0 0;
        border-bottom-right-radius: 12px;
        cursor: pointer; 
</style>
