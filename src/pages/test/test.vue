<template>
  <div class="test">
    <mooc-progress
      :percentage="percentage"
      color="#f60"
      height="20"
      :show-text="true"
    >
    </mooc-progress>
    <mooc-progress
      :percentage="percentage"
      color="#f60"
      height="20"
      :show-text="true"
      :inside="true"
    >
    </mooc-progress>
    <hr/>
    <el-progress
      :percentage="percentage"
      :show-text="true"
      color="#f60"
      :stroke-width="20"
    ></el-progress>
    <el-progress
      :percentage="percentage"
      :show-text="true"
      color="#f60"
      :text-inside="true"
      :stroke-width="20"
    ></el-progress>

    <el-button @click="handleReduceClick">减少</el-button>
    <el-button @click="handleIncreaseClick">增加</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      percentage: 34
    }
  },
  methods: {
    handleReduceClick () {
      this.percentage -= 10
    },
    handleIncreaseClick () {
      this.percentage += 10
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