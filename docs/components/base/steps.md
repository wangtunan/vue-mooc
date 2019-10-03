# Steps 步骤条

## 用法

### 基础用法
::: tip
通过设置`active`当前激活项的索引，来设置当前步骤。
:::
<div class="step-container">
  <mooc-step :active="1" finish-status="success">
    <mooc-step-item title="未开始"></mooc-step-item>
    <mooc-step-item title="进行中"></mooc-step-item>
    <mooc-step-item title="已完成"></mooc-step-item>
  </mooc-step>
</div>

`html`代码：
```html
<mooc-step :active="1" finish-status="success">
  <mooc-step-item title="未开始"></mooc-step-item>
  <mooc-step-item title="进行中"></mooc-step-item>
  <mooc-step-item title="已完成"></mooc-step-item>
</mooc-step>
```

### Space不同的间隔
::: tip
通过设置`space`，来控制不同步骤之前的间隔。如果不设置，默认自适应。
:::
<div class="step-container">
  <mooc-step :active="1" :space="200">
    <mooc-step-item title="未开始"></mooc-step-item>
    <mooc-step-item title="进行中"></mooc-step-item>
    <mooc-step-item title="已完成"></mooc-step-item>
  </mooc-step>
  <mooc-step :active="1" :space="300">
    <mooc-step-item title="未开始"></mooc-step-item>
    <mooc-step-item title="进行中"></mooc-step-item>
    <mooc-step-item title="已完成"></mooc-step-item>
  </mooc-step>
  <mooc-step :active="1">
    <mooc-step-item title="未开始"></mooc-step-item>
    <mooc-step-item title="进行中"></mooc-step-item>
    <mooc-step-item title="已完成"></mooc-step-item>
  </mooc-step>
</div>

`html`代码：
```html
<!-- space 200 -->
<mooc-step :active="1" :space="200">
  <mooc-step-item title="未开始"></mooc-step-item>
  <mooc-step-item title="进行中"></mooc-step-item>
  <mooc-step-item title="已完成"></mooc-step-item>
</mooc-step>
<!-- space 200 -->
<mooc-step :active="1" :space="300">
  <mooc-step-item title="未开始"></mooc-step-item>
  <mooc-step-item title="进行中"></mooc-step-item>
  <mooc-step-item title="已完成"></mooc-step-item>
</mooc-step>
<!-- 自适应 -->
<mooc-step :active="1">
  <mooc-step-item title="未开始"></mooc-step-item>
  <mooc-step-item title="进行中"></mooc-step-item>
  <mooc-step-item title="已完成"></mooc-step-item>
</mooc-step>
```

### ProcessStatus当前状态
::: tip
通过设置`process-status`，可取值为`['finish', 'process', 'success', 'error']`其中之一。
:::
<div class="step-container">
  <mooc-step :active="1" process-status="error">
    <mooc-step-item title="未开始"></mooc-step-item>
    <mooc-step-item title="进行中"></mooc-step-item>
    <mooc-step-item title="已完成"></mooc-step-item>
  </mooc-step>
</div>

`html`代码：
```html
<mooc-step :active="1" process-status="error">
  <mooc-step-item title="未开始"></mooc-step-item>
  <mooc-step-item title="进行中"></mooc-step-item>
  <mooc-step-item title="已完成"></mooc-step-item>
</mooc-step>
```

### FinishStatus完成状态
::: tip
通过设置`finish-status`，来设置步骤完成是的状态，可取值为`['finish', 'process', 'success', 'error']`其中之一，默认为`finish`。
:::

<div class="step-container">
  <mooc-step :active="1" finish-status="success">
    <mooc-step-item title="未开始"></mooc-step-item>
    <mooc-step-item title="进行中"></mooc-step-item>
    <mooc-step-item title="已完成"></mooc-step-item>
  </mooc-step>
</div>

`html`代码：
```html
<mooc-step :active="1" finish-status="success">
  <mooc-step-item title="未开始"></mooc-step-item>
  <mooc-step-item title="进行中"></mooc-step-item>
  <mooc-step-item title="已完成"></mooc-step-item>
</mooc-step>
```

### AlignCenter居中
::: tip
通过设置`align-center`，来控制是否居中显示，默认值为`false`
:::

<div class="step-container">
  <mooc-step :active="1" :align-center="true">
    <mooc-step-item title="未开始" description="未开始未开始未开始未开始"></mooc-step-item>
    <mooc-step-item title="进行中" description="进行中进行中进行中进行中"></mooc-step-item>
    <mooc-step-item title="已完成" description="已完成已完成已完成已完成"></mooc-step-item>
  </mooc-step>
</div>

`html`代码：
```html
<mooc-step :active="1" :align-center="true">
  <mooc-step-item title="未开始" description="未开始未开始未开始未开始"></mooc-step-item>
  <mooc-step-item title="进行中" description="进行中进行中进行中进行中"></mooc-step-item>
  <mooc-step-item title="已完成" description="已完成已完成已完成已完成"></mooc-step-item>
</mooc-step>
```
### Direction不同的方向
::: tip
通过甚至`direction`，可选值`['horizontal', 'vertical']`其中之一，默认值`horizontal`。
:::

