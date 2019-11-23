# Progress 进度条

## 用法

### 基础用法
::: tip
通过传递`percentage`，来控制进度条所占的比例。
:::
<div class="progress-container">
  <mooc-progress :percentage="47"></mooc-progress>
  <mooc-progress :percentage="67"></mooc-progress>
  <mooc-progress :percentage="87"></mooc-progress>
</div>

`html`代码：
```html
<mooc-progress :percentage="27"></mooc-progress>
<mooc-progress :percentage="67"></mooc-progress>
<mooc-progress :percentage="87"></mooc-progress>
```

### 不同的颜色
::: tip
通过传递`color`，来显示不同颜色的进度条。
:::
<div class="progress-container">
  <mooc-progress :percentage="67"></mooc-progress>
  <mooc-progress color="#58a" :percentage="67"></mooc-progress>
  <mooc-progress color="#f60" :percentage="67"></mooc-progress>
</div>

`html`代码：
```html
<!-- 默认颜色 -->
<mooc-progress :percentage="67"></mooc-progress>
<!-- 自定义颜色 -->
<mooc-progress color="#58a" :percentage="67"></mooc-progress>
<mooc-progress color="#f60" :percentage="67"></mooc-progress>
```

### 不同的大小
::: tip
通过传递`height`，默认值为`6px`，来控制显示不同大小的进度条。
:::
<div class="progress-container">
  <mooc-progress :percentage="67"></mooc-progress>
  <mooc-progress :height="10" :percentage="67"></mooc-progress>
  <mooc-progress :height="15" :percentage="67"></mooc-progress>
  <mooc-progress :height="20" :percentage="67"></mooc-progress>
</div>

`html`代码：
```html
<!-- 默认大小 -->
<mooc-progress :percentage="67"></mooc-progress>
<!-- 自定义大小 -->
<mooc-progress :height="10" :percentage="67"></mooc-progress>
<mooc-progress :height="15" :percentage="67"></mooc-progress>
<mooc-progress :height="20" :percentage="67"></mooc-progress>
```

### 进度文字是否内置
::: tip
通过传递`inside`，控制进度的文字内显，可以与`height`配合使用。
:::
<div class="progress-container">
  <mooc-progress :height="20" :percentage="67" :inside="true"></mooc-progress>
  <mooc-progress :height="24" :percentage="67" :inside="true"></mooc-progress>
  <mooc-progress :height="28" :percentage="67" :inside="true"></mooc-progress>
  <mooc-progress :height="32" :percentage="67" :inside="true"></mooc-progress>
</div>

`html`代码：
```html
<mooc-progress :height="20" :percentage="67" :inside="true"></mooc-progress>
<mooc-progress :height="24" :percentage="67" :inside="true"></mooc-progress>
<mooc-progress :height="28" :percentage="67" :inside="true"></mooc-progress>
<mooc-progress :height="32" :percentage="67" :inside="true"></mooc-progress>
```

### 是否显示进度文字
::: tip
通过传递`show-text`，来控制是否显示进度条文字。
:::
<div class="progress-container">
  <mooc-progress height="15" color="#58a" :percentage="67"></mooc-progress>
  <mooc-progress height="15" color="#f60" :percentage="67" :show-text="false"></mooc-progress>
</div>

`html`代码：
```html
<!-- 默认显示 -->
<mooc-progress height="15" color="#58a" :percentage="67"></mooc-progress>
<!-- 不显示 -->
<mooc-progress height="15" color="#f60" :percentage="67" :show-text="false"></mooc-progress>
```



## 属性
| 属性名称 | 类型 | 默认值 |  说明 |
|-----|--------|------------|------------------------------|
| percentage | Number | `0` |  进度条百分比  |
| color | String | `#409EFF` |  进度条颜色  |
| height | [Number,String] | `6` |  进度条的大小，单位`px`  |
| showText | Boolean |  `true` |  是否显示进度条文字  |
| inside | Boolean |  `false` |  进度条文字是否内置  |

<style lang="stylus">
  .progress-container
    margin-top: 20px;
    max-width: 600px;
    .progress
      margin: 10px 0;
</style>