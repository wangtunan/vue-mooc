<template>
  <div class="test">
    <el-rate :value="4" :max="10"></el-rate>

    <mooc-star v-model="value4" :max="10">
      <i slot="icon" class="iconfont">&#xe668;</i>
    </mooc-star>
  </div>
</template>
<script>
export default {
  data () {
    return {
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