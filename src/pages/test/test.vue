<template>
  <div class="test">
    <mooc-switch></mooc-switch>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      value4: 4,
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