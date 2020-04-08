<template>
  <div class="course-list-container m-center">
    <!-- 标题 -->
    <h2 class="home-title">
      <i class="title-icon left-icon" :style="getBackgroundPosition(course.leftIcon)" />
      {{ course.title }}
      <i class="title-icon right-icon" :style="getBackgroundPosition(course.rightIcon)" />
    </h2>

    <!-- 课程banner -->
    <div v-if="course.banner && course.banner.length > 0" class="split-banner">
      <div v-for="(item,index) in course.banner" :key="index" class="split-banner-item">
        <img :src="item.url" alt="">
        <h2 class="title main">
          {{ item.title }}
        </h2>
        <p class="title sub">
          {{ item.subtitle }}
        </p>
        <div class="mask" />
      </div>
    </div>

    <!-- 课程列表 -->
    <course-list
      v-if="course.data"
      class="course-list"
      :list="course.data"
      @courseClick="handleCourseClick"
    />
  </div>
</template>
<script>
import CourseList from 'components/course/course.vue'
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  methods: {
    // 课程点击
    handleCourseClick () {
      let random = new Date().getTime()
      this.$router.push(`/lesson/${random}`)
    },
    getBackgroundPosition (position) {
      return {
        'background-position': position
      }
    }
  },
  components: {
    CourseList
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .course-list-container
    padding: 36px 0 48px;
    .split-banner
      display: flex;
      align-items: center;
      margin-top: 24px;
      .split-banner-item
        position: relative;
        flex: 1;
        margin: 0 8px 16px 8px;
        height: 108px;
        background-color: rgba(7,17,27,0.5);
        & > img
          display: block;
          width: 100%;
          height: 100%;
          background-color: #ccc;
          border-radius: 8px;
        .title
          z-index: 3;
          position: absolute;
          left: 0;
          right: 0;
          color: #fff;
          text-align: center;
          &.main
            top: 30%;
            font-size: 20px;
            line-height: 28px;
            font-weight: 700;
          &.sub
            top: 55%;
            font-size: 12px;
            line-height: 24px;
        .mask
          z-index: 1;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(7,17,27,0.4);
          border-radius: 8px;
    .course-list
      margin-top: 24px;
</style>
