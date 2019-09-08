<template>
  <div
    class="switch"
    :class="{
      'is-disabled': disabled,
      'is-checked': checked
    }"
    @click="handleSwithToggle"
  >
    <span
      class="switch-label left"
      ref="LeftLabel"
      v-if="newInActive.text"
      :class="{
        'active': !checked
      }"
    >
      {{newInActive.text}}
    </span>
    <span
      class="switch-radius"
      ref="SwitchRadius"
      :style="{
        'width': width + 'px'
      }"
    ></span>
    <span
      class="switch-label right"
      ref="RightLabel"
      v-if="newActive.text"
      :class="{
        'active': checked
      }"
    >
      {{newActive.text}}
    </span>
  </div>
</template>
<script>
const activeObj = {
  value: true,
  color: '',
  text: ''
}
const inActiveObj = {
  value: false,
  color: '',
  text: ''
}
export default {
  name: 'MoocSwitch',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Object,
      default () {
        return activeObj
      }
    },
    inActive: {
      type: Object,
      default () {
        return inActiveObj
      }
    }
  },
  mounted () {
    this.setSwitchColor()
  },
  methods: {
    // 开关切换
    handleSwithToggle () {
      if (this.disabled) {
        return false
      }
      let val = this.checked ? this.newInActive.value : this.newActive.value
      this.$emit('change', val)
    },
    // 设置active时的颜色和in-active时的颜色
    setSwitchColor () {
      let color = this.checked ? this.newActive.color : this.newInActive.color
      if (color) {
        let switchRadius = this.$refs.SwitchRadius
        switchRadius.style.backgroundColor = color
        switchRadius.style.borderColor = color
      }
    }
  },
  watch: {
    checked (newVal, oldVal) {
      if (newVal === oldVal) {
        return false
      }
      this.setSwitchColor()
    }
  },
  computed: {
    checked () {
      return this.value === this.newActive.value
    },
    newActive () {
      return Object.assign({}, activeObj, this.active)
    },
    newInActive () {
      return Object.assign({}, inActiveObj, this.inActive)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~base/theme/variables.styl';
  @import '~base/theme/src/switch-variables.styl';
  .switch
    display: inline-flex;
    position: relative;
    align-items: center;
    vertical-align: middle;
    height: $switch-height;
    line-height: $switch-height;
    font-size: $switch-font-size;
    &.is-checked
      .switch-radius
        background-color: $base-success;
        border-color: $base-success;
        &::after
          left: 100%;
          margin-left: - $switch-btn-size - 1px;
    &.is-disabled
      .switch-radius
        opacity: 0.6;
        cursor: not-allowed;
    & > span
      display: inline-block;
      vertical-align: middle;
    .switch-radius
      position: relative;
      height: $switch-height;
      line-height: $switch-height;
      border-radius: $switch-radius;
      background-color: $base-info;
      border: 1px solid $base-info;
      box-sizing: border-box;
      transition: border-color $switch-duration, background-color $switch-duration;
      cursor: pointer;
      &::after
        content: '';
        position: absolute;
        left: 1px;
        top: 1px;
        width: $switch-btn-size;
        height: $switch-btn-size;
        background-color: #fff;
        border-radius: 50%;
        transition: all $switch-duration;
    .switch-label
      font-size: $switch-font-size;
      font-weight: 500;
      transition: color $switch-text-duration;
      &.active
        color: $base-primary;
      &.left
        margin-right: 10px;
      &.right
        margin-left: 10px;
</style>