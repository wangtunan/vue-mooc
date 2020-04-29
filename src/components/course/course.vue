<template>
  <ul class="course-list">
    <li
      v-for="(item,index) in list"
      :key="index"
      class="course-item"
      @click="handleCourseClick(item)"
    >
      <div class="img-box">
        <img :src="item.img" alt="">
        <div v-if="item.labels && item.labels.length > 0" class="tags">
          <span v-for="(label, index) in item.labels" :key="index" class="tag-item">{{ label }}</span>
        </div>
        <div v-if="item.process > 0" class="badge rate">
          {{ item.process }}%
        </div>
      </div>
      <p class="course-name">
        {{ item.title }}
      </p>
      <p class="info">
        <span>{{ item.type.text }}</span>
        <span>{{ item.hard.text }}</span>
        <span><i class="iconfont icon-user">&#xe607;</i>{{ item.persons }}</span>
        <span>
          <mooc-star class="star-box" :value="5" :disabled="true" />
        </span>
      </p>
      <p class="price">
        <span>¥ {{ item.price }}</span>
        <template v-if="item.isDiscount">
          <span class="old-price">¥ {{ item.discountPrice }}</span>
          <span class="discount-title">限时优惠</span>
        </template>
      </p>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    // 课程点击事件
    handleCourseClick () {
      this.$router.push(`/lesson`)
    } 
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .course-list
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    .course-item
      position: relative;
      flex: 0 0 20%;
      margin-bottom: 32px;
      cursor: pointer;
      &:hover
        .course-name
          color: $theme-red-color;
      .img-box
        position: relative;
        margin: 0 auto 8px;
        img-box(216px, 120px)
        & > img
          border-radius: 8px;
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
      & > p
        padding: 0 8px;
        box-sizing: border-box;
      .course-name
        height: 46px;
        word-break: break-all;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: $font-first-color;
        multline-ellipsis(2);
      .info
        margin-top: 5px;
        font-size: 12px;
        color: $font-four-color;
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
          color: $font-second-color;
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
          background-color: $theme-red-color;
          opacity: 0.6;
          color: #fff;
</style>