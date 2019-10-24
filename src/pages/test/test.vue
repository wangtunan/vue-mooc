<template>
  <div class="test">
    <el-rate :value="4"></el-rate>

    <mooc-star :value="4"></mooc-star>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      moocVisible: false
    }
  },
  methods: {
    handleDialogClick () {
      this.visible = true
    },
    handleBeforeClose (done) {
      console.log('before')
      done()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .test
    margin: 100px auto;
    width: 1000px;
</style>