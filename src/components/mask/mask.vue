<template>
  <div class="mask-container" @click="handleMaskClick"></div>
</template>
<script>
export default {
  methods: {
    // 派发出去的点击事件
    handleMaskClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mask-container
    z-index: 1000;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
</style>
