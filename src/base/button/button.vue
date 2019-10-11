<template>
  <button
    class="mooc-button"
    :disabled="disabled"
    :class="[
      `mooc-button-${type ? type : 'default'}`,
      `mooc-button-size-${size ? size : 'default'}`,
      round && 'is-round',
      circle && 'is-circle',
      disabled && 'is-disabled'
    ]"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'MoocButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (val) {
        return ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'default',
      validator (val) {
        return ['default', 'medium', 'small', 'mini'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~base/theme/variables.styl';
  @import '~base/theme/src/button-variables.styl';
  @import '~base/theme/mixin/button-mixin.styl';
  .mooc-button
    display: inline-block;
    margin: 0;
    padding: 12px 20px;
    line-height: 1;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    border-radius: 4px;
    transition: 0.1s;
    -webkit-appearance: none;
    outline: none;
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
    & + &
     margin-left: 10px;
    &.mooc-button-default
      button-type($base-font-second-color, $base-border-first-color, #fff, $base-primary, $button-default-hover-border-color, $button-default-hover-background-color);
      button-disabled($base-font-four-color, $button-default-disabled-border-color, $button-default-disabled-background-color);
    &.mooc-button-primary
      button-type(#fff, $base-primary, $base-primary, #fff, $button-primary-hover-border-color, $button-primary-hover-background-color);
      button-disabled(#fff, $button-primary-disabled-border-color, $button-primary-disabled-background-color);
    &.mooc-button-success
      button-type(#fff, $base-success, $base-success, #fff, $button-success-hover-border-color, $button-success-hover-background-color);
      button-disabled(#fff, $button-success-disabled-border-color, $button-success-disabled-background-color);
    &.mooc-button-warning
      button-type(#fff, $base-warning, $base-warning, #fff, $button-warning-hover-border-color, $button-warning-hover-background-color);
      button-disabled(#fff, $button-warning-disabled-border-color, $button-warning-disabled-background-color);
    &.mooc-button-danger
      button-type(#fff, $base-danger, $base-danger, #fff, $button-danger-hover-border-color, $button-danger-hover-background-color);
      button-disabled(#fff, $button-danger-disabled-border-color, $button-danger-disabled-background-color);
    &.mooc-button-info
      button-type(#fff, $base-info, $base-info, #fff, $button-info-hover-border-color, $button-info-hover-background-color);
      button-disabled(#fff, $button-info-disabled-border-color, $button-info-disabled-background-color);
    &.mooc-button-size-default
      button-size($button-size-default-font-size, $button-size-default-vertical-padding, $button-size-default-horizontal-padding, $button-size-default-radius);
      button-round($button-round-default-vertical-padding, $button-round-default-horizontal-padding, $button-round-default-radius);
      button-circle($button-size-default-circle-padding, $base-border-radius-circle);
    &.mooc-button-size-medium
      button-size($button-size-medium-font-size, $button-size-medium-vertical-padding, $button-size-medium-horizontal-padding, $button-size-medium-radius);
      button-round($button-size-medium-vertical-padding, $button-size-medium-horizontal-padding, $button-round-default-radius);
      button-circle($button-size-medium-circle-padding, $base-border-radius-circle);
    &.mooc-button-size-small
      button-size($button-size-small-font-size, $button-size-small-vertical-padding, $button-size-small-horizontal-padding, $button-size-small-radius);
      button-round($button-size-small-vertical-padding, $button-size-small-horizontal-padding, $button-round-default-radius);
      button-circle($button-size-small-circle-padding, $base-border-radius-circle);
    &.mooc-button-size-mini
      button-size($button-size-mini-font-size, $button-size-mini-vertical-padding, $button-size-mini-horizontal-padding, $button-size-mini-radius);
      button-round($button-size-mini-vertical-padding, $button-size-mini-horizontal-padding, $button-round-default-radius);
      button-circle($button-size-mini-circle-padding, $base-border-radius-circle);
</style>