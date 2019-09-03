<template>
  <div class="header">
    <!-- logo -->
    <div class="logo-box">
      <router-link to="/">
        <img src="https://www.imooc.com/static/img/index/logo.png" height="72" alt="">
      </router-link>
    </div>

    <!-- 导航栏模块 -->
    <m-nav></m-nav>

    <!-- 搜索框模块 -->
    <search></search>

    <!-- 登录模块 -->
    <login-area></login-area>
  </div>
</template>
<script>
import MNav from './nav.vue'
import Search from 'components/search/search.vue'
import LoginArea from './login.vue'
export default {
  components: {
    MNav,
    Search,
    LoginArea
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .header
    z-index: 99;
    position: relative;
    padding-right: 10px;
    height: $headerHeight;
    background-color:#fff;
    box-shadow: 0 4px 8px $shadow;
    .logo-box
      float: left;
      width: 140px;
      margin: 0 20px;
      height: 100%;
</style>
