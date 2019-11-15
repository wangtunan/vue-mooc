<template>
  <div
    class="mooc-container"
    :class="{'is-vertical': isVertical }"
    :style="getStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MoocContainer',
  componentName: 'MoocContainer',
  props: {
    direction: {
      type: String,
      validator (val) {
        return ['horizontal', 'vertical'].includes(val)
      }
    }
  },
  computed: {
    getStyle () {
      return {
        'min-height': '400px',
      }
    },
    isVertical () {
      if (this.direction === 'horizontal') {
        return false
      }
      if (this.direction === 'vertical') {
        return true
      }
      return this.$slots && this.$slots.default ?
             this.$slots.default.some(vNode => {
               const tag = vNode.componentOptions && vNode.componentOptions.tag
               return tag === 'mooc-header' || tag === 'mooc-footer'
             }) : false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .mooc-container
    display: flex;
    flex-direction: row;
    flex-basis: auto;
    box-sizing: border-box;
    &.is-vertical
      flex-direction: column;
      & > div
        width: 100%;
</style>