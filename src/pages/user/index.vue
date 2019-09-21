<template>
  <div class="user-center m-center">
    <div class="user-center-container">
      <div class="user-left-nav">
        <div class="user-avatar">
          <img :src="userInfo.avatar" alt>
        </div>
        <p class="user-name ellipsis">
          {{ userInfo.name }}
        </p>
        <p class="user-id">
          ID: {{ userInfo.ID }}
        </p>
        <p class="user-auth">
          <i
            class="iconfont"
            :class="{red: mainBind.authenticate}"
            :title="mainBind.authenticate?'已实名认证': '未实名认证'"
          >&#xe607;</i>
          <i
            class="iconfont"
            :class="{red: mainBind.certificate}"
            :title="mainBind.certificate?'已学籍认证': '未学籍认证'"
          >&#xe60e;</i>
          <i
            class="iconfont"
            :class="{red: mainBind.phone}"
            :title="mainBind.phone?'已绑定手机': '未绑定手机'"
          >&#xe61a;</i>
          <i
            class="iconfont"
            :class="{red: mainBind.email}"
            :title="mainBind.email?'已绑定邮箱': '未绑定邮箱'"
          >&#xe75d;</i>
        </p>
        <dl class="user-nav">
          <dt class="nav-title">
            账户管理
          </dt>
          <dt
            v-for="(item,index) in navList"
            :key="index"
            class="nav-item"
            :class="{active: currentNavIndex===index}"
            @click="handleNavClick(item,index)"
          >
            {{ item.title }}
            <i class="iconfont">&#xe627;</i>
          </dt>
        </dl>
      </div>
      <component
        :is="componentName"
        v-if="Object.keys(userInfo).length > 0"
        class="user-right-content"
        :userinfo="userInfo"
        @componentClick="handleComponentClick"
      />
    </div>
  </div>
</template>
<script>
import AccountBind from "./account-bind.vue";
import Information from "./information.vue";
import OperateLog from "./operate-log.vue";
import Authenticate from "./authenticate.vue";
import Certificate from "./certificate.vue";
import MAddress from "./address.vue";
import { getUserInfo } from "api/user.js";
import { ERR_OK } from "api/config.js";
export default {
  data () {
    return {
      componentName: "account-bind", // 默认的动态组件的名称
      currentNavIndex: 0, // 当前激活的到昂
      navList: [], // 导航列表
      userInfo: {} // 用户详细信息
    };
  },
  created () {
    this.navList = [
      { id: 1, title: "账号绑定", componentName: "account-bind" },
      { id: 2, title: "个人信息", componentName: "information" },
      { id: 3, title: "操作记录", componentName: "operate-log" },
      { id: 4, title: "实名认证", componentName: "authenticate" },
      { id: 5, title: "学籍认证", componentName: "certificate" },
      { id: 6, title: "收件地址", componentName: "m-address" }
    ];
  },
  mounted () {
    this.getUserDetailInfo()
  },
  methods: {
    // 导航点击事件
    handleNavClick (item, index) {
      this.currentNavIndex = index
      this.componentName = item.componentName
    },
    // 动态组件点击事件
    handleComponentClick (type) {
      switch (type) {
        case "record":
          this.componentName = "operate-log"
          this.currentNavIndex = 2
          break
      }
    },
    // 获取用户详细信息接口
    getUserDetailInfo () {
      getUserInfo().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.userInfo = data
        }
      });
    }
  },
  computed: {
    mainBind () {
      return this.userInfo.mainBind || {}
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
};
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
          color: #333;
          font-weight: 600;
          &.red
            color: #f01414;
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
            color: #fff !important;
            background-color: #ef1515 !important;
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
