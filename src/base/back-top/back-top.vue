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
export default {
  name: 'MoocBacktop',
  props: {
    showHeight: {
      type: Number,
      default: 200
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },
  data () {
    return {
      el: null,
      container: null,
      visible: true
    }
  },
  methods: {
    handleBackTopClick (event) {
      this.scrollToTop()
      this.$emit('click', event)
    },
    scrollToTop () {

    }
  },
  computed: {
    getStyle () {
      return {
        right: `${this.right}px`,
        bottom: `${this.bottom}px`
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~base/theme/variables.styl';
  @import '~base/theme/src/backtop-variables.styl';
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
    &:hover
      background-color: $base-border-four-color;
    &.is-default
      .iconfont
        font-size: $backtop-font-size;
        font-weight: 700;
</style>