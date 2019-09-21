<template>
  <div class="lesson-detail-header">
    <div class="m-center">
      <p class="bread-crumb">
        实战 \ {{ base.title }}
      </p>
      <p class="name">
        {{ base.title }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    base: {
      type: Object
    }
  }
}
</script>
<style lang="stylus" scoped>
  .lesson-detail-header
    height: 188px;
    background: linear-gradient(45deg, #142d2d 0, #186da5 100%);
    .bread-crumb
      padding-top: 16px;
      line-height: 24px;
      font-size: 12px;
      color: rgba(255,255,255,0.8);
    .name
      padding-top: 4px;
      font-size: 32px;
      line-height: 36px;
      color: #fff;
</style>