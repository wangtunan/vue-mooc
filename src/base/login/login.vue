<template>
  <div class="login-container">
    <div class="login-tab">
      <span
        class="login-tab-item"
        v-for="(item,index) in loginTabs"
        :key="index"
        :class="{active: index==currentTabIndex}"
        @click="currentTabIndex=index"
        >{{item}}</span>
      <span class="login-close iconfont" @click="setShowLogin(false)">&#xe619;</span>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      loginTabs: ['登录', '注册'],
      currentTabIndex: 0
    }
  },
  methods: {
    // vuex
    ...mapMutations({
      'setShowLogin': 'login/SET_SHOW_LOGIN'
    })
  }
}
</script>

<style lang="stylus" scoped>
  $red = #f20d0d;
  
  .login-container
    z-index: 10000;
    position: fixed;
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
</style>
