<template>
  <div class="curpon">
    <dl class="curpon-tab">
      <dt>我的优惠券</dt>
      <dd
        v-for="(item,index) in navList"
        :key="item.id"
        :class="{active: currentIndex == index}"
        @click="currentIndex=index"
      >
        <i v-if="item.type==4" class="iconfont">&#xe622;</i>{{ item.title }}
      </dd>
    </dl>
    <ul class="curpon-list">
      <li v-for="(item,index) in filterCurponList" :key="index" class="curpon-item" :style="getBackgroundImage(item.status)">
        <p class="curpon-price-box">
          <span class="price">¥ {{ item.price }}</span>
          <span class="condition">{{ item.condition }}</span>
        </p>
        <p class="range">
          适用于：{{ item.range }}
        </p>
        <p class="effective">
          有效期：{{ item.effectStartTime }}-{{ item.effectEndTime }}
        </p>
        <template v-if="item.status==1">
          <p class="order">
            订单号：{{ item.order }}
          </p>
          <p class="use-time">
            使用日期：{{ item.useTime }}
          </p>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
import { curponList } from 'api/order.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      currentIndex: 0, // 当前导航索引
      navList: [], // 导航数据
      curponList: [], // 优惠券数据
    }
  },
  created () {
    this.navList = [
      { id: 1, title: '未使用', status: 0},
      { id: 2, title: '已使用', status: 1},
      { id: 3, title: '已过期', status: 2}
    ]
  },
  mounted () {
    this.getCurponList()
  },
  methods: {
    // 获取用户优惠券信息
    getCurponList () {
      curponList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.curponList = data
        }
      })
    },
    // 根据状态获取优惠券的背景图片
    getBackgroundImage (status) {
      let url = ''
      let height = 0
      switch (status) {
        case 0:
          url = 'https://order.imooc.com/static/module/coupon/img/coupons_bg.png'
          height = 144
          break
        case 1:
          url = 'https://order.imooc.com/static/module/coupon/img/coupons_used_bg.png'
          height = 184
          break
        case 2:
          url = 'https://order.imooc.com/static/module/coupon/img/coupons_overdue.png'
          height = 144
          break
      }
      return {
        'background-image': `url('${url}')`,
        'height': `${height}px`
      }
    }
  },
  computed: {
    filterCurponList () {
      return this.curponList.filter(item => {
        return item.status === this.navList[this.currentIndex].status
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .curpon
    .curpon-tab
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
        &.active
          background-color: #4d555d;
          border-radius: 16px;
          color: #fff;
    .curpon-list
      margin-top: 15px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .curpon-item
        flex: 0 0 320px;
        margin-right: 10px;
        margin-bottom: 15px;
        padding: 24px 32px;
        width: 320px;
        background-color: #fff;
        box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
        border-radius: 12px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        cursor: pointer;
        & > p:not(:first-child)
          font-size: 12px;
          color: #93999f;
          line-height: 24px;
        &:nth-child(3n)
          margin-right: 0;
        .curpon-price-box
          margin-bottom: 8px;
          line-height: 40px;
          color: #93999f;
          & > span
            display: inline-block;
            vertical-align: top;
            font-weight: 700;
          .price
            margin-right: 12px;
            font-size: 36px;
          .condition
            font-size: 14px;
</style>
