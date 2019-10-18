<template>
  <transition name="msgbox-fade">
    <div
      v-if="visible"
      class="mooc-message-box-wrapper"
    >
      <div class="mooc-message-box">
        <div class="mooc-message-box-header">
          <div class="mooc-message-box-title">
            <span>{{ title }}</span>
            <i
              class="mooc-message-box-close-icon iconfont"
              @click="handleAction"
            >&#xe619;</i>
          </div>
        </div>
        <div class="mooc-message-box-content">
          <div class="mooc-message-box-message">
            <slot>
              <p>{{ message }}</p>
            </slot>
          </div>          
        </div>
        <div class="mooc-message-box-btns">
          <mooc-button
            v-if="showCancelButton"
            size="small"
            :round="roundButton"
            @click.native.stop="handleAction"
          >
            {{ cancelButtonText }}
          </mooc-button>
          <mooc-button
            v-if="showConfirmButton"
            size="small"
            type="primary"
            :round="roundButton"
            @click.native.stop="handleAction"
          >
            {{ confirmButtonText }}
          </mooc-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import MoocButton from 'base/button/button.vue'
export default {
  props: {
    roundButton: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: false,
      title: '',
      message: '',
      type: '',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      showCancelButton: false,
      showConfirmButton: true
    }
  },
  methods: {
    handleAction () {
      this.messageBoxClose()
    },
    messageBoxClose () {
      if (!this.visible) {
        return
      }
      this.visible = false
    }
  },
  components: {
    MoocButton
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/stylus/mixin.styl';
  @import '~assets/theme/src/messagebox-variables.styl';
  .mooc-message-box-wrapper
    z-index: 2000;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    &::after
      content: '';
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
    .mooc-message-box
      display: inline-block;
      padding-bottom: $msgbox-padding-bottom;
      width: $msgbox-width;
      border-radius: $base-border-radius-base;
      background-color: #fff;
      border: 1px solid $base-border-three-color;
      box-shadow: $msgbox-box-shadow;
      vertical-align: middle;
      overflow: hidden;
      text-align: left;
      font-size: $base-large-font-size;
      .mooc-message-box-header
        position: relative;
        padding: $msgbox-header-padding;
        padding-bottom: $msgbox-header-padding-bottom;
        .mooc-message-box-title
          line-height: 1;
          font-size: $msgbox-title-font-size;
          color: $base-font-first-color;
        .mooc-message-box-close-icon
          display: inline-block;
          position: absolute;
          right: $msgbox-close-icon-right;
          top: $msgbox-close-icon-top;
          font-size: $msgbox-close-icon-font-size;
          color: $base-font-three-color;
          cursor: pointer;
          extend-click($msgbox-close-icon-extend-size, '');
          &:hover, &:focus
            color: $base-primary;
      .mooc-message-box-content
        padding: $msgbox-content-vertical-padding $msgbox-content-horizontal-padding;
        font-size: $msgbox-content-font-size;
        color: $base-font-second-color;
        .mooc-message-box-message > p
          line-height: $msgbox-content-message-line-height;
      .mooc-message-box-btns
        padding: $msgbox-btns-vertical-padding $msgbox-btns-horizontal-padding;
        text-align: right;
</style>