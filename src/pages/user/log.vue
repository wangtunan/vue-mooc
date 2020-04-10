<template>
  <div class="operate-log">
    <h2 class="operate-title">
      <span class="type">操作类型</span>
      <span class="desc">通过查看操作类型、登录时间、登录地点和设备可以判断账号是否正常</span>
    </h2>
    <div class="log-list">
      <!-- 表格 -->
      <el-table :data="logs">
        <el-table-column label="类型" prop="type.text" align="center" width="120" />
        <el-table-column label="登陆时间" align="center" width="180">
          <template slot-scope="{row}">
            {{ row.time.replace('T', ' ').substring(0, 19) }}
          </template>
        </el-table-column>
        <el-table-column label="城市" prop="city" align="center" width="390" />
        <el-table-column label="IP" prop="ip" align="center" width="120" />
        <el-table-column label="设备" prop="device" align="center" width="90" />
      </el-table>

      <!-- 分页 -->
      <pagination :total="total" :page.sync="page" @change="hanlePaginationChange" />
    </div>
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import { ERR_OK } from 'api/config.js'
import { getUserLogs } from 'api/user.js'
export default {
  props: {
    userinfo: {
      type: Object
    }
  },
  data () {
    return {
      logs: [],
      page: 1,
      total: 0,
    }
  },
  mounted () {
    this.getUserLogsData()
  },
  methods: {
    // 分页值更新
    hanlePaginationChange (page) {
      this.page = page
      this.getUserLogsData()
    },
    // 分页获取登录日志数据
    getUserLogsData () {
      const params = {
        page: this.page
      }
      getUserLogs(params).then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.logs = data.list
          this.total = data.total
        } else {
          this.logs = []
          this.total = 0
          this.$message.error(msg)
        }
      }).catch(() => {
        this.logs = []
        this.total = 0
      })
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
