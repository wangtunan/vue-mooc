# Star 星级评分

## Star组件逻辑分析
要整理`Star`组件的实现逻辑，我们从以下几个方面开始：
* `props`入参：对于每一个参数的类型，默认值以及用户的整理。
* 组件`event`事件：组件自身的事件，例如`click`和`mouseenter`等等。
* 组件`$emit`事件：组件向父组件触发的事件，例如`change`事件。

根据以上的分类，我们使用[百度脑图](https://naotu.baidu.com/)，整理后的逻辑分析如下：
<br/>
<br/>
![Star组件逻辑分析](../../images/xmind/star.png)

## Star组件开发
根据以上逻辑分析，我们将`Star`组件分为两步来实现：
* 基础实现：先实现`Star`组件最主要的功能，例如`v-model/value`属性的实现。
* 组件完善：按思维导图，详细完善`Star`组件的相关逻辑。

### 准备
划分好实现步骤后，我们需要做一些前期的准备工作，按照我们在[准备](/guide/components/#开发规则)中提到的目录结构和规则，我们需要做一下步骤：

在`src/base`目录下新建`star`目录，并在新建的`src/base/star`目录中，再新建两个文件，分别是`index.js`和`star.vue`。
```sh
# 新建 star目录
$ mkdir star

# 新建index.js和star.vue文件
$ cd star
$ touch index.js or echo index.js
$ touch star.vue or echo star.vue
```
新建完毕后，`src/base`目录结构如下
```sh
|-- base
|   |-- star
|   |   |-- index.js
|   |   |-- star.vue
```
同时我们为`star.vue`文件，撰写以下基础代码：
```html
<template>
  <div class="mooc-star">
    star
  </div>
</template>
```
```vue
<script>
export default {
  name: 'MoocStar'
}
</script>
```
为`index.js`撰写一下完整代码：
```js
import Star from './star.vue'

Star.install = function (Vue) {
  Vue.component(Star.name, Star)
}

export default Star
```

随后，我们需要在根目录下新建`register.js`文件(文件名任意)，并撰写以下代码：

```js
// 通过别名访问，可以在`vue.config.js`中配置。
import Star from 'base/star/index.js'

const components = [
  Star
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install, // 这个方法非常重要
  Star
}
```

最后我们需要在项目的入口文件`main.js`中，引入`register.js`文件，像下面这样：
```js
// ...省略其它部分
import Mooc from './register.js'
Vue.use(Mooc)

// ...省略其它部分
```

在以上步骤都正确完成后，我们在任意已经路由注册过的页面，使用`mooc-star`组件，当出现`star`文本内容即意味着`Star`组件以及全局注册成功了。

### Star组件基础实现
根据我们个人对于`Star`组件最主要的功能理解，我们将`props`属性和`event`事件做如下划分：

`props`入参：
* `value`：星级评分的分值。
* `color`：激活时星星的颜色。
* `disabled`：只读模式。
* `showValue`：是否显示评分内容。

`event`事件：
* `mouseenter`：鼠标移入事件。
* `mousenleave`：鼠标移出事件。
* `click`：鼠标点击事件。
### Star组件完善

## Star组件未来计划

## Star组件文档
在以上`Star`组件完善以后，我们将得到一个比较完整的星级评分组件，但仅仅只是有组件对我们来说并不是十分足够的，我们还需要撰写一份关于`Star`组件的使用文档，组件文档结构按照以下内容来撰写：
* 用法：`Star`组件的用法以及对应的案例。
* 属性：`Star`组件每一个`props`属性的描述，包含类型，默认值以及说明。
* 事件：`Star`组件相关的事件说明以及对应的案例。
<br/>

`Star`组件对应的文档地址为[Star组件文档](/components/base/star#用法)，你可以点击这个地址查看更对内容。