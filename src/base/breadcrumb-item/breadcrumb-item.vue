<template>
  <div class="breadcrumb-item">
    <span
      ref="link"
      class="breadcrumb-item-link"
      :class="getClass"
    >
      <slot></slot>
    </span>
    <span
      class="breadcrumb-item-separator"
      :class="separatorIcon ? ['customer-separator-icon', separatorIcon] : ''"
    >{{ separatorIcon ? '' : separator }}</span>
  </div>
</template>
<script>
export default {
  name: 'MoocBreadcrumbItem',
  props: {
    to: {
      type: [Object, String],
      default () {
        return {}
      }
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  inject: ['MoocBreadcrumb'],
  data () {
    return {
      separator: '',
      separatorIcon: ''
    }
  },
  computed: {
    getClass () {
      if (typeof this.to === 'object') {
        return Object.keys(this.to).length > 0 ? 'is-link' : ''
      } else {
        return this.to ? 'is-link' : ''
      }
    }
  },
  mounted () {
    ({ separator: this.separator, separatorIcon: this.separatorIcon } = this.MoocBreadcrumb)
    const links = this.$refs.link
    links.addEventListener('click', () => {
      let { to, replace, $router } = this
      if (!to || Object.keys(to).length === 0 || !$router) {
        return
      }
      if (replace) {
        $router.replace(to)
      } else {
        $router.push(to)
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/breadcrumb-variables.styl';
  .breadcrumb-item
    display: inline-block;
    vertical-align: middle;
    .breadcrumb-item-link
      color: $base-font-second-color;
      &.is-link, & > a
        font-weight: 700;
        color: $breadcrumb-separator-margin;
        &:hover
          color: $base-primary;
          cursor: pointer;
    .breadcrumb-item-separator
      margin: 0 $breadcrumb-separator-margin;
      color: $base-font-four-color;
      font-weight: bold;
      &.customer-separator-icon
        margin: 0 $breadcrumb-separator-customer-margin;
        font-weight: normal;
    &:last-child
      .breadcrumb-item-link, .breadcrumb-item-content > a
        &, &:hover
          cursor: text;
          color: $base-font-second-color;
          font-weight: normal;
      .breadcrumb-item-separator
        display: none;
</style>