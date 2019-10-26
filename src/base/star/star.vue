<template>
  <div class="mooc-star">
    <span
      v-for="(item, index) in max"
      :key="index"
      class="mooc-star-item"
      :class="{
        'is-disabled': disabled
      }"
      @mouseenter="handleMouseEnter(item)"
      @mouseleave="handleMouseLeave"
      @click="handleStarClick(item)"
    >
      
      <i
        class="iconfont"
        :class="iconClass"
        :style="{
          'font-size': size + 'px',
          'color': getIconColor(item)
        }"
      ></i>
    </span>
    <span
      v-if="showText || showValue"
      class="mooc-star-text"
      :style="{
        'color': textColor,
        'font-size': size + 'px'
      }"
    >
      {{ text }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'MoocStar',
  props: {
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 14
    },
    max: {
      type: Number,
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
    iconClass: {
      type: String,
      default: 'iconxingxing'
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
    handleMouseEnter (item) {
      if (this.disabled) {
        return
      }
      this.currentValue = item
    },
    handleMouseLeave () {
      if (this.disabled) {
        return
      }
      this.currentValue = this.value
    },
    handleStarClick (val) {
      if (this.disabled) {
        return
      }
      this.$emit('input', val)
      this.$emit('change', val)
    },
    getIconColor (n) {
      let color = n <= this.currentValue ? this.color : '#eee' 
      return color
    }
  },
  computed: {
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
  @import '~assets/theme/src/star-variables.styl';
  .mooc-star
    display: inline-block;
    .mooc-star-item
      display: inline-block;
      margin-right: $star-item-margin-right;
      vertical-align: middle;
      cursor: default;
      &:last-child
        margin-right: 0;
      &:not(.is-disabled)
        cursor: pointer;
        &:hover
          .iconfont
            transform: scale($star-icon-hover-scale);
        .iconfont
          display: inline-block;
          transition: all $star-icon-transition-duration;
    .mooc-star-text
      display: inline-block;
      padding-left: $star-text-padding-left;
      vertical-align: middle;
      font-size: $star-text-font-size;
</style>
