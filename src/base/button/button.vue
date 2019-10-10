<template>
  <button class="mooc-button"></button>
</template>
<script>
export default {
  name: 'MoocButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (val) {
        return ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'default',
      validator (val) {
        return ['default', 'medium', 'small', 'mini'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>