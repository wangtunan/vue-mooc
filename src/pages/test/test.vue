<template>
  <div class="test">
    <mooc-divider position="right" :size="4" color="#f60" :right="60">
      包青天，包大人
    </mooc-divider>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      interval: 3000
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
  .test
    margin: 100px auto;
    width: 1000px;
    & > div
      margin-bottom: 30px;
    img
      display: inline-block;
      width: 100%;
      height: 316px;
</style>