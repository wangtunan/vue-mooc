<template>
  <div class="test">
    <el-button size="small" @click="handleMessageClick">
      消息
    </el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    handleMessageClick () {
      this.$message({
        message: '登陆成功',
        type: 'error'
      })
      // this.$moocMessage({
      //   message: '登陆成功',
      //   type: 'error'
      // })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .test
    margin-left: 50px;
    margin-top: 50px;
    min-height: 800px;
    & > div
      margin: 20px 0;
      width: 1000px;
</style>