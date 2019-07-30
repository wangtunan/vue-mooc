<template>
  <div class="course mx-center">
    <!-- 搜索模块 -->
    <course-search></course-search>

    <!-- 导航模块 -->
    <course-nav :list="navList" v-if="navList.length" @change="handleNavChange"></course-nav>
    
    <!-- 课程列表 -->
    <course-list :list="courseList" v-if="courseList.length"></course-list>

    <!-- 分页 -->
    <pagination :total.sync="total"></pagination>
  </div>
</template>
<script>
import CourseSearch from './course-search.vue'
import CourseNav from './course-nav.vue'
import CourseList from './course-list.vue'
import Pagination from 'base/pagination/pagination.vue'
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
  .course
    padding-top: 20px;
</style>
