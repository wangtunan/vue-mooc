<template>
  <div class="header">
    <!-- logo -->
    <div class="logo-box">
      <router-link to="/">
        <img :src="header.logo" height="72" alt="">
      </router-link>
    </div>

    <!-- 导航栏模块 -->
    <m-nav v-if="header.nav" :list="header.nav" />

    <!-- 搜索框模块 -->
    <search />

    <!-- 登录模块 -->
    <login-area />
  </div>
</template>
<script>
import Search from 'components/search/search.vue'
import MNav from './header-nav.vue'
import LoginArea from './header-login.vue'
import { getHeader } from 'api/common.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      header: {} // 头部数据
    }
  },
  mounted () {
    this.getHeaderData()
  },
  methods: {
    // 获取头部数据
    getHeaderData () {
      getHeader().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.header = data
        }
      })
    }
  },
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
    height: 100%;
    background-color: #fff;
    box-shadow: 0 4px 8px $shadow;
    .logo-box
      float: left;
      width: 140px;
      margin: 0 20px;
      height: 100%;
</style>
