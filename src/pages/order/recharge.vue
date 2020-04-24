<template>
  <div class="balance">
    <h2 class="balance-title">
      我的余额
    </h2>
    <div class="balance-container">
      <div class="balance-message">
        <div class="balance-left">
          <p>当前余额</p>
          <p class="balance">
            ¥ {{ sum }}
          </p>
        </div>
        <div class="balance-right">
          <div class="recharge-btn" @click="dialogVisible = true">
            立即充值
          </div>
          <p class="recharge-text">
            充值余额不可提现，仅限用于本平台课程消费
          </p>
        </div>
      </div>
      <div class="balancel-list">
        <el-table :data="recharge">
          <el-table-column label="时间" prop="time" width="200" />
          <el-table-column label="金额" width="120">
            <template slot-scope="{row}">
              ¥ {{ row.money }}
            </template>
          </el-table-column>
          <el-table-column label="操作" prop="action.text" width="100" />
          <el-table-column label="备注" prop="remark" />        
        </el-table>
      </div>
    </div>

    <!-- 分页 -->
    <pagination :total="total" :page.sync="page" @change="handlePaginationChange"></pagination>

    <!-- 充值弹窗 -->
    <mooc-dialog title="余额充值" :visible.sync="dialogVisible" width="500px" top="25vh" :close-on-click-modal="false">
      <el-form label-position="top" label-width="100px">
        <el-form-item label="充值金额">
          <div class="recharge-amount">
            <span
              v-for="(item,index) in amountList"
              :key="index"
              class="recharge-item"
              :class="{active: index == amountIndex}"
              @click="handleAmountItemClick(item, index)"
            >
              <template v-if="index < lastIndex">¥</template>
              {{ item }}
              <div class="amount-active">
                <i class="iconfont">&#xe786;</i>
              </div>
            </span>
          </div>
          <el-input
            v-if="amountIndex == lastIndex"
            v-model.number="amount"
            placeholder="其它金额，请输入1-50000之间的整数"
          >
            <span slot="prefix" class="amount-icon">¥</span>
          </el-input>
        </el-form-item>
        <el-form-item label="充值方式">
          <div class="recharge-amount">
            <div
              v-for="(item,index) in rechargeWay"
              :key="index"
              class="recharge-item way"
              :class="{active: index==rechargeWayIndex}"
              @click="rechargeWayIndex=index"
            >
              <img :src="item.url" alt="">
              <div class="amount-active">
                <i class="iconfont">&#xe786;</i>
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div class="form-recharge-btn" :class="{'is-disabled': isLoading}" @click="handleFormRechargeClick">
        立即充值
      </div>
      <p class="recharge-argement">
        点击立即充值则视为您已同意 <span>《慕课网用户协议》</span>
      </p>
    </mooc-dialog>
  </div>
</template>

