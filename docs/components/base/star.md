# Star(星级评分)

## 用法

### 基础用法

#### 基础用法
::: tip
通过传递`value`值，来显示多少个星。
:::
<div class="container">
  <star :value="1" :size="40"/>
</div>

:point_up_2: :point_up_2: :point_up_2:你可以用鼠标在上面滑动观看试试效果。

```html
<star :value="1" :size="40"/>
```

#### 不同的颜色
::: tip
通过传递`color`，来实现不同颜色的星级评分组件。
:::
<div class="container">
  <star :value="1" :size="40"  />
  <star :value="2" :size="40" color="#58a" />
  <star :value="3" :size="40" color="#f60"/>
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
通过传递`max`，来控制显示多少个星。
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

### 辅助文字

#### 分值

#### 分值描述

### 只读

## 属性

## 事件

| 事件名称 | 说明 | 回调参数 |
|---------- |-------------------------------- |---------- |
|change|非disabled状态点击时触发|改变后的分值|
