<template>
  <div class="course">
    <!-- 搜索模块 -->
    <course-search></course-search>

    <!-- 导航模块 -->
    <course-nav></course-nav>
    
    <!-- 课程列表 -->
    <div class="course-list"></div>

    <!-- 分页 -->
    <pagination :total.sync="total"></pagination>
  </div>
</template>
<script>
import CourseSearch from './course-search.vue'
import CourseNav from './course-nav.vue'
import Pagination from 'base/pagination/pagination.vue'
export default {
  data () {
    return {
      total: 100 // 课程总页数
    }
  },
  components: {
    CourseSearch,
    CourseNav,
    Pagination
  }
}
</script>
<style lang="stylus" scoped>
  .course
    padding-top: 20px;
</style>
