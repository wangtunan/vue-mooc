<template>
  <div
    class="step-item" 
    :class="[
      `is-${$parent.direction}`,
      isLast && 'is-last'
    ]"
    :style="getStepStyle"
  >
    <!-- icon & line -->
    <div
      class="step-item-head"
      :class="[
        `is-${currentStatus}`  
      ]"
    >
      <div class="step-item-line"></div>
      <div class="step-item-icon">
        <div class="step-item-icon-inner">
          <slot 
            v-if="currentStatus !=='success' && currentStatus !=='error'"
            name="icon"
          >
            {{ index + 1 }}
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
        v-if="description"
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
      // let prevChild = this.$parent.$children[this.index - 1]
      if (val > this.index) {
        this.internalStatus = 'success'
      } else if (val === this.index && this.prevStatus !== 'error') {
        this.internalStatus = this.$parent.processStatus
      } else {
        this.internalStatus = ''
      }
    }
  },
  computed: {
    stepCount () {
      return this.$parent.steps.length
    },
    isLast () {
      return this.$parent.steps[this.stepCount - 1] === this
    },
    prevStatus () {
      const prevStep = this.$parent.steps[this.index - 1]
      return prevStep ? prevStep.currentStatus : ''
    },
    getStepStyle () {
      let style = {}
      style.flexBasis = `${ 100 / ( this.stepCount - 1 ) }%`
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
  @import '~base/theme/variables.styl'
  @import '~base/theme/src/step-variables.styl'
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
      .step-item-icon
        z-index: 1;
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: $step-text-icon-width;
        height: $step-text-icon-width;
        border: 2px solid;
        border-color: inherit;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 50%;
        font-size: $step-text-font-size;
        .step-item-icon-inner
          display: inline-block;
          text-align: center;
          user-select: none;
          line-height: 1;
          font-weight: 700;
          color: inherit;
      &.is-process
        border-color: $base-font-first-color;
        color: $base-font-first-color;
      &.is-success
        border-color: $base-success;
        color: $base-success;
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
        &.is-error
          color: $base-danger;
      .step-item-description
        margin-top: -5px;
        padding-right: $step-desc-padding-right;
        font-size: $step-desc-font-size;
        line-height: $step-desc-line-height;
        font-weight: normal;
        color: $base-font-four-color;
        &.is-process
          font-weight: 700;
          color: $base-font-first-color;
        &.is-success
          color: $base-success;
        &.is-error
          color: $base-danger;
    &.is-horizontal
      display: inline-block;
      .step-item-head
        .step-item-line
          position: absolute;
          left: 0;
          right: 0;
          top: 11px;
          height: 2px;
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