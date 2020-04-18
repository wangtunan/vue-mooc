<template>
  <ul class="list-content">
    <li v-for="(item,index) in list" :key="index" class="list-item">
      <div class="img-box">
        <img :src="item.img" alt="">
      </div>
      <div class="content">
        <p class="title">
          {{ item.title }}
        </p>
        <p class="information">
          <span class="iconfont">&#xe681;</span>
          <span class="number">{{ item.views }}</span>
          <span class="author">{{ item.author }}</span>
          <span class="tag">{{ item.tag }}</span>
          <span class="time">{{ item.time }}</span>
        </p>
      </div>
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
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .list-content
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(7,17,27,0.1);
    .list-item
      display: flex;
      align-items: flex-start;
      margin-bottom: 16px;
      &:last-child
        margin-bottom: 0;
        .content
          border-bottom: none;
      .img-box
        flex: 0 0 66px;
        margin-right: 16px;
        width: 66px;
        height: 66px;
        & > img
          display: inline-block;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background-color: #eee;
    .content
      flex: 1;
      height: 66px;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      .title
        margin-bottom: 4px;
        line-height: 30px;
        color: $font-first-color;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        &:hover
          color: $theme-blur-light-color;
      .information
        & > span
          display: inline-block;
          vertical-align: middle;
          margin-right: 8px;
          font-size: 12px;
          color: $font-four-color;
          &.author
            margin-left: 8px;
            padding-right: 10px;
          &.time
            float: right;
</style>