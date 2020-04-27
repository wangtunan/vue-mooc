<template>
  <div class="course-detail">
    <!-- 头部 -->
    <course-header :base="courseDetail" />

    <!-- 内容部分 -->
    <course-content :data="courseDetail" />
  </div>
</template>
<script>
import CourseHeader from './header.vue'
import CourseContent from './content.vue'
import { getLessonDetail } from 'api/lesson.js'
import { ERR_OK } from 'api/config.js'
export default {
  name: 'CourseDetail',
  data () {
    return {
      courseDetail: {
        base: {}
      }
    }
  },
  mounted () {
    this.getCourseDetailData()
  },
  methods: {
    // 获取课程详情
    getCourseDetailData () {
      const params = {
        id: this.$route.params.id
      }
      getLessonDetail(params).then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.courseDetail = data
        } else {
          this.courseDetail = {}
          this.$message.error(msg)
        }
      }).catch (() => {
        this.courseDetail = {}
        this.$message.error('接口异常')
      })
    }
  },
  components: {
    CourseHeader,
    CourseContent
  }
}
</script>
