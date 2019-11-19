<template>
  <transition name="dialog-fade-in">
    <div
      v-if="visible"
      class="mooc-dialog-wrapper"
      @click.self="hanldeWrapperClick"
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
import Popup from 'assets/js/popup.js'
export default {
  name: 'MoocDialog',
  mixins: [Popup],
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
    },
    modal: {
      type: Boolean,
      default: true
    },
    closeOnModal: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    beforeClose: Function
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
  watch: {
    visible (val) {
      if (val) {
        this.$nextTick(() => {
          this.openModal()
        })
      } else {
        this.closeModal()
        this.$emit('close')
      }
      document.body.style.overflow = val ? 'hidden' : ''
    }
  },
  methods: {
    handleCloseClick () {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hideModal)
      } else {
        this.hideModal()
      }
    },
    hanldeWrapperClick () {
      if (!this.closeOnModal) {
        return
      }
      this.handleCloseClick()
    },
    hideModal () {
      this.$emit('update:visible', false)
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl';
  @import '~assets/theme/common/animation.styl';
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/dialog-variables.styl';
  .mooc-dialog-wrapper
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    &.dialog-fade-in-enter-active
      animation: dialog-fade-in $dialog-animation-duration;
    &.dialog-fade-in-leave-active
      animation: dialog-fade-out $dialog-animation-duration;
    .mooc-dialog
      position: relative;
      margin: 0 auto $dialog-marign-bottom;
      background-color: #fff;
      border-radius: $base-border-radius-small;
      box-shadow: $dialog-box-shadow;
      .mooc-dialog-header
        padding: $dialog-header-padding;
        padding-bottom: $dialog-header-padding-bottom
        .mooc-dialog-title
          line-height: $dialog-title-line-height;
          font-size: $dialog-title-font-size;
          color: $base-font-first-color;
        .mooc-dialog-close
          position: absolute;
          top: $dialog-close-top;
          right: $dialog-close-right;
          font-size: $dialog-close-font-size;
          color: $base-font-three-color;
          cursor: pointer;
          extend-click($dialog-close-extend-size, '');
          &:hover
            color: $base-primary;
      .mooc-dialog-body
        padding: $dialog-body-padding-vertical $dialog-body-padding-horizontal;
        font-size: $dialog-body-font-size;
        color: $base-font-second-color;
        word-break: break-all;
      .mooc-dialog-footer
        padding: $dialog-footer-padding;
        padding-top: $dialog-footer-padding-top;
        text-align: right;
        box-sizing: border-box;
</style>