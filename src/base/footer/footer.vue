<template>
  <div class="footer" :style="{ height }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MoocFooter',
  componentName: 'MoocFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .footer
    flex-shrink: 0;
    box-sizing: border-box;
</style>