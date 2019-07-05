<template>
  <div class="home">
    <!-- 背景阴影 -->
    <div class="bg-mask" :style="getBackgroundImage"></div>
    <!-- 导航和轮播 -->
    <div class="home-container m-center">
      <home-nav></home-nav>
      <home-swiper @swiper="handelSwiper"></home-swiper>
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
  data () {
    return {
      currentSwiper: ''
    }
  },
  methods: {
    handelSwiper (img) {
      console.log(img)
      this.currentSwiper = img
    }
  },
  computed: {
    getBackgroundImage () {
      return {
        'background-image': `url(${this.currentSwiper})`
      }
    }
  },
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
    .bg-mask
      position: absolute;
      top: 0;
      background-size: cover;
      transition: all 0.3s;
      width: 100%;
      height: 180px;
      opacity: 0.3;
      filter: blur(100px);
      // background: url('https://img.mukewang.com/5cb833cf0001efb716000540.jpg')
    .home-container
      position: relative;
      box-shadow: 0 12px 24px 0 $shadow;
      border-radius: 8px;
      background-color: #93999f;
</style>
