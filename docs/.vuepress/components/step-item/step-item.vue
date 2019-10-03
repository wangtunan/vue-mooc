<template>
  <div
    class="step-item" 
    :class="[
      `is-${$parent.direction}`,
      isLast && !isCenter && !parentSpace && 'is-last',
      isCenter && !isVertical && 'is-center'
    ]"
    :style="getStepStyle"
  >
    <!-- icon & line -->
    <div
      class="step-item-head"
      :class="currentStatus && `is-${currentStatus}`"
    >
      <div class="step-item-line">
        <i class="step-item-line-inner" :style="lineStyle"></i>
      </div>
      <div
        class="step-item-icon"
        :class="`is-${(icon || $slots.icon) ? 'icon' : 'text'}`"
      >
        <div class="step-item-icon-inner">
          <slot 
            v-if="currentStatus !=='success' && currentStatus !=='error'"
            name="icon"
          >
            <i v-if="icon" :class="['customize-inner-icon', icon]"></i>
            <template v-else>
              {{ index + 1 }}
            </template>
          </slot>
          <i v-else-if="currentStatus=='success'" class="iconfont">&#xe786;</i>
          <i v-else-if="currentStatus=='error'" class="iconfont">&#xe619;</i>
        </div>
      </div>
    </div>

    <!-- title & description -->
    <div class="step-item-main">
      <div
        class="step-item-title"
        :class="[
          `is-${currentStatus}`  
        ]"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div
        v-if="description || $slots.description"
        class="step-item-description"
        :class="[
          `is-${currentStatus}`  
        ]"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MoocStepItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    status: {
     type: String 
    },
    description: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      index: -1,
      lineStyle: {},
      internalStatus: ''
    }
  },
  beforeCreate () {
    this.$parent.steps.push(this)
  },
  mounted () {
    let unwatch = this.$watch('index', () => {
      this.$watch('$parent.active', this.updateStatus, { immediate: true })
      this.$watch('$parent.processStatus', () => {
        let activeIndex = this.$parent.active
        this.updateStatus(activeIndex)
      }, { immediate: true })
      unwatch()
    })
  },
  methods: {
    updateStatus (val) {
      let prevChild = this.$parent.$children[this.index - 1]
      if (val > this.index) {
        this.internalStatus = this.$parent.finishStatus
      } else if (val === this.index && this.prevStatus !== 'error') {
        this.internalStatus = this.$parent.processStatus
      } else {
        this.internalStatus = ''
      }
      if (prevChild) {
        prevChild.setLineStyle(this.internalStatus)
      }
    },
    setLineStyle (status) {
      let style = {}
      let step = 100
      if (status === this.$parent.processStatus || status === '') {
        step = 0
      }
      style.borderWidth = step ? '1px' : '0'
      if (this.isVertical) {
        style.height = step + '%'
      } else {
        style.width = step + '%'
      }
      this.lineStyle = style
    }
  },
  computed: {
    stepCount () {
      return this.$parent.steps.length
    },
    isLast () {
      return this.$parent.steps[this.stepCount - 1] === this
    },
    isVertical () {
      return this.$parent.direction === 'vertical'
    },
    isCenter () {
      return this.$parent.alignCenter
    },
    prevStatus () {
      const prevStep = this.$parent.steps[this.index - 1]
      return prevStep ? prevStep.currentStatus : ''
    },
    parentSpace () {
      return this.$parent.space
    },
    getStepStyle () {
      let style = {}
      // 如果传递了space，则使用，否则自适应
      if (this.parentSpace) {
        style.flexBasis = `${this.parentSpace}px`
      } else {
        style.flexBasis = this.isCenter ? `${ 100 / this.stepCount }%` : `${ 100 / (this.stepCount - 1 ) }%`
      }
      if (this.isLast) {
        style.maxWidth = `${ 100 / this.stepCount }%`
      }
      return style
    },
    currentStatus () {
      return this.status || this.internalStatus
    }
  },
  beforeDestroy () {
    let steps = this.$parent.steps
    let findIndex = steps.findIndex(item => item === this)
    if (findIndex !== -1) {
      steps.splice(findIndex, 1)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../stylus/variables.styl'
  @import '../../stylus//src/step-variables.styl'
  .step-item
    position: relative;
    flex-shrink: 1;
    .step-item-head
      position: relative;
      width: 100%;
      border-color: $base-font-four-color;
      color: $base-font-four-color;
      .step-item-line
        position: absolute;
        border-color: inherit;
        background-color: $base-font-four-color;
        .step-item-line-inner
          display: block;
          width: 0;
          height: 0;
          border-width: 1px;
          border-style: solid;
          border-color: inherit;
          box-sizing: border-box;
      .step-item-icon
        z-index: 1;
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: $step-text-icon-width;
        height: $step-text-icon-width;
        background-color: #fff;
        box-sizing: border-box;
        font-size: $step-text-font-size;
        &.is-text
          border: 2px solid;
          border-color: inherit;
          border-radius: 50%;
        &.is-icon
          width: $step-customize-icon-width;
        .step-item-icon-inner
          display: inline-block;
          text-align: center;
          user-select: none;
          line-height: 1;
          font-weight: 700;
          color: inherit;
          .customize-inner-icon
            font-size: $step-customize-inner-icon-font-size;
            color: inherit;
      &.is-process
        border-color: $base-font-first-color;
        color: $base-font-first-color;
      &.is-success
        border-color: $base-success;
        color: $base-success;
      &.is-finish
        border-color: $base-primary;
        color: $base-primary;
      &.is-error
        border-color: $base-danger;
        color: $base-danger;
    .step-item-main
      text-align: left;
      white-space: normal;
      .step-item-title
        line-height: $step-title-line-height;
        font-size: $step-title-font-size;
        color: $base-font-four-color;
        &.is-process
          font-weight: 700;
          color: $base-font-first-color;
        &.is-success
          color: $base-success;
        &.is-finish
          color: $base-primary;
        &.is-error
          color: $base-danger;
      .step-item-description
        margin-top: -5px;
        font-size: $step-desc-font-size;
        line-height: $step-desc-line-height;
        font-weight: normal;
        color: $base-font-four-color;
        &.is-process
          color: $base-font-first-color;
        &.is-success
          color: $base-success;
        &.is-finish
          color: $base-primary;
        &.is-error
          color: $base-danger;
    &.is-horizontal
      display: inline-block;
      .step-item-head
        .step-item-line
          left: 0;
          right: 0;
          top: 11px;
          height: $step-line-size;
      .step-item-main
        .step-item-description
          padding-right: $step-desc-horizontal-padding-right;
    &.is-vertical
      display: flex;
      .step-item-head
        flex: 0 0 $step-icon-vertical-width;
        width: $step-icon-vertical-width;
        .step-item-line
          left: 11px;
          top: 0;
          bottom: 0;
          width: $step-line-size;
        .step-item-icon
          width: $step-icon-vertical-width;
      .step-item-main
        flex: 1;
        padding-left: $step-main-vertical-padding-left;
        .step-item-title
          padding-bottom: $step-title-vertical-padding-bottom;
          line-height: $step-icon-vertical-width;
    &.is-center
      .step-item-head
        text-align: center;
        .step-item-line
          left: 50%;
          right: -50%;
      .step-item-main
        text-align: center;
        .step-item-description
          padding-left: 20%;
          padding-right: 20%;
    &:last-child
      .step-item-head
        .step-item-line
          display: none;
      &.is-last
        flex-basis: auto!important;
        flex-shrink: 0;
        flex-grow: 0;
        .step-item-main
          .step-item-description
            padding-right: 0;
</style>