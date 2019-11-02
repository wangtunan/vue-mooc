# 准备
::: tip
基础组件封装这部分的内容，是参照`Element-ui`一步步来实现和完善我们需要使用到的组件，这部分的意义在于：
* 在个人项目中，摆脱对第三方组件的依赖，一步步开发属于自己的组件库。
* 熟读`Element-ui`中各个组件的实现方式，在业务开发中如果使用到`Element-ui`组件库遇到问题的话，可以快速定位和解决问题。
* 可以进一步提高自己对于组件封装的思维。
:::
## 开发规则
正如你所看到的那样，我们参照`Element-ui`组件库来实现属于自己的基础组件库，而由于`Element-ui`中各个组件是经过长久的迭代而来，故一开始就实现某一个或者某些组件的全部功能这是一件十分困难的事情，所以我们的开发规则是：
1. 基础实现
2. 根据业务一步步完善
3. 后续迭代
<br/>

对以上内容总结起来一句话就是：根据业务需要，只实现`Element-ui`中**部分组件**的**部分功能**。

## 目录结构设计
::: warning
因为我们并不是要开发一个组件库，然后放置到`npm`上，所以我们不会按照开发一个组件库的目录进行设计。
:::
按照基础部分所提到的那样：
* `src/base`目录放置基础公共组件。
* `src/components`目录放置业务公共组件。
* `src/pages`目录放置业务页面。

其中`src/base`中的目录结构如下：
```sh
|-- base                            # 基础公共组件目录
|   |-- back-top                    # 返回顶部组件
|   |-- badge                       # 标记组件 
|   |-- breadcrumb                  # 面包屑组件
|   |-- breadcrumb-item             # 面包屑子组件
|   |-- button                      # 按钮组件
|   |-- button-group                # 按钮组组件
|   |-- carousel                    # 轮播组件
|   |-- carousel-item               # 轮播子组件
|   |-- container                   # 布局容器组件
|   |-- dialog                      # 弹窗组件
|   |-- divider                     # 分割线组件
|   |-- footer                      # footer布局容器组件
|   |-- header                      # header布局容器组件
|   |-- main                        # main布局容器组件
|   |-- message                     # 消息提示框
|   |-- message-box                 # 消息确认框
|   |-- pagination                  # 分页组件
|   |-- progress                    # 进度条组件
|   |-- star                        # 星级评分组件
|   |-- step                        # 步骤条组件
|   |-- step-item                   # 步骤条子组件
|   |-- switch                      # 开关组件
|   |-- timeline                    # 时间线组件
|   |-- timeline-item               # 时间线子组件
```

## 公共变量提取
在`Element-ui`中，所以关于组件的变量都放置在`packages/theme-chalk/src/common/var.scss`文件中，这也就造成了`var.scss`文件的内容会非常多，接近一千行。在`vue-mooc`中，我们会把变量拆分成如下的目录形式：
```sh
|-- theme                               # 基础公共组件样式目录
|   |-- common                          # 公共样式目录
|   |--  |-- animation.styl             # 公共动画
|   |--  |-- popup.styl                 # 公共弹窗层样式
|   |-- mixin                           # 公共mixin目录
|   |--  |-- button-mixin.styl          # 按钮mixin
|   |-- src                             # 组件变量目录
|   |--  |-- backtop-variables.styl     # backtop组件变量
|   |--  |-- badge-variables.styl       # badge组件变量
|   |--  |-- breadcrumb-variables.styl  # breadcrumb组件变量
|   |--  |-- button-variables.styl      # button组件变量
|   |--  |-- carousel-variables.styl    # carousel组件变量
|   |--  |-- dialog-variables.styl      # dialog组件变量
|   |--  |-- divider-variables.styl     # divider组件变量
|   |--  |-- message-variables.styl     # message组件变量
|   |--  |-- messagebox-variables.styl  # messagebox组件变量
|   |--  |-- progress-variables.styl    # progress组件变量
|   |--  |-- star-variables.styl        # star组件变量
|   |--  |-- step-variables.styl        # step组件变量
|   |--  |-- switch-variables.styl      # switch组件变量
|   |--  |-- timeline-variables.styl    # timeline组件变量
|   |-- index.styl                      # 入口样式文件
|   |-- variables.styl                  # 组件公共变量
```

