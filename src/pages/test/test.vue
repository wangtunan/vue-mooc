<template>
  <div class="test">
    <timeline :reverse="true">
      <timeline-item size="small" placement="top" color="#58a" timestamp="2016-09-10">
        <div class="content">创业</div>
        <div class="dot" slot="dot">1</div>
      </timeline-item>
      <timeline-item size="small" placement="top" type="success" timestamp="2017-09-11">
        <div class="content">快速发展</div>
        <div class="dot" slot="dot">2</div>
      </timeline-item>
      <timeline-item size="small" placement="top" type="warning" timestamp="2018-09-10">上市</timeline-item>
      <timeline-item size="small" placement="top" type="danger" timestamp="2019-09-10">至今</timeline-item>
    </timeline>

    
    <el-timeline :reverse="true">
      <el-timeline-item size="normal" placement="top" color="#58a" timestamp="2016-09-10">
        <div class="content">创业</div>
        <div class="dot" slot="dot">1</div>
      </el-timeline-item>
      <el-timeline-item size="normal" placement="top" type="success" timestamp="2017-09-11">
        <div class="content">快速发展</div>
        <div class="dot" slot="dot">2</div>
      </el-timeline-item>
      <el-timeline-item size="normal" placement="top" type="warning" timestamp="2018-09-10">上市</el-timeline-item>
      <el-timeline-item size="normal" placement="top" type="danger" timestamp="2019-09-10">至今</el-timeline-item>
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
    & > ul
      margin: 20px 0;
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