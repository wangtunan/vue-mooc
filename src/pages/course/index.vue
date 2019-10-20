<template>
  <div class="course mx-center">
    <!-- 搜索模块 -->
    <div class="course-search">
      <div class="search-tag">
        <img src="https://www.imooc.com/static/img/course/logo-course2.png" width="96" height="60" alt="">
        <img src="https://www.imooc.com/static/img/course/course-top.png" width="96" height="60" alt="">
      </div>
      <course-search />
    </div>

    <!-- 导航模块 -->
    <course-nav v-if="navList.length" :list="navList" @change="handleNavChange" />
    
    <!-- 课程列表 -->
    <course-list v-if="courseList.length" :list.sync="courseList" />

    <!-- 分页 -->
    <pagination :total.sync="total" />
  </div>
</template>
<script>
import CourseSearch from './course-search.vue'
import CourseNav from './course-nav.vue'
import CourseList from './course-list.vue'
import Pagination from 'components/pagination/pagination.vue'
import { getCourseNav, getCourseList } from 'api/course.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      params: {}, // 导航选中的值
      navList: [], // 课程导航信息
      courseList: [], // 课程信息
      total: 100 // 课程总页数
    }
  },
  mounted () {
    this.getCourseNavList()
    this.getCourseListData()
  },
  methods: {
    // 导航值更新事件
    handleNavChange (params) {
      this.params = params
      this.getCourseListData()
    },
    // 收藏or取消收藏点击事件
    handleCollectClick (item, index) {
      this.courseList[index].isLike = !this.courseList[index].isLike
    },
    // 获取课程导航信息
    getCourseNavList () {
      getCourseNav(this.params).then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.navList = data
        }
      })
    },
    // 获取课程信息接口
    getCourseListData () {
      getCourseList(this.params).then(res => {
        let { code, data } = res
        if(code === ERR_OK) {
          this.courseList = data
        }
      })
    }
  },
  components: {
    CourseSearch,
    CourseNav,
    CourseList,
    Pagination
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .course
    padding-top: 20px;
    .course-search
      padding: 12px 0;
      border-bottom: 1px solid $border-second-color;
      .search-tag
        display: inline-block;
        & > img:nth-child(2)
          margin-left: 16px;
</style>
