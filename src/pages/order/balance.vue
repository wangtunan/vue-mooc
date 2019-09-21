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
            ¥ {{ recharge.total }}
          </p>
        </div>
        <div class="balance-right">
          <div class="recharge-btn" @click="handleRechargeClick">
            立即充值
          </div>
          <p class="recharge-text">
            充值余额不可提现，仅限用于本平台课程消费
          </p>
        </div>
      </div>
      <div class="balancel-list">
        <el-table :data="recharge.data">
          <el-table-column label="时间" prop="time" />
          <el-table-column label="金额" prop="balance" />
          <el-table-column label="操作" prop="action" />
          <el-table-column label="结余" prop="total" />
          <el-table-column label="备注" prop="remark" />        
        </el-table>
      </div>
    </div>

    <el-dialog title="余额充值" :visible.sync="dialogVisible" width="400px" top="25vh" :close-on-click-modal="false">
      <el-form label-position="top" label-width="100px">
        <el-form-item label="充值金额">
          <div class="recharge-amount">
            <span
              v-for="(item,index) in amountList"
              :key="index"
              class="recharge-item"
              :class="{active: index == amountIndex}"
              @click="handleAmountItemClick(index)"
            >
              ¥ {{ item }}
              <div class="amount-active">
                <i class="iconfont">&#xe786;</i>
              </div>
            </span>
          </div>
          <el-input v-model="amount" placeholder="其它金额，请输入1-50000之间的整数">
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
      <div class="form-recharge-btn" @click="handleFormRechargeClick">
        立即充值
      </div>
      <p class="recharge-argement">
        点击立即充值则视为您已同意 <span>《慕课网用户协议》</span>
      </p>
    </el-dialog>
  </div>
</template>

<script>
import { rechargeList } from 'api/order.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      dialogVisible: false, // 充值弹窗是否可见
      recharge: [], // 用户充值记录
      amountList: [300, 500, 1000], // 充值金额列表
      amountIndex: 0, // 当前选择的充值金额的索引
      rechargeWay: [], // 支付方式
      rechargeWayIndex: 0, // 当前支付方式的索引
      amount: '' // 充值金额
    }
  },
  created () {
    this.rechargeWay = [
      { type: '支付宝充值', url: 'https://order.imooc.com/static/module/pay/center/img/alipay_balance.png' },
      { type: '微信充值', url: 'https://order.imooc.com/static/module/pay/center/img/wxpay_balance.png' }
    ]
  },
  mounted () {
    this.getUserRechargeList()
  },
  methods: {
    // 头部信息立即充值点击事件
    handleRechargeClick () {
      this.dialogVisible = true
    },
    // 表单立即充值点击事件
    handleFormRechargeClick () {
      let params = {
        id: Math.random(),
        time: '2019-07-18 17:26:55',
        balance: 0,
        action: '转入',
        total: 0,
        remark: this.rechargeWay[this.rechargeWayIndex].type
      }
      // 处理充值金额
      if (this.amount && this.amount > 0 ) {
        params.balance = parseFloat(this.amount)
      } else {
        params.balance = parseFloat(this.amountList[this.amountIndex])
      }
      params.total = parseFloat(this.recharge.total) + params.balance
      this.recharge = {
        total: params.total,
        data: [...this.recharge.data, params]
      }
      this.$message.success('充值成功')
      this.dialogVisible = false
    },
    // 充值金额点击事件
    handleAmountItemClick (index) {
      this.amountIndex = index
      this.amount = ''
    },
    // 获取用户充值记录数据
    getUserRechargeList () {
      rechargeList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.recharge = data
        }
      })
    }
  },
  watch: {
    amount (newVal) {
      if (newVal > 0) {
        this.amountIndex = this.amountIndex !== -1 ? -1 : this.amountIndex
      }
    }
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
        border: 2px solid #d3d6d9;
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
    >>> .el-dialog
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
      border-radius: 12px;
      .el-dialog__title
        font-weight: 700;
        color: #333;
      .el-dialog__close
        font-size: 25px;
      .el-dialog__body
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