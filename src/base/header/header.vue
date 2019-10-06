<template>
  <div class="header" :style="{ height }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MoocHeader',
  componentName: 'MoocHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    flex-shrink: 0;
    box-sizing: border-box;
</style>