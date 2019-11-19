<template>
  <div class="notice-setting">
    <mooc-dialog
      title="消息中心设置"
      :visible.sync="dialogVisible"
      width="45%"
      top="20vh"
    >
      <dl
        v-for="(item,index) in list"
        :key="index"
        class="switch-group"
      >
        <dt class="switch-title-box">
          <mooc-divider position="left" :left="0" color="#d0d6d9">
            {{ item.type }}
          </mooc-divider>
        </dt>
        <dd
          v-for="(subItem, index) in item.data"
          :key="index"
        >
          <mooc-switch v-model="subItem.value" active-color="#f01414" inactive-color="#9199a1" />{{ subItem.label }}
        </dd>
      </dl>
      <div slot="footer">
        <mooc-button @click="dialogVisible=false">
          关闭
        </mooc-button>
        <mooc-button type="primary" @click="dialogVisible=false">
          保存
        </mooc-button>
      </div>
    </mooc-dialog>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .notice-setting
    .mooc-dialog
      .mooc-dialog-body
        padding: 15px 20px;
        .switch-group
          .switch-title-box
            position: relative;
            margin-bottom: 20px;
          dd
            display: inline-block;
            margin-bottom: 20px;
            padding: 0 20px;
            width: 50%;
            box-sizing: border-box;
            .mooc-switch
              margin-right: 15px;
      .mooc-dialog-footer
        .mooc-button-primary
          background-color: $theme-red-color;
          border-color: $theme-red-color;
          color: #fff;
          &:hover
            background-color: $theme-red-color;
            border-color: $theme-red-color;
            color: #fff;
</style>