<template>
  <div class="star">
    <span
      class="star-item iconfont"
      v-for="(item, index) in max"
      @mouseenter="handleMouseEnter(item)"
      @mouseleave="handleMouseLeave"
      @click="handleStarClick(item)"
      :style="getStyle(item)"
      :class="{'disabled': disabled}"
      :key="index">
      &#xe610;
    </span>
    <span
      v-if="showText || showValue"
      class="star-text"
      :style="{
        color: textColor
      }"
    >{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: 'Star',
  props: {
    value: {
      type: [Number,String],
      default: 0
    },
    size: {
      type: [Number,String],
      default: 14
    },
    max: {
      type: [Number,String],
      default: 5
    },
    color: {
      type: String,
      default: '#ff9900'
    },
    textColor: {
      type: String,
      default: '#ff9900'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    texts: {
      type: Array,
      default () {
        return ['极差', '失望', '一般', '满意', '惊喜']
      }
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    // 鼠标移入事件
    handleMouseEnter (item) {
      if (this.disabled) {
        return
      }
      this.currentValue = item
    },
    // 鼠标移出事件
    handleMouseLeave () {
      if (this.disabled) {
        return
      }
      this.currentValue = this.value
    },
    // 点击事件
    handleStarClick (item) {
      if (this.disabled) {
        return
      }
      this.$emit('change', item)
    },
    getStyle (n) {
      let color = n <= this.currentValue ? this.color : '#eee' 
      return {
        'font-size': `${this.size}px`,
        'color': color
      }
    }
  },
  computed: {
    // 计算：显示评分或者评分内容
    text () {
      let result = ''
      if (this.showValue) {
        result = this.currentValue
      } else if(this.showText) {
        result = this.texts[this.currentValue - 1]
      }
      return result
    }
  }
}
</script>
<style lang="stylus" scoped>
  .star
    display: inline-block;
    & > span
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      &.star-item:not(.disabled)
        transition: transform 0.3s;
        &:hover
          transform: scale(1.15);
      &.star-text
        padding-left: 5px;
        font-size: 14px;
</style>
