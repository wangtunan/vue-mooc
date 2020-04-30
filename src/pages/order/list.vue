<template>
  <div class="list">
    <!-- 选项卡 -->
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

    <!-- 列表 -->
    <ul v-if="orderList.length > 0" class="order-list">
      <li
        v-for="item in orderList"
        :key="item.id"
        class="order-item"
      >
        <h2 class="order-title">
          <i class="iconfont">&#xe70b;</i>
          订单编号：{{ item.code }}
          <span class="order-time">{{ item.time }}</span>
          <i class="iconfont delete" title="删除订单" @click="handleDeleteClick(item)">&#xe622;</i>
        </h2>
        <div class="order-list-box">
          <dl>
            <dd v-for="(course,index) in item.list" :key="index" class="order-content">
              <div class="img-box">
                <img :src="course.img" width="160" height="90" alt="">
              </div>
              <div class="order-name-box">
                <p class="order-name">
                  {{ course.title }}
                </p>
                <p class="order-real-price">
                  ¥ {{ course.isDiscount ? course.discountPrice : course.price }}
                </p>
              </div>
            </dd>
          </dl>
          <div class="order-price-box">
            <template>
              <!-- <p class="price-item old">
                原价 ¥{{ item.oldPrice }}
              </p>
              <p class="price-item">
                折扣 -¥{{ item.discount }}
              </p> -->
              <p class="price-item real">
                <span>¥ {{ getTotal(item.list) }}</span>
              </p>
            </template>         
          </div>
          <div class="order-status-box">
            <template v-if="item.status.code==0">
              <p class="order-pay-btn" @click="handlePayClick(item)">
                立即支付
              </p>
              <p class="order-cancel" @click="handleCancelClick(item)">
                取消订单
              </p>
            </template>
            <template v-else>
              <p class="order-status">
                {{ item.status.text }}
              </p>
              <p v-if="item.status.code == 1" class="order-pay">
                {{ item.way.text }}
              </p>
            </template>
          </div>
        </div>
      </li>
    </ul>
    <empty v-else message="暂无相关订单数据"></empty>

    <!-- 分页 -->
    <pagination
      :size="size"
      :page.sync="page"
      :total="total"
    ></pagination>
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import Empty from 'components/empty/empty.vue'
import { getOrderList, cancelOrder, deleteOrder } from 'api/order.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      size: 15,
      page: 1,
      total: 0,
      currentIndex: 0,
      navList: [],
      orderList: []
    }
  },
  created () {
    this.navList = [
      { id: 1, title: '全部', status: ''},
      { id: 2, title: '未支付', status: 0},
      { id: 3, title: '已完成', status: 1},
      { id: 4, title: '已失效', status: 2}
    ]
    this.getOrderListData()
  },
  methods: {
    // 导航点击
    handleNavClick (index) {
      this.currentIndex = index
      this.getOrderListData()
    },
    // 删除订单
    handleDeleteClick (order) {
      this.$confirm('是否确认删除订单？', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const params = {
          id: order.id
        }
        deleteOrder(params).then(res => {
          const { code, msg } = res
          if (code === ERR_OK) {
            this.$message.success(msg)
            this.getOrderListData()
          } else {
            this.$message.error(msg)
          }
        }).catch(() => {
          this.$message.error('接口异常')
        })
      })
    },
    // 取消订单
    handleCancelClick (order) {
      this.$confirm('是否确认取消订单？', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const params = {
          id: order.id
        }
        cancelOrder(params).then(res => {
          const { code, msg } = res
          if (code === ERR_OK) {
            this.$message.success(msg)
            this.getOrderListData()
          } else {
            this.$message.error(msg)
          }
        }).catch(() => {
          this.$message.error('接口异常')
        })
      })
    },
    // 订单支付
    handlePayClick (order) {
      this.$router.push(`/cart/pay/${order.code}`)
    },
    // 获取用户订单列表
    getOrderListData () {
      const params = {
        page: this.page,
        size: this.size,
        status: this.currentStatus
      }
      getOrderList(params).then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.orderList = data.list
          this.total = data.total
        } else {
          this.orderList = []
          this.$message.error(msg)
        }
      }).catch(() => {
        this.orderList = []
        this.$message.error('接口异常')
      })
    },
    // 计算总额度
    getTotal (list) {
      if (!list || list.length === 0) {
        return 0
      }
      let total = 0
      list.forEach(item => {
        if (item.isDiscount) {
          total += parseFloat(Number(total + parseFloat(item.discountPrice)).toFixed(2))
        } else {
          total += parseFloat(Number(total + parseFloat(item.price)).toFixed(2))
        }
      })
      return total
    }
  },
  computed:{
    currentStatus () {
      return this.navList[this.currentIndex].status
    }
  },
  components: {
    Pagination,
    Empty
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
                  font-size: 14px;
                .order-real-price
                  font-size: 13px;
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
              color: #f01414;
              & > span
                margin-top: 20px;
                margin-left: 20px;
                display: inline-block;
                vertical-align: middle;
                font-size: 16px;
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
