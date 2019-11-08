<template>
  <div
    class="mooc-switch"
    :class="{
      'is-disabled': disabled,
      'is-checked': checked
    }"
    @click="handleSwithToggle"
  >
    <input
      ref="checkbox"
      type="checkbox"
      class="mooc-switch-input"
      :true-value="newActive.value"
      :false-value="newInActive.value"
      @change="handleInputChange"
    >
    <span
      v-if="newInActive.text"
      ref="LeftLabel"
      class="mooc-switch-label left"
      :class="{
        'active': !checked
      }"
    >
      {{ newInActive.text }}
    </span>
    <span
      ref="SwitchRadius"
      class="mooc-switch-radius"
      :style="{
        'width': width + 'px'
      }"
    />
    <span
      v-if="newActive.text"
      ref="RightLabel"
      class="mooc-switch-label right"
      :class="{
        'active': checked
      }"
    >
      {{ newActive.text }}
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
      type: [Number, String],
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
    this.$refs.checkbox.checked = this.checked
  },
  methods: {
    handleSwithToggle () {
      if (this.disabled) {
        return false
      }
      this.handleInputChange()
    },
    handleInputChange () {
      const val = this.checked ? this.newInActive.value : this.newActive.value
      this.$emit('input', val)
      this.$emit('change', val)
      this.$nextTick(() => {
        this.$refs.checkbox.checked = this.checked
      })
    },
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
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/switch-variables.styl';
  .mooc-switch
    display: inline-flex;
    position: relative;
    align-items: center;
    vertical-align: middle;
    font-size: $switch-font-size;
    &.is-checked
      .mooc-switch-radius
        background-color: $base-success;
        border-color: $base-success;
        &::after
          left: 100%;
          margin-left: - $switch-btn-size - 1px;
    &.is-disabled
      .mooc-switch-radius
        opacity: 0.6;
        cursor: not-allowed;
    & > span
      display: inline-block;
      vertical-align: middle;
    .mooc-switch-input
      width: 0;
      height: 0;
      opacity: 0
    .mooc-switch-radius
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
    .mooc-switch-label
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