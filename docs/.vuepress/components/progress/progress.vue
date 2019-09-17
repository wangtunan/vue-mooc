<template>
  <div class="progress">
    <div
      class="progress-bar"
      :class="{
        'progress-bar-no-text': !showText,
        'progress-bar-inside-text': inside
      }"
    >
      <div class="progress-bar-outer" :style="{ height: `${height}px` }">
        <div class="progress-bar-inner" :style="innerBarStyle">
          <div class="progress-bar-inner-text" v-if="inside && showText">{{text}}</div>
        </div>
      </div>
    </div>
    <div class="progress-text" v-if="!inside && showText">{{text}}</div>
  </div>
</template>
<script>
export default {
  name: 'MoocProgress',
  props: {
    percentage: {
      type: Number,
      default: 0,
      validator (val) {
        return val >= 0 && val <= 100
      }
    },
    color: {
      type: String,
      default: ''
    },
    height: {
      type: [Number, String],
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
  computed: {
    innerBarStyle () {
      return {
        'width': `${this._percentage}%`,
        'background-color': this.color
      }
    },
    text () {
      return `${this._percentage}%`
    },
    _percentage () {
      return Math.max(0, Math.min(this.percentage, 100))
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';
  @import '../../stylus/src/progress-variables.styl';

  .progress
    position: relative;
    line-height: 1;
    & > div
      display: inline-block;
      vertical-align: middle;
    .progress-bar
      width: 100%;
      margin-right: - $progress-bar-right;
      padding-right: $progress-bar-right;
      box-sizing: border-box;
      &.progress-bar-no-text, &.progress-bar-inside-text
        margin-right: 0;
        padding-right: 0;
      .progress-bar-outer
        position: relative;
        width: 100%;
        height: $progress-bar-height;
        border-radius: $progress-bar-radius;
        background-color: $base-border-three-color;
        overflow: hidden;
        .progress-bar-inner
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background-color: $base-primary;
          white-space: nowrap;
          text-align: right;
          line-height: 1;
          border-radius: $progress-bar-radius;
          transition: width $progress-bar-duration ease;
          &::after
            content: '';
            display: inline-block;
            vertical-align: middle;
            height: 100%;
          .progress-bar-inner-text
            display: inline-block;
            vertical-align: middle;
            margin: 0 5px;
            color: #fff;
            font-size: $progress-bar-inner-text-size;
    .progress-text
      margin-left: $progress-text-left;
      line-height: 1;
      font-size: $base-font-size;
      color: $base-font-second-color;
</style>