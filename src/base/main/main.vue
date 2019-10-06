<template>
  <div class="main">
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
  .main
    display: block;
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
</style>