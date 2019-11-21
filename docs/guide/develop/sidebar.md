# 侧边栏
::: tip
目录`components/sidebar/sidebar.vue`
:::
侧边栏作为`vue-mooc`的一个公共组件，会在许多地方使用到。所以我们把`sidebar`封装提取到`src/components`目录下，并且在`App.vue`文件中使用。
```html
<div id="app">
  <m-sidebar />
</div>
```

## 滚动封装
::: tip
目录`assets/js/mixin.js`
:::
在侧边栏中我们有一个返回顶部的按钮，其中当滚动到一定的距离时才会显示，那么我们在做`sidebar`侧边栏组件开发之前，需要先封装`scrollMixin`，起重要目的是记录我们滚动的距离`scrollTop`。
```js
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
```

**代码分析：**
* `throttle`：我们在`utils/utils.js`工具文件中引用了一个节流函数，其目的是让原本一秒可能会触发`10`次的滚动事件，节流至每秒`2-3`次。除了`scroll`事件，还有很多时间可以使用到节流函数，例如：`onresize`。使用节流函数的好处是：可以避免不必要的函数调用，提升程序的性能。和函数节流相似的一个概念还有一个叫函数防抖。以下是我们自己实现的节流函数代码：
```js
export function throttle (fn, interval = 500) {
  let first = true
  let timer = null;
  let _self = fn
  return function () {
    let that = this
    let args = arguments
    if (first) {
      _self.apply(this, args)
      first = false
      return first
    }
    if (timer) {
      return false
    }
    timer = setTimeout(function () {
      clearTimeout(timer)
      timer = null
      _self.apply(that, args)
    }, interval)
  }
}
```

* `addEventListener`: 在`scrollMixin`中，我们使用`addEventListener`来绑定事件，使用`removeEventListener`来移除绑定的事件。注意：始终为`addEventListener`添加其对应的`removeEventListener`这是一个极好的开发习惯。
```js
window.addEventListener('scroll', this.scrollEvent)
window.removeEventListener('scroll', this.scrollEvent)
```

* `Vuex`：当页面滚动的时候，我们就能够获取到当前滚动的距离。而这个滚动的距离我们希望对所有组件能够访问到的，所以我们需要在`Vuex`中新建一个`scroll`的`module`:
```js
// src/store/modules/scroll.js
import * as types from '../mutation-types.js'
const state = {
  scrollTop: 0
}
const mutations = {
  [types.SET_SCROLL_TOP] (state, scrollTop) {
    state.scrollTop = scrollTop
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
```
其中关于设置`scrollTop`的`mutation`的`types`定义在`src/store/mutation-types`:
```js
export const SET_SHOW_LOGIN = 'SET_SHOW_LOGIN'
export const SET_LOGIN_ACTION = 'SET_LOGIN_ACTION'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_SCROLL_TOP = 'SET_SCROLL_TOP'
```

::: warning 最后一步
在我们新建一个`Vuex`的模块后，要记得在把这个模块放置到`Vuex`的`modules`中。
:::
```js
import Vue from 'vue'
import Vuex from 'vuex'
import scroll from './modules/scroll.js'
import * as getters from './getters.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    scroll
  },
  getters
})
```
## 侧边栏开发
由于侧边栏相对来说比较简单，内容也很少，唯一值得一提的是：当点击返回顶部按钮的时候，我们选择使用`js`来创建动画，像下面这样：
```js
export default {
  // 省略其它
  methods: {
    handleBackTopClick () {
      if (!this.timer) {
        let step = 0
        this.timer = setInterval(() => {
          if (this.scrollTop <= 0) {
            clearInterval(this.timer)
            this.timer = null
            return
          }
          step += 10
          document.documentElement.scrollTop -= step
        }, 20)
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
```