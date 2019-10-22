<template>
  <transition name="dialog-fade">
    <div
      v-if="visible"
      class="mooc-dialog-wrapper"
    >
      <div
        class="mooc-dialog"
        :style="dialogStyle"
      >
        <div class="mooc-dialog-header">
          <slot name="title">
            <span v-if="title" class="mooc-dialog-title">
              {{ title }}
            </span>
          </slot>
          <i
            v-if="showClose"
            class="mooc-dialog-close iconfont"
            @click="handleCloseClick"
          >&#xe619;</i>
        </div>
        <div class="mooc-dialog-body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="mooc-dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MoocDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: '15vh'
    },
    width: {
      type: String,
      default: '50%'
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    dialogStyle () {
      let style = {
        'margin-top': this.top,
        'width': this.width
      }
      return style
    }
  },
  methods: {
    handleCloseClick () {
      this.$emit('update:visible', false)
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl';
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/dialog-variables.styl';
  .mooc-dialog-wrapper
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .mooc-dialog
      position: relative;
      margin: 0 auto $dialog-marign-bottom;
      background-color: #fff;
      border-radius: $base-border-radius-small;
      box-shadow: $dialog-box-shadow;
      .mooc-dialog-header
        padding: $dialog-header-padding;
        padding-bottom: $dialog-header-padding-bottom;
        .mooc-dialog-close
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 16px;
          color: $base-font-three-color;
          cursor: pointer;
          extend-click(-10px, '');
          &:hover
            color: $base-primary;
</style>