<template>
  <div class="test">
    <el-button size="mini" type="success" icon="el-icon-edit" @click="handleElButtonClick">
      按钮
    </el-button>
    <br />
    <br />
    <mooc-button size="mini" type="success" icon="el-icon-edit">
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
    handleElButtonClick () {
      this.$confirm('Hello', 'hhh', {
        type: 'warning',
        roundButton: true
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .test
    margin: 100px auto;
    width: 800px;
</style>