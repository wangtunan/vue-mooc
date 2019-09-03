<template>
  <div class="home">
    <!-- 背景阴影 -->
    <div class="bg-mask" :style="getBackgroundImage"></div>

    <!-- 导航和轮播 -->
    <div class="home-container m-center">
      <home-nav></home-nav>
      <home-swiper @swiper="handelSwiper">
        <swiper-slide v-for="(item,index) in swiperList" :key="index">
          <img :src="item.img" :key="item.img" alt="" class="swiper-img">
        </swiper-slide>
      </home-swiper>
      <home-banner></home-banner>
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

    <!-- 猿问和手记 -->
    <home-article :article="articleList"></home-article>

    <!-- 精英讲师 -->
    <home-teacher :teacher-list="teacherList"></home-teacher>

    <!-- 全明星 -->
    <home-student :allstar="allstar"></home-student>
  </div>
</template>
<script>
import HomeNav from './home-nav.vue'
import HomeSwiper from 'base/swiper/swiper.vue'
import HomeBanner from './home-banner.vue'
import CourseList from './course-list.vue'
import HomeArticle from './home-article.vue'
import HomeTeacher from './home-teacher.vue'
import HomeStudent from './home-student.vue'
import { getSliderList, getHomeCourse, getArticle, getTeacher, getAllStar } from 'api/home.js'
import { ERR_OK } from 'api/config.js'
export default {
  name: 'Home',
  data () {
    return {
      swiperList: [], //首页轮播信息
      allstar: [], // 全明星
      teacherList: [], // 精英讲师
      articleList: {}, // 猿问和手记
      technologyList: {}, // 前言技术
      improveList: {}, // 技能提升
      guideList: {}, // 新手入门
      newList: {}, // 新上好课
      practiceList: {}, // 实战课程
      currentSwiper: '' // 当前的轮播图片
    }
  },
  created () {
    this.getBanner()
    this.getCourseList()
    this.getArticleList()
    this.getTeacherList()
    this.getAllStarList()
  },
  methods: {
    handelSwiper (index) {
      this.currentSwiper = this.swiperList[index].img
    },
    // 首页轮播信息
    getBanner () {
      getSliderList().then((res) => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.swiperList = data
        }
      })
    },
    // 获取课程信息
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
    },
    // 获取猿问和手记
    getArticleList () {
      getArticle().then((res) => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.articleList = data
        }
      })
    },
    // 获取精英讲师信息
    getTeacherList () {
      getTeacher().then(res => {
        let { code, data} = res
        if (code === ERR_OK) {
          this.teacherList = data
        }
      })
    },
    // 获取精英讲师信息
    getAllStarList () {
      getAllStar().then(res => {
        let { code, data} = res
        if (code === ERR_OK) {
          this.allstar = data
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
    HomeBanner,
    CourseList,
    HomeArticle,
    HomeTeacher,
    HomeStudent
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
    .home-container
      position: relative;
      box-shadow: 0 12px 24px 0 $shadow;
      border-radius: 8px;
      background-color: #93999f;
      .swiper-img
        display: block;
        width: 100%;
        height: 316px;
</style>
