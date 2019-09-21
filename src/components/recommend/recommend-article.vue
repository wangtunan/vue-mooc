<template>
  <div class="recommend">
    <h3 class="recommend-title">
      {{ title }}
    </h3>
    <ul>
      <li v-for="(item,index) in list" :key="index" class="recommend-item">
        <div class="img-box">
          <img :src="item.img" alt="">
        </div>
        <div class="recommend-content">
          <p class="title">
            {{ item.title }}
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
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl'
  .recommend
    .recommend-title
      margin-bottom: 12px;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
    .recommend-item
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      cursor: pointer;
      .img-box
        flex: 0 0 48px;
        width: 48px;
        height: 48px;
        & > img
          display: block;
          width: 100%;
          height: 100%;
          background-color: #ccc;
          border-radius: 8px;
      .recommend-content
        flex: 1;
        position: relative;
        margin-left: 15px;
        .title
          margin-bottom: 8px;
          max-width: 190px;
          font-size: 14px;
          color: #545C63;
          line-height: 24px;
          font-weight: 700;
          multline-ellipsis(2);
          &:hover
            color: #37f;
</style>