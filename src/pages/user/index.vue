<template>
  <div class="user-center m-center">
    <div class="user-center-container">
      <div class="user-left-nav">
        <div class="user-avatar">
          <img :src="userInfo.avatar" alt>
        </div>
        <p class="user-name ellipsis">
          {{ userInfo.nickname }}
        </p>
        <p class="user-id">
          ID: 583466557899
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
import AccountBind from "./account-bind.vue"
import Information from "./information.vue"
import Log from "./log.vue"
import Authenticate from "./authenticate.vue"
import MAddress from "./address.vue"
import { getUserInfo } from 'api/user.js'
import { ERR_OK } from 'api/config.js'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      componentName: "account-bind",
      currentNavIndex: 0,
      navList: []
    };
  },
  created () {
    this.navList = [
      { id: 1, title: "账号绑定", componentName: "account-bind" },
      { id: 2, title: "个人信息", componentName: "information" },
      { id: 3, title: "操作记录", componentName: "log" },
      { id: 4, title: "实名认证", componentName: "authenticate" },
      { id: 5, title: "收件地址", componentName: "m-address" }
    ];
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
          this.componentName = "log"
          this.currentNavIndex = 2
          break
        case 'userinfo':
          this.getUserInfoData()
          break
      }
    },
    // 获取用户详细信息
    getUserInfoData () {
      getUserInfo().then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.setUserInfo(data)
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
      })
    },
    // vuex
    ...mapMutations({
      'setUserInfo': 'login/SET_USER_INFO'
    })
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  components: {
    AccountBind,
    Information,
    Log,
    Authenticate,
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
