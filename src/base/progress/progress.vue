<template>
  <div class="mooc-progress">
    <!-- bar -->
    <div
      ref="ProgressBar"
      class="mooc-progress-bar"
      :class="{
        'mooc-progress-bar-notext': !showText,
        'mooc-progress-bar-inside-text': inside
      }"
    >
      <div
        class="mooc-progress-bar-outer"
        :style="{
          height: `${height}px`
        }"
      >
        <div class="mooc-progress-bar-innter" :style="innerBarStyle">
          <div v-if="showText && inside" class="mooc-progress-bar-inner-text">
            {{ text }}
          </div>
        </div>
      </div>
    </div>

    <!-- text -->
    <div
      v-if="showText && !inside"
      ref="ProgressText"
      class="mooc-progress-text"
      :style="{
        'font-size': `${progressFontSize}px`
      }"
    >
      {{ text }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'MoocProgress',
  props: {
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator (val) {
        return val >= 0 && val <= 100
      }
    },
    color: String,
    height: {
      type: Number,
      default: 6
    },
    showText: {
      type: Boolean,
      default: true
    },
    inside: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.progressBarDistrance()
  },
  computed: {
    innerBarStyle () {
      return {
        'width': `${this.innerPercentage}%`,
        'background-color': this.color
      }
    },
    innerPercentage () {
      return Math.max(0, Math.min(this.percentage, 100))
    },
    progressFontSize () {
      return 12 + this.height * 0.4
    },
    listenObj () {
      return {
        percentage: this.percentage,
        height: this.height
      }
    },
    text () {
      return `${this.innerPercentage}%`
    }
  },
  methods: {
    progressBarDistrance () {
      // 当不显示进度内容 或者进度内容内显时不计算
      if (!this.showText || this.inside) {
        return
      }
      const baseDistance = 50
      const textMarginLeft = 10
      let textWidth = this.$refs.ProgressText.clientWidth
      let progressBar = this.$refs.ProgressBar
      let margin, padding = baseDistance
      if (textWidth + textMarginLeft > baseDistance) {
        margin = textWidth + textMarginLeft + 1
        padding = textWidth + textMarginLeft
      }
      progressBar.style.marginRight = `${-margin}px`
      progressBar.style.paddingRight = `${padding}px`
    }
  },
  watch: {
    listenObj () {
      this.$nextTick(() => {
        this.progressBarDistrance()
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/progress-variables.styl';
  @import '~assets/theme/common/utils.styl';
  .mooc-progress
    position: relative;
    .mooc-progress-bar, .mooc-progress-text
      display: inline-block;
      vertical-align: middle;
    .mooc-progress-bar
      margin-right: $progress-bar-margin-right;
      padding-right: $progress-bar-padding-right;
      width: 100%;
      box-sizing: border-box;
      .mooc-progress-bar-outer
        position: relative;
        width: 100%;
        height: $progress-bar-default-height;
        border-radius: $progress-bar-border-radius;
        background-color: $base-border-three-color;
        overflow: hidden;
      .mooc-progress-bar-innter
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        border-radius: $progress-bar-border-radius;
        background-color: $base-primary;
        transition: width $progress-bar-transition-duration ease;
        text-align: right;
        white-space: nowrap;
        line-height: 1;
        utils-vertical-align();
        .mooc-progress-bar-inner-text
          display: inline-block;
          margin: 0 $progress-bar-inner-text-margin;
          vertical-align: middle;
          font-size: $progress-bar-inner-text-font-size;
          color: #fff;
    .mooc-progress-text
      margin-left: $progress-text-margin-left;
      line-height: 1;
      font-size: $base-font-size;
      color: $base-font-second-color;
</style>
