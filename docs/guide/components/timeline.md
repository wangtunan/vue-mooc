# Timeline 时间线

## 逻辑分析
由于`Timeline`时间线组件相对来说比较简单，只有几个`props`入参，所以我们整理后的思维导图如下：

![Timeline组件逻辑分析](../../images/xmind/timeline.png)

## 组件开发
对于简单的`Timeline`组件来说，我们直接一步到位，不需要拆分基础实现和完善。

### 准备
在以上思维导图整理完毕后，我们需要做一些前期的准备工作，按照我们在[准备](/guide/components/#开发规则)中提到的目录结构和规则，我们需要做以下步骤：

在`src/base`目录下新建`timeline`目录，并在新建的`src/base/timeline`目录中，再新建两个文件，分别是`index.js`和`timeline.vue`。
```sh
# 新建 timeline目录
$ mkdir timeline

# 新建index.js和timeline.vue文件
$ cd star
$ touch index.js
$ touch timeline.vue
```
新建完毕后，`src/base`目录结构如下：
```sh
|-- base
|   |-- star
|   |   |-- index.js
|   |   |-- star.vue
|   |-- badge
|   |   |-- index.js
|   |   |-- badge.vue
|   |-- switch
|   |   |-- index.js
|   |   |-- switch.vue
|   |-- timeline
|   |   |-- index.js
|   |   |-- timeline.vue
```
同时我们为`timeline.vue`文件，撰写以下基础代码：
::: warning
`timeline`组件注册参考`Star`组件。
:::
```html
<template>
  <div class="mooc-timeline">
    <slot></slot>
  </div>
</template>
```
```js
<script>
export default {
  name: 'MoocTimeline'
}
</script>
```

在`src/base`目录下新建`timeline-item`目录，并在新建的`src/base/timeline-item`目录中，再新建两个文件，分别是`index.js`和`timeline-item.vue`。
```sh
# 新建 timeline-item目录
$ mkdir timeline-item

# 新建index.js和timeline-item.vue文件
$ cd star
$ touch index.js
$ touch timeline-item.vue
```
新建完毕后，`src/base`目录结构如下：
```sh
|-- base
|   |-- star
|   |   |-- index.js
|   |   |-- star.vue
|   |-- badge
|   |   |-- index.js
|   |   |-- badge.vue
|   |-- switch
|   |   |-- index.js
|   |   |-- switch.vue
|   |-- timeline
|   |   |-- index.js
|   |   |-- timeline.vue
|   |-- timeline-item
|   |   |-- index.js
|   |   |-- timeline-item.vue
```
同时我们为`timeline-item.vue`文件，撰写以下基础代码：
::: warning
`timeline-item`组件注册参考`Star`组件。
:::
```html
<template>
  <div class="mooc-timeline-item">
    timeline
  </div>
</template>
```
```js
<script>
export default {
  name: 'MoocTimelineItem'
}
</script>
```

在以上步骤都正确完成后，我们在任意已经注册路由过的页面，使用如下代码使用`timeline`组件，当出现`timeline`文本内容即意味着`timeline`和`timeline-item`组件已经全局注册成功了。
```html
<mooc-timeline>
  <mooc-timeline-item></mooc-timeline-item>
</mooc-timeline>
```

### Timeline开发
根据以上思维导图，我们发现`timeline`父组件只有一个`props`属性，所以我们可以使用`render`的方式来渲染。
::: tip
使用`render`方式渲染，就不需要再写`template`部分。
:::
`timeline`父组件的`js`代码如下：
```js
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
    let classs = {
      'mooc-timeline': true
    }
    if (reverse) {
      slots = slots.reverse()
    }

    return (
      <ul class={ classs }>
        { slots }
      </ul>
    )
  }
}
```
`timeline`父组件的`css`代码如下：
```stylus
.mooc-timeline
  list-style: none;
```

**代码分析**：
* `render`：除了我们常见的`template`方式撰写组件以外，我们还可以使用`render`方式去渲染。二者区别在于：`render`函数不会再像`template`一样走模板编译过程，其中`render`部分的书写格式是`JSX`方式，你可以通过查看官网[Render渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)阅读更多关于`render`的内容。
* `reverse`：根据`reverse`的值，又因为`slots`是一个数组，所以我们可以使用`slots.reverse`进行节点内容的反转，从而达到让`timeline`时间线组件按正序或者反序排列的目的。

### TimelineItem开发


## 未来计划

## 组件文档

在以上`Timeline`组件完善以后，我们将得到一个比较完整的时间线组件，但仅仅只是有组件对我们来说并不是十分足够的，我们还需要撰写一份关于`Timeline`组件的使用文档，组件文档结构按照以下内容来撰写：
* 用法：`Timeline`组件的用法以及对应的案例。
* 属性：`Timeline`组件每一个`props`属性的描述，包含类型，默认值以及说明。
<br/>

`Timeline`组件对应的文档地址为[Timeline组件文档](/components/base/timeline#用法)，你可以点击这个地址查看更对内容。