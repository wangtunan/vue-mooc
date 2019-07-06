<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
    <swiper-slide v-for="(item,index) in swiperList" :key="index">
      <img class="swiper-img" :src="item.img" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
import { getSliderList } from 'api/home.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    let _self = this
    return {
      swiperList: [],
      swiperOption: {
        loop: true,
        autoplay: 4000,
        pagination: '.swiper-pagination',
        onSlideChangeEnd: (swiper) => {
          this.$emit('swiper', this.swiperList[swiper.realIndex].img)
        }
      }
    }
  },
  created () {
    this.getBanner()
  },
  methods: {
    getBanner () {
      getSliderList().then((res) => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.swiperList = data
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .swiper-container
    position: absolute;
    left: 216px;
    right: 0;
    top: 0;
    height: 316px;
    border-top-right-radius: 8px;
    .swiper-img
      display: block;
      width: 100%;
      height: 316px;
    >>> .swiper-pagination
      width: unset;
      bottom: 20px;
      right: 24px;
      left: unset;
      .swiper-pagination-bullet
        background-color: rgba(7,17,27,0.8);
        border: 1px solid rgba(255,255,255,0.6);
        opacity: unset;
      .swiper-pagination-bullet-active
        background-color: #fff;
</style>
