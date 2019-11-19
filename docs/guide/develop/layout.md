# 布局
`vue-mooc`布局方式我们采用最普遍的`header` + `main` + `footer`的形式，它们的基础框架如下所示：
<div class="layout-container">
  <mooc-container>
    <mooc-header>header</mooc-header>
    <mooc-main>main</mooc-main>
    <mooc-footer>footer</mooc-footer>
  </mooc-container>
  <div class="layout-sidebar">sidebar</div>
</div>

`html`代码：
```html
<mooc-container>
  <mooc-header>header</mooc-header>
  <mooc-main>main</mooc-main>
  <mooc-footer>footer</mooc-footer>
</mooc-container>
<div class="layout-sidebar">sidebar</div>
```

我们将对以上布局具体的业务含义进行如下解释：
* `header`：放置公共头部，包含`logo`，导航，搜索和登录等模块。
* `main`：放置路由部分，即：`router-view`。
* `footer`：放置底部版权等相关信息。
* `sidebar`：放置侧边栏信息。


## 封装布局公共组件
::: tip
布局公共组件借鉴了`element-ui`中的布局容器，根据项目实际情况进行的改造，并没有百分百实现`element-ui`中布局容器组件的功能。
:::
针对以上布局方式的要求，我们借鉴`element-ui`中关于布局容器的组件，进行如下封装
* `mooc-container`对应`el-container`。
* `mooc-header`对应`el-header`。
* `mooc-main`对应`el-main`。
* `mooc-footer`对应`el-foooter`。

如果你对改造后布局容器组件感兴趣的话，那么你可以在`src/base/container`，`src/base/header`，`src/base/main`和`src/base/footer`等目录找到它们。


## 使用布局公共组件

由于所有公共组件已经全部全局注册，所以我们只需要在`App.vue`文件中使用即可，像下面这样：
::: tip
`App.vue`中的代码在这里只做**示例使用**，其代码会在涉及到的模块中一一介绍。
:::

`html`代码：
```html
<template>
  <div id="app" :style="getStyle">
    <!-- content -->
    <mooc-container>
      <mooc-header height="72px">
        <m-header />
      </mooc-header>
      <mooc-main>
        <router-view />
      </mooc-main>
      <mooc-footer height="120px">
        <m-footer />
      </mooc-footer>
    </mooc-container>
    <!-- sidebar -->
    <m-sidebar />
    <!-- back to top -->
    <mooc-backtop :show-height="500"></mooc-backtop>
    <!-- login -->
    <login v-if="showLogin" @maskClick="handleMaskClick" />
  </div>
</template>
```

`JavaScript`代码：
```js
import MHeader from 'components/header/index.vue'
import MFooter from 'components/footer/footer.vue'
import MSidebar from 'components/sidebar/sidebar.vue'
import { mapGetters, mapMutations } from 'vuex'
import { scrollMixin } from 'assets/js/mixin.js'
export default {
  name: 'App',
  mixins: [scrollMixin],
  computed: {
    getStyle () {
      return {
        'max-height': this.showLogin ? '100%' : '',
        'overflow': this.showLogin ? 'hidden' : ''
      }
    },
    ...mapGetters(['showLogin'])
  },
  methods: {
    handleMaskClick () {
      this.setShowLogin(!this.showLogin)
    },
    ...mapMutations({
      'setShowLogin': 'login/SET_SHOW_LOGIN'
    })
  },
  components: {
    MHeader,
    MFooter,
    MSidebar,
    Login: () => import('components/login/login.vue')
  }
}
```

<style lang="stylus">
  .layout-container
    position: relative;
    height: 400px;
    max-height: 400px;
    .mooc-container
      height: 400px;
      max-height: 400px;
      color: #fff;
      text-align: center;
      .mooc-header, .mooc-footer
        line-height: 60px;
        background-color: #f60;
      .mooc-main
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #58a;
    .layout-sidebar
      position: absolute;
      right: 5px;
      top: 50%;
      width: 60px;
      height: 200px;
      transform: translateY(-50%);
      background-color: #f60;
      text-align: center;
      line-height: 200px;
      color: #fff;
</style>
