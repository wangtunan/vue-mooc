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
    <course-nav v-if="navList.length" :list="navList" :params.sync="params" />
    
    <!-- 课程列表 -->
    <course-list :list="courseList" :sort.sync="sort" />

    <!-- 分页 -->
    <pagination :total="total" :page.sync="page" :size="size" @change="handlePaginationChange" />
  </div>
</template>
<script>
import CourseSearch from './search.vue'
import CourseNav from './nav.vue'
import CourseList from './list.vue'
import Pagination from 'components/pagination/pagination.vue'
import { getLessonNav, getLessonList } from 'api/lesson.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      sort: '',
      params: {},
      navList: [],
      courseList: [],
      page: 1,
      size: 15,
      total: 0
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
    // 分页值更新
    handlePaginationChange (page) {
      this.page = page
      this.getCourseListData()
    },
    // 收藏or取消收藏点击事件
    handleCollectClick (item, index) {
      this.courseList[index].isLike = !this.courseList[index].isLike
    },
    // 获取课程导航信息
    getCourseNavList () {
      getLessonNav().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.navList = data
        } else {
          this.navList = []
          this.$message.error('获取课程分类数据失败')
        }
      }).catch(() => {
        this.navList = []
        this.$message.error('接口异常')
      })
    },
    // 获取课程信息接口
    getCourseListData () {
      const params = {
        page: this.page,
        size: this.size,
        type: 0,
        category: this.params.direction,
        label: this.params.category,
        diff: this.params.diff,
        sort: this.sort
      }
      getLessonList(params).then(res => {
        let { code, data, msg } = res
        if(code === ERR_OK) {
          this.courseList = data.list
          this.total = data.total
        } else {
          this.courseList = []
          this.total = 0
          this.$message.error(msg)
        }
      }).catch(() => {
        this.courseList = []
        this.total = 0
        this.$message.error('接口异常')
      })
    }
  },
  watch: {
    params () {
      this.page = 1
      this.getCourseListData()
    },
    sort () {
      this.getCourseListData()
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
