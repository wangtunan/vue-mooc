<template>
  <div class="recommend">
    <h3 class="recommend-title">
      {{ title }}
      <span class="more" @click="handleMoreClick">更多></span>
    </h3>
    <ul>
      <li v-for="(item,index) in list" :key="index" class="recommend-item" @click="handleReadItemClick">
        <div class="img-box">
          <img :src="item.img" alt="">
        </div>
        <div class="recommend-content">
          <p class="name ellipsis">
            {{ item.title }}
          </p>
          <p class="other-info">
            <span class="trem">共{{ item.term }}小节</span>
            <span class="number">共{{ item.term }}人购买</span>
          </p>
          <p class="price">
            <span class="price">¥{{ item.price }}</span>
            <span class="subscribe">立即订阅</span>
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
    // 更多专栏点击
    handleMoreClick () {
      this.$router.push('/read')
    },
    // 推荐专栏点击事件
    handleReadItemClick () {
      let random = new Date().getTime()
      this.$router.push(`/read/${random}`)
    }
  }
}
</script>
<style lang="stylus" scoped>
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
          color: #37f;
    .recommend-item
      display: flex;
      align-items: flex-start;
      margin-bottom: 8px;
      cursor: pointer;
      .img-box
        flex: 0 0 70px;
        width: 70px;
        height: 98px;
        & > img
          display: block;
          width: 100%;
          height: 100%;
          background-color: #ccc;
          border-radius: 6px;
      .recommend-content
        flex: 1;
        margin-left: 20px;
        .name
          margin-bottom: 8px;
          max-width: 190px;
          font-size: 14px;
          color: #545C63;
          line-height: 24px;
        .other-info
          & > span
            display: inline-block;
            vertical-align: middle;
            padding-right: 10px;
            font-size: 12px;
            color: #9199a1;
        .price
          margin-top: 8px;
          font-size: 12px;
          color: #9199a1;
          line-height: 24px;
          .subscribe
            float: right
            padding: 0 12px;
            height: 24px;
            line-height: 24px;
            background-color: rgba(51,119,255,.1);
            border-radius: 12px;
            font-size: 12px;
            color: #37f;
</style>