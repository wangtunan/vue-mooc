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
        <i class="iconfont" v-if="item.type==4">&#xe622;</i>{{item.title}}
      </dd>
    </dl>

    <ul class="order-list">
      <li
        class="order-item"
        v-for="item in orderList"
        :key="item.id"
      >
        <h2 class="order-title">
          <i class="iconfont">&#xe70b;</i>
          订单编号：{{item.id}}
          <span class="order-time">{{item.time}}</span>
        </h2>
        <dl>
          <dd class="order-content" v-for="(course,index) in item.course" :key="index">
            <div class="img-box">
              <img :src="course.img" width="160" height="90" alt="">
            </div>
            <div class="order-name-box">
              <p class="order-name">{{course.name}}</p>
              <p class="order-real-price">{{course.realPrice}}</p>
            </div>
            <div class="order-price-box">
              <p class="price-item">原价 ¥{{course.oldPrice}}</p>
              <p class="price-item">折扣 -¥{{course.discount}}</p>
              <p class="price-item">实付 ¥{{course.oldPrice}}</p>
            </div>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script>
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
      { id: 1, title: '全部', status: 0, number: 11 },
      { id: 2, title: '未支付', status: 1, number: 0 },
      { id: 3, title: '已完成', status: 2, number: 11 },
      { id: 4, title: '已失效', status: 3, number: 1 },
      { id: 5, title: '订单回收站', status: 4, number: 3 }
    ]
    this.orderList = [
      {
        id: '19042XXXXXX8454',
        time: '2019-04-24 10:29:20',
        course: [
          {
            name: '基于TypeScript从零重构axios',
            img: 'https://szimg.mukewang.com/5cbf00c608f52a3b06000338-160-90.jpg',
            oldPrice: '388.00',
            discount: '60',
            realPrice: '328.00',
            payType: '支付宝支付',
            status: 2
          }
        ]
      },
      {
        id: '19042XXXXXX8454',
        time: '2019-04-24 10:29:20',
        course: [
          {
            name: '基于TypeScript从零重构axios',
            img: 'https://szimg.mukewang.com/5cbf00c608f52a3b06000338-160-90.jpg',
            oldPrice: '388.00',
            discount: '60',
            realPrice: '328.00',
            payType: '支付宝支付',
            status: 2
          }
        ]
      }
    ]
  },
  methods: {
    // 导航点击
    handleNavClick (index) {
      this.currentIndex = index
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
</style>
