# 起步

## 初始化项目

本项目在搭建时选择了通过官方提供的`Vue-cli(3.10.1)`脚手架进行项目的搭建，其中一些自定义`feature`选项如下：
* `Babel`：`Babel`转译
* `Router`：路由
* `Vuex`：数据状态管理
* `CSS Pre-processors`：`CSS`预编译器
* `Linter / Formatter`：格式化工具

其中`CSS`预编译器选择：
* `Stylus`

其中格式化工具选择了：
* `Eslint + Standard`

## 图标字体
图标字体选择了阿里的[iconfont](https://www.iconfont.cn/)，在线选择自己想要的图标并保存到指定项目中，再进行下载或者直接使用在线链接都是十分方便的，以下截图为部分图标的示例：
<br/>
<br/>
![iconfont](../images/iconfont.png)

如果你对以上图标很满意，那么你可以在`src/assets/fonts`目录下找到找到他们。


## 公共变量
::: tip
目录地址`src/assets/stylus/variables.styl`
:::
::: warning
由于我们选择的是`stylus`，所以`variables`的定义方式和`Sass/Less`会有点不一样，请依据实际情况自行更改。
:::
为了统一项目中的颜色规范，我们把一些公共的颜色提取到`variables.styl`文件中，同时我们可以根据不同的类型，来区分这些颜色规范，它们有如下几种类型：
* 字体颜色定义规范
* 主题色颜色定义规范
* 边框色颜色定义规范

### 字体颜色定义规范
<div class="container">
  <div class="color font-first">#1c1f21</div>
  <div class="color font-second">#4d555d</div>
  <div class="color font-three">#787d82</div>
  <div class="color font-four">#9199a1</div>
</div>
<div class="container font">
  <div class="font-desc">适用于标题</div>
  <div class="font-desc">适用于副标题</div>
  <div class="font-desc">适用于辅助文字</div>
  <div class="font-desc">适用于辅助文字</div>
</div>

```css
// 字体颜色定义规范
$font-first-color = #1c1f21
$font-second-color = #4d555d;
$font-three-color = #787d82;
$font-four-color = #9199a1;
```

### 主题色颜色定义规范
<div class="container">
  <div class="theme theme-red">#f01414</div>
  <div class="theme theme-orange">#ff9900</div>
  <div class="theme theme-orange-dark">#787d82</div>
  <div class="theme theme-blue">#9199a1</div>
</div>
<div class="container theme">
  <div class="theme theme-blue-dark">#0b8cc5</div>
  <div class="theme theme-purple">#673fd6</div>
  <div class="theme theme-green">#06b571</div>
</div>

```css
// 主题颜色定义规范
$theme-red-color = #f01414;
$theme-orange-color = #ff9900;
$theme-orange-dark-color = #c80;
$theme-blue-color = #6698ff;
$theme-blue-dark-color = #0b8cc5;
$theme-purple-color = #673fd6;
$theme-green-color = #06b571;
```

### 边框色颜色定义规范
<div class="container">
  <div class="border border-first">#0b8cc5</div>
  <div class="border border-second">#673fd6</div>
  <div class="border border-three">#06b571</div>
</div>

```css
// 边框颜色定义规范
$border-first-color = #b7bbbf;
$border-second-color = #d0d6d9;
$border-three-color = #eff1f0;
```

## 公共样式(mixin)
::: tip
目录地址：`src/assets/stylus/mixin.styl`
:::
::: warning
由于我们选择的是`stylus`，所以`mixin`的定义方式和`Sass/Less`会有点不一样，请依据实际情况自行更改。
:::
为了节省`css`代码的编写量和可维护性，我们把一些公共的样式用`mixin`的方式提取`mixin.styl`文件中，根据不同的`mixin`类型，我们可分为如下几种类型：
* 基础`minix`：一些常用的，公共的`mixin`方案，如`单行折叠省略`，`多行折叠省略`等等。
* 业务`minix`：根据实际业务需求，提取出来的`mixin`方案。


### 基础mixin案例
```css
// 单行折叠省略
ellipsis()
  text-overflow: ellipsis
  white-space: nowrap;
  overflow: hidden;

// 多行折叠省略
multline-ellipsis($line)
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $line;
  text-overflow: ellipsis;
  overflow: hidden;

// 取消滚动条
no-scrollbar()
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar
    width: 0!important;
```

### 业务mixin案例
```css
// 图片加载失败占位
img-box($width, $height)
  width: $width;
  height: $height;
  & > img
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: #eee;
```

## 项目结构设计

## Eslint配置
良好的代码风格，无论是对于个人还是一个团队，都是十分重要的，统一的代码规范能让团队项目变得更加具有可维护性，而对于个人而言，这也是一条很基础和非常重要的一项技能。

### 安装Eslint插件
以`Vscode`为例，在扩展菜单中搜索`Eslint`并按照它，如下：
![安装Eslint](../images/eslint.png)

### 配置Eslint
安装完以上插件后，我们首先需要在根目录下新建`.eslintrc.js`(或者`.eslintrc`和`.eslintrc.json`，这取决于你的爱好)文件，并填写如下配置：
::: tip
`rules`部分，完全是个人的爱好配置，你可以去[Eslint官网](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)和[Eslint-plugin-vue官网](https://eslint.vuejs.org/rules/)查看更多配置项的含义，进而配置出属于自己或者团队的统一规范。
:::

::: warning
注意，如果你的命名文件为`.eslintrc`或者`.eslintrc.json`，则不需要`module.exports`导出模块，直接撰写`json`文件即可。
:::
```js
// .eslintrc.js
module.exports =  {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    // 使用下面这些检验规则进行代码格式检验
    "plugin:vue/recommended",
    "eslint:recommended"
  ],
  "rules": {
    // vue组件 props必须默认值
    "vue/require-default-prop": 0,
    // vue组件中属性的定义顺序
    "vue/order-in-components": 0,
    // vue组件多个属性必须换行
    "vue/max-attributes-per-line": 0,
    // 不允许在template组件上绑定某些属性，例如key
    "vue/no-template-shadow": 0,
    // 生产环境下不允许debugger调试
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // 函数后必须跟一个空格
    "space-before-function-paren": 1,
    // 分号后必须跟一个空格
    "comma-spacing": 1,
    // 箭头函数两侧必须有空格
    "arrow-spacing": 1,
    // 操作符两侧必须有空格
    "space-infix-ops": 1,
    // 始终使用严格相等，即xxx === xxx
    "eqeqeq": 1
  }
}
```

### 编辑器自动修复
工欲善其事必先利其器，使用`eslint`校验规则+`Vscode`提示错误和自动修复，能让你体验到一种特殊的舒适感，想要在每次保存代码的时候自动修复代码格式问题，需要我们对`Vscode`编辑器做如下改动：
```json
// 依次点击文件 => 首选项 => 设置 => settings.json中编辑
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "vue-html",
  {
    "language": "vue",
    "autoFix": true
  }
],
"eslint.autoFixOnSave": true,
"eslint.run": "onSave"
```

### 自动修复命令
`Vue-cli3.0+`提供给我们一个`lint`命令，如下：
```json
"scripts": {
  // 其它命令
  "lint": "vue-cli-service lint",
}
```
如果我们运行`npm run lint`以上命令，它会在我们的终端输出一下错误信息，例如：
![Eslint校验结果](../images/eslint-result.png)

同时，如果我们想简单修复的话，可以运行`npm run lint -- --fix`命令。

## Webpack配置

## 打包命令

<style lang="stylus">
  .container
    &.font, &.theme
      margin-top: -20px;
    .color, .theme, .border
      margin-right: 10px;
      margin-bottom: 10px;
      height: 80px;
      border-radius: 5px;
      background-color: #eee;
      text-align: center;
      line-height: 80px;
      color: #fff;
      &.font-first
        background-color: #1c1f21;
      &.font-second
        background-color: #4d555d;
      &.font-three
        background-color: #787d82;
      &.font-four
        background-color: #9199a1;
      &:last-child
        margin-right: 10px;
    .theme
      &.theme-red
        background-color: #f01414;
      &.theme-orange
        background-color: #ff9900;
      &.theme-orange-dark
        background-color: #c80;
      &.theme-blue
        background-color: #6698ff;
      &.theme-blue-dark
        background-color: #0b8cc5;
      &.theme-purple
        background-color: #673fd6;
      &.theme-green
        background-color: #06b571;
    .border
      color: #000;
      &.border-first
        background-color: #b7bbbf;
      &.border-second
        background-color: #d0d6d9;
      &.border-three
        background-color: #eff1f0;
    .font-desc
      text-align: center;
</style>