<script>
import Pagination from 'components/pagination/pagination.vue'
import { getUserRecharges, createUserRecharges } from 'api/order.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      isLoading: false,
      dialogVisible: false,
      recharge: [],
      sum: 0,
      page: 1,
      total: 0,
      amountList: [300, 500, 1000, '其他金额'],
      amountIndex: 0,
      rechargeWay: [],
      rechargeWayIndex: 0,
      amount: ''
    }
  },
  created () {
    this.rechargeWay = [
      { type: '支付宝充值', code: 0, url: 'https://order.imooc.com/static/module/pay/center/img/alipay_balance.png' },
      { type: '微信充值', code: 1, url: 'https://order.imooc.com/static/module/pay/center/img/wxpay_balance.png' }
    ]
  },
  mounted () {
    this.getUserRechargeList()
  },
  methods: {
    // 立即充值点击事件
    handleFormRechargeClick () {
      if (this.isLoading) {
        return false
      }
      const params = {
        money: this.money,
        way: this.currentCode
      }
      this.isLoading = true
      createUserRecharges(params).then(res => {
        this.isLoading = false
        const { code, msg } = res
        if (code === ERR_OK) {
          this.$message.success(msg)
          this.getUserRechargeList()
          this.dialogVisible = false
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.isLoading = false
        this.$message.error('接口异常')
      })
    },
    // 充值金额点击事件
    handleAmountItemClick (item, index) {
      this.amountIndex = index
      if (index === this.lastIndex) {
        this.amount = ''
      }
    },
    // 分页值更新
    handlePaginationChange (page) {
      this.page = page
      this.getUserRechargeList()
    },
    // 获取用户充值记录数据
    getUserRechargeList () {
      const params = {
        page: this.page
      }
      getUserRecharges(params).then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.recharge = data.list,
          this.total = data.total
          this.sum = data.sum
        } else {
          this.recharge = [],
          this.total = 0
          this.sum = 0
          this.$message.error(msg)
        }
      }).catch(() => {
        this.recharge = [],
        this.total = 0
        this.sum = 0
        this.$message.error('接口异常')
      })
    }

  },
  computed: {
    currentCode () {
      return this.rechargeWay[this.rechargeWayIndex].code
    },
    lastIndex () {
      return this.amountList.length - 1
    },
    money () {
      if (this.amountIndex < this.lastIndex) {
        return this.amountList[this.amountIndex]
      } else {
        return this.amount
      }
    }
  },
  components: {
    Pagination
  }
}
</script>
<style lang="stylus" scoped>
  .balance
    .balance-title
      margin-bottom: 15px;
      font-size: 16px;
      color: #333;
      line-height: 48px;
      font-weight:700;
    .balance-container
      border-radius: 12px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
      .balance-message
        position: relative;
        padding: 28px 32px;
        height: 134px;
        background: linear-gradient(90deg,#f9662d 0,#f01414 100%);
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        box-sizing: border-box;
        color: #fff;
        .balance-left
          float: left;
          height: 100%;
          .balance
            margin-top: 25px;
            font-size: 32px;
        .balance-right
          float: right;
          height: 100%;
          text-align: right;
          .recharge-btn
            display: inline-block;
            padding: 12px 36px;
            margin-bottom: 20px;
            border-radius: 24px;
            color: #f01414;
            background-color: #fff;
            font-weight: 700;
            cursor: pointer;
          .recharge-text
            font-size: 12px;
      .balancel-list
        padding: 10px 32px 11px;
        >>> .el-table
          &::before
            height: 0;
          .el-table__header
            border-bottom: 1px solid #b2b8bd;
          th
            .cell
              color: #333;
              font-weight: 700;
          td
            border-bottom: none!important;
    .form-recharge-btn
      margin-bottom: 10px;
      padding: 12px;
      border-radius: 25px;
      background: #383d42;
      line-height: 24px;
      color: #fff;
      text-align: center;
      cursor: pointer;
      font-size: 16px;
      &.is-disabled
        background-color: rgba(56, 61, 66, 0.5);
        cursor: not-allowed;
        pointer-events: none;
    .recharge-argement
      font-size: 12px;
      color: #9199a1;
      text-align: center;
      span
        color: #37f;
    .recharge-amount
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0;
      .recharge-item
        flex: 1;
        position: relative;
        display: inline-block;
        margin: 0 5px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: 1px solid #d3d6d9;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        color:#1c1f21;
        cursor: pointer;
        overflow: hidden;
        &.active
          border-color: #333;
          .amount-active
            display: block;
        &.way
          img
            position: absolute;
            top: 50%;
            left: 50%;
            width: 108px;
            transform: translate(-50%, -50%);
        .amount-active
          display: none;
          position: absolute;
          right: 0;
          bottom: 0;
          width: 0;
          height: 0;
          border: 12px solid #333;
          border-color: transparent #333 #333 transparent;
          .iconfont
            position: relative;
            left: -2px;
            top: -21px;
            color: #fff;
    >>> .mooc-dialog
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
      border-radius: 12px;
      .mooc-dialog-title
        font-weight: 700;
        color: #333;
      .mooc-dialog-close
        font-size: 25px;
      .mooc-dialog-body
        padding: 10px 20px 30px;
      .el-form
        .el-form-item:last-child
          margin-bottom: 12px;
        .el-form-item__label
          padding: 0;
          color: #333;
          font-weight: 700;
          line-height: 24px;
        .el-input__inner
          height: 48px;
          line-height: 48px;
          color: #545c63;
          background-color: #f3f5f6;
        .el-input__prefix
          top: 5px;
        .amount-icon
          padding-left: 5px;
          font-size: 20px;
          color: #545c63;
</style>