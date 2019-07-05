<template>
  <div class="home">
    <!-- 导航和轮播 -->
    <div class="home-container m-center">
      <home-nav></home-nav>
      <home-swiper></home-swiper>
      <course-banner></course-banner>
    </div>
  </div>
</template>
<script>
import HomeNav from './nav.vue'
import HomeSwiper from 'base/swiper/swiper.vue'
import CourseBanner from './course-banner.vue'
export default {
  name: 'Home',
  components: {
    HomeNav,
    HomeSwiper,
    CourseBanner
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .home
    margin-top: 32px;
    min-height: 750px;
    .home-container
      position: relative;
      box-shadow: 0 12px 24px 0 $shadow;
      border-radius: 8px;
      background-color: #93999f;
</style>
