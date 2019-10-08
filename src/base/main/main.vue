<template>
  <div class="mooc-main">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MoocMain',
  componentName: 'MoocMain'
}
</script>
<style lang="stylus" scoped>
  .mooc-main
    display: block;
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
</style>