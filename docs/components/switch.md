# Switch 开关

## 用法

### 基础用法
::: tip
通过`v-model`传递绑定一个变量，来控制显示`switch`的状态。
:::
<div class="switch-container">
  <mooc-switch v-model="value1"></mooc-switch>
</div>

```html
<mooc-switch v-model="value1"></mooc-switch>
```
```js
export default {
  data () {
    return {
      value1: true
    }
  }
}
```

### 不同的宽度
::: tip
通过传递`width`属性，来控制`switch`的宽度，默认值为`40px`。
:::
<div class="switch-container">
  <mooc-switch v-model="value2"></mooc-switch>
  <mooc-switch v-model="value3" width="50"></mooc-switch>
  <mooc-switch v-model="value4" width="60"></mooc-switch>
</div>
<div class="switch-container">
  <div>默认40px</div>
  <div>自定义50px</div>
  <div>自定义60px</div> 
</div>

```html
<!-- 默认大小 -->
<mooc-switch v-model="value2"></mooc-switch>
<!-- 自定义大小 -->
<mooc-switch v-model="value3" width="50"></mooc-switch>
<mooc-switch v-model="value4" width="60"></mooc-switch>
```
```js
export default {
  data () {
    return {
      value2: true,
      value3: true,
      value4: true
    }
  }
}
```

### 禁用
::: tip
通过传递`disabled`属性，来控制`switch`是否可用。
:::
<div class="switch-container">
  <mooc-switch v-model="value5"></mooc-switch>
  <mooc-switch v-model="value6" :disabled="true"></mooc-switch>
</div>
<div class="switch-container">
  <div>可用</div>
  <div>禁用</div>
</div>

```html
<!-- 可用 -->
<mooc-switch v-model="value5"></mooc-switch>
<!-- 禁用 -->
<mooc-switch v-model="value6" :disabled="true"></mooc-switch>
```

```js
export default {
  data () {
    return {
      value5: true,
      value6: true
    }
  }
}
```

### 不同的颜色
::: tip
通过传递`active`对象的`color`属性，用来控制显示不同颜色的`switch`。
:::
<div class="switch-container">
  <mooc-switch v-model="value7"></mooc-switch>
  <mooc-switch v-model="value8" :active="active1" :in-active="inActive1"></mooc-switch>
</div>
<div class="switch-container">
  <div>默认颜色</div>
  <div>自定义颜色</div>
</div>

```html
<!-- 默认颜色 -->
<mooc-switch v-model="value7"></mooc-switch>
<!-- 自定义颜色 -->
<mooc-switch v-model="value8" :active="active1" :in-active="inActive1"></mooc-switch>
```

```js
export default {
  data () {
    return {
      value7: true,
      value8: true,
      active1: {
        color: '#f60'
      },
      inActive1: {
        color: '#58a'
      }
    }
  }
}
```

### 辅助文字
<div class="switch-container">
  <mooc-switch v-model="value9"></mooc-switch>
  <mooc-switch v-model="value10" :active="active2" :in-active="inActive2"></mooc-switch>
</div>
<div class="switch-container">
  <div>默认</div>
  <div>自定义文字</div>
</div>

```html
<mooc-switch v-model="value9"></mooc-switch>
<mooc-switch v-model="value10" :active="active2" :in-active="inActive2"></mooc-switch>
```

```js
export default {
  data () {
    return {
      value9: true,
      value10: true,
      active2: {
        text: '按年付'
      },
      inActive2: {
        text: '按月付'
      }
    }
  }
}
```

## 属性
| 属性名称 | 类型 | 默认值 |  说明 |
|-----|--------|------------|------------------------------|
| value | [Boolean, Number, String] | `false` |  状态  |
| width | [Number, String] | `40px` | 宽度  |
| disabled | Boolean | `false` |  是否禁用  |
| active | Object | - |  传递有`active.color`属性，可用来显示激活时的颜色<br/> 传递有`active.text`属性，可用来显示激活时的辅助文字 |
| inActive | Object | - |  传递有`inActive.color`属性，可用来显示未激活时的颜色 <br/> 传递有`inActive.text`属性，可用来显示激活时的辅助文字 |


## 事件

### change事件
::: tip
在非`disabled`状态下，此`change`事件有效，回调参数为更新后的值
:::

```html
<mooc-switch v-model="value1" @change="handleSwitchChange"></mooc-switch>
```
```js
export default {
  data () {
    return {
      value1: true
    }
  },
  methods: {
    // 值更新
    handleSwitchChange (val) {
      console.log(val)
    }
  }
}
```

<script>
 export default {
   data () {
     return {
       value1: true,
       value2: true,
       value3: true,
       value4: true,
       value5: true,
       value6: true,
       value7: true,
       value8: true,
       value9: true,
       value10: true,
       active1: {
         color: '#f60'
       },
       inActive1: {
         color: '#58a'
       },
       active2: {
         text: '按年付'
       },
       inActive2: {
         text: '按月付'
       }
     }
   }
 }
</script>

<style lang="stylus">
  .switch-container
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div
      flex: 1;
</style>