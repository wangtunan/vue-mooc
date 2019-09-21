<template>
  <div class="order m-center">
    <div class="order-container">
      <dl class="order-left-nav">
        <dt>订单中心</dt>
        <dd
          v-for="(item,index) in navList"
          :key="item.id"
          class="order-nav-item"
          :class="{active: currentIndex == index}"
          @click="handleNavClick(index)"
        >
          {{ item.title }}
          <span class="arrow" />
        </dd>
      </dl>
      <component :is="componentName" class="order-right-content" />
    </div>
  </div>
</template>
<script>
import List from './list.vue'
import Balance from './balance.vue'
import Curpon from './curpon.vue'
import Consult from './consult.vue'
import Bill from './bill.vue'
import Invoice from './invoice.vue'
export default {
  data () {
    return {
      currentIndex: 0,
      navList: []
    }
  },
  created () {
    this.navList = [
      { id: 1, title: '我的订单', component: 'list' },
      { id: 2, title: '我的余额', component: 'balance' },
      { id: 4, title: '我的优惠券', component: 'curpon' },
      { id: 5, title: '课程咨询', component: 'consult' },
      { id: 6, title: '发票管理', component: 'invoice' },
      { id: 7, title: '消费记录', component: 'bill' }
    ]
  },
  methods: {
    // 导航点击
    handleNavClick (index) {
      this.currentIndex = index
    }
  },
  computed: {
    componentName () {
      return this.navList[this.currentIndex].component
    }
  },
  components: {
    List,
    Balance,
    Curpon,
    Consult,
    Bill,
    Invoice
  }
}
</script>
<style lang="stylus" scoped>
  .order
    margin: 36px auto;
    min-height: 750px;
    .order-container
      display: flex;
      align-items: flex-start;
      .order-left-nav
        flex: 0 0 128px;
        width: 128px;
        margin-right: 32px;
        color: #4d555d;
        dt
          padding-bottom: 17px;
          line-height: 32px;
          border-bottom: 1px solid #d9dde1;
        .order-nav-item
          margin-top: 16px;
          height: 32px;
          line-height: 32px;
          cursor: pointer;
          font-size: 14px;
          &:hover, &.active
            color: #f01414;
            .arrow
              &::after
                border-color: transparent transparent transparent #f01414;
          .arrow
            position: relative;
            top: 10px;
            float: right;
            display: inline-block;
            padding-right: 10px;
            font-size: 12px;
            &::after
              position: absolute;
              content: '';
              width: 0px;
              height: 0px;
              border: 4px solid #4d555d;
              border-color: transparent transparent transparent #4d555d;
      .order-right-content
        flex: 1;
</style>
