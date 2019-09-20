<template>
  <div class="step" :class="`step-${direction}`">
    <slot></slot>
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
    }
  },
  data () {
    return {
      steps: [],
      stepOffset: 0
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