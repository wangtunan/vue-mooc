<template>
  <div class="operate-log">
    <h2 class="operate-title">
      <span class="type">操作类型</span>
      <span class="desc">通过查看操作类型、登录时间、登录地点和设备可以判断账号是否正常</span>
    </h2>
    <div class="log-list">
      <!-- 表格 -->
      <el-table :data="logTable">
        <el-table-column label="类型" prop="type" align="center" width="120"></el-table-column>
        <el-table-column label="登陆时间" prop="time" align="center" width="180"></el-table-column>
        <el-table-column label="城市" prop="city" align="center" width="390"></el-table-column>
        <el-table-column label="IP" prop="IP" align="center" width="120"></el-table-column>
        <el-table-column label="设备" prop="device" align="center" width="90"></el-table-column>
      </el-table>

      <!-- 分页 -->
      <pagination :total="total" :page.sync="page"></pagination>
    </div>
  </div>
</template>
<script>
import Pagination from 'base/pagination/pagination.vue'
export default {
  data () {
    return {
      page: 1,
      total: 100,
      logTable: []
    }
  },
  created () {
    this.logTable = [
      { id: 1, type: '账号登陆', time: '2019-07-11 08:08:08', city: '广东省广州市天河区', IP: '192.168.0.1', device: 'web' },
      { id: 2, type: '账号登陆', time: '2019-06-11 08:08:08', city: '广东省广州市天河区', IP: '192.168.0.1', device: 'web' },
      { id: 3, type: '短信验证码登陆', time: '2019-05-11 08:08:08', city: '广东省广州市天河区', IP: '192.168.0.1', device: 'ipad' },
      { id: 4, type: '短信验证码登陆', time: '2019-04-11 08:08:08', city: '广东省广州市天河区', IP: '192.168.0.1', device: 'ipad' },
      { id: 5, type: '二维码登陆', time: '2019-04-10 08:08:08', city: '广东省广州市天河区', IP: '192.168.0.1', device: 'ipad' },
      { id: 6, type: '二维码登陆', time: '2019-04-09 08:08:08', city: '广东省广州市天河区', IP: '192.168.0.1', device: 'ipad' },
      { id: 7, type: '账号登陆', time: '2019-04-08 08:08:08', city: '广东省广州市天河区', IP: '192.168.0.1', device: 'APP' },
      { id: 8, type: '账号登陆', time: '2019-04-07 08:08:08', city: '广东省广州市天河区', IP: '192.168.0.1', device: 'APP' },
      { id: 9, type: '短信验证码登陆', time: '2019-04-06 08:08:08', city: '广东省广州市天河区', IP: '192.168.0.1', device: 'APP' },
      { id: 10, type: '短信验证码登陆', time: '2019-04-05 08:08:08', city: '广东省广州市天河区', IP: '192.168.0.1', device: 'APP' }
    ]
  },
  components: {
    Pagination
  }
}
</script>
<style lang="stylus" scoped>
  .operate-log
    .operate-title
      margin-bottom: 20px;
      padding: 20px 0;
      border-bottom: 1px solid #ddd;
      font-size: 14px;
      color: #93999f;
      .type
        margin-right: 20px;
        font-size: 16px;
        color: #333;
        font-weight: 700;
    >>> .el-table
      color: #333;
      th
        background-color: #f3f5f7;
        color: #333;
</style>
