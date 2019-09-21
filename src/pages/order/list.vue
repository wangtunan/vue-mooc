<template>
  <div class="list">
    <dl class="list-tab">
      <dt>我的订单</dt>
      <dd
        v-for="(item,index) in navList"
        :key="item.id"
        :class="{active: currentIndex == index}"
        @click="handleNavClick(index)"
      >
        <i v-if="item.type==4" class="iconfont">&#xe622;</i>{{ item.title }}
      </dd>
    </dl>

    <ul class="order-list">
      <li
        v-for="item in filterOrderList"
        :key="item.id"
        class="order-item"
      >
        <h2 class="order-title">
          <i class="iconfont">&#xe70b;</i>
          订单编号：{{ item.id }}
          <span class="order-time">{{ item.time }}</span>
          <i class="iconfont delete" title="删除订单">&#xe622;</i>
        </h2>
        <div class="order-list-box">
          <dl>
            <dd v-for="(course,index) in item.course" :key="index" class="order-content">
              <div class="img-box">
                <img :src="course.img" width="160" height="90" alt="">
              </div>
              <div class="order-name-box">
                <p class="order-name">
                  {{ course.name }}
                </p>
                <p class="order-real-price">
                  <span v-if="item.status==2">实付</span> ¥{{ course.realPrice }}
                </p>
              </div>
            </dd>
          </dl>
          <div class="order-price-box">
            <template v-if="item.status==2">
              <p class="price-item old">
                原价 ¥{{ item.oldPrice }}
              </p>
              <p class="price-item">
                折扣 -¥{{ item.discount }}
              </p>
              <p class="price-item real">
                实付 ¥<span>{{ item.oldPrice }}</span>
              </p>
            </template>
            <p v-else class="price-item real">
              ¥<span>{{ item.oldPrice }}</span>
            </p>            
          </div>
          <div class="order-status-box">
            <template v-if="item.status==1">
              <p class="order-pay-btn">
                立即支付
              </p>
              <p class="order-cancel">
                取消订单
              </p>
            </template>
            <template v-else>
              <p class="order-status">
                {{ item.statusText }}
              </p>
              <p class="order-pay">
                {{ item.payType }}
              </p>
            </template>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { orderList } from 'api/order.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      currentIndex: 0,
      navList: [],
      orderList: []
    }
  },
  created () {
    this.navList = [
      { id: 1, title: '全部', status: 0},
      { id: 2, title: '未支付', status: 1},
      { id: 3, title: '已完成', status: 2},
      { id: 4, title: '已失效', status: 3},
      { id: 5, title: '订单回收站', status: 4}
    ]
    this.getOrderList()
  },
  methods: {
    // 导航点击
    handleNavClick (index) {
      this.currentIndex = index
    },
    // 获取用户订单列表
    getOrderList () {
      orderList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.orderList = data
        }
      })
    }
  },
  computed:{
    filterOrderList () {
      return this.orderList.filter (item => {
        if (this.currentIndex === 0) {
          return true
        } else {
          return item.status === this.navList[this.currentIndex].status
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list
    .list-tab
      dt, dd
        display: inline-block;
        vertical-align: middle;
      dt
        position: relative;
        margin-right: 20px;
        padding-right: 20px;
        font-size: 16px;
        color: #07111b;
        line-height: 32px;
        font-weight: 700;
        &::after
          content: '';
          position: absolute;
          right: 0;
          top: 6px;
          width: 1px;
          height: 20px;
          background-color: #d9dde1;
      dd
        padding: 10px 40px;
        font-size:12px;
        color: #5e5e5e;
        cursor: pointer;
        &:last-child
          float: right;
        &.active
          background-color: #4d555d;
          border-radius: 16px;
          color: #fff;
    .order-list
      margin-top: 24px;
      .order-item
        padding: 10px 32px 32px 32px;
        margin-bottom: 24px;
        border-radius: 12px;
        box-shadow: 0 2px 8px 2px rgba(0,0,0,0.1);
        background-color: #fff;
        cursor: pointer;
        &:hover
          box-shadow: 0 2px 12px 4px rgba(0,0,0,0.1);
          .order-title
            .iconfont.delete
              display: block;
        .order-title
          margin-bottom: 24px;
          font-size: 12px;
          font-weight: 700;
          color: #333;
          line-height: 48px;
          border-bottom: 1px solid #b7bbbf;
          .iconfont
            margin-right: 5px;
            color: #f01414;
            &.delete
              display: none;
              float: right;
              color: #93999f;
          .order-time
            margin-left: 25px;
            color: #93999f;
        .order-list-box
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          dl
            flex: 1;
            border-right: 1px solid #d9dde1;
            .order-content
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 24px;
              padding-bottom: 24px;
              border-bottom: 1px solid #d9dde1;
              &:last-child
                border-bottom: none;
                margin-bottom: 0px;
                padding-bottom: 0px;
              .img-box
                flex: 0 0 160px;
                width: 160px;
              .order-name-box
                flex: 1;
                margin-left: 20px;
                text-align: left;
                height: 90px;
                .order-name
                  margin-bottom: 8px;
                  color: #07111b;
                  line-height: 24px;
                .order-real-price
                  font-size: 12px;
                  color: #f01414;
          .order-price-box, .order-status-box
            flex: 0 0 200px;
            width: 200px;
            text-align: left;
            font-size: 12px;
            color: #93999f;
            & > p
              line-height: 24px;
          .order-price-box
            margin-right: 200px;
            padding-top: 10px;
            padding-left: 20px;
            box-sizing: border-box;
            .old
              text-decoration: line-through;
            .real
              & > span
                margin-left: 5px;
                display: inline-block;
                vertical-align: middle;
                font-size: 16px;
              color: #f01414;
          .order-status-box
            padding-top: 20px;
            text-align: center;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            border-left: 1px solid #d9dde1;
            .order-status
              font-size: 14px;
              color: #4d555d;
            .order-pay-btn
              margin: 0px auto 5px;
              width:120px;
              height:36px;
              border-radius: 18px;
              background-color: #f01414;
              color: #fff;
              text-align: center;
              line-height: 36px;
</style>
