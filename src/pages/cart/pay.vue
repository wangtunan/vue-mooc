<template>
  <div class="cart-pay">
    <!-- 头部 -->
    <cart-header>
      <span class="cart-name">支付中心</span>
    </cart-header>

    <!-- 支付部分 -->
    <div class="pay-container m-center">
      <dl>
        <dt class="pay-title">
          <span>订单号：{{ $route.params.order }}</span>
          <span class="detail" @click="showList=!showList">{{ showList ? '收起' : '详情' }}</span>
        </dt>
        <template v-if="showList">
          <dd v-for="(item,index) in cartList" :key="index" class="pay-item">
            <div class="img-box">
              <img :src="item.img" alt="">
            </div>
            <div class="content">
              <p class="name">
                {{ item.name }}
              </p>
            </div>
            <div class="price">
              实际支付金额：<span>¥{{ item.price }}</span>
            </div>
          </dd>
        </template>
      </dl>
      
      <div class="pay-way-container">
        <!-- 支付方式 -->
        <div class="way-list">
          <p class="way-title">
            支付方式
          </p>
          <div
            v-for="(item, index) in payWayList"
            :key="index"
            class="way-item"
            :class="[ {active: currentWayIndex==index}, getClassName(item)]"
            :style="getBackground(item)"
            @click="currentWayIndex=index"
          >
            <!-- 我的余额 -->
            <div v-if="item.type==4" class="account-info">
              <p class="title">
                我的余额
              </p>
              <span class="balance">¥ {{ item.balance }}</span>
            </div>
            <!-- 可分期 -->
            <div v-if="item.way && item.way.length > 0" class="way-tag">
              可分期
            </div>
            <!-- 勾选样式 -->
            <div v-if="currentWayIndex == index" class="way-check">
              <i class="iconfont">&#xe786;</i>
            </div>
          </div>
        </div>

        <!-- 具体支付分期 -->
        <div v-if="payDetailList && payDetailList.length" class="way-detial">
          <dl>
            <dt>
              <p class="number">
                ¥ {{ total }}
              </p>
              <p class="desc">
                不分期
              </p>
              <span class="pay-btn">选择该支付方式</span>
            </dt>
            <dd v-for="(item,index) in payDetailList" :key="index">
              <p class="number">
                <span class="tag-title">{{ getTagTitle(item) }}</span>
                <span class="price-desc">{{ getPriceDesc(item) }}</span>
              </p>
              <p class="desc">
                手续费¥ {{ rate }}/期
              </p>
              <span class="pay-btn">选择该分期方式</span>
            </dd>
          </dl>
        </div>

        <!-- 支付按钮 -->
        <div class="pay-bottom">
          <div class="right">
            <p class="pay-total">
              应付金额：<span>¥ {{ total }}</span>
            </p>
            <div class="pay-btn">
              立即支付
            </div>
            <p class="tips">
              付款有问题？点我
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartHeader from './cart-header.vue'
import { getCartList, getPayWay } from 'api/cart.js'
import { ERR_OK } from 'api/config.js'
const MAX_LIST = 2
export default {
  data () {
    return {
      showList: true, // 是否显示购物车内容
      currentWayIndex: 0, // 当前选择的支付方式
      payWayList: [], // 支付方式列表数据
      cartList: [] // 购物车列表数据
    }
  },
  mounted () {
    this.getCartPayList()
    this.getPayWayData()
  },
  methods: {
    // 获取购物车支付数据
    getCartPayList () {
      getCartList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.cartList = data
          if (this.cartList.length > MAX_LIST) {
            this.showList = false
          }
        }
      })
    },
    // 获取支付方式数据
    getPayWayData () {
      getPayWay().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.payWayList = data
        }
      })
    },
    // 获取支付方式的样式
    getClassName (item) {
      const classMap = {
        '0': 'Alipay',
        '1': 'Wxpay',
        '2': 'JdPay',
        '3': 'HbeiPay',
        '4': 'Account'
      }
      return classMap[item.type]
    },
    // 获取背景图片
    getBackground (item) {
      return {
        'background-image': `url(${item.img})`
      }
    },
    // 获取分期标题
    getTagTitle () {
      const titleMap = {
        '2': '白条分期',
        '3': '花呗分期'
      }
      return titleMap[this.type]
    },
    // 获取分期描述
    getPriceDesc (item) {
      let rate = +this.rate
      let price = ((this.total / item) + rate).toFixed(2)
      return `¥ ${price} × ${item}期`
    }
  },
  computed: {
    payDetailList () {
      let currentWay = this.payWayList[this.currentWayIndex]
      return currentWay ? currentWay.way : []
    },
    total () {
      let result = 0
      this.cartList.forEach(item => {
        result = result + parseInt(item.price)
      })
      return result.toFixed(2)
    },
    rate () {
      return this.payWayList[this.currentWayIndex].rate || 0
    },
    type () {
      return this.payWayList[this.currentWayIndex].type || ''
    }
  },
  components: {
    CartHeader
  }
}
</script>
<style lang="stylus" scoped>
  .cart-pay
    margin-bottom: 60px;
    .cart-name
      margin-right: 25px;
      font-size: 32px;
      color: #07111b;
    .pay-container
      margin-top: -40px;
      padding: 36px 32px 0 32px;
      background-color: #fff;
      box-shadow: 0 8px 16px rgba(7,17,27,0.1);
      border-radius: 8px;
      box-sizing: border-box;
      .pay-title
        padding-bottom: 36px;
        font-size: 16px;
        .detail
          float: right;
          font-size: 14px;
          color: #f01414;
          cursor: pointer;
      .pay-item
        display: flex;
        align-items: center;
        padding: 24px;
        background-color: #f3f5f7;
        border-bottom: 2px solid #fff;
        &:last-child
          margin-bottom: 60px;
        .img-box
          margin-right: 20px;
          flex: 0 0 160px;
          width: 160px;
          height: 90px;
        .content
          flex: 1;
          align-self: flex-start;
          .name
            line-height: 24px;
        .price
          flex: 0 0 28%;
          width: 28%;
          font-size: 14px;
          color: #93999f;
          span
            padding-left: 10px;
            color: #f01414;
            font-size: 16px;
      .pay-way-container
        padding: 30px 12px 48px;
        border-top: 1px solid #d9dde1;
        .way-list
          .way-title
            padding-bottom: 15px;
            font-size: 16px;
            line-height: 36px;
            color: #07111b;
          .way-item
            position: relative;
            display: inline-block;
            vertical-align: middle;
            margin-right: 18px;
            width: 194px;
            height: 86px;
            background-color: #f3f5f7;
            border: 2px solid #f3f5f7;
            cursor: pointer;
            border-radius: 6px;
            background-repeat: no-repeat;
            background-position: center center;
            .way-tag
              position: absolute;
              top: 0;
              right: 0;
              padding: 3px 8px;
              border-radius: 0 3px 0 0;
              background-color: #f01414;
              color: #fff;
              font-size: 12px;
            .way-check
              position: absolute;
              right: 0;
              bottom: 0;
              width: 0;
              height: 0;
              border: 10px solid #f01414;
              border-color: transparent #f01414 #f01414 transparent;
              text-align: center;
              .iconfont
                z-index: 99;
                display: inline-block;
                position: absolute;
                top: -1px;
                right: -10px;
                color: #fff;
                font-size: 12px;
            &.active
              border: 2px solid #f01414;
            &:nth-child(5n+1)
              margin-right: 0;
            &.Alipay
              background-position: 33px -304px;
            &.Wxpay
              background-position: 30px -423px;
            &.Account
              position: relative;
              background-position: left 20px center;
              background-size: 48px 48px;
              .account-info
                position: absolute;
                left: 80px;
                top: 50%;
                transform: translateY(-50%);
                .title
                  font-size: 20px;
                  color: #1c1f21;
                  font-weight: 700;
                  line-height: 30px;
                .balance
                  font-size: 12px;
                  color: #9199a1;
                  line-height: 16px;
        .way-detial
          margin-top: 20px;
          padding-top: 36px;
          padding-bottom: 36px;
          background-color: #f3f5f7;
          border-radius: 6px;
          dt,dd
            display: inline-block;
            vertical-align: middle;
            width: 25%;
            box-sizing: border-box;
            text-align: center;
            .number
              font-size: 20px;
              color: #f01414;
              line-height: 24px;
              font-weight: 700;
            .desc
              margin-top: 4px;
              font-size: 12px;
              line-height: 24px;
              color: #93999f;
            .pay-btn
              display: block;
              margin: 20px auto 0;
              width: 146px;
              height: 36px;
              text-align: center;
              line-height: 36px;
              border: 1px solid #f01414;
              color: #f01414;
              border-radius: 18px;
              font-size: 14px;
              cursor: pointer;
              &:hover
                background-color: #f01414;
                color: #fff;
          dd
            border-left: 1px solid #d9dde1;
            .number
              font-size: 14px;
              & > span
                display: inline-block;
                vertical-align: middle;
                &.tag-title
                  margin-right: 10px;
                  padding: 3px 5px;
                  background-color: #f01414;
                  border-radius: 3px;
                  color: #fff;
                  font-weight: 700;
                  line-height: 1;
                &.price-desc
                  font-size: 20px;
                  font-weight: 700;
        .pay-bottom
          margin-top: 48px;
          padding-top: 36px;
          overflow: hidden;
          border-top: 1px solid #d9dde1;
          .right
            float: right;
            .pay-total
              font-size: 14px;
              color: #07111b;
              line-height: 36px;
              span
                display: inline-block;
                vertical-align: middle;
                font-size: 22px;
                color: #f01414;
            .pay-btn
              margin-left: auto;
              margin-top: 32px;
              margin-bottom: 16px;
              width: 140px;
              height: 40px;
              text-align: center;
              line-height: 36px;
              background-color: #f01414;
              color: #fff;
              font-size: 14px;
              font-weight: 700;
              cursor: pointer;
            .tips
              font-size: 12px;
              color: #4d555d;
              line-height: 24px;
              text-align: right;
              cursor: pointer;
              &:hover
                color: #f01414;
</style>