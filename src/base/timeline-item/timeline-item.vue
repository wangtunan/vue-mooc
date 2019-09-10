<template>
  <li class="timeline-item">
    <div class="timeline-item-dot"></div>
    <div class="timeline-item-wrapper">
      <div class="timeline-item-content">
        <slot></slot>
      </div>
      <div
        class="timeline-item-timestamp"
        :class="{
          'top': placement === 'top',
          'bottom': placement === 'bottom'
        }"
        >
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'TimelineItem',
  inject: ['timeline'],
  props: {
    timestamp: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'top',
      validator (val) {
        return ['top', 'bottom'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (val) {
        return ['small', 'normal', 'medium', 'large'].includes(val)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '../theme/variables.styl';
  @import '../theme/src/timeline-variables.styl';
  
  .timeline-item
    position: relative;
    padding-bottom: $timeline-item-bottom;
    &-dot
      position: absolute;
      top: 0;
      border-radius: 50%;
      background-color: $base-info;
      display: flex;
      justify-content: center;
      align-items: center;
      &.small
        left: 0;
        width: $timeline-item-dot-small-size;
        height: $timeline-item-dot-small-size;
      &.normal
        left: 0
        width: $timeline-item-dot-normal-size;
        height: $timeline-item-dot-normal-size;
      &.medium
        left: 0
        width: $timeline-item-dot-medium-size;
        height: $timeline-item-dot-medium-size;
      &.large
        left: 0
        width: $timeline-item-dot-large-size;
        height: $timeline-item-dot-large-size;
    &-wrapper
      position: relative;
      top: -3px;
      padding-left: $timeline-item-wrapper-padding-left;
      &.timeline-item-timestamp
        color: $timeline-item-title-color;
        line-height: 1;
</style>