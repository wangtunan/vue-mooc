<template>
  <div class="test">
    <mooc-button @click="handleDialogClick">
      element弹窗
    </mooc-button>
    <mooc-button @click="moocVisible=true">
      mooc弹窗
    </mooc-button>

    <el-dialog :visible.sync="visible">
      内容内容
      <div slot="footer">
        <mooc-button size="small" @click="visible=false">
          取消
        </mooc-button>
        <mooc-button size="small" type="primary" @click="visible=false">
          确定
        </mooc-button>
      </div>
    </el-dialog>

    <mooc-dialog title="弹窗标题" :visible.sync="moocVisible">
      内容内容
      <mooc-button size="small" @click="moocVisible=false">
        取消
      </mooc-button>
      <mooc-button size="small" type="primary" @click="moocVisible=false">
        确定
      </mooc-button>
    </mooc-dialog>
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
    }
  }
}
</script>
<style lang="stylus" scoped>
  .test
    margin: 100px auto;
    width: 1000px;
</style>