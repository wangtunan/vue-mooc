<template>
  <div class="operate-log">
    <h2 class="operate-title">
      <span class="type">操作类型</span>
      <span class="desc">通过查看操作类型、登录时间、登录地点和设备可以判断账号是否正常</span>
    </h2>
    <div class="log-list">
      <!-- 表格 -->
      <el-table :data="userinfo.logs">
        <el-table-column label="类型" prop="type" align="center" width="120" />
        <el-table-column label="登陆时间" prop="time" align="center" width="180" />
        <el-table-column label="城市" prop="city" align="center" width="390" />
        <el-table-column label="IP" prop="IP" align="center" width="120" />
        <el-table-column label="设备" prop="device" align="center" width="90" />
      </el-table>

      <!-- 分页 -->
      <pagination :total="total" :page.sync="page" />
    </div>
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
export default {
  props: {
    userinfo: {
      type: Object
    }
  },
  data () {
    return {
      page: 1,
      total: 100,
    }
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
