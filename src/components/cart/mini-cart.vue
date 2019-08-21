<template>
  <div class="mini-cart">
    <!-- 列表 -->
    <dl>
      <dt class="title">
        我的购物车
        <span class="total">共加入0门课程</span>
      </dt>
      <template v-if="list.length > 0">
        <dd class="cart-item" v-for="(item,index) in list" :key="index">
          <div class="img-box">
            <img :src="item.img" alt="">
          </div>
          <div class="cart-content">
            <p class="name"></p>
            <p>
              <span class="price">¥ 348.00</span>
              <span class="delete">删除</span>
            </p>
          </div>
        </dd>
      </template>
      <div v-else class="empty-box">
        <span class="iconfont">&#xe63b;</span>
        <h2 class="empty-title">购物车里空空如也</h2>
        <p class="empty-desc">快去选购你中意的课程</p>
        <p class="empty-link" @click="handleLessonClick">实战课程</p>
      </div>
    </dl>

    <!-- 底部 -->
    <div class="cart-bottom">
      <span class="text" @click="handleOrderClick">我的订单中心</span>
      <span class="account-btn" @click="handleCartClick">去购物车</span>
    </div>
  </div>
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
    // 购物车点击
    handleCartClick () {
      this.$router.push('/cart')
      this.$emit('close')
    },
    // 订单中心点击
    handleOrderClick () {
      this.$router.push('/order')
      this.$emit('close')
    },
    // 实战课程点击
    handleLessonClick () {
      this.$router.push('/lesson')
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .mini-cart
    padding: 0 16px;
    width: 344px;
    border-radius: 0 0 8px 8px;
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,0.2)
    .title
      padding: 12px;
      border-bottom: 1px solid #D3D6D9;
      color: #1C1F21;
      font-weight: 700;
      font-size: 14px;
      .total
        float: right;
        color: #9199A1;
        font-size: 12px;
    .empty-box
      height: 284px;
      border-bottom: 1px solid #D3D6D9;
      text-align: center;
      .iconfont
        display: inline-block;
        padding: 36px 0 8px 0;
        font-size: 72px;
        color: #D3D6D9;
      & > p
        font-size: 14px;
        line-height: 1;
        &.empty-title
          color: #545C63;
        &.empty-desc
          margin-bottom: 8px
          color: #9199A1;
        &.empty-link
          line-height: 24px;
          color: rgba(240,20,20,0.6);
          &:hover
            color: #f01414;
    .cart-bottom
      padding: 16px 12px;
      color: #93999f;
      font-size: 12px;
      .text
        &:hover
          color: #f01414;
      .account-btn
        float: right;
        padding: 8px 26px;
        border-radius: 24px;
        background-color: #f01414;
        color: #fff;
        line-height: 16px;
        cursor: pointer;
</style>