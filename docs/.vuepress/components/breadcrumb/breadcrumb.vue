<template>
  <div class="breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MoocBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorIcon: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      MoocBreadcrumb: this
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../stylus/src/breadcrumb-variables.styl'
  .breadcrumb
    font-size: $breadcrumb-font-size;
    line-height: 1;
</style>