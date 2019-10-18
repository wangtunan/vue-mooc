<template>
  <div
    v-show="showItem"
    class="mooc-carousel-item"
    :class="[
      'mooc-carousel-item',
      active && 'is-active',
      animation && 'is-animation'
    ]"
    :style="itemStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
import { autoprefixer } from 'utils/dom.js'
export default {
  name: 'MoocCarouselItem',
  props: {
    name: String,
    label: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      showItem: false,
      active: false,
      animation: false, 
      translate: 0,
      scale: 1
    }
  },
  created () {
    this.$parent && this.$parent.updateItems()
  },
  methods: {
    translateItem (index, activeIndex, oldIndex) {
      let $parent = this.$parent
      let itemsLength = $parent.items.length
      // process item animation
      if (oldIndex !== undefined) {
        this.animation = index === activeIndex || index === oldIndex
      }
      // process item index
      if (index !== activeIndex && $parent.loop && itemsLength > 2) {
        index = this.calcIndex(index, activeIndex, itemsLength)
      }
      this.active = index === activeIndex
      this.translate = this.calcTranslate(index, activeIndex)
      this.showItem = true
    },
    calcTranslate (index, activeIndex) {
      const distance = this.$parent.$el['offsetWidth']
      return distance * (index - activeIndex)
    },
    calcIndex (index, activeIndex, length) {
      if (activeIndex === 0 && index === length - 1) {
        return -1;
      } else if (activeIndex === length - 1 && index === 0) {
        return length;
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        return length + 1;
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        return -2;
      }
      return index;
    }
  },
  computed: {
    itemStyle () {
      const style = {
        transform: `translateX(${ this.translate }px) scale(${ this.scale })`
      }
      return autoprefixer(style)
    }
  },
  destroyed () {
    this.$parent && this.$parent.updateItems()
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/src/carousel-variables.styl';
  .mooc-carousel-item
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: $carousel-item-normal-zIndex - 1;
    &.is-active
      z-index: $carousel-item-normal-zIndex + 1;
    &.is-animation
      transition: transform $carousel-item-animation-duration ease-in-out;
</style>