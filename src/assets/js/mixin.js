// 滚动mixin
import { throttle } from 'utils/utils.js'
import { mapMutations } from 'vuex'
export const scrollMixin = {
  mounted () {
    this.scrollEvent = throttle(this.listenScroll)
    window.addEventListener('scroll', this.scrollEvent)
  },
  methods: {
    listenScroll () {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      this.setScrollTop(scrollTop)
    },
    ...mapMutations({
      'setScrollTop': 'scroll/SET_SCROLL_TOP'
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollEvent)
  }
} 