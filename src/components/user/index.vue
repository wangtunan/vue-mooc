<template>
  <div class="user-center m-center">
    <div class="user-center-container">
      <div class="user-left-nav">
        <div class="user-avatar">
          <img src="https://img.mukewang.com/5882f5f70001525e01000100-200-200.jpg" alt="">
        </div>
        <p class="user-name ellipsis">BlueMan_汪汪汪</p>
        <p class="user-id">ID: 4770893</p>
        <p class="user-auth">
          <i class="iconfont">&#xe607;</i>
          <i class="iconfont">&#xe60e;</i>
          <i class="iconfont">&#xe61a;</i>
          <i class="iconfont">&#xe75d;</i>
        </p>
        <dl class="user-nav">
          <dt class="nav-title"> 账户管理</dt>
          <dt class="nav-item" v-for="(item,index) in navList" :key="index" :class="{active: currentNavIndex===index}" @click="handleNavClick(item,index)">
            {{item.title}}
            <i class="iconfont">&#xe627;</i>
          </dt>
        </dl>
      </div>
      <component :is="componentName" class="user-right-content"></component>
    </div>
  </div>
</template>
<script>
import AccountBind from './account-bind.vue'
import Information from './information.vue'
import OperateLog from './operate-log.vue'
import Authenticate from './authenticate.vue'
import Certificate from './certificate.vue'
import MAddress from './address.vue'
export default {
  data () {
    return {
      componentName: 'account-bind',
      currentNavIndex: 0,
      navList: []
    }
  },
  created () {
    this.navList = [
      { id: 1, title: '账号绑定', componentName: 'account-bind' },
      { id: 2, title: '个人信息', componentName: 'information' },
      { id: 3, title: '操作记录', componentName: 'operate-log' },
      { id: 4, title: '实名认证', componentName: 'authenticate' },
      { id: 5, title: '学籍认证', componentName: 'certificate' },
      { id: 6, title: '收件地址', componentName: 'm-address' }
    ]
  },
  methods: {
    // 导航点击事件
    handleNavClick (item, index) {
      this.currentNavIndex = index
      this.componentName = item.componentName
    }
  },
  components: {
    AccountBind,
    Information,
    OperateLog,
    Authenticate,
    Certificate,
    MAddress
  }
}
</script>

<style lang="stylus" scoped>
  .user-center
    margin: 30px auto;
    min-height: 700px;
    background-color: #fefefe;
    .user-center-container
      display: flex;
      align-items: flex-start;
      .user-left-nav
        flex: 0 0 216px;
        width: 216px;
        margin-right: 48px;
        background-color: #f8fafc;
        text-align: center;
        .user-avatar
          margin: 32px auto 8px;
          width: 92px;
          height: 92px;
          border: 4px solid #d9dde1;
          box-sizing: border-box;
          border-radius: 50%;
          & > img
            dispaly: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        .user-name
          font-size: 16px;
          line-height: 24px;
        .user-id
          margin: 8px 0 6px;
          font-size: 12px;
          color: #545c63;
        .user-auth
          margin-bottom: 24px;
          .iconfont
            display: inline-block;
            margin: 0 10px;
            width: 25px;
            height: 25px;
            text-align: center;
            line-height: 25px;
            background-color: #fff;
            border-radius: 50%;
            font-size: 16px;
            color: #f01414;
            font-weight: 600;
        .user-nav
          text-align: left;
          .nav-title
            margin: 0 24px 10px;
            padding: 12px 0;
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            border-bottom: 1px solid #ddd;
          .nav-item
            padding-left: 54px;
            height: 48px;
            line-height: 48px;
            font-size: 14px;
            color: #1c1f21;
            cursor: pointer;
            &.active
              color: #fff!important;
              background-color: #ef1515!important;
              .iconfont
                color: inherit;
            &:hover
              background-color: #f2f4f6;
              color: #ef1515;
              .iconfont
                color: inherit;
            .iconfont
              float: right;
              margin-right: 25px;
              font-size: 14px;
              color: #b5b9bc;
      .user-right-content
        flex: 1;
</style>
