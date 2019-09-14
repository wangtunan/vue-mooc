# Timeline 时间线

## 用法
::: tip
时间线组件，用`timeline`和`timeline-item`两个组件，通过传递`timestamp`来结合一起使用。
:::

### 基础用法
::: tip
通过在`timeline-item`上循环遍历输出`timestamp`和自定义内容，达到组合成时间线的目的。
:::
<div class="timeline-container">
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"
      :status="item.status"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
  <!-- vuepress bug -->
  <mooc-timeline :reverse="true">
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"
      :status="item.status"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
</div>
<div class="timeline-container tips">
  <div>正序</div>
  <div>反序</div>
</div>

```html {11}
<!-- 正序 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :key="index"
    :timestamp="item.timestamp"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
<!-- 反序 -->
<mooc-timeline :reverse="true">
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :key="index"
    :timestamp="item.timestamp"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
```

```js
export default {
  data () {
    return {
      timeline: []
    }
  },
  created () {
    this.timeline = [
      { timestamp: '2015-09-01', content: '成立' },
      { timestamp: '2016-09-01', content: '高速发展' },
      { timestamp: '2018-09-01', content: '上市' },
      { timestamp: '2019-09-13', content: '至今' }
    ]
  }
}
```


### 不同的颜色
::: tip
通过传递`color`，来实现不同颜色的`timeline`节点。
:::

<div class="timeline-container">
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
  <!--  -->
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"
      :color="item.color"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
</div>

<div class="timeline-container tips">
  <div>默认颜色</div>
  <div>自定义颜色</div>
</div>

```html {14}
<!-- 默认颜色 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :timestamp="item.timestamp"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
<!-- 自定义颜色 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :timestamp="item.timestamp"
    :color="item.color"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
```

```js
export default {
  data () {
    return {
      timeline: []
    }
  },
  created () {
    this.timeline = [
      { timestamp: '2015-09-01', color: '#58a', content: '成立' },
      { timestamp: '2016-09-01', color: '#f60', content: '高速发展' },
      { timestamp: '2018-09-01', color: '#f01414', content: '上市' },
      { timestamp: '2019-09-13', color: '#00b43c', content: '至今' }
    ]
  }
}
```

### 不同的类型
::: tip
通过传递`type`，来实现不同类型的`timeline`节点，其中`type`为基础类型`primary`, `success`, `warning`, `danger`和`info`其中之一，它和`color`属性一样，只影响节点的颜色。
:::

<div class="timeline-container">
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
  <!--  -->
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"
      :type="item.type"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
</div>

<div class="timeline-container tips">
  <div>默认</div>
  <div>自定义类型</div>
</div>

```html {14}
<!-- 默认 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :timestamp="item.timestamp"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
<!-- 自定义类型 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :timestamp="item.timestamp"
    :type="item.type"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
```

```js
export default {
  data () {
    return {
      timeline: []
    }
  },
  created () {
    this.timeline = [
      { timestamp: '2015-09-01', type: 'primary', content: '成立' },
      { timestamp: '2016-09-01', type: 'warning', content: '高速发展' },
      { timestamp: '2018-09-01', type: 'danger', content: '上市' },
      { timestamp: '2019-09-13', type: 'success', content: '至今' }
    ]
  }
}
```



### 不同的大小
::: tip
通过传递`size`，来实现不同大小的`timeline`节点，其中`size`为必须为`small`, `normal`, `medium`和`large其中之一，它只影响节点的大小。
:::

<div class="timeline-container">
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
  <!--  -->
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"
      :color="item.color"
      :size="item.size"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
</div>

<div class="timeline-container tips">
  <div>默认12px</div>
  <div>自定义大小</div>
</div>

```html {14}
<!-- 默认 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :timestamp="item.timestamp"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
<!-- 自定义类型 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :timestamp="item.timestamp"
    :type="item.type"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
```

```js
export default {
  data () {
    return {
      timeline: []
    }
  },
  created () {
    this.timeline = [
      { timestamp: '2015-09-01', color: '#58a', size: 'small', content: '成立' },
      { timestamp: '2016-09-01', color: '#f60', size: 'normal', content: '高速发展' },
      { timestamp: '2018-09-01', color: '#f01414', size: 'medium', content: '上市' },
      { timestamp: '2019-09-13', color: '#00b43c', size: 'large', content: '至今' }
    ]
  }
}
```


### 不同的位置
::: tip
通过传递`placement`，其中值必须为`top`或者`bottom`其中之一，来控制时间戳显示的位置。
:::
<div class="timeline-container">
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
  <!--  -->
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"
      :placement="item.placement"
      :color="item.color"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
</div>

<div class="timeline-container tips">
  <div>默认底部</div>
  <div>自定义顶部</div>
</div>

```html {14}
<!-- 默认底部 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :timestamp="item.timestamp"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
<!-- 自定义顶部 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :timestamp="item.timestamp"
    :placement="item.placement"
    :color="item.color"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
