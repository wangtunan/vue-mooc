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
      >
        <span class="mooc-carousel-indicator-dot"></span>
      </li>
    </ul>
  </div>
</template>
<script>
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
  @import '~base/theme/variables.styl';
  @import '~base/theme/src/carousel-variables.styl';
  .mooc-carousel
    position: relative;
    .mooc-carousel-container
      position: relative;
      overflow-x: hidden;
    .mooc-carousel-indicators
      z-index: $carousel-item-normal-zIndex + 1;
      position: absolute;
      bottom: 10px;
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
</style>