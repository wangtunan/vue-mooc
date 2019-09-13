# Badge 标记

## 用法

### 基础用法
::: tip
通过传递`value`值，可以是数字，也可以是自定义的字符串，来显示消息的内容。
:::
<div class="badge-container">
  <badge :value="10">
    <div class="badge-btn">消息</div>
  </badge>
  <badge :value="90">
    <div class="badge-btn">消息</div>
  </badge>
  <badge value="new">
    <div class="badge-btn">消息</div>
  </badge>
  <badge value="hot">
    <div class="badge-btn">消息</div>
  </badge>
</div>

```html
<badge :value="10">
  <div class="badge-btn">消息</div>
</badge>
<badge :value="90">
  <div class="badge-btn">消息</div>
</badge>
<badge value="new">
  <div class="badge-btn">消息</div>
</badge>
<badge value="hot">
  <div class="badge-btn">消息</div>
</badge>
```

### 最大值
::: tip
可以通过传递`max`，来限制消息的数量。
:::
<div class="badge-container">
  <badge :value="10">
    <div class="badge-btn">消息</div>
  </badge>
  <badge :value="11" :max="10">
    <div class="badge-btn">消息</div>
  </badge>
  <badge :value="100" :max="99">
    <div class="badge-btn">消息</div>
  </badge>
</div>

```html
<!-- 正常 -->
<badge :value="10">
  <div class="badge-btn">消息</div>
</badge>
<!-- 最大值10 -->
<badge :value="11" :max="10">
  <div class="badge-btn">消息</div>
</badge>
<!-- 最大值99 -->
<badge :value="100" :max="99">
  <div class="badge-btn">消息</div>
</badge>
```

### 小原点
::: tip
可以通过传递`is-dot`为`true`，来控制显示小圆点。
:::
<div class="badge-container">
  <badge :value="10">
    <div class="badge-btn">消息</div>
  </badge>
  <badge :value="10" :is-dot="true">
    <div class="badge-btn">消息</div>
  </badge>
</div>

```html
<!-- 正常 -->
<badge :value="10">
  <div class="badge-btn">消息</div>
</badge>
<!-- 圆点显示 -->
<badge :value="10" :is-dot="true">
  <div class="badge-btn">消息</div>
</badge>
```

### 消息的类型
::: tip
通过传递`type`，其中`type`必须是基础类型`primary`,`success`,`warning`,`info`,`danger`其中之一，来控制显示不同类型的消息。
:::
<div class="badge-container">
  <badge :value="100" :max="99" type="danger">
    <div class="badge-btn">消息</div>
  </badge>
  <badge :value="100" :max="99" type="primary">
    <div class="badge-btn">消息</div>
  </badge>
  <badge :value="100" :max="99" type="success">
    <div class="badge-btn">消息</div>
  </badge>
  <badge :value="100" :max="99" type="warning">
    <div class="badge-btn">消息</div>
  </badge>
  <badge :value="100" :max="99" type="info">
    <div class="badge-btn">消息</div>
  </badge>
</div>

```html
<!-- 默认类型 -->
<badge :value="100" :max="99" type="danger">
  <div class="badge-btn">消息</div>
</badge>
<!-- 正常 -->
<badge :value="100" :max="99" type="primary">
  <div class="badge-btn">消息</div>
</badge>
<!-- 成功 -->
<badge :value="100" :max="99" type="success">
  <div class="badge-btn">消息</div>
</badge>
<!-- 警告 -->
<badge :value="100" :max="99" type="warning">
  <div class="badge-btn">消息</div>
</badge>
<!-- 内容提示 -->
<badge :value="100" :max="99" type="info">
  <div class="badge-btn">消息</div>
</badge>
```



### 是有隐藏
::: tip
可以通过传递`hidden`为`true`，来控制是否显示消息内容。
:::
<div class="badge-container">
  <badge :value="10">
    <div class="badge-btn">消息</div>
  </badge>
  <badge :value="10" :hidden="true">
    <div class="badge-btn">消息</div>
  </badge>
</div>

```html
<!-- 正常 -->
<badge :value="10">
  <div class="badge-btn">消息</div>
</badge>
<!-- 隐藏消息 -->
<badge :value="10" :hidden="true">
  <div class="badge-btn">消息</div>
</badge>
```

## 属性
| 属性名称 | 类型 | 默认值 |  说明 |
|-----|--------|------------|------------------------------|
| value | [Number, String] | 无默认值 |  消息的内容  |
| max | Number | 无默认值 |  当消息超过`max`值时，以`{max}+`的形式显示  |
| is-dot | Boolean | `false` |  是否小圆点显示  |
| hidden | Boolean | `false` |  消息提示是否隐藏  |
| type | String | `danger` |  `primary`,`success`,`warning`,`info`,`danger`其中之一 |

<style lang="stylus">
  .badge-container
    margin-top: 20px;
    .badge
      margin-right: 60px
      .badge-btn
        padding: 9px 15px;
        border: 1px solid #dcdfe6;
        border-radius: 3px;
        background-color: #fff;
        font-size: 12px;
        color: #606266;
        cursor: pointer;
</style>