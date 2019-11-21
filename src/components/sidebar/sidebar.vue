<template>
  <div class="sidebar">
    <ul class="sidebar-list">
      <li class="sidebar-item">
        <i class="iconfont">&#xe671;</i>
        <span class="sidebar-text">意见反馈</span>
      </li>
      <li class="sidebar-item">
        <img class="sidebar-item-img" src="https://www.imooc.com/static/img/index/redPacket.png" width="18" height="20" alt="">
        <span class="sidebar-text">邀请有礼</span>
      </li>
      <li class="sidebar-item">
        <i class="iconfont">&#xe62d;</i>
        <span class="sidebar-text">帮助中心</span>
      </li>
      <li class="sidebar-item">
        <i class="iconfont">&#xe61a;</i>
        <span class="sidebar-text">APP下载</span>
        <div class="app-code code" />
      </li>
      <li class="sidebar-item">
        <i class="iconfont">&#xe628;</i>
        <span class="sidebar-text">官方微信</span>
        <div class="wechat-code code" />
      </li>
      <li v-show="showBackTop" class="sidebar-item" @click="handleBackTopClick">
        <i class="iconfont">&#xe612;</i>
        <span class="sidebar-text">返回顶部</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    handleBackTopClick () {
      if (!this.timer) {
        let step = 0
        this.timer = setInterval(() => {
          if (this.scrollTop <= 0) {
            clearInterval(this.timer)
            this.timer = null
            return
          }
          step += 10
          document.documentElement.scrollTop -= step
        }, 20)
      }
    }
  },
  computed: {
    showBackTop () {
      let clientHeight = document.body.clientHeight
      return this.scrollTop >= clientHeight
    },
    ...mapGetters(['scrollTop'])
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl'
  .sidebar
    z-index: 66;
    position: fixed;
    right: 0;
    padding: 0 16px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    box-shadow: 0 4px 12px $shadow
    border-radius: 5px;
    .sidebar-item
      padding: 16px 0;
      width: 26px;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #edf1f2;
      text-align: center;
      cursor: pointer;
      &:hover
        .iconfont
          display: none;
        .sidebar-text
          display: block;
        .sidebar-item-img
          display: none;
        .code
          opacity: 1;
          transform: scale(1);
      .iconfont
        font-size: 24px;
        color: $font-four-color;
      .sidebar-text
        display: none;
        font-size: 12px;
        line-height: 16px;
        color: $font-first-color;
      .code
        position: absolute;
        right: 56px;
        bottom: -4px;
        width: 172px;
        height: 212px;
        opacity: 0;
        transform-origin: 100% 100%;
        transform: scale(0);
        transition: all 0.3s ease-in-out;
        background: url('https://www.imooc.com/static/img/common/elevator.png?t=2') no-repeat 0 0;
        &.app-code
          bottom: -2px;
          background-position: 0 -220px;
</style>
