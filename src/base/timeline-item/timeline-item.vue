<template>
  <li class="timeline-item">
    <div class="timeline-item-line" />

    <div
      v-if="!$slots.dot"
      class="timeline-item-dot"
      :style="{
        'background-color': color
      }"
      :class="[
        `timeline-item-dot-${size || ''}`,
        `timeline-item-dot-${type || ''}`
      ]"
    />

    <div v-if="$slots.dot" class="timeline-item-dot-customer">
      <slot name="dot" />
    </div> 

    <div class="timeline-item-wrapper">
      <div v-if="!hideTimestamp && placement==='top'" class="timeline-item-timestamp top">
        {{ timestamp }}
      </div>
      
      <div class="timeline-item-content">
        <slot />
      </div>

      <div v-if="!hideTimestamp && placement==='bottom'" class="timeline-item-timestamp bottom">
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>
<script>
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
    size: {
      type: String,
      default: 'small',
      validator (val) {
        return ['small', 'normal', 'medium', 'large'].includes(val)
      }
    },
    type: {
      type: String,
      validator (val) {
        return ['primary', 'success', 'warning', 'danger', 'info'].includes(val)
      } 
    },
    color: String
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/timeline-variables.styl';
  .timeline-item
    position: relative;
    padding-bottom: $timeline-item-padding-bottom;
    &:last-child
      .timeline-item-line
        display: none;
    &-line
      position: absolute;
      left: 4px;
      top: 0;
      height: 100%;
      border-left: 2px solid $timeline-item-dot-color; 
    &-dot
      position: absolute;
      top: 0;
      border-radius: 50%;
      background-color: $timeline-item-dot-color;
      &-small
        left: -1px;
        width: $timeline-item-dot-small-size;
        height: $timeline-item-dot-small-size;
      &-normal
        left: -2px;
        width: $timeline-item-dot-normal-size;
        height: $timeline-item-dot-normal-size;
      &-medium
        left: -3px
        width: $timeline-item-dot-medium-size;
        height: $timeline-item-dot-medium-size;
      &-large
        left: -4px
        width: $timeline-item-dot-large-size;
        height: $timeline-item-dot-large-size;
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
    &-dot-customer
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
    &-wrapper
      position: relative;
      top: 0;
      padding-left: $timeline-item-wrapper-padding-left;
      .timeline-item-content
        line-height: 1;
        color: $timeline-item-title-color;
      .timeline-item-timestamp
        color: $base-info;
        line-height: 1;
        &.top
          margin-bottom: 8px;
        &.bottom
          margin-top: 8px;
</style>