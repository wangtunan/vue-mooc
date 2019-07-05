<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
    <swiper-slide v-for="(item,index) in swiperList" :key="index">
      <img class="swiper-img" :src="item.img" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  data () {
    return {
      swiperList: [],
      swiperOption: {
        loop: true,
        autoplay: 4000,
        pagination: '.swiper-pagination'
      }
    }
  },
  created () {
    this.swiperList = [
      { id: 1, img: 'https://img.mukewang.com/5d1e0a1800013ca916000540.jpg' },
      { id: 2, img: 'https://img.mukewang.com/5d1c5aec00011c1016000540.jpg' },
      { id: 3, img: 'https://img.mukewang.com/5d108b1500010bfe18720632.jpg' },
      { id: 4, img: 'https://img.mukewang.com/5d1466c5000172a516000540.jpg' },
      { id: 5, img: 'https://img.mukewang.com/5cb833cf0001efb716000540.jpg' },
      { id: 6, img: 'https://img.mukewang.com/5c0fd2630001ef2118720632.jpg' }
    ]
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
