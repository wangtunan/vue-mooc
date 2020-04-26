<template>
  <div class="home">
    <!-- 背景阴影 -->
    <div class="bg-mask" :style="getBackgroundImage" />

    <!-- 导航和轮播 -->
    <div class="home-container m-center">
      <Nav />
      <mooc-carousel :height="316" trigger="click" @change="handelCarouselChange">
        <mooc-carousel-item v-for="(item,index) in swiperList" :key="index">
          <img :src="item.img" class="swiper-img">
        </mooc-carousel-item>
      </mooc-carousel>
      
      <Banner />
    </div>

    <!--  实战导航 -->
    <course-list :list="lessonData.recommend" title="实／战／推／荐" type="recommend" :position="0" />

    <!-- 新上好课 -->
    <course-list :list="lessonData.new" title="新／上／好／课" type="new" :position="1" />

    <!-- 新手入门 -->
    <course-list :list="lessonData.easy" title="新／手／入／门" type="easy" :position="2" />

    <!-- 技能提升 -->
    <course-list :list="lessonData.improve" title="技／能／提／升" type="improve" :position="3" />

    <!-- 前言技术 -->
    <course-list :list="lessonData.advanced" title="前／沿／技／术" type="advanced" :position="4" />

    <!-- 猿问和手记 -->
    <Article :article="articleList" />

    <!-- 精英讲师 -->
    <Teacher :teacher-list="teacherList" />

    <!-- 全明星 -->
    <Student :allstar="allstar" />
  </div>
</template>
<script>
import Nav from './nav.vue'
import Banner from './banner.vue'
import CourseList from './course-list.vue'
import Article from './article.vue'
import Teacher from './teacher.vue'
import Student from './student.vue'
import { getSliderList, getHomeCourse, getArticle, getTeacher, getAllStar } from 'api/home.js'
import { ERR_OK } from 'api/config.js'
export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      allstar: [],
      teacherList: [],
      articleList: {},
      currentSwiper: '',
      lessonData: {
        recommend: [],
        new: [],
        easy: [],
        improve: [],
        advanced: []
      }
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
    // 滚动轮播滚动完毕事件
    handelCarouselChange (index) {
      this.currentSwiper = this.swiperList[index].img
    },
    // 首页轮播信息
    getBanner () {
      getSliderList().then((res) => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.swiperList = data
          if (this.swiperList.length > 0) {
            this.currentSwiper = this.swiperList[0].img
          }
        } else {
          this.$message.error(msg)
          this.swiperList = []
          this.currentSwiper = ''
        }
      }).catch(() => {
        this.swiperList = []
        this.currentSwiper = ''
      })
    },
    // 获取课程信息
    getCourseList () {
      getHomeCourse().then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.lessonData = data
        } else {
          this.lessonData = {}
          this.$message.error(msg)
        }
      }).catch(() => {
        this.lessonData = {}
        this.$message.error('接口异常')
      })
    },
    // 获取猿问和手记
    getArticleList () {
      getArticle().then((res) => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.articleList = data
        }
      }).catch(() => {
        this.articleList = []
      })
    },
    // 获取精英讲师信息
    getTeacherList () {
      getTeacher().then(res => {
        let { code, data, msg} = res
        if (code === ERR_OK) {
          this.teacherList = data
        } else {
          this.teacherList = []
          this.$message.error(msg)
        }
      }).catch(() => {
        this.teacherList = []
      })
    },
    // 获取全明星学员信息
    getAllStarList () {
      getAllStar().then(res => {
        let { code, data, msg} = res
        if (code === ERR_OK) {
          this.allstar = data
        } else {
          this.$message.error(msg)
          this.allstar = []
        }
      }).catch(() => {
        this.allstar = []
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
    Nav,
    Banner,
    CourseList,
    Article,
    Teacher,
    Student
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
      .mooc-carousel
        position: absolute;
        left: 216px;
        top: 0;
        right: 0;
        >>> .mooc-carousel-indicators
          left: initial;
          right: 20px;
          transform: none;
        .swiper-img
          display: block;
          width: 100%;
          height: 316px;
          border-top-right-radius: 8px;
</style>
