<template>
  <div class="test">
    <el-breadcrumb separator="/" separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item to="/home" replace>
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item to="/home">
        活动管理
      </el-breadcrumb-item>
      <el-breadcrumb-item to="/home">
        活动列表
      </el-breadcrumb-item>
      <el-breadcrumb-item to="/home">
        活动详情
      </el-breadcrumb-item>
    </el-breadcrumb>

    <mooc-breadcrumb separator="/" separator-icon="el-icon-d-arrow-right">
      <mooc-breadcrumb-item to="/home" replace>
        首页
      </mooc-breadcrumb-item>
      <mooc-breadcrumb-item to="/home">
        活动管理
      </mooc-breadcrumb-item>
      <mooc-breadcrumb-item to="/home">
        活动列表
      </mooc-breadcrumb-item>
      <mooc-breadcrumb-item to="/home">
        活动详情
      </mooc-breadcrumb-item>
    </mooc-breadcrumb>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    handleStepClick () {
      this.active = this.active + 1
    }
  }
}
</script>
<style lang="stylus" scoped>
  .test
    margin-left: 50px;
    margin-top: 50px;
    min-height: 800px;
    & > div
      margin: 20px 0;
      width: 1000px;
</style>