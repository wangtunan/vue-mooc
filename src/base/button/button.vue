<template>
  <button
    class="mooc-button"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      `mooc-button-${type ? type : 'default'}`,
      `mooc-button-size-${size ? size : 'default'}`,
      round && 'is-round',
      circle && 'is-circle',
      disabled && 'is-disabled',
      loading && 'is-loading',
      plain && 'is-plain'
    ]"
    @click="handleBtnClick"
  >
    <i
      class="mooc-button-icon"
      :class="loading ?
        'el-icon-loading' :
        icon ? icon : ''"
    ></i>
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
    icon: {
      type: String,
      default: ''
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
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleBtnClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/button-variables.styl';
  @import '~assets/theme/mixin/button-mixin.styl';
  .mooc-button
    display: inline-block;
    margin: 0;
    line-height: 1;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    transition: $button-transition-duration;
    -webkit-appearance: none;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    .mooc-button-icon
      & + span
        margin-left: $button-icon-slibings-margin-right; 
    & + &
     margin-left: $button-slibings-margin-right;
    &.mooc-button-default
      button-type($base-font-second-color, $base-border-first-color, #fff, $base-primary, $button-default-hover-border-color, $button-default-hover-background-color);
      button-disabled($base-font-four-color, $button-default-disabled-border-color, $button-default-disabled-background-color);
      button-plain('', '', '', $base-primary, $base-primary, #fff);
    &.mooc-button-primary
      button-type(#fff, $base-primary, $base-primary, #fff, $button-primary-hover-border-color, $button-primary-hover-background-color);
      button-disabled(#fff, $button-primary-disabled-border-color, $button-primary-disabled-background-color);
      button-plain($base-primary, $button-primary-plain-border-color, $button-primary-plain-background-color, #fff, $base-primary, $base-primary);
    &.mooc-button-success
      button-type(#fff, $base-success, $base-success, #fff, $button-success-hover-border-color, $button-success-hover-background-color);
      button-disabled(#fff, $button-success-disabled-border-color, $button-success-disabled-background-color);
      button-plain($base-success, $button-success-plain-border-color, $button-success-plain-background-color, #fff, $base-success, $base-success);
    &.mooc-button-warning
      button-type(#fff, $base-warning, $base-warning, #fff, $button-warning-hover-border-color, $button-warning-hover-background-color);
      button-disabled(#fff, $button-warning-disabled-border-color, $button-warning-disabled-background-color);
      button-plain($base-warning, $button-warning-plain-border-color, $button-warning-plain-background-color, #fff, $base-warning, $base-warning);
    &.mooc-button-danger
      button-type(#fff, $base-danger, $base-danger, #fff, $button-danger-hover-border-color, $button-danger-hover-background-color);
      button-disabled(#fff, $button-danger-disabled-border-color, $button-danger-disabled-background-color);
      button-plain($base-danger, $button-danger-plain-border-color, $button-danger-plain-background-color, #fff, $base-danger, $base-danger);
    &.mooc-button-info
      button-type(#fff, $base-info, $base-info, #fff, $button-info-hover-border-color, $button-info-hover-background-color);
      button-disabled(#fff, $button-info-disabled-border-color, $button-info-disabled-background-color);
      button-plain($base-info, $button-info-plain-border-color, $button-info-plain-background-color, #fff, $base-info, $base-info);
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
    &.is-loading
      button-loading($button-loading-background-color);
</style>