<template>
  <div class="recommend">
    <h3 v-if="title" class="recommend-title">
      {{ title }}
    </h3>
    <ul>
      <li v-for="(item,index) in list" :key="index" class="recommend-item">
        <div class="img-box">
          <img :src="item.url" alt="">
        </div>
        <div class="recommend-content">
          <p class="name ellipsis">
            {{ item.title }}
          </p>
          <p class="desc">
            <span v-if="item.price" class="price">¥{{ item.price }}</span>
            <span class="rank">{{ item.rank }}</span>
            <span class="number">
              <i class="iconfont">&#xe607;</i>
              {{ item.number }}
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
  }
}
</script>
<style lang="stylus" scoped>
  .recommend
    .recommend-title
      margin-bottom: 12px;
      font-size: 14px;
      font-weight: 700;
    .recommend-item
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      cursor: pointer;
      .img-box
        flex: 0 0 80px;
        width: 80px;
        height: 60px;
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
          margin-bottom: 4px;
          max-width: 220px;
          font-size: 14px;
          color: #545C63;
          line-height: 24px;
        .desc
          & > span
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            font-size: 12px;
            color: #545C63;
            &.price
              font-weight: 800;
</style>