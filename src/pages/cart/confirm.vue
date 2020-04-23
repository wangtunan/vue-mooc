<template>
  <div class="cart-confirm">
    <!-- 头部 -->
    <cart-header>
      <span class="cart-name">确认订单</span>
    </cart-header>

    <!-- 列表部分 -->
    <div class="confirm-list m-center">
      <dl>
        <dt class="confirm-title">
          商品信息
        </dt>
        <dd v-for="(item,index) in cartList" :key="index" class="confirm-item">
          <div class="img-box">
            <img :src="item.img" alt="">
          </div>
          <div class="confirm-content">
            <p class="course-name">
              {{ item.title }}
            </p>
          </div>
          <div class="confirm-price">
            ¥ {{ item.isDiscount ? item.discountPrice : item.price }}
          </div>
        </dd>
      </dl>
      <div class="confirm-bottom">
        <div class="left">
          <dl>
            <dt>
              <span class="total">商品总金额：</span>
              <span>¥ {{ getTotal }}</span>
              <span class="real">应付：</span>
              <span class="real-price">¥ {{ getTotal }}</span>
            </dt>
            <dd>支持花呗</dd>
            <dd>可开发票</dd>
            <dd>7天可退款</dd>
          </dl>
        </div>
        <div class="right" @click="handleSubmitOrder">
          提交订单
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartHeader from './cart-header.vue'
import { getCheckLessons, removeCheckLessons } from 'utils/cache.js'
import { createOrder } from 'api/order.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      cartList: []
    }
  },
  mounted () {
    this.getCartListData()
  },
  methods: {
    // 提交订单
    handleSubmitOrder () {
      const params = {
        list: this.cartList
      }
      createOrder(params).then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          removeCheckLessons()
          this.$router.push(`/cart/pay/${data.code}`)
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
      })
    },
    // 获取购物车列表接口数据
    getCartListData () {
      const checkLessons = getCheckLessons()
      if (checkLessons.length !== 0) {
        this.cartList = checkLessons
      } else {
        this.$confirm('暂无数据，是否返回课程中心？', '提示', {
          confirmButtonText: '返回',
          cancelButtonText: '不返回'
        }).then(() => {
          this.$router.replace('/lesson')
        })
      }
    }
  },
  computed: {
    // 获取总计金额
    getTotal () {
      let list = this.cartList.slice()
      let reuslt = 0
      list.forEach(item => {
        reuslt  = reuslt + parseFloat(item.price)
      })
      return reuslt || 0
    }
  },
  components: {
    CartHeader
  }
}
</script>
<style lang="stylus" scoped>
  .cart-confirm
    margin-bottom: 60px;
    .cart-name
      margin-right: 25px;
      font-size: 32px;
      color: #07111b;
    .confirm-list
      margin-top: -40px;
      padding: 36px 32px 0 32px;
      background-color: #fff;
      box-shadow: 0 8px 16px rgba(7,17,27,0.1);
      border-radius: 8px;
      box-sizing: border-box;
      .confirm-title
        padding-bottom: 24px;
      .confirm-item
        display: flex;
        align-items: center;
        margin-bottom: 1px;
        padding: 24px;
        background-color: #f3f5f7;
        cursor: pointer;
        .img-box
          flex: 0 0 160px;
          width: 160px;
          height: 90px;
          margin-right: 20px;
          & > img
            display: block;
            width: 100%;
            height: 100%;
            background-color: #eee;
        .confirm-content
          flex: 1;
          align-self: flex-start;
          .course-name
            margin-top: 4px;
            line-height: 36px;
        .confirm-price
          flex: 0 0 280px;
          width: 280px;
          color: #f01414;
      .confirm-bottom
        overflow: hidden;
        .left
          float: left;
          line-height: 120px;
          font-size: 14px;
          dt
            display: inline-block;
            vertical-align: middle;
            margin-right: 80px;
            & > span
              display: inline-block;
              vertical-align: middle;
              &.real
                margin-left: 50px;
              &.real-price
                font-size: 24px;
                color: #f01414;
                font-weight: 700;
          dd
            display: inline-block;
            vertical-align: middle;
            margin-right: 12px;
            padding: 6px 12px;
            border-radius: 12px;
            border: 1px solid #f01414;
            line-height: 1;
            font-size: 12px;
            color: #f01414;
            &:last-child
              margin-right: 0;
        .right
          float: right;
          margin-top: 36px;
          padding: 15px 40px;
          background-color: #f01414;
          border-radius: 24px;
          color: #fff;
          cursor: pointer;
          &:hover
            background-color: #c20a0a;
</style>