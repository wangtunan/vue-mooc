<template>
  <div class="course-detail">
    <!-- 头部 -->
    <course-header v-if="Object.keys(courseDetail.base).length > 0" :base="courseDetail.base" />

    <!-- 内容部分 -->
    <course-content v-if="Object.keys(courseDetail).length > 0" :data="courseDetail" />
  </div>
</template>
<script>
import CourseHeader from './course-detail-header.vue'
import CourseContent from './course-detail-content.vue'
import { getCourseDetail } from 'api/course.js'
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
  created () {
    this.$nextTick(() => {
      this.getCourseDetailData()
    })
  },
  methods: {
    // 获取课程详情
    getCourseDetailData () {
      const id = this.$route.params.id
      getCourseDetail(id).then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.courseDetail = data
        }
      })
    }
  },
  components: {
    CourseHeader,
    CourseContent
  }
}
</script>
