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
  </div>
</template>
<script>
import MNav from './nav.vue'
import Search from './search.vue'
export default {
  components: {
    MNav,
    Search
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';

  .header
    z-index: 99;
    position: relative;
    height: $headerHeight;
    background-color:#fff;
    box-shadow: 0 4px 8px $shadow;
    .logo-box
      float: left;
      width: 140px;
      margin: 0 20px;
      height: 100%;
</style>
