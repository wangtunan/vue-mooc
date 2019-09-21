<template>
  <div class="user-course">
    <!-- 头部 -->
    <course-header :base="base" />

    <!-- 内容部分 -->
    <div class="m-center">
      <div class="user-course-content">
        <div class="nav-container">
          <ul>
            <li
              v-for="(nav,index) in navList"
              :key="index"
              class="nav-item"
              :class="{active: currentNavIndex == index}"
              @click="handleNavClick(nav,index)"
            >
              <i v-if="nav.code == 0" class="iconfont">&#xe981;</i>
              <i v-if="nav.code == 1" class="iconfont">&#xe668;</i>
              <i v-if="nav.code == 2" class="iconfont">&#xe685;</i>
              <i v-if="nav.code == 3" class="iconfont">&#xe602;</i>
              <i v-if="nav.code == 4" class="iconfont">&#xe635;</i>
              {{ nav.title }}
            </li>
          </ul>
        </div>
        <div class="content-container">
          <component :is="componentName" :list="currentList" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CourseHeader from './course-header.vue'
import { getUserCourse } from 'api/user.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      currentNavIndex: 0, // 当前课程的导航索引
      userCourse: {}, // 用户课程信息
      navList: [] // 导航数据
    }
  },
  created () {
    // 初始化导航数据
    this.navList = [
      { title: '免费课程', code: 0,  componentName: 'FreeCourse', key: 'free' },
      { title: '实战', code: 1, componentName: 'PracticeCourse', key: 'practice' },
      { title: '猿问', code: 2, componentName: 'Question', key: 'question' },
      { title: '手记', code: 3, componentName: 'Article', key: 'article' },
      { title: '专栏', code: 4, componentName: 'FreeCourse', key: '' }
    ]
  },
  mounted () {
    this.getUserCourseData()
  },
  methods: {
    // 导航点击
    handleNavClick (item, index) {
      this.currentNavIndex = index
    },
    // 获取用户课程信息
    getUserCourseData () {
      getUserCourse().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.userCourse = data
        }
      })
    }
  },
  computed: {
    componentName () {
      return this.navList[this.currentNavIndex].componentName
    },
    base () {
      return this.userCourse.base || {}
    },
    currentList () {
      let currNav = this.navList[this.currentNavIndex]
      return this.userCourse[currNav.key] || []
    }
  },
  components: {
    CourseHeader,
    FreeCourse: () => import('./free-course.vue'),
    PracticeCourse: () => import('./pratice-course.vue'),
    Question: () => import('./question.vue'),
    Article: () => import('./article.vue')
  }
}
</script>
<style lang="stylus" scoped>
  .user-course
    margin-bottom: 50px;
    .user-course-content
      display: flex;
      align-items: flex-start;
      margin-top: 40px;
      .nav-container
        flex: 0 0 172px;
        width: 172px;
        .nav-item
          position: relative;
          margin-bottom: 8px;
          padding-left: 30px;
          height: 48px;
          line-height: 48px;
          font-size: 16px;
          color: #787d82;
          cursor: pointer;
          &:last-child
            margin-bottom: 0;
          &.active
            background-color: rgba(240,20,20,0.8);
            border-radius: 4px;
            color: #fff;
            &::after
              display: block;
              content: '';
              position: absolute;
              right: 0;
              top: 0;
              width: 0;
              height: 0;
              border-top: 24px solid #fff;
              border-bottom: 24px solid #fff;
              border-left: 15px solid transparent;
          .iconfont
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            font-size: 25px;
      .content-container
        margin-left: 50px;
        flex: 1;
</style>