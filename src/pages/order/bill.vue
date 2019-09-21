<template>
  <div class="bill">
    <h2 class="bill-title">
      消费记录
      <span class="number">目前共 <b>{{ bill.number }}</b>条记录 </span>
      <span class="total">消费金额 <b>¥{{ bill.total }}</b> </span>
      <span class="info">一份付出将有十分回报</span>
    </h2>
  
    <div class="bill-list">
      <el-table :data="bill.data">
        <el-table-column label="订单编号" prop="order" />
        <el-table-column label="课程" prop="name" show-overflow-tooltip />
        <el-table-column label="时间" prop="time" width="180" />
        <el-table-column label="消费金额" prop="price" width="100" />
        <el-table-column label="支付方式" prop="pay.way" width="100" />
        <el-table-column label="支付结果" prop="pay.result" width="100" />
      </el-table>
    </div>
  </div>
</template>
<script>
import { billList } from 'api/order.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      bill: []
    }
  },
  mounted () {
    this.getBillList()
  },
  methods: {
    // 获取用户消费记录数据
    getBillList () {
      billList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.bill = data
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .bill
    .bill-title
      margin-bottom: 15px;
      font-size: 16px;
      color: #333;
      font-weight: 700;
      line-height: 48px;
      & > span
        margin-right: 20px;
        font-size: 12px;
        line-height: 24px;
        color: #4d555d;
        &:first-child
          margin-left: 24px;
          padding-left: 24px;
          border-left: 1px solid #d9dde1;
        & > b
          padding: 0 5px;
          color: #f01414;
    .bill-list
      padding: 20px;
      border-radius: 12px;
      background-color: #fff;
      box-shadow: 0 4px 8px 2px rgba(0,0,0,0.1);
      >>> .el-table
        font-size: 12px;
        &::before
          height: 0;
        td
          border-bottom: none;
        th
          border-color: #b7bbbf;
          .cell
            color: #333;
            font-weight: 700;
</style>
