<template>
  <div
    class="step-item" 
    :class="[`
      is-${$parent-direction}`
    ]">
    <!-- icon & line -->
    <div class="step-item-head">
      <div class="step-item-line">
        <i class="step-item-line-inner"></i>
      </div>
      <div class="step-item-icon">
        <i class="step-item-icon-inner"></i>
      </div>
    </div>

    <!-- title & description -->
    <div class="step-item-main">
      <div class="step-item-title">
        <slot name="title"></slot>
      </div>
      <div class="step-item-description">
        <slot name="description"></slot>
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
      type: String
    },
    status: {
     type: String 
    },
    description: {
      type: String
    }
  }
}
</script>
<style lang="stylus" scoped>
  .step-item
    position: relative;
    flex-shrink: 1;
    &.is-horizontal
      display: inline-block;
</style>