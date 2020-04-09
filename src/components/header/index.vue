<template>
  <div class="header">
    <!-- logo -->
    <div class="logo-box">
      <router-link to="/">
        <img src="https://www.imooc.com/static/img/index/logo.png" height="72" alt="Logo">
      </router-link>
    </div>

    <!-- 导航栏模块 -->
    <m-nav v-if="navList.length" :list="navList" />

    <!-- 搜索框模块 -->
    <search />

    <!-- 登录模块 -->
    <login-area />
  </div>
</template>
<script>
import Search from 'components/search/search.vue'
import MNav from './nav.vue'
import LoginArea from './login.vue'
import { getHeader } from 'api/common.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      navList: {}
    }
  },
  mounted () {
    this.getHeaderData()
  },
  methods: {
    // 获取头部导航数据
    getHeaderData () {
      getHeader().then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.navList = data
        } else {
          this.$message.error(msg)
          this.navList = []
        }
      }).catch(() => {
        this.navList = []
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
    z-index: 200;
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
