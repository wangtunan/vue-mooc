<template>
  <div
    class="mooc-carousel"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div
      class="mooc-carousel-container"
      :style="{
        height: `${height}px`
      }"
    >
      <template v-if="arrow != 'never'">
        <transition
          name="arrow-left"
        >
          <i
            v-show="(arrow == 'always' || hover) && (loop || activeIndex > 0)"
            class="mooc-carousel-arrow mooc-carousel-arrow-left iconfont"
            @click.stop="throttleArrowClick(activeIndex - 1)"
          >
            &#xe63d;
          </i>
        </transition>
        <transition
          name="arrow-right"
        >
          <i
            v-show="(arrow == 'always' || hover) && (loop || activeIndex < items.length - 1)"
            class="mooc-carousel-arrow mooc-carousel-arrow-right iconfont"
            @click.stop="throttleArrowClick(activeIndex + 1)"
          >
            &#xe627;
          </i>
        </transition>
      </template>
      <slot></slot>
    </div>
    <ul
      v-if="showIndicator"
      class="mooc-carousel-indicators"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'mooc-carousel-indicator',
          (index === activeIndex) && 'is-active'
        ]"
        @mouseenter="throttleIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <span class="mooc-carousel-indicator-dot"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import { throttle } from 'utils/utils.js'
const hover_throttle_interval = 300
const click_throttle_interval = 200
export default {
  name: 'MoocCarousel',
  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 300
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000,
      validator (val) {
        return val > 0
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    trigger: {
      type: String,
      default: 'hover',
      validator (val) {
        return ['hover', 'click'].includes(val)
      }
    },
    arrow: {
      type: String,
      default: 'hover',
      validator (val) {
        return ['always', 'hover', 'never'].includes(val)
      }
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      items: [],
      hover: false,
      activeIndex: -1
    }
  },
  created () {
    // indicator hover throttle
    this.throttleIndicatorHover = throttle((index) => {
      this.handleIndicatorHover(index)
    }, hover_throttle_interval)

    // arrow click throttle
    this.throttleArrowClick = throttle((index) => {
      this.setActiveItem(index)
    }, click_throttle_interval)
  },
  mounted () {
    this.updateItems()
    this.$nextTick(() => {
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex
      }
      this.startTimer()
    })
  },
  methods: {
    handleMouseEnter () {
      this.clearTimer()
      this.hover = true
    },
    handleMouseLeave () {
      this.startTimer()
      this.hover = false
    },
    handleIndicatorClick (index) {
      this.activeIndex = index
    },
    handleIndicatorHover (index) {
      if (this.trigger === 'hover' && index !== this.activeIndex) {
        this.activeIndex = index
      }
    },
    updateItems () {
      this.items = this.$children.filter(child => child.$options.name === 'MoocCarouselItem')
    },
    startTimer () {
      if (!this.autoplay) {
        return
      }
      this.clearTimer()
      this.timer = setInterval(this.playItem, this.interval)
    },
    clearTimer () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    playItem () {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex ++
      } else if (this.loop) {
        this.activeIndex = 0
      }
    },
    resetItemPosition (oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex)
      })
    },
    setActiveItem (index) {
      let len = this.items.length
      let oldIndex = this.activeIndex
      if (index < 0) {
        this.activeIndex = this.loop ? len - 1 : 0
      } else if (index >= len) {
        this.activeIndex = this.loop ? 0 : len - 1
      } else {
        this.activeIndex = index
      }
      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(this.activeIndex)
      }
    },
    // outside method
    prev () {
      this.setActiveItem(this.activeIndex - 1)
    },
    // outside method
    next () {
      this.activeIndex (this.activeIndex + 1)
    }
  },
  watch: {
    activeIndex (newVal, oldVal) {
      this.resetItemPosition(oldVal)
      if (oldVal > -1) {
        this.$emit('change', newVal, oldVal)
      }
    },
    items (val) {
      if (val.length > 0) {
        this.setActiveItem(this.initialIndex)
      }
    }
  },
  beforeDestroy () {
    this.clearTimer()
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/carousel-variables.styl';
  @import '~assets/stylus/mixin.styl';
  .mooc-carousel
    position: relative;
    .mooc-carousel-container
      position: relative;
      overflow-x: hidden;
      .mooc-carousel-arrow
        z-index: $carousel-arrow-zIndex;
        display: inline-block;
        position: absolute;
        top: 50%;
        width: $carousel-arrow-size;
        height: $carousel-arrow-size;
        line-height: $carousel-arrow-size;
        transform: translateY(-50%);
        background-color: $carousel-arrow-background-color;
        border-radius: $base-border-radius-circle;
        transition: all $carousel-arrow-animation-duration;
        text-align: center;
        cursor: pointer;
        color: #fff;
        font-size: $carousel-font-size;
        &.mooc-carousel-arrow-left
          left: $carousel-arrow-left;
          &.arrow-left-enter, &.arrow-left-leave-active
            transform: translate(- $carousel-arrow-left, -50%);
            opacity: 0;
        &.mooc-carousel-arrow-right
          right: $carousel-arrow-right;
          &.arrow-right-enter, &.arrow-right-leave-active
            transform: translate($carousel-arrow-left, -50%);
            opacity: 0;
        &:hover
          background-color: $carousel-arrow-hover-background-color
    .mooc-carousel-indicators
      z-index: $carousel-item-normal-zIndex + 1;
      position: absolute;
      bottom: $carousel-indicators-bottom;
      left: 50%;
      transform: translateX(-50%);
      margin: 0;
      padding: 0;
      list-style: none;
      .mooc-carousel-indicator
        display: inline-block;
        &.is-active
          .mooc-carousel-indicator-dot
            width: $carousel-indicator-active-width;
            border-radius: $carousel-indicator-active-radius;
        .mooc-carousel-indicator-dot
          display: inline-block;
          margin: 0 $carousel-indicator-margin;
          width: $carousel-indicator-size;
          height: $carousel-indicator-size;
          border-radius: $base-border-radius-circle;
          background-color: $carousel-indicator-background-color;
          transition: all $carousel-item-animation-duration ease-in-out;
          cursor: pointer;
          extend-click($carousel-indicator-extend-size, relative);
</style>