<template>
  <div class="test">
    <el-steps :active="active" finish-status="process">
      <el-step title="未开始"></el-step>
      <el-step title="开始"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="完结"></el-step>
    </el-steps>

    <mooc-step :active="active" finish-status="process">
      <mooc-step-item title="未开始"></mooc-step-item>
      <mooc-step-item title="开始"></mooc-step-item>
      <mooc-step-item title="进行中"></mooc-step-item>
      <mooc-step-item title="完结"></mooc-step-item>
    </mooc-step>

    <mooc-button @click="active++">
      下一步
    </mooc-button>
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