// 滚动mixin
import { throttle } from 'utils/utils.js'
import { mapMutations } from 'vuex'
export const scrollMixin = {
  mounted () {
    // 监听页面滚动事件
    this.scrollEvent = throttle(this.listenScroll)
    window.addEventListener('scroll', this.scrollEvent)
  },
  methods: {
    // 滚动事件
    listenScroll () {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      this.setScrollTop(scrollTop)
    },
    // vuex
    ...mapMutations({
      'setScrollTop': 'scroll/SET_SCROLL_TOP'
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollEvent)
  }
} 