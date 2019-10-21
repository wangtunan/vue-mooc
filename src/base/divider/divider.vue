<template>
  <div
    class="mooc-divider"
    :class="`mooc-divider-${direction}`"
    :style="{
      'height': direction === 'horizontal' ? `${size}px` : '',
      'width': direction === 'vertical' ? `${size}px` : '',
      'background-color': color
    }"
  >
    <div
      v-if="$slots.default && direction == 'horizontal'"
      class="mooc-divider-text"
      :class="`is-${position}`"
      :style="{
        'left': position === 'left' ? `${left}px` : '',
        'right': position === 'right' ? `${right}px` : ''
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MoocDivider',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator (val) {
        return ['horizontal', 'vertical'].includes(val)
      }
    },
    position: {
      type: String,
      default: 'center',
      validator (val) {
        return ['left', 'center', 'right'].includes(val)
      }
    },
    left: {
      type: Number,
      default: 20
    },
    right: {
      type: Number,
      default: 20
    },
    size: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: '#DCDFE6'
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/divider-variables.styl';
  .mooc-divider
    position: relative;
    background-color: $base-border-first-color;
    &.mooc-divider-horizontal
      display: block;
      margin: $divider-horizontal-padding 0;
      width: 100%;
    &.mooc-divider-vertical
      display: inline-block;
      vertical-align: middle;
      position: relative;
      margin: 0 $divider-vertical-padding;
      height: $divider-vertical-height;
    .mooc-divider-text
      position: absolute;
      padding: 0 $divider-text-padding;
      background-color: #fff;
      font-size: $divider-font-size;
      &.is-left
        transform: translateY(-50%);
      &.is-right
        transform: translateY(-50%);
      &.is-center
        left: 50%;
        transform: translate(-50%, -50%);
</style>