<template>
  <div class="all-star-container">
    <div class="m-center">
      <h2 class="home-title">
        <i class="title-icon left-icon" />
        吊／炸／天／全／明／星
        <i class="title-icon right-icon" />
      </h2>
    </div>

    <div class="all-star m-center">
      <ul class="best-star star">
        <li v-for="(item,index) in best" :key="index" class="star-item">
          <img :src="item.avatar" width="56" height="56" alt="">
          <p class="star-name">
            {{ item.name }}
          </p>
          <p class="star-type">
            {{ item.type.text }}
          </p>
          <span class="star-crown" :style="getPositionStyle(index)" />
        </li>
      </ul>
      <ul class="all-star-list star">
        <li v-for="(item,index) in student" :key="index" class="all-item star-item" :class="getItemclass(item.type.code)">
          <img :src="item.avatar" width="48" height="48" alt="">
          <div class="star-info">
            <p class="star-type">
              ="{{ item.type.text }}"=
            </p>
            <p class="star-name ellipsis">
              {{ item.name }}
            </p>
            <p v-if="item.type.code==1" class="star-number">
              一周获得{{ item.number }}积分
            </p>
            <p v-if="item.type.code==2" class="star-number">
              一周发布{{ item.number }}篇手记
            </p>
            <p v-if="item.type.code==3" class="star-number">
              一周解题{{ item.number }}个
            </p>
          </div>
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
      type: Array,
      required: true
    }
  },
  methods: {
    // 获取背景图片的位置
    getPositionStyle (index) {
      return {
        'background-position': `center -${index * BASE_WIDTH}px`
      }
    },
    // 获取样式
    getItemclass (code) {
      const classMap = {
        "1": "purple",
        "2": "blue",
        "3": "green"
      }
      return classMap[code]
    }
  },
  computed: {
    best () {
      return this.allstar.slice(0, 4)
    },
    student () {
      return this.allstar.slice(4)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .home-title
    padding: 36px 0 48px;
    .left-icon
      background-position: center -504px;
    .right-icon
      background-position: center -540px;
  .all-star
    padding-bottom: 36px;
    .star
      display: flex;
      align-items: center;
      .star-item
        position: relative;
        text-align: center;
        cursor: pointer;
        & > img
          padding: 3px;
          border-radius: 50%;
          transition: all 0.2s;
      &.best-star
        margin-bottom: 48px;
        justify-content: center;
        .star-item
          width: 136px;
          .star-name
            margin-top: 8px;
            font-size: 16px;
            line-height: 16px;
            color: $font-first-color;
          .star-type
            line-height: 24px;
            font-size: 12px;
            color: $font-four-color;
          .star-crown
            position: absolute;
            left: 50%;
            top: -12px;
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
          position: relative;
          margin: 0 28px 24px 0;
          .star-info
            display: none;
            position: absolute;
            left: -82px;
            top: -110px;
            padding: 13px 24px 0;
            width: 202px;
            height: 90px;
            border-radius: 8px;
            box-sizing: border-box;
            color: #fff;
            &::after
              content: '';
              position: absolute;
              left: 50%;
              bottom: -16px;
              width: 0;
              height: 0;
            .star-type
              font-size: 12px;
              line-height: 16px;
            .star-name
              font-size: 14px;
              line-height: 24px;
            .star-number
              margin-top: 8px;
              font-size: 12px;
          &.purple:hover
            img
              box-shadow: 0 0 0 2px $theme-purple-color;
            .star-info
              display: block;
              background: $theme-purple-color;
              &::after
                border: 8px solid transparent
                border-color: $theme-purple-color transparent transparent transparent;
          &.blue:hover
            img
              box-shadow: 0 0 0 2px $theme-blue-dark-color;
            .star-info
              display: block;
              background: $theme-blue-dark-color;
              &::after
                border: 8px solid transparent
                border-color: $theme-blue-dark-color transparent transparent transparent;
          &.green:hover
            img
              box-shadow: 0 0 0 2px $theme-green-color;
            .star-info
              display: block;
              background: $theme-green-color;
              &::after
                border: 8px solid transparent
                border-color: $theme-green-color transparent transparent transparent;
</style>
