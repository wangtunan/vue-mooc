<template>
  <div class="lesson-detail-header" :style="getStyle">
    <div class="m-center">
      <p class="bread-crumb">
        实战 \ {{ base.title }}
      </p>
      <p class="title">
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
  },
  computed: {
    getStyle () {
      return {
        'background': `url(${this.base.banner}) no-repeat center center`,
        'background-size': 'cover'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .lesson-detail-header
    height: 250px;
    .bread-crumb
      padding-top: 16px;
      line-height: 24px;
      font-size: 12px;
      color: rgba(255,255,255,0.8);
    .title
      padding-top: 50px;
      font-size: 40px;
      line-height: 36px;
      color: #fff;
      text-shadow: 0 2px 4px rgba(28,31,33,.6);
</style>