```

```js
export default {
  data () {
    return {
      timeline: []
    }
  },
  created () {
    this.timeline = [
      { timestamp: '2015-09-01', color: '#58a', size: 'small', content: '成立', placement: 'top' },
      { timestamp: '2016-09-01', color: '#f60', size: 'normal', content: '高速发展', placement: 'top' },
      { timestamp: '2018-09-01', color: '#f01414', size: 'medium', content: '上市', placement: 'top' },
      { timestamp: '2019-09-13', color: '#00b43c', size: 'large', content: '至今', placement: 'top' }
    ]
  }
}
```
### 是否显示时间戳
::: tip
通过传递`hideTimestamp`，来控制是否显示时间戳。
:::

<div class="timeline-container">
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
  <!--  -->
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :hide-timestamp="true"
      :timestamp="item.timestamp"> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
</div>

<div class="timeline-container tips">
  <div>默认</div>
  <div>不显示时间戳</div>
</div>

```html {13}
<!-- 默认 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :timestamp="item.timestamp"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
<!-- 不显示时间戳 -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :hide-timestamp="true"
    :timestamp="item.timestamp"> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
```
```js
export default {
  data () {
    return {
      timeline: []
    }
  },
  created () {
    this.timeline = [
      { timestamp: '2015-09-01', content: '成立' },
      { timestamp: '2016-09-01', content: '高速发展' },
      { timestamp: '2018-09-01', content: '上市' },
      { timestamp: '2019-09-13', content: '至今' }
    ]
  }
}
```

### 自定义节点
::: tip
除了通过以上的属性来控制`timeline`以外，我们还可以通过插槽的形式，定义自定义节点。
:::

<div class="timeline-container">
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      :timestamp="item.timestamp"> 
      <div class="my-dot1" slot="dot">{{index+1}}</div> 
      {{item.content}}
    </mooc-timeline-item>
  </mooc-timeline>
</div>

```html
<!-- 自定义dot -->
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    :timestamp="item.timestamp"> 
    <div class="my-dot" slot="dot">{{index+1}}</div> 
    {{item.content}}
  </mooc-timeline-item>
</mooc-timeline>
```
```css
.my-dot
  z-index: 10;
  position: relative;
  color: #fff;
  line-height: 20px
  &::after
    content: '';
    position: absolute;
    left: -5px;
    top: 0;
    width: 20px;
    height: 20px;
    background-color: #f60;
    transform: rotate(45deg);
```

### 自定义内容
::: tip
可以通过默认的内容插槽，来实现自定义的`content`。
:::
<div class="timeline-container">
  <mooc-timeline>
    <mooc-timeline-item
      v-for="(item,index) in timeline"
      placement="top"
      :timestamp="item.timestamp"> 
      <div class="my-content">{{item.content}}</div> 
    </mooc-timeline-item>
  </mooc-timeline>
</div>

```html
<mooc-timeline>
  <mooc-timeline-item
    v-for="(item,index) in timeline"
    placement="top"
    :timestamp="item.timestamp"> 
    <div class="my-content">{{item.content}}</div> 
  </mooc-timeline-item>
</mooc-timeline>
```

```css
.my-content
  width: 500px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 12px rgba(7,17,27,0.1);
```

## 属性

### timeline 属性

| 属性名称 | 类型 | 默认值 |  说明 |
|-----|--------|------------|------------------------------|
| reverse | Boolean | `false` |  是否反转时间轴  |

### timeline-item 属性
| 属性名称 | 类型 | 默认值 |  说明 |
|-----|--------|------------|------------------------------|
| timestamp | String | - |  时间戳  |
| hideTimestamp | Boolean | `false` |  是否隐藏时间轴  |
| placement | Sring | `bottom` |  时间轴的位置，必须为`top`或`bottom`之一  |
| size | Sring | `small` |  节点的大小，必须为`small`,`normal`,`medium`和`large`其中之一  |
| type | Sring | - |  节点的类型，必须为`primary`,`success`,`warning`,`danger`和`info`其中之一  |
| color | Sring | - |  节点的颜色，如同时传递了`type`，则`type`会被`color`覆盖，无效。  |


<script>
  export default {
    data () {
      return {
        timeline: []
      }
    },
    created () {
      this.timeline = [
        { timestamp: '2015-09-01', color: '#58a', size: 'small',  type: 'primary', content: '成立', placement: 'top' },
        { timestamp: '2016-09-01', color: '#f60', size: 'normal', type: 'warning', content: '高速发展', placement: 'top' },
        { timestamp: '2018-09-01', color: '#f01414', size: 'medium', type: 'danger', content: '上市', placement: 'top' },
        { timestamp: '2019-09-13', color: '#00b43c', size: 'large', type: 'success', content: '至今', placement: 'top' }
      ]
    }
  }
</script>

<style lang="stylus">
  .timeline-container
    margin-top: 20px;
    display: flex;
    align-items: center;
    &.tips
      margin-top: -10px;
      margin-bottom: 30px;
      & > div
        padding-left: 40px;
        font-weight: 700;
    & > ul, & > div
      flex: 1;
      .my-dot
        position: absolute;
        left: -5px;
        top: 0;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        background-color: #f01414;
        border-radius: 50%;
        color: #fff;
      .my-dot1
        z-index: 10;
        position: relative;
        color: #fff;
        line-height: 20px
        &::after
          z-index: -1;
          content: '';
          position: absolute;
          left: -5px;
          top: 0;
          width: 20px;
          height: 20px;
          background-color: #f60;
          transform: rotate(45deg);
      .my-content
        width: 500px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 2px 12px rgba(7,17,27,0.1);
</style>