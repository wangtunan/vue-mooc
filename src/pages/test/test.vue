<template>
  <div class="test">
    <!-- <timeline>
      <timeline-item></timeline-item>
    </timeline> -->
    <el-timeline>
      <el-timeline-item type="primary" timestamp="2016-09-10">创业</el-timeline-item>
      <el-timeline-item timestamp="2017-09-11">快速发展</el-timeline-item>
      <el-timeline-item timestamp="2018-09-10">上市</el-timeline-item>
      <el-timeline-item timestamp="2019-09-10">至今</el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {

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
</style>