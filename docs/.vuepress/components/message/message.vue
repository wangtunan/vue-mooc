<template>
  <transition name="message-fade" :duration="500" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="mooc-message"
      :style="getStyle"
      :class="[
        type && !iconClass && `mooc-message-${type}`,
        center && `is-center`,
        customClass 
      ]"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <i v-if="iconClass" class="mooc-message-icon" :class="iconClass"></i>
      <i v-else class="mooc-message-icon" :class="typeClass"></i>
      <slot>
        <p class="mooc-message-content">
          {{ message }}
        </p>
      </slot>
      <i v-if="showClose" class="mooc-message-close iconfont" @click="close">&#xe619;</i>
    </div>
  </transition>
</template>
<script>
const typeMap = {
  success: 'iconfont-success',
  warning: 'iconfont-warning',
  error: 'iconfont-error',
  info: 'iconfont-info'
}
export default {
  data () {
    return {
      visible: false,
      type: 'info',
      verticalOffset: 20,
      message: '',
      closed: false,
      onClose: null,
      duration: 3000,
      showClose: false,
      customClass: '',
      iconClass: '',
      center: false
    }
  },
  mounted () {
    this.startTimer()
    document.addEventListener('keydown', this.keyDown)
  },
  methods: {
    handleAfterLeave () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    startTimer () {
      let duration = this.duration > 0 ? this.duration : 0
      this.timer = setTimeout(() => {
        !this.closed && this.close()
      }, duration)
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    keyDown (e) {
      if (e.keyCode === 27) {
        if (!this.closed) {
          this.close()
        }
      }
    }
  },
  computed: {
    getStyle () {
      return {
        top: `${this.verticalOffset}px`
      }
    },
    typeClass () {
      return this.type ? `iconfont ${typeMap[this.type]}` : ''
    } 
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
    this.timer = null
    document.removeEventListener('keydown', this.keyDown)
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';
  @import '../../stylus/src/message-variables.styl';
  .mooc-message
    position: fixed;
    left: 50%;
    top: $message-top;
    padding: $message-padding;
    display: flex;
    align-items: center;
    transform: translateX(-50%);
    min-width: $message-min-width;
    border: $message-border-width solid $base-border-three-color;
    border-radius: $base-border-radius-base;
    background-color: $message-background-color;
    box-sizing: border-box;
    transition: opacity $message-opacity-transition-duration,
                top $message-top-transition-duration,
                transform $message-transform-transition-duration;
    overflow: hidden;
    &.message-fade-enter, &.message-fade-leave-active
      opacity: 0;
      transform: translate(-50%, -100%);
    .mooc-message-icon
      margin-right: $message-icon-margin-right;
    .mooc-message-content
      font-size: $message-content-font-size;
      line-height: 1;
    .mooc-message-close
      position: absolute;
      top: 50%;
      right: $message-close-icon-right ;
      transform: translateY(-50%);
      color: $base-font-four-color;
      font-size: $message-close-icon-font-size;
      cursor: pointer;
      &:hover
        color: $base-font-three-color;
    &.is-center
      justify-content: center;
    &.mooc-message-info
      background-color: $message-background-color;
      border-color: $base-border-three-color;
      .mooc-message-content, .mooc-message-icon
        color: $base-info;
    &.mooc-message-success
      background-color: $message-success-background-color;
      border-color: $message-success-border-color;
      .mooc-message-content, .mooc-message-icon
        color: $base-success;
    &.mooc-message-warning
      background-color: $message-warning-background-color;
      border-color: $message-warning-border-color;
      .mooc-message-content, .mooc-message-icon
        color: $base-warning;
    &.mooc-message-error
      background-color: $message-error-background-color;
      border-color: $message-error-border-color;
      .mooc-message-content, .mooc-message-icon
        color: $base-danger;
</style>