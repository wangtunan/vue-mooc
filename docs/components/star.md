# Star 星级评分

## 用法

### 基础用法
::: tip
通过传递`value`值，来显示多少个星。
:::
<div class="container">
  <star :value="1" :size="20"/>
</div>

:point_up_2: :point_up_2: :point_up_2:你可以用鼠标在上面滑动观看试试效果。

```html
<star :value="1" :size="20"/>
```

### 不同的颜色
::: tip
通过传递`color`，来实现不同颜色的星级评分组件。
:::
<div class="container">
  <star :value="1" :size="20"  />
  <star :value="2" :size="20" color="#58a" />
  <star :value="3" :size="20" color="#f60"/>
</div>
<div class="container">
  <div>默认颜色#ff9900</div>
  <div>自定义颜色#58a</div>
  <div>自定义颜色#f60</div> 
</div>

```html
<!-- 默认 -->
<star :value="1" :size="40"  />
<!-- 自定义 -->
<star :value="2" :size="40" color="#58a" />
<!-- 自定义 -->
<star :value="3" :size="40" color="#f60"/>
```

#### 不同的大小
::: tip
通过传递`size`，单位是`px`，来控制不同大小的星级评分。
:::
<div class="container">
  <star :value="3" :size="20" />
  <star :value="3" :size="30" />
  <star :value="3" :size="40" />
</div>
<div class="container">
  <div>20px大小</div>
  <div>30px大小</div>
  <div>40px大小</div> 
</div>

```html
<!-- 20px -->
<star :value="3" :size="20" />
<!-- 30px -->
<star :value="3" :size="30" />
<!-- 40px -->
<star :value="3" :size="40" />
```

#### 不同个数的星星
::: tip
通过传递`max`，默认是5个，来控制显示多少个星。
:::
<div class="container">
  <star :value="3" :size="20" :max="3" />
  <star :value="3" :size="20" :max="5" />
  <star :value="3" :size="20" :max="10" />
</div>
<div class="container">
  <div>3个星</div>
  <div>5个星</div>
  <div>10个星</div> 
</div>

```html
<!-- 3个星 -->
<star :value="3" :size="20" :max="3" />
<!-- 5个星 -->
<star :value="3" :size="20" :max="5" />
<!-- 10个星 -->
<star :value="3" :size="20" :max="10" />
```

### 辅助文字

#### 分值
::: tip
通过传递`showValue`，默认值是`false`，来控制是否显示评分的分值。
:::
<div class="container">
  <star :value="3" :size="20" />
  <star :value="3" :size="20" :show-value="true"/>
</div>
<div class="container">
  <div>默认不显示分值</div>
  <div>显示分值</div>
</div>

```html
<!-- 默认不显示分值 -->
<star :value="3" :size="20" />
<!-- 显示分值 -->
<star :value="3" :size="20" :show-value="true"/>
```


#### 评分描述
::: tip
通过`showText`，默认值`false`，来控制显示相关评分描述。
:::
<div class="container">
  <star :value="3" :size="20" />
  <star :value="3" :size="20" :show-text="true"/>
</div>
<div class="container">
  <div>默认不显示评分描述</div>
  <div>显示评分描述</div>
</div>

```html
<!-- 不显示评分描述 -->
<star :value="3" :size="20" />
<!-- 显示评分描述 -->
<star :value="3" :size="20" :show-text="true"/>
```

#### 评分描述内容
::: tip
通过传递`texts`，默认值`['极差', '失望', '一般', '满意', '惊喜']`，来控制具体要显示的评分描述内容。
:::
<div class="container">
  <star :value="3" :size="20" />
  <star :value="3" :size="20" :show-text="true" :texts="['恶劣', '不满意', '一般', '满意', '超棒']"/>
</div>
<div class="container">
  <div>默认评分描述内容</div>
  <div>自定义评分描述内容</div>
</div>


```html
<star :value="3" :size="20" />
<star :value="3" :size="20" :show-text="true" :texts="texts"/>
```
```js
export default  {
  data () {
    return {
      texts: ['恶劣', '不满意', '一般', '满意', '超棒']
    }
  }
}
```

### 只读
::: tip
通过传递`disabled`，默认值为`false`，来控制评分组件是否为只读。
:::
<div class="container">
  <star :value="3" :size="20" />
  <star :value="3" :size="20" :disabled="true"/>
</div>
<div class="container">
  <div>默认非只读</div>
  <div>只读模式</div>
</div>

``` html
<!-- 默认非只读 -->
<star :value="3" :size="20" />
<!-- 只读 -->
<star :value="3" :size="20" :disabled="true"/>
```

## 属性
| 属性名称 | 类型 | 默认值 |  说明 |
|-----|--------|------------|------------------------------|
| value | [Number, String] | `0` |  评分组件的值  |
| size | [Number, String] | `14px` | 评分组件的大小  |
| max | Number | `5` |  评分组件多少个星  |
| color | String | `#ff9900` |  评分组件的颜色  |
| textColor | String | `#ff9900` |  评分组件辅助文字的颜色  |
| disabled | Boolean | `false` |  评分组件是否只读，只读模式下不触发`change`事件  |
| showValue | Boolean | `false` |  是否显示分值  |
| showText | Boolean | `false` |  是否显示评分描述  |
| texts | Array | `['极差','失望','一般','满意','惊喜']` |  评分描述内容  |

## 事件

| 事件名称 | 说明 | 回调参数 |
|---------- |-------------------------------- |---------- |
|change|非`disabled`状态点击时触发|改变后的分值|


### change事件
::: tip
非`disabled`状态下分值改变时触发此事件，参数为改变后的分值
:::

示例：
```html
<star :value="4" @change="handleStarChange"></star>
```
```js
export default {
  methods: {
    // 评分组件值更新事件
    handleStarChange (value) {
      console.log(value)
    }
  }
}
```
