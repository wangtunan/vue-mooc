<template>
  <div class="recommend">
    <h3 v-if="title" class="recommend-title">
      {{ title }}
      <span class="more" @click="handleMoreClick">更多></span>
    </h3>
    <ul>
      <li
        v-for="(item,index) in list"
        :key="index"
        class="recommend-item"
        @click="handleReadItemClick(item)"
      >
        <div class="img-box">
          <img :src="item.detailImg" alt="">
        </div>
        <div class="recommend-content">
          <p class="name ellipsis">
            {{ item.title }}
          </p>
          <p class="other-info">
            <span class="trem">
              共{{ item.term }}小节
            </span>
            <span class="number">
              共{{ item.persons }}人购买
            </span>
          </p>
          <p class="price">
            <span class="price">
              ¥{{ item.price }}
            </span>
            <span class="subscribe">
              立即订阅
            </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    // 更多点击
    handleMoreClick () {
      this.$router.push('/read')
    },
    // 专栏点击
    handleReadItemClick (read) {
      this.$router.push(`/read/${read.id}`)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl';
  @import '~assets/stylus/variables.styl';
  .recommend
    .recommend-title
      margin-bottom: 12px;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      .more
        float: right;
        font-size: 12px;
        cursor: pointer;
        &:hover
          color: $theme-blur-light-color;
    .recommend-item
      display: flex;
      align-items: flex-start;
      margin-bottom: 8px;
      cursor: pointer;
      .img-box
        flex: 0 0 70px;
        img-box(70px, 98px);
        & > img
          border-radius: 6px;
      .recommend-content
        flex: 1;
        margin-left: 20px;
        .name
          margin-bottom: 8px;
          max-width: 190px;
          font-size: 14px;
          color: $font-three-color;
          line-height: 24px;
        .other-info
          & > span
            display: inline-block;
            vertical-align: middle;
            padding-right: 10px;
            font-size: 12px;
            color: $font-four-color;
        .price
          margin-top: 8px;
          font-size: 12px;
          color: $font-four-color;
          line-height: 24px;
          .subscribe
            float: right
            padding: 0 12px;
            height: 24px;
            line-height: 24px;
            background-color: rgba(51,119,255,.1);
            border-radius: 12px;
            font-size: 12px;
            color: $theme-blur-light-color;
</style>