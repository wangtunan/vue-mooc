<template>
  <div class="badge">
    <slot></slot>
    <span
      class="badge-content"
      v-text="content"
      v-if="isShow"
      :class="[
        'badge-content-'+ type,
        {
          'is-absolute': $slots.default,
          'is-dot': isDot
        }
      ]"
    ></span>
  </div>
</template>
<script>
export default {
  name: 'Badge',
  props: {
    value: {
      type: [String, Number]
    },
    max: {
      type: Number
    },
    isDot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'danger',
      validator (val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].includes(val)
      }
    }
  },
  computed: {
    // badge显示的内容
    content () {
      if (this.isDot) {
        return ''
      }
      let value = +this.value
      if (Number.isNaN(value)) {
        return this.value
      }
      return value > this.max ? `${this.max}+` : value
    },
    // 是否显示badge内容
    isShow () {
      return !this.hidden && (this.content || +this.content === 0 || this.isDot)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';
  @import '../../stylus/src/badge-variables.styl';
  .badge
    position: relative;
    display: inline-block;
    vertical-align: middle;
    .badge-content
      display: inline-block;
      padding: 0 $badge-padding;
      height: $badge-size;
      line-height: $badge-size;
      border-radius: $badge-radius;
      background-color: $base-danger;
      border: 1px solid $badge-color;
      color: $badge-color;
      font-size: $badge-font-size;
      &-primary
        background-color: $base-primary;
      &-success
        background-color: $base-success;
      &-warning
        background-color: $base-warning;
      &-danger
        background-color: $base-danger;
      &-info
        background-color: $base-info;
      &.is-absolute
        position: absolute;
        top: 0;
        right: unit($badge-size / 2 + 1, 'px');
        transform: translate(100%, -50%);
        &.is-dot
          right: 5px;
      &.is-dot
        right: 0;
        top: 0;
        padding: 0;
        width: $badge-dot-size;
        height: @width;
        border-radius: 50%;
</style>