我们除了定义组件级别的变量以外，还有一个`varables.styl`组件公共变量文件，这里定义了组件中公共的变量，它们有如下几种类型：
* 主题颜色
* 字体大小
* 字体颜色
* 边框颜色
* 圆角大小

```stylus
// 字体
$base-font-size = 14px;
$base-medium-font-size = 16px;
$base-large-font-size = 18px;

// 公共类型颜色
$base-primary = #409EFF   // 主题色
$base-success = #67C23A   // 辅助色-成功
$base-warning = #E6A23C   // 辅助色-警告
$base-danger = #F56C6C    // 辅助色-危险
$base-info = #909399      // 辅助色-消息

// 公共字体颜色
$base-font-first-color = #303133;
$base-font-second-color = #606266;
$base-font-three-color = #909399;
$base-font-four-color = #C0C4CC;

// 公共边框颜色
$base-border-first-color = #DCDFE6;
$base-border-second-color = #E4E7ED;
$base-border-three-color = #EBEEF5;
$base-border-four-color = #F2F6FC;

// 公共边框圆角
$base-border-radius-zero = 0px;
$base-border-radius-small = 2px;
$base-border-radius-base = 4px;
$base-border-radius-circle = 50%;
```

你可能已经发现了，以上公共变量规则是参考了`Element-ui`中的标准。

## 组件注册
对于基础公共组件而言，我们一般是希望能够全局注册的，为此我们对于每一个基础公共组件，都提供了相应的`js`文件，全局注册时，我们只需要引入这些`js`文件即可。<br/>
从[Vue.js官网](https://cn.vuejs.org/v2/api/#Vue-use)中可以看到，我们如果想要使用`Vue.use(xxx)`的形式注册组件的话，我们必须提供一个`install`方法，以`button`组件为例，我们为它提供以下代码：
::: tip
需要全局注册的组件，我们都会提供组件的`name`属性，例如:`MoocButton`、`ElButton`
:::
```js
// index.js
import Button from './button.vue'

Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export default Button
```
随后我们在项目根目录下新建一个`register.js`文件，负责全局批量注册组件，以`button`和`star`组件为例，代码如下：
```js
// register.js
import Button from 'base/button/index.js'
import ButtonGroup from 'base/button-group/index.js'
import Star from 'base/star/index.js'

const components = [
  Button,
  ButtonGroup,
  Star
]

// 批量注册方法
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install, // 重要
  Button,
  ButtonGroup,
  Star
}
```

::: tip
对于通知类型的组件，例如`message`,`message-box`等，并不是像以上这种方式注册的。
:::
以`message`和`message-box`为例，它是需要挂载在`Vue.prototype`上的，为此我们需要对以上代码做一些小小的改动：
```js {2,3,8,9}
...省略其它部分
import Message from 'base/message/index.js'
import MessageBox from 'base/message-box/index.js'
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$message = Message
  Vue.prototype.$msgBox = MessageBox
}
...省略其它部分
```

撰写完`register.js`里的代码后，我们需要在项目的入口文件`main.js`引用`register.js`，如下：
```js
import Mooc from './register.js'
Vue.use(Mooc)
```

## 样式规则
为统一公共组件中样式，方便管理和以免与其他库样式冲突，我们对于样式做以下规定
* 统一使用前缀`mooc`并使用`-`连接符，例如：`mooc-star`和`mooc-button`。
* 对于带是和否性质的样式，使用`is-xxx`的形式，例如：`is-disabled`和`is-vertical`。