<template>
  <div class="progress">
    <div class="inner" ref="inner"></div>
  </div>
</template>
<script>
export default {
  props: {
    percent: {
      type: [String, Number],
      default: 0
    }
  },
  mounted () {
    this.timer = setTimeout(() => {
      this.setProgressWidth()
    }, 20)
  },
  methods: {
    // 设置进度条的宽度
    setProgressWidth () {
      if (this.percent > 0) {
        let percent = Math.min(this.percent, 100)
        this.$refs.inner.style.width = `${percent}%`
        this.$forceUpdate()
      }
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>
<style lang="stylus" scoped>
  .progress
    display: inline-block;
    width: 100%;
    height: 16px;
    overflow: hidden;
    border-radius: 8px;
    background-color: rgba(28,31,33,.1);
    .inner
      width: 0%;
      height: 100%;
      transition: 1s width ease-in-out;
      border-radius: 8px;
      background-color: #f20d0d;
</style>