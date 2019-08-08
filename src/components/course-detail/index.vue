<template>
  <div class="course-detail">
    <!-- 头部 -->
    <course-header></course-header>

    <!-- 内容部分 -->
    <course-content></course-content>
  </div>
</template>
<script>
import CourseHeader from './course-detail-header.vue'
import CourseContent from './course-detail-content.vue'
export default {
  name: 'CourseDetail',
  components: {
    CourseHeader,
    CourseContent
  }
}
</script>
