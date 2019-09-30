<template>
  <div class="test">
    <el-steps :active="active" finish-status="success" process-status="error">
      <el-step title="已完成" description="已完成已完成已完成已完成"></el-step>
      <el-step title="进行中" description="进行中进行中进行中进行中"></el-step>
      <el-step title="已完成" description="已完成已完成已完成已完成"></el-step>
    </el-steps>

    <mooc-step :active="active" process-status="error">
      <mooc-step-item title="未开始" description="已完成已完成已完成已完成"></mooc-step-item>
      <mooc-step-item title="进行中" description="进行中进行中进行中进行中"></mooc-step-item>
      <mooc-step-item title="已完成" description="已完成已完成已完成已完成"></mooc-step-item>
    </mooc-step>

    <el-button @click="handleStepClick">
      下一步
    </el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      timeline: []
    }
  },
  created () {
    this.timeline = [
      { timestamp: '2015-09-01', status: 'primary', content: '成立' },
      { timestamp: '2016-09-01', status: 'primary', content: '高速发展' },
      { timestamp: '2018-09-01', status: 'primary', content: '上市' },
      { timestamp: '2019-09-13', status: 'primary', content: '至今' }
    ]
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
      width: 500px;
    .content
      width: 400px;
      height: 100px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      padding: 20px;
      box-sizing: border-box;
    .dot
      position: relative;
      left: -6px;
      width: 24px;
      height: 24px;
      background-color: #f60;
      border-radius: 50%;
      text-align: center;
      line-height: 24px;
      color: #fff;
</style>