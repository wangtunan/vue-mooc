<template>
  <div class="mooc-timeline-item">
    <!-- line -->
    <div class="mooc-timeline-item-line"></div>

    <!-- dot -->
    <div
      v-if="!$slots.dot"
      class="mooc-timeline-item-dot"
      :style="{
        'background-color': color
      }"
      :class="[
        type && `mooc-timeline-item-dot-${type}`,
        size && `mooc-timeline-item-dot-${size}`
      ]"
    ></div>
    <div v-else class="mooc-timeline-item-dot-customer">
      <slot name="dot"></slot>
    </div>

    <!-- content -->
    <div class="mooc-timeline-item-wrapper">
      <div
        v-if="!hideTimestamp && placement == 'top'"
        class="mooc-timeline-item-timestamp is-top"
      >
        {{ timestamp }}
      </div>
      <div class="mooc-timeline-item-content">
        <slot></slot>
      </div>
      <div
        v-if="!hideTimestamp && placement == 'bottom'"
        class="mooc-timeline-item-timestamp is-bottom"
      >
        {{ timestamp }}
      </div>
    </div>
  </div>
</template>

<script>
import { baseType } from 'assets/js/mooc.config.js'
export default {
  name: 'MoocTimelineItem',
  props: {
    timestamp: String,
    hideTimestamp: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom',
      validator (val) {
        return ['top', 'bottom'].includes(val)
      }
    },
    color: String,
    type: {
      type: String,
      validator (val) {
        return baseType.includes(val)
      }
    },
    size: {
      type: String,
      default: 'small',
      validator (val) {
        return ['small', 'normal', 'medium', 'large'].includes(val)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/timeline-variables.styl';
  @import '~assets/theme/mixin/timeline-mixin.styl';
  .mooc-timeline-item
    position: relative;
    padding-bottom: $timeline-item-padding-bottom;
    &:last-child
      .mooc-timeline-item-line
        display: none;
    .mooc-timeline-item-line
      position: absolute;
      left: $timeline-item-line-left;
      top: 0;
      height: 100%;
      border-left: $timeline-item-border-left-size $timeline-item-border-left-style $base-border-second-color;
    .mooc-timeline-item-dot
      position: absolute;
      top: 0;
      border-radius: $base-border-radius-circle;
      background-color: $base-border-second-color;
      timeline-status($timeline-item-small-left, $timeline-item-small-size, $timeline-item-status-args);
      timeline-type($timeline-item-type-args, $base-primary $base-success $base-warning $base-danger $base-info);
      &-customer
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    .mooc-timeline-item-wrapper
      position: relative;
      top: 0;
      padding-left: $timeline-item-wrapper-padding-left;
      .mooc-timeline-item-content
        line-height: $timeline-item-content-line-height;
        color: $base-font-first-color;
      .mooc-timeline-item-timestamp
        color: $base-info
        line-height: $timeline-item-content-line-height;
        &.is-top
          margin-bottom: $timeline-item-timestamp-margin;
        &.is-bottom
          margin-top: $timeline-item-timestamp-margin;
</style>
