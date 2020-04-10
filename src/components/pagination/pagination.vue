<template>
  <div class="pagination-container">
    <el-pagination
      :total="total"
      :layout="layout"
      :background="background"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next'
    },
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    background: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      pageSize: this.size || 10
    }
  },
  computed: {
    currentPage: {
      set (val) {
        this.$emit('update:page', val)
      },
      get () {
        return this.page
      }
    }
  },
  methods: {
    // 页码变动
    handleCurrentChange () {
      this.$emit('change', this.currentPage)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .pagination-container
    padding: 30px 16px;
    >>> .el-pagination
      text-align: center;
</style>
