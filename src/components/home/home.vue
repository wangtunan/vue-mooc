<template>
  <div class="home">
    <!-- 背景阴影 -->
    <div class="bg-mask" :style="getBackgroundImage"></div>

    <!-- 导航和轮播 -->
    <div class="home-container m-center">
      <home-nav></home-nav>
      <home-swiper @swiper="handelSwiper"></home-swiper>
      <course-banner></course-banner>
    </div>

    <!--  实战导航 -->
    <course-list :course="practiceList"></course-list>

    <!-- 新上好课 -->
    <course-list :course="newList"></course-list>

    <!-- 新手入门 -->
    <course-list :course="guideList"></course-list>

    <!-- 技能提升 -->
    <course-list :course="improveList"></course-list>

    <!-- 前言技术 -->
    <course-list :course="technologyList"></course-list>
  </div>
</template>
<script>
import HomeNav from './nav.vue'
import HomeSwiper from 'base/swiper/swiper.vue'
import CourseBanner from './course-banner.vue'
import CourseList from './course-list.vue'
import { getHomeCourse } from 'api/home.js'
import { ERR_OK } from 'api/config.js'
export default {
  name: 'Home',
  data () {
    return {
      technologyList: {}, // 前言技术
      improveList: {}, // 技能提升
      guideList: {}, // 新手入门
      newList: {}, // 新上好课
      practiceList: {}, // 实战课程
      currentSwiper: '' // 当前的轮播图片
    }
  },
  created () {
    this.getCourseList()
  },
  methods: {
    handelSwiper (img) {
      this.currentSwiper = img
    },
    getCourseList () {
      getHomeCourse().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.practiceList = data.practice
          this.newList = data.new
          this.guideList = data.guide
          this.improveList = data.improve
          this.technologyList = data.technology
        }
      })
    }
  },
  computed: {
    getBackgroundImage () {
      return {
        'background-image': `url(${this.currentSwiper})`
      }
    }
  },
  components: {
    HomeNav,
    HomeSwiper,
    CourseBanner,
    CourseList
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .home
    margin-top: 32px;
    min-height: 750px;
    .bg-mask
      position: absolute;
      top: 0;
      background-size: cover;
      transition: all 0.3s;
      width: 100%;
      height: 180px;
      opacity: 0.3;
      filter: blur(100px);
      // background: url('https://img.mukewang.com/5cb833cf0001efb716000540.jpg')
    .home-container
      position: relative;
      box-shadow: 0 12px 24px 0 $shadow;
      border-radius: 8px;
      background-color: #93999f;
</style>
