<template>
  <div class="header" :style="getStyle">
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
  .header
    box-sizing: border-box;
</style>