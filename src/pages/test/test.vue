<template>
  <div class="test">
    <el-progress :percentage="percentage" :stroke-width="height"></el-progress>
    <mooc-progress :percentage="percentage" :height="height"></mooc-progress>
    <button @click="handleReduceClick">
      减少
    </button>
    <button @click="handleAddClick">
      增长
    </button>
    <button @click="handleStartClick">
      开始(高{{ height }})
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      height: 6,
      percentage: 50
    }
  },
  methods: {
    handleReduceClick () {
      this.percentage -= 10
    },
    handleAddClick () {
      this.percentage += 10
    },
    handleStartClick () {
      this.timer = setInterval(() => {
        this.height++
        if (this.height >= 50) {
          clearInterval(this.timer)
        }
      }, 50)
    },
    handleStopClick () {
      clearInterval(this.timer)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .test
    margin: 100px auto;
    width: 1000px;
    .mooc-progress
      margin: 50px 0;
</style>