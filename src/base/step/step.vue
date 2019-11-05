<template>
  <div class="step" :class="`step-${direction}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MoocStep',
  props: {
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (val) {
        return ['vertical', 'horizontal'].includes(val)
      }
    },
    space: {
      type: Number,
      default: 0
    },
    processStatus: {
      type: String,
      default: 'process',
      validator (val) {
        return ['finish', 'process', 'success', 'error'].includes(val)
      }
    },
    finishStatus: {
      type: String,
      default: 'finish',
      validator (val) {
        return ['finish', 'process', 'success', 'error'].includes(val)
      }
    },
    alignCenter: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      steps: []
    }
  },
  watch: {
    active (newVal, oldVal) {
      this.$emit('change', newVal, oldVal)
    },
    steps (steps) {
      steps.forEach((item, index) => {
        item.index = index
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .step
    display: flex;
    &.step-horizontal
      white-space: nowrap;
    &.step-vertical
      height: 100%;
      flex-direction: column;
</style>