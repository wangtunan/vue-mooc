<template>
  <transition name="mooc-fade-in" :duration="500">
    <div
      v-if="visible"
      class="mooc-backtop"
      :class="$slots.default ? 'is-custom' : 'is-default'"
      :style="getStyle"
      @click.stop="handleBackTopClick"
    >
      <slot>
        <i class="iconfont iconshang"></i>
      </slot>
    </div>
  </transition>
</template>
<script>
import { throttle } from 'utils/utils.js'
const throttleTime = 300
export default {
  name: 'MoocBacktop',
  props: {
    showHeight: {
      type: Number,
      default: 200
    },
    target: {
      type: String,
      default: ''
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    },
    step: {
      type: Number,
      default: 10
    },
    interval: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      el: null,
      container: null,
      visible: false
    }
  },
  mounted () {
    this.setScrollContainer()
    this.throttleScrollHandler = throttle(this.onScroll, throttleTime)
    document.addEventListener('scroll', this.throttleScrollHandler)
  },
  methods: {
    handleBackTopClick (event) {
      if (!this.timer) {
        this.scrollToTop()
      }
      this.$emit('click', event)
    },
    setScrollContainer () {
      this.container = document
      this.el = document.documentElement
      if (this.target) {
        this.el = document.querySelector(this.target)
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`)
        }
        this.container = this.el
      }
    },
    onScroll () {
      this.visible = this.el.scrollTop > this.showHeight
    },
    scrollToTop () {
      let step = 0
      this.timer = setInterval(() => {
        if (this.el.scrollTop <= 0) {
          clearInterval(this.timer)
          this.timer = null
          return
        }
        step += this.step
        this.el.scrollTop -= step
      }, this.interval)
    }
  },
  computed: {
    getStyle () {
      return {
        right: `${this.right}px`,
        bottom: `${this.bottom}px`
      }
    }
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.throttleScrollHandler)
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/backtop-variables.styl';
  .mooc-backtop
    z-index: $backtop-zIndex;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: $backtop-size;
    height: $backtop-size;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0,0,0, 0.12);
    color: $base-primary;
    cursor: pointer;
    &.mooc-fade-in-enter-active, &.mooc-fade-in-leave-active
      transition: opacity 0.3s;
    &.mooc-fade-in-enter, &.mooc-fade-in-leave-to
      opacity: 0;
    &:hover
      background-color: $base-border-four-color;
    &.is-default
      .iconfont
        font-size: $backtop-font-size;
        font-weight: 700;
</style>