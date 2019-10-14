<template>
  <transition name="msgbox-fade" :duration="500">
    <div class="mooc-message-box-wrapper">
      <div class="mooc-message-box">
        <div class="mooc-message-box-header">
          <div class="mooc-message-box-title">
            <span>{{ title }}</span>
            <button
              type="button"
              class="mooc-message-box-close-btn"
            >
              <i class="mooc-message-box-close-icon iconfont">&#xe619;</i>
            </button>
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
            type="small"
            :round="roundButton"
          >
            {{ cancelButtonText }}
          </mooc-button>
          <mooc-button
            type="small"
            :round="roundButton"
          >
            {{ confirmButtonText }}
          </mooc-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import MoocButton from '../button/button.vue'
export default {
  props: {
    roundButton: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      title: '',
      message: '',
      type: ''
    }
  },
  components: {
    MoocButton
  }
}
</script>
<style lang="stylus" scoped>
  @import '~base/theme/variables.styl';
  @import '~base/theme/src/messagebox-variables.styl';
  .mooc-message-box-wrapper
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
</style>