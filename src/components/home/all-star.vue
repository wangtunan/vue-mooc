<template>
  <div class="all-star-container">
    <div class="m-center">
      <h2 class="home-title">
        <i class="title-icon left-icon"></i>
        吊／炸／天／全／明／星
        <i class="title-icon right-icon"></i>
      </h2>
    </div>

    <div class="all-star m-center">
      <ul class="best-star star">
        <li class="star-item" v-for="(item,index) in allstar.best" :key="index">
          <img :src="item.avatar" width="56" height="56" alt="">
          <p class="star-name">{{item.name}}</p>
          <p class="star-type">{{item.type.text}}</p>
          <span class="star-crown" :style="getPositionStyle(index)"></span>
        </li>
      </ul>
      <ul class="all-star-list star">
        <li class="all-item star-item" v-for="(item,index) in allstar.data" :key="index">
          <img :src="item.avatar" width="48" height="48" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
const BASE_WIDTH = 18
export default {
  props: {
    allstar: {
      required: true
    }
  },
  methods: {
    getPositionStyle(index) {
      return {
        'background-position': `center -${index * BASE_WIDTH}px`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-title
    padding: 36px 0 48px;
    .left-icon
      background-position: center -504px;
    .right-icon
      background-position: center -540px;
  .star
    display: flex;
    align-items: center;
    .star-item
      position: relative;
      text-align: center;
      cursor: pointer;
      & > img
        border-radius: 50%;
    &.best-star
      margin-bottom: 48px;
      justify-content: center;
      .star-item
        width: 136px;
        .star-name
          margin-top: 8px;
          font-size: 16px;
          line-height: 16px;
          color: #07111B;
        .star-type
          line-height: 16px;
          font-size: 12px;
          color: #93999F;
        .star-crown
          position: absolute;
          left: 50%;
          top: -15px;
          width: 26px;
          height: 18px;
          margin-left: -13px;
          background: url('https://www.imooc.com/static/img/index/champion.png') no-repeat
          background-size: cover;
    &.all-star-list
      margin: 0 auto;
      width: 880px;
      flex-wrap: wrap;
      justify-content: center;
      .all-item
        margin: 0 28px 24px 0;
</style>
