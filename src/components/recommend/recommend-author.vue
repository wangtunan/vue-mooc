<template>
  <div class="recommend">
    <h3 class="recommend-title">
      {{ title }}
    </h3>
    <ul>
      <li v-for="(item,index) in list" :key="index" class="recommend-item">
        <div class="img-box">
          <img :src="item.avatar" alt="">
        </div>
        <div class="recommend-content">
          <p class="name ellipsis">
            {{ item.name }}
          </p>
          <p v-if="author" class="other-info">
            <span class="answer">{{ item.article }}篇文章</span>
            <span class="like">共{{ item.fans }}个粉丝</span>
          </p>
          <p v-else class="other-info">
            <span class="answer">{{ item.answer }}个回答</span>
            <span class="like">共{{ item.like }}个支持</span>
          </p>
          <span class="attention">+ 关注</span>
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
    },
    author: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl';
  .recommend
    .recommend-title
      margin-bottom: 12px;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
    .recommend-item
      display: flex;
      align-items: flex-start;
      margin-bottom: 16px;
      cursor: pointer;
      .img-box
        flex: 0 0 48px;
        img-box(48px, 48px);
        & > img
          border-radius: 50%;
      .recommend-content
        flex: 1;
        position: relative;
        margin-left: 20px;
        .name
          margin-bottom: 8px;
          max-width: 190px;
          font-size: 14px;
          color: #545C63;
          line-height: 24px;
          font-weight: 700;
        .other-info
          & > span
            display: inline-block;
            vertical-align: middle;
            padding-right: 10px;
            font-size: 12px;
            color: #9199a1;
        .attention
          position: absolute;
          right: 0;
          top: 0;
          padding: 0 12px;
          border-radius: 12px;
          background-color: rgba(7,17,27,0.1);
          font-size: 12px;
          line-height: 24px;
          color: #545c63;
          &:hover
            background-color: #17823b;
            color: #fff;
</style>