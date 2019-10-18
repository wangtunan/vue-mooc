<template>
  <div class="mooc-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MoocButtonGroup'
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/button-variables.styl';
  @import '~assets/stylus/mixin.styl';
  @import '~assets/theme/mixin/button-mixin.styl';
  .mooc-button-group
    display: inline-block;
    vertical-align: middle;
    clearfix();
    button-group-type($button-group-border-color);
    & > .mooc-button
      float: left;
      position: relative;
      & + .mooc-button
        margin-left: 0;
      &:first-child
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      &:last-child
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      &:first-child:last-child
        border-radius: $base-border-radius-base;
        &.is-round
          border-radius: $button-round-default-radius;
        &.is-circle
          border-radius: $base-border-radius-circle;
      &:not(:first-child):not(:last-child)
        border-radius: 0;
      &:not(:last-child)
        margin-right: $button-group-margin-right;
      &:hover, &:focus, &:active
        z-index: $button-group-zIndex;
</style>