<template>
  <div class="cart">
    <!-- 头部 -->
    <cart-header>
      <span class="cart-name">我的购物车</span>
      <span class="number">共{{ cartList.length }}门，已选{{ checkNumber }}门</span>
      <span class="history-order" @click="handleHistoryClick">我的订单历史</span>
    </cart-header>

    <!-- 购物车列表 -->
    <div class="cart-list m-center">
      <dl>
        <dt class="cart-list-header">
          <span class="checkbox-all">
            <i v-if="isCheckAll" class="iconfont">&#xe617;</i>
            <i v-else class="iconfont no-check">&#xe630;</i>
            全选
          </span>
          <span class="course-name">课程</span>
          <span class="price">金额</span>
          <span>操作</span>
        </dt>
        <dd v-for="(course,index) in cartList" :key="index" class="cart-item">
          <div class="checkbox">
            <span @click="handleCheckClick(course,index)">
              <i v-if="course.isCheck" class="iconfont">&#xe617;</i>
              <i v-else class="iconfont no-check">&#xe630;</i>
            </span>
          </div>
          <div class="course-box">
            <div class="img-box">
              <img :src="course.img" alt="">
            </div>
            <div class="course-content">
              <p class="name">
                {{ course.name }}
              </p>
              <span class="package">{{ course.package.length }}个组合套餐可选择</span>
            </div>
          </div>
          <div class="price">
            ¥ {{ course.price }}
          </div>
          <div class="close" @click="handleDeleteClick(index)">
            <i class="iconfont">&#xe619;</i>
          </div>
        </dd>
      </dl>
      <div class="account-box">
        <div class="right">
          <div class="price-box">
            <p class="title">
              总计金额：
            </p>
            <p class="price">
              ¥ {{ getTotal() }}
            </p>
          </div>
          <div class="account-btn" @click="handleAccountClick">
            去结算
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartHeader from './cart-header.vue'
import { getCartList } from 'api/cart.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      cartList: [] // 购物车列表数据
    }
  },
  mounted () {
    this.getCartListData()
  },
  methods: {
    // 历史订单
    handleHistoryClick () {
      this.$router.push('/order')
    },
    // 勾选事件
    handleCheckClick (course, index) {
      this.cartList[index].isCheck = !course.isCheck
    },
    // 删除事件
    handleDeleteClick (index) {
      this.cartList.splice(index, 1)
    },
    // 去结算
    handleAccountClick () {
      this.$router.push('/cart/confirm')
    },
    // 获取购物车列表接口数据
    getCartListData () {
      getCartList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.cartList = data
        }
      })
    },
    // 获取总计金额
    getTotal () {
      let list = this.cartList.slice()
      let reuslt = 0
      list.forEach(item => {
        if (item.isCheck) {
          reuslt  = reuslt + parseFloat(item.price)
        }
      })
      return reuslt || 0
    }
  },
  computed: {
    isCheckAll () {
      return this.cartList.every(item => item.isCheck)
    },
    checkNumber () {
      return this.cartList.filter(item => item.isCheck).length
    }
  },
  components: {
    CartHeader
  }
}
</script>
<style lang="stylus" scoped>
  .cart
    margin-bottom: 60px;
    .cart-name
      margin-right: 25px;
      font-size: 32px;
      color: #07111b;
    .history-order
      float: right;
      padding-top: 5px;
      cursor: pointer;
      &:hover
        color: #f01414;
    .cart-list
      margin-top: -40px;
      padding: 0 36px 32px;
      background-color: #fff;
      box-shadow: 0 8px 16px rgba(7,17,27,0.1);
      border-radius: 8px;
      box-sizing: border-box;
      dl
        .cart-list-header
          display: flex;
          align-items: center;
          min-height: 88px;
          line-height: 88px;
          border-bottom: 1px solid #b7bbbf;
          & > span
            flex: 0 0 88px;
            width: 88px;
            font-size: 14px;
            &:not(:first-child)
              padding-left: 48px;
            &.checkbox-all
              color: #93999f;
              .iconfont
                display: inline-block;
                vertical-align: middle;
                margin-right: 8px;
                color: #37f;
                font-size: 22px;
                cursor: pointer;
                &.no-check
                  color: #b7bbbf;
            &.course-name
              flex: 1;
            &.price
              flex: 0 0 188px;
              width: 188px;
        .cart-item
          display: flex;
          align-items: center;
          padding: 24px 0;
          border-bottom: 1px solid #d9dde1;
          & > div
            flex: 0 0 88px;
            width: 88px;
            &:not(:first-child)
              margin-left: 48px;
            &.checkbox
              & > span
                display: inline-block;
                .iconfont
                  font-size: 22px;
                  color: #37f;
                  cursor: pointer;
                  &.no-check
                    color: #b7bbbf;
            &.course-box
              flex: 1;
              display: flex;
              align-items: flex-start;
              .img-box
                width: 160px;
                height: 90px;
                & > img
                  display: block;
                  width: 100%;
                  height: 100%;
                  background-color: #eee;
              .course-content
                flex: 1;
                margin-left: 24px;
                .name
                  margin: 4px 0 8px;
                  line-height: 24px;
                  font-size: 16px;
                  color: #07111b;
                .package
                  padding: 4px 8px;
                  border-radius: 12px;
                  background-color: rgba(240,20,20,.08);
                  font-size: 12px;
                  color: rgba(240,20,20,.6);
                  cursor: pointer;
                  &:hover
                    background-color: #f01414;
                    color: #fff;
            &.price
              flex: 0 0 188px;
              width: 188px;
              color: #1c1f21;
              font-weight: 700;
            &.close
              .iconfont
                font-size: 24px;
                color: #b7bbbf;
                cursor: pointer;
                &:hover
                  color: #f01414;
      .account-box
        overflow: hidden;
        .right
          float: right;
          height: 78px;
          & > div
            margin-top: 24px;
            display: inline-block;
            vertical-align: middle;
          .price-box
            margin-right: 40px;
            width: 150px;
            & > p
              font-size: 12px;
              color: #07111b;
              line-height: 24px;
              &.price
                font-size: 18px;
                color: #f01414;
                font-weight: 700;
                letter-spacing: 1px;
          .account-btn
            padding: 13px 32px;
            border-radius: 6px;
            background-color: #f01414;
            line-height: 24px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
</style>