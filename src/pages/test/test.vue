<template>
  <div class="test">
    <el-button-group>
      <el-button size="mini" type="success" icon="el-icon-edit">
        按钮
      </el-button>
    </el-button-group>
    <br />
    <br />
    <mooc-button-group>
      <mooc-button size="mini" type="success" icon="el-icon-edit">
        按钮
      </mooc-button>
    </mooc-button-group>
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
    margin: 100px auto;
    width: 800px;
</style>