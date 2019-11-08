<template>
  <div class="test">
    <mooc-badge :value="100" :max="99" type="primary">
      <mooc-button>消息</mooc-button>
    </mooc-badge>

    <mooc-badge :value="100" :max="99" type="primary">
      <div class="moocc-button">
        消息
      </div>
    </mooc-badge>
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
    .moocc-button {
      width: 60px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      border: 1px solid #58a;
      color: #58a;
      border-radius: 4px;
    }
</style>