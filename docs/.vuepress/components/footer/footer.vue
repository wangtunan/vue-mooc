<template>
  <div class="mooc-footer" :style="getStyle">
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
  },
  computed: {
    getStyle () {
      return {
        'height': this.height,
        'flex': `0 0 ${this.height}`
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .mooc-footer
    box-sizing: border-box;
</style>