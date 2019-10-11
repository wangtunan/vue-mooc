<template>
  <div class="test">
    <el-button type="success" :disabled="true">
      按钮
    </el-button>
    <br />
    <mooc-button type="success" :disabled="true">
      按钮
    </mooc-button>
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
</style>