<template>
  <div class="home-nav-container">
    <ul class="home-nav" @mouseleave="handleMouseLeave">
      <li
        v-for="(item,index) in navList"
        :key="index"
        class="nav-item"
        @mouseenter="handleMouseEnter(item)"
      >
        <span class="nav-title">{{ item.title }}</span>
        <span class="arr-right" />
      </li>
    </ul>
    <div
      @mouseenter="handleContentEnter"
      @mouseleave="handleContentLeave"
    >
      <nav-content v-show="showNavContent" :tags="currentTags" :lessons="currentLessons" />
    </div>
  </div>
</template>
<script>
import NavContent from './nav-content.vue'
import { ERR_OK } from 'api/config.js'
import { getHomeNav } from 'api/home.js'
export default {
  data () {
    return {
      navList: [],
      currentTags: [],
      currentLessons: [],
      showNavContent: false
    }
  },
  mounted () {
    this.getHomeNavList()
  },
  methods: {
    // 导航鼠标移入
    handleMouseEnter (item) {
      this.showNavContent = true
      this.currentTags = item.tags
      this.currentLessons = item.lessons
    },
    // 导航鼠标移除
    handleMouseLeave () {
      this.timer = setTimeout(() => {
        this.showNavContent = false
      }, 150)
    },
    // 导航内容鼠标移入
    handleContentEnter () {
      clearTimeout(this.timer)
    },
    // 导航内容鼠标移除
    handleContentLeave () {
      this.showNavContent = false
      this.currentTags = []
      this.currentLessons = []
    },
    // 获取首页导航信息
    getHomeNavList () {
      getHomeNav().then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.navList = data
          this.currentTags = data[0].tags
          this.currentLessons = data[0].lessons
        } else {
          this.navList = []
          this.currentTags = []
          this.currentLessons = []
          this.$message.error(msg)
        }
      }).catch(() => {
        this.navList = []
        this.currentTags = []
        this.currentLessons = []
        this.$message.error('接口异常')
      })
    }
  },
  components: {
    NavContent
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .home-nav-container
    position: relative;
    width: 216px;
    height: 444px;
    background-color:#2b333b;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0 12px 24px 0 $shadow;
    .home-nav
      position: absolute;
      left: 0;
      right: 0;
      top: 10px;
      .nav-item
        position: relative;
        margin-left: 12px;
        padding-left: 16px;
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        color: rgba(255,255,255,0.6);
        cursor: pointer;
        .arr-right
          position: absolute;
          top: 50%;
          right: 10px;
          margin-top: -4px;
          display:inline-block;
          width: 0;
          height: 0;
          border: 4px solid rgba(255, 255, 255, 0.5);
          border-color: transparent transparent transparent rgba(255, 255, 255, 0.5);
        &:hover
          background-color: #6a7075;
          border-bottom-left-radius: 4px;
          border-top-left-radius: 4px;
          color: #fff;
</style>
