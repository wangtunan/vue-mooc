<template>
  <div class="course-list-container m-center">
    <h2 class="home-title">
      <i class="title-icon left-icon" :style="getBackgroundPosition(course.leftIcon)"></i>
      {{course.title}}
      <i class="title-icon right-icon" :style="getBackgroundPosition(course.rightIcon)"></i>
    </h2>

    <div class="split-banner" v-if="course.banner && course.banner.length > 0">
      <div class="split-banner-item" v-for="(item,index) in course.banner" :key="index">
        <img :src="item.url" alt="">
        <h2 class="title main">{{item.title}}</h2>
        <p class="title sub">{{item.subtitle}}</p>
        <div class="mask"></div>
      </div>
    </div>

    <ul class="course-list">
      <li class="course-item" v-for="(item,index) in course.data" :key="index">
        <div class="img-box">
          <img :src="item.img" alt="">
          <div class="tags" v-if="item.tags && item.tags.length > 0">
            <span class="tag-item" v-for="(tag,index) in item.tags" :key="index">{{tag}}</span>
          </div>
          <div class="badge rate" v-if="item.process > 0">{{item.process}}%</div>
          <div class="badge script" v-if="item.script">{{item.script}}</div>
        </div>
        <p class="course-name">{{item.name}}</p>
        <p class="info">
          <span>{{item.type}}</span>
          <span>{{item.rank}}</span>
          <span><i class="iconfont icon-user">&#xe607;</i>{{item.number}}</span>
          <span>
            <star class="star-box" :value="item.star" :disabled="true"></star>
          </span>
        </p>
        <p class="price">
          <span>¥ {{item.price + '.00'}}</span>
          <template v-if="item.isDiscount">
            <span class="old-price">¥{{item.oldPrice + '.00'}}</span>
            <span class="discount-title">限时优惠</span>
          </template>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Star from 'base/star/star.vue'
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  methods: {
    getBackgroundPosition (position) {
      return {
        'background-position': position
      }
    }
  },
  components: {
    Star
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
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 24px;
      .course-item
        position: relative;
        flex: 0 0 20%;
        margin-bottom: 32px;
        cursor: pointer;
        &:hover
          .course-name
            color: #F20D0D;
        .img-box
          position: relative;
          margin: 0 auto 8px;
          width: 216px;
          height: 120px;
          & > img
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            background-color: #ccc;
            transition: all 0.3s;
            &:hover
              box-shadow: 0px 12px 24px  $shadow
          .tags
            position: absolute;
            bottom: 12px;
            left: 8px;
            .tag-item
              margin-right: 10px;
              padding: 4px 8px;
              border-radius: 4px;
              color: #fff;
              font-size: 12px;
              background-color: rgba(28, 31, 33, 0.6);
          .badge
            position: absolute;
            width: 42px;
            border: 2px solid #fff;
            border-radius: 12px;
            line-height: 20px;
            color: #fff;
            font-size: 12px;
            text-align: center;
            font-weight: 600;
          .rate
            right: -7px;
            top: 8px;
            background-image: linear-gradient(-90deg, #65da98 0%, #0cba4d 100%);
          .script
            left: -7px;
            top: 8px;
            background-image: linear-gradient(90deg, #ffaa00 17%, #f76b1c 100%)
        & > p
          padding: 0 8px;
          box-sizing: border-box;
        .course-name
          height: 46px;
          word-break: break-all;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: #07111B;
          multline-ellipsis(2);
        .info
          margin-top: 5px;
          font-size: 12px;
          color: #93999F;
          line-height: 24px;
          & > span
            padding: 0 6px;
            &:first-child
              padding-left: 0;
          .icon-user
            margin-right: -2px;
            font-weight: 600;
 
        .price
          span
            color: #4D555D;
            font-size: 12px;
            font-weight: 800;
            line-height: 24px;
            letter-spacing: 0.5px;
          .old-price
            padding:0 3px 0 10px;
            text-decoration: line-through;
          .discount-title
            padding: 0 4px;
            border-radius: 4px;
            font-size: 12px;
            background-color: rgba(242, 13, 13, 0.6);
            color: #fff;
</style>
