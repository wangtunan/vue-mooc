<template>
  <div class="test">
    <el-steps :active="active" direction="horizontal" :space="100">
      <el-step title="已完成" description="已完成已完成已完成已完成" icon="el-icon-edit"></el-step>
      <el-step title="进行中" description="进行中进行中进行中进行中" icon="el-icon-edit"></el-step>
      <el-step title="已完成" description="已完成已完成已完成已完成" icon="el-icon-edit"></el-step>
    </el-steps>
    
    <mooc-step :active="active" direction="horizontal" :space="100">
      <mooc-step-item title="未开始" description="已完成已完成已完成已完成" icon="el-icon-edit"></mooc-step-item>
      <mooc-step-item title="进行中" description="进行中进行中进行中进行中" icon="el-icon-edit"></mooc-step-item>
      <mooc-step-item title="已完成" description="已完成已完成已完成已完成" icon="el-icon-edit"></mooc-step-item>
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