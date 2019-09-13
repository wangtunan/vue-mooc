<script>
export default {
  name: 'MoocTimeline',
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
  render () {
    let reverse = this.reverse
    let slots = this.$slots.default || []
    let classes = {
      'is-reverse': reverse,
      'timeline': true
    }
    if (reverse) {
      slots = slots.reverse()
    }

    return (<ul class={ classes }>
      { slots }
    </ul>)
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../stylus/variables.styl';
  .timeline
    font-size: $base-font-size;
    list-style: none;
</style>