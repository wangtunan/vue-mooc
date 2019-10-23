<template>
  <div class="test">
    <mooc-button @click="handleDialogClick">
      element弹窗
    </mooc-button>
    <mooc-button @click="moocVisible=true">
      mooc弹窗
    </mooc-button>

    <el-dialog title="弹窗标题" :visible.sync="visible" :modal="true">
      内容内容
      <div slot="footer">
        <mooc-button @click="visible=false">
          取消
        </mooc-button>
        <mooc-button type="primary" @click="visible=false">
          确定
        </mooc-button>
      </div>
    </el-dialog>

    <mooc-dialog title="弹窗标题" :visible.sync="moocVisible" :before-close="handleBeforeClose">
      内容内容

      <div slot="footer">
        <mooc-button @click="moocVisible=false">
          取消
        </mooc-button>
        <mooc-button type="primary" @click="moocVisible=false">
          确定
        </mooc-button>
      </div>
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