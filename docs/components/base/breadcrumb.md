# Breadcrumb 面包屑导航

## 用法

### 基础用法
::: tip
通过传递`separator`，来实现自定义的分隔符，默认是`/`。
:::
<div class="breadcrumb-container">
  <mooc-breadcrumb separator="/">
    <mooc-breadcrumb-item to="/home" replace>
      首页
    </mooc-breadcrumb-item>
    <mooc-breadcrumb-item to="/home">
      活动管理
    </mooc-breadcrumb-item>
    <mooc-breadcrumb-item to="/home">
      活动列表
    </mooc-breadcrumb-item>
    <mooc-breadcrumb-item to="/home">
      活动详情
    </mooc-breadcrumb-item>
  </mooc-breadcrumb>
</div>


`html`代码：
```html
<mooc-breadcrumb separator="/">
  <mooc-breadcrumb-item>首页</mooc-breadcrumb-item>
  <mooc-breadcrumb-item>活动管理</mooc-breadcrumb-item>
  <mooc-breadcrumb-item>活动列表</mooc-breadcrumb-item>
  <mooc-breadcrumb-item>活动详情</mooc-breadcrumb-item>
</mooc-breadcrumb>
```

### To&Replace 路由链接
::: tip
通过`to`，设置面包屑活动项的调整路径，它同`vue-router`中的`to`一样;通过设置`replace`为`true`，实现路由跳转时，不向`history `中添加新记录。
:::
<div class="breadcrumb-container">
  <mooc-breadcrumb separator="/">
    <mooc-breadcrumb-item to="/home">
      首页
    </mooc-breadcrumb-item>
    <mooc-breadcrumb-item :to="{ path: '/home' }">
      活动管理
    </mooc-breadcrumb-item>
    <mooc-breadcrumb-item to="/home">
      活动列表
    </mooc-breadcrumb-item>
    <mooc-breadcrumb-item to="/home">
      活动详情
    </mooc-breadcrumb-item>
  </mooc-breadcrumb>
</div>

`html`代码：
```html
<mooc-breadcrumb separator="/">
  <mooc-breadcrumb-item to="/home">首页</mooc-breadcrumb-item>
  <mooc-breadcrumb-item :to="{ path: '/home' }">活动管理</mooc-breadcrumb-item>
  <mooc-breadcrumb-item to="/home">活动列表</mooc-breadcrumb-item>
  <mooc-breadcrumb-item to="/home" replace>活动详情</mooc-breadcrumb-item>
</mooc-breadcrumb>
```

### SeparatorIcon 自定义分隔符图标样式
::: tip
可以通过`separator-icon`，来实现自定义的图标。
:::

<div class="breadcrumb-container">
  <mooc-breadcrumb separator-icon="iconfont iconyou">
    <mooc-breadcrumb-item to="/home">
      首页
    </mooc-breadcrumb-item>
    <mooc-breadcrumb-item :to="{ path: '/home' }">
      活动管理
    </mooc-breadcrumb-item>
    <mooc-breadcrumb-item to="/home">
      活动列表
    </mooc-breadcrumb-item>
    <mooc-breadcrumb-item to="/home">
      活动详情
    </mooc-breadcrumb-item>
  </mooc-breadcrumb>
</div>

`html`代码：
```html
<mooc-breadcrumb separator-icon="iconfont iconyou">
  <mooc-breadcrumb-item to="/home">
    首页
  </mooc-breadcrumb-item>
  <mooc-breadcrumb-item :to="{ path: '/home' }">
    活动管理
  </mooc-breadcrumb-item>
  <mooc-breadcrumb-item to="/home">
    活动列表
  </mooc-breadcrumb-item>
  <mooc-breadcrumb-item to="/home">
    活动详情
  </mooc-breadcrumb-item>
</mooc-breadcrumb>
```

## 属性

### Breadcrumb属性
| 属性名称 | 类型 | 默认值 |  说明 |
|-----|--------|------------|------------------------------|
| separator | String | `/` |  分隔符  |
| separatorIcon | String | - |  自定义分隔符的图标样式，可以设置基于`iconfont`的图标。  |

### BreadcrumbItem属性
| 属性名称 | 类型 | 默认值 |  说明 |
|-----|--------|------------|------------------------------|
| to | [Object, String] | - |  `vue-router`的`to`是一样的用法，支持传递对象或者字符串路由。  |
| replace | Boolean | `false` |  活动项路由跳转时，是否向`history`中写入记录，设置`true`表示不写入。  |

<style lang="stylus">
  .breadcrumb-container
    margin: 30px 0;
</style>