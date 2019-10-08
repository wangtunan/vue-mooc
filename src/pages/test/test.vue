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
      this.$moocMessage({
        message: '登陆成功',
        type: 'success',
        duration: 300000,
        showClose: true,
        customClass: 'custom-class'
      })
      // this.$moocMessage.success('成功')
      // this.$moocMessage.warning('警告')
      // this.$moocMessage.error('错误')
      // this.$moocMessage.info('消息')
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