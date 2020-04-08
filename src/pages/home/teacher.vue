<template>
  <div class="elite-teacher-container">
    <div class="m-center">
      <h2 class="home-title">
        <i class="title-icon left-icon" />
        慕／课／精／英／名／师
        <i class="title-icon right-icon" />
      </h2>
    </div>

    <div class="m-center">
      <mooc-carousel :interval="interval" arrow="always" :height="300">
        <mooc-carousel-item v-for="(page,index) in pages" :key="index">
          <div class="elite-teacher-slider">
            <div v-for="(item, index) in page" :key="index" class="teacher-item">
              <div class="img-box">
                <img :src="item.avatar" alt="">
              </div>
              <div class="teacher-name">
                <p class="name">
                  {{ item.name }}
                </p>
                <p class="label">
                  {{ item.job }}
                </p>
              </div>
              <p class="teacher-intro">
                {{ item.introduction }}
              </p>
            </div>
          </div>
        </mooc-carousel-item>
      </mooc-carousel>
    </div>
  </div>
</template>
<script>
const SWIPER_LEN = 5
export default {
  props: {
    teacherList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      interval: 5000
    }
  },
  computed: {
    pages () {
      const pages = []
      this.teacherList.forEach((item, index) => {
        let page = Math.floor(index / SWIPER_LEN)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .elite-teacher-container
    height: 408px;
    background: url('https://www.imooc.com/static/img/index/eliteTbg.jpg') no-repeat center center
    background-size: cover;
  .home-title
    padding: 36px 0 28px;
    color: #fff;
    .left-icon
      background-position: center -432px;
    .right-icon
      background-position: center -468px;
  >>> .mooc-carousel
    .mooc-carousel-item
      overflow: initial;
    .mooc-carousel-arrow
      top: 45%;
      &.mooc-carousel-arrow-left
        left: 0px;
  .elite-teacher-slider
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .teacher-item
      width: 216px;
      height: 248px;
      margin-right: 18px;
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0 4px 8px $shadow;
      border-radius: 12px;
      text-align: center;
      cursor: pointer;
      transition: background 0.15s linear;
      &:last-child
        margin-right: 0;
      &:hover
        background: rgba(255, 255, 255, 1);
        .img-box
          width: 60px;
          height: 60px;
        .teacher-name
          display: none;
        .teacher-intro
          height: 170px;
      .img-box
        margin: -20px auto 12px;
        width: 96px;
        height: 96px;
        transition: all 0.2s linear;
        & > img
          display: inline;
          width: 100%;
          height: 100%;
          background-color: #ccc;
          border-radius: 50%;
      .teacher-name
        line-height: 24px;
        .name
          color: $font-first-color;
          font-size: 16px;
          font-weight: 700;
        .label
          font-size: 14px;
          color: $font-second-color;
          line-height: 20px;
      .teacher-intro
        margin-top: 10px;
        padding: 0 32px;
        height: 72px;
        overflow: hidden;
        font-size: 12px;
        line-height: 24px;
        color: $font-second-color;
</style>
