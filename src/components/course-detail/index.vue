<template>
  <div class="course-detail">
    <!-- 头部 -->
    <course-header></course-header>
  </div>
</template>
<script>
import CourseHeader from './course-detail-header.vue'
export default {
  name: 'CourseDetail',
  components: {
    CourseHeader
  }
}
</script>
