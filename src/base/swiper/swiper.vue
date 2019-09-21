<template>
  <swiper ref="mySwiper" :options="swiperOption" class="swiper-container">
    <slot />
    <div slot="pagination" class="swiper-pagination" />
  </swiper>
</template>
<script>
export default {
  data () {
    let _self = this
    return {
      swiperOption: {
        loop: true,
        autoplay: 4000,
        pagination: '.swiper-pagination',
        onSlideChangeEnd: (swiper) => {
          _self.$emit('swiper', swiper.realIndex)
        }
      }
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
