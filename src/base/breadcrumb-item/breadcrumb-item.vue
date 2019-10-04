<template>
  <div class="breadcrumb-item">
    <span class="breadcrumb-item-content" :class="to ? 'is-link' : ''">
      <slot></slot>
    </span>
    <span class="breadcrumb-item-separator">{{ separator }}</span>
  </div>
</template>
<script>
export default {
  name: 'MoocBreadcrumbItem',
  props: {
    to: {
      type: [Object, String],
      default () {
        return {}
      }
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  inject: ['MoocBreadcrumb'],
  data () {
    return {
      separator: ''
    }
  },
  mounted () {
    this.separator = this.MoocBreadcrumb.separator
  }
}
</script>
<style lang="stylus" scoped>
  @import '~base/theme/variables.styl';
  .breadcrumb-item
    display: inline-block;
    vertical-align: center;
    .breadcrumb-item-content
      color: $base-font-second-color;
      &.is-link, & > a
        font-weight: 700;
        color: $base-primary;
        &:hover
          color: $base-primary;
          cursor: pointer;
    &:last-child
      .breadcrumb-item-content, .breadcrumb-item-content > a
        cursor: text;
        color: $base-font-second-color;
        font-weight: normal;
      .breadcrumb-item-separator
        display: none;
</style>