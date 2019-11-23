# Badge 标记

## 逻辑分析
`Badge`组件相对来说比较简单，只有几个`props`入参，经过整理，我们可以得到如下的思维导图：
<br/>
<br/>
![Badge逻辑分析](../../images/xmind/badge.png)

## 组件开发
对于简单的`Badge`组件来说，我们直接一步到位，不需要拆分基础实现和完善。

### 准备
在开发之前我们需要做一些前期的准备工作，按照我们在[准备](/guide/components/#开发规则)中提到的目录结构和规则，我们需要做以下步骤：

在`src/base`目录下新建`badge`目录，并在新建的`src/base/badge`目录中，再新建两个文件，分别是`index.js`和`badge.vue`。
```sh
# 新建 badge目录
$ mkdir badge

# 新建index.js和badge.vue文件
$ cd badge
$ touch index.js
$ touch badge.vue
```
新建完毕后，`src/base`目录结构如下
```sh
|-- base
|   |-- star
|   |   |-- index.js
|   |   |-- star.vue
|   |-- badge
|   |   |-- index.js
|   |   |-- badge.vue
```
同时我们为`badge.vue`文件，撰写以下基础代码：
::: warning
组件注册部分请参考`Star`组件。
:::
```html
<template>
  <div class="mooc-badge">
    badge
  </div>
</template>
```
```js
<script>
export default {
  name: 'MoocBadge'
}
</script>
```

在以上步骤都正确完成后，我们在任意已经注册路由过的页面，使用`mooc-badge`组件，当出现`badge`文本内容即意味着`Badge`组件已经全局注册成功了。

### 开发
按照`Badge`组件逻辑分析部分，我们可以看到`Badge`组件只有几个`props`入参：
* `value`: 标记的内容。
* `max`：标记的最大值。
* `isDot`: 是否小圆点。
* `type`: 标记的类型。
* `hidden`: 是否隐藏。

所以我们对于`Badge`组件的`html`结构划分如下：
```html
<div class="mooc-badge">
  <slot></slot>
  <span
    v-show="showContent"
    class="mooc-badge-content"
    :class="[
      `mooc-badge-content-${type}`,
      {
        'is-absolute': $slots.default,
        'is-dot': isDot
      }
    ]"
    v-text="content"
  ></span>
</div>
```

`javascript`代码如下：

```js
import { baseType } from 'assets/js/mooc.config.js'
export default {
  name: 'MoocBadge',
  props: {
    value: [String, Number],
    max: Number,
    isDot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'danger',
      validator (val) {
        return baseType.includes(val)
      }
    }
  },
  computed: {
    content () {
      if (this.isDot) {
        return ''
      }
      let value = +this.value
      if (Number.isNaN(value)) {
        return value
      }
      return value > this.max ? `${this.max}+` : value
    },
    showContent () {
      return !this.hidden && (this.content || +this.content === 0 || this.isDot)
    }
  }
}
```

### 分析

`javascript`代码分析：
* **validator验证**：在`props`中，对于`type`参数我们使用了自定义`validator`，这是`Vue`中已经提供的内容。其中`baseType`为组件的公共状态，当用户传递的`type`值不是`baseType`数组中的任意一个时就提示错误。我们将其定义在`src/assets/js/mooc.config.js`文件中，代码如下：
```js
// 基础类型
export const baseType = ['primary', 'success', 'warning', 'danger', 'info']
```

* **content内容**：`content`内容我们定义为一个计算属性，其具体的内容值根据`isDot`和`max`等控制。其中当`max`和`value`同为`Number`类型时，如果当前的`value > max`，则会以`${value}+`的形式显示。


`html`结构分析：
* **模板语法**：我们都知道，在`js`中可以使用模板语法，例如：`${name},${age}`中的内容，会被变量`name`和`age`替换，最终输出为一个字符串。而在`Vue`模板结构中，我们同样可以使用模板语法，通常在绑定一些样式或者其它内容的时候会非常有用，就像`Badge`组件中的模板语法，它最终会根据`type`的值为我们绑定不同的样式。例如：`mooc-badge-content-danger`和`mooc-badge-content-success`。

* **绑定样式**：在`Vue`官网中，它提供了几种绑定样式的方式，例如变量绑定、数组绑定和对象绑定，在以上代码中，我们有如下的一段代码：
```html
:class="[
  `mooc-badge-content-${type}`,
  {
    'is-absolute': $slots.default,
    'is-dot': isDot
  }
]"
```
在以上代码中，我们在数组中又添加了一个对象，这是`Vue`所允许的，它将最终会解析成三个`class`。

### 样式封装
在处理完`Badge`组件的`html`部分和`javascript`部分后，我们需要撰写`css`代码。其中第一步，我们需要提取`Badge`组件中关于变量的定义，并撰写在`src/assets/theme/src/badge-variables.styl`文件中，如果你没有这个文件，则需要新建，其代码如下：
```stylus
$badge-veritcal-padding = 0
$badge-horizontal-padding = 6px
$badge-size = 18px
$badge-border-radius = 10px
$badge-border-width = 1px
$badge-border-style = solid
$badge-border-color = #fff
$badge-font-size = 12px
$badge-color = #fff
$badge-dot-size = 8px
$badge-dot-absolute-right = 5px
```

`Badge`组件`css`代码如下：
```stylus
@import '~assets/theme/variables.styl';
@import '~assets/theme/src/badge-variables.styl';
.mooc-badge
  position: relative
  display: inline-block;
  vertical-align: middle;
  .mooc-badge-content
    display: inline-block;
    padding: $badge-veritcal-padding $badge-horizontal-padding;
    height: $badge-size;
    line-height: $badge-size;
    border-radius: $badge-border-radius;
    border: $badge-border-width $badge-border-style $badge-border-color;
    background-color: $base-danger;
    font-size: $badge-font-size;
    color: $badge-color;
    &-primary
      background-color: $base-primary;
    &-success
      background-color: $base-success;
    &-warning
      background-color: $base-warning;
    &-danger
      background-color: $base-danger;
    &-info
      background-color: $base-info;
    &.is-absolute
      position: absolute;
      top: 0;
      right: unit($badge-size / 2 + 1, 'px');
      transform: translate(100%, -50%);
      &.is-dot
        right: $badge-dot-absolute-right;
    &.is-dot
      position: absolute;
      top: 0;
      right: 0;
      padding: 0;
      width: $badge-dot-size;
      height: $badge-dot-size;
      border-radius: $base-border-radius-circle;
```

我们可以看到，`Badge`组件关于`css`几个状态的书写，是相同的结构。我们可以把这部分内容使用`mixin`的形式提取出来，放置到在`src/assets/theme/mixin/badge-mixin.styl`文件中，像下面这样：
```stylus
badge-status($primaryColor, $successColor, $warningColor, $dangerColor, $infoColor)
  &-primary
    background-color: $primaryColor;
  &-success
    background-color: $successColor;
  &-warning
    background-color: $warningColor;
  &-danger
    background-color: $dangerColor;
  &-info
    background-color: $infoColor;
```

接下来在`Badge`组件中引用`badge-mixin.styl`，`Badge`完整代码如下(改动参考高亮部分)：
```stylus {3,18}
@import '~assets/theme/variables.styl';
@import '~assets/theme/src/badge-variables.styl';
@import '~assets/theme/mixin/badge-mixin.styl';
.mooc-badge
  position: relative
  display: inline-block;
  vertical-align: middle;
  .mooc-badge-content
    display: inline-block;
    padding: $badge-veritcal-padding $badge-horizontal-padding;
    height: $badge-size;
    line-height: $badge-size;
    border-radius: $badge-border-radius;
    border: $badge-border-width $badge-border-style $badge-border-color;
    background-color: $base-danger;
    font-size: $badge-font-size;
    color: $badge-color;
    badge-status($base-primary, $base-success, $base-warning, $base-danger, $base-info);
    &.is-absolute
      position: absolute;
      top: 0;
      right: unit($badge-size / 2 + 1, 'px');
      transform: translate(100%, -50%);
      &.is-dot
        right: $badge-dot-absolute-right;
    &.is-dot
      position: absolute;
      top: 0;
      right: 0;
      padding: 0;
      width: $badge-dot-size;
      height: $badge-dot-size;
      border-radius: $base-border-radius-circle;
```

### 组件测试

在完成以上步骤后，我们完整的`Badge`组件已经开发完成了，接下来我们需要对组件进行必要的测试，测试代码如下：
```html
<mooc-badge type="primary" :value="10">
  <div class="mooc-button">消息</div>
</mooc-badge>
<mooc-badge type="success" :value="100" :max="99">
  <div class="mooc-button">消息</div>
</mooc-badge>
<mooc-badge :value="100" :is-dot="true">
  <div class="mooc-button">消息</div>
</mooc-badge>
<mooc-badge value="hot">
  <div class="mooc-button">消息</div>
</mooc-badge>
<mooc-badge value="hot" :hidden="true">
  <div class="mooc-button">消息</div>
</mooc-badge>
```
```stylus
.mooc-button {
  width: 60px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border: 1px solid #58a;
  color: #58a;
  border-radius: 4px;
}
.mooc-badge {
  margin-right: 30px;
}
```

`Badge`组件测试结果如下：
![Badge组件测试](../../images/badge-result.png)

## 组件文档

在以上`Badge`组件完善以后，我们将得到一个比较完整的星级评分组件，但仅仅只是有组件对我们来说并不是十分足够的，我们还需要撰写一份关于`Badge`组件的使用文档，组件文档结构按照以下内容来撰写：
* 用法：`Badge`组件的用法以及对应的案例。
* 属性：`Badge`组件每一个`props`属性的描述，包含类型，默认值以及说明。
<br/>

`Badge`组件对应的文档地址为[Badge组件文档](/components/badge#用法)，你可以点击这个地址查看更对内容。