<div class="step-container">
  <div style="height:250px">
    <mooc-step :active="1" direction="vertical">
      <mooc-step-item title="未开始" description="未开始未开始未开始未开始"></mooc-step-item>
      <mooc-step-item title="进行中" description="进行中进行中进行中进行中"></mooc-step-item>
      <mooc-step-item title="已完成" description="已完成已完成已完成已完成"></mooc-step-item>
    </mooc-step>
  </div>
</div>

`html`代码：
```html
<!-- 跟随父元素高度自适应 -->
<div style="height:250px">
  <mooc-step :active="1" direction="vertical">
    <mooc-step-item title="未开始" description="未开始未开始未开始未开始"></mooc-step-item>
    <mooc-step-item title="进行中" description="进行中进行中进行中进行中"></mooc-step-item>
    <mooc-step-item title="已完成" description="已完成已完成已完成已完成"></mooc-step-item>
  </mooc-step>
</div>
```

### Title&Description多形式
::: tip
通过设置`title`或者`description`，来添加标题或者描述，这两个属性不仅支持属性形似，还支持插槽形式。
:::

<div class="step-container">
  <mooc-step :active="1">
    <mooc-step-item title="未开始" description="未开始未开始未开始未开始"></mooc-step-item>
    <mooc-step-item title="进行中" description="进行中进行中进行中进行中"></mooc-step-item>
    <mooc-step-item title="已完成" description="已完成已完成已完成已完成"></mooc-step-item>
  </mooc-step>
  <!-- 插槽形式 -->
  <mooc-step :active="1" style="margin-top: 10px;">
    <mooc-step-item>
      <span slot="title">未开始</span>
      <span slot="description">未开始未开始未开始未开始</span>
    </mooc-step-item>
    <mooc-step-item>
      <span slot="title">进行中</span>
      <span slot="description">进行中进行中进行中进行中</span>
    </mooc-step-item>
    <mooc-step-item>
      <span slot="title">已完成</span>
      <span slot="description">已完成已完成已完成已完成</span>
    </mooc-step-item>
  </mooc-step>
</div>

`html`代码：
```html
<!-- 属性形式 -->
 <mooc-step :active="1">
  <mooc-step-item title="未开始" description="未开始未开始未开始未开始"></mooc-step-item>
  <mooc-step-item title="进行中" description="进行中进行中进行中进行中"></mooc-step-item>
  <mooc-step-item title="已完成" description="已完成已完成已完成已完成"></mooc-step-item>
</mooc-step>
<!-- 插槽形式 -->
<mooc-step :active="1">
  <mooc-step-item>
    <span slot="title">未开始</span>
    <span slot="description">未开始未开始未开始未开始</span>
  </mooc-step-item>
  <mooc-step-item>
    <span slot="title">进行中</span>
    <span slot="description">进行中进行中进行中进行中</span>
  </mooc-step-item>
  <mooc-step-item>
    <span slot="title">已完成</span>
    <span slot="description">已完成已完成已完成已完成</span>
  </mooc-step-item>
</mooc-step>
```
### Icon步骤图标
::: tip
通过设置`icon`，来实现带图标的步骤，它同样支持属性和插槽的形式。
:::

<div class="step-container">
  <mooc-step :active="1">
    <mooc-step-item title="未开始">
      <i class="iconfont" slot="icon">&#xe629;</i>
    </mooc-step-item>
    <mooc-step-item title="进行中">
      <i class="iconfont" slot="icon">&#xe649;</i>
    </mooc-step-item>
    <mooc-step-item title="已完成">
      <i class="iconfont" slot="icon">&#xe668;</i>
    </mooc-step-item>
  </mooc-step>
</div>

`html`代码：
```html
<mooc-step :active="1">
  <mooc-step-item title="未开始">
    <i class="iconfont" slot="icon">&#xe629;</i>
  </mooc-step-item>
  <mooc-step-item title="进行中">
    <i class="iconfont" slot="icon">&#xe649;</i>
  </mooc-step-item>
  <mooc-step-item title="已完成">
    <i class="iconfont" slot="icon">&#xe668;</i>
  </mooc-step-item>
</mooc-step>
```

## MoocStep属性
| 属性名称 | 类型 | 默认值 |  说明 |
|-----|--------|------------|------------------------------|
| active | Number | `0` |  当前激活步骤的索引  |
| direction | String | `horizontal` |  `vertical` / `horizontal`，其中之一  |
| space | Number | - |  步骤条之间的距离，不设置将自适应  |
| processStatus | String | - |  当前激活步骤的状态，可选值`finish` / `process` / `success` / `error`  |
| finishStatus | String | `finish` |  步骤完成时的状态，可选值`finish` / `process` / `success`  `error`  |
| alignCenter | Boolean | `fasle` |  是否居中布局  |


## MoocStepItem属性
| 属性名称 | 类型 | 默认值 |  说明 |
|-----|--------|------------|------------------------------|
| title | String | - |  标题  |
| description | String | - |  描述  |
| icon | String | - |  图标  |
| status | String | - |  状态，可选值`finish `/ `process`  /`success` / `error`  |

## MoocStepItem插槽
| name |   说明 |
|-----|--------|------------|------------------------------|
| title |  自定义插槽标题  |
| description | 自定义插槽描述  |
| icon |  自定义插槽图标  |

<style lang="stylus">
  .step-container
    margin-top: 40px;
    width: 80%;
</style>