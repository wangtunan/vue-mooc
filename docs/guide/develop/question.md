# 猿问
::: tip
目录`src/pages/question`。
:::
`vue-mooc`中的猿问部分相对于真实慕课网中的猿问，做了一些稍微的改动：
* 移除了一些不必要的广告部分。
* 添加按照关注问题的标签，筛选问题的功能。
* 因为某些原因去掉了猿问详情页面。

## 猿问列表
在开发猿问列表之前，我们同样需要弄清楚我们基本的`html`结构：
* `header`：放置猿问的`banner`图片和搜索等信息。
* `content`：采用左右两栏布局，左侧显示猿问列表；右侧显示回答排行榜。

在划分完以上基本的`html`结构以后，我们来实现以下基础的布局：
```html
<div class="question">
  <!-- 头部 -->
  <div class="question-header"></div>

  <!-- 内容部分 -->
  <div class="question-content-container">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</div>
```

与专栏列表一样，猿问列表相对来说内容较少，布局也比较简单。所以我们并不会一步一步的讲述如何撰写`css`等方面的内容。<br/>
根据猿问部分我们模拟的接口数据来看，我们需要在`html`结构中使用到`for`循环嵌套。第一层`for`循环是渲染列表的，第二层`for`循环是渲染猿问列表中的`tag`。
```html {1,12}
<li v-for="(item, index) in filterQuestionList" :key="index" class="question-item">
  <div class="finish">
    <span class="iconfont">&#xe786;</span>
    <span>{{ item.answer }}</span>
  </div>
  <div class="content-box">
    <h3 class="title">
      {{ item.title }}
    </h3>
    <p class="tag">
      <img :src="item.icon" alt="">
      <span v-for="(tag, index) in item.tags" :key="index" class="name"
      >{{ tag }}</span>
      <span class="view-box">
        <i class="iconfont">&#xe681;</i>
        <span class="view-number">{{ item.view }}</span>
      </span>
    </p>
  </div>
</li>
```

另外一个方面值得一提的，同样是我们会根据选择的标签，过滤猿问列表页的数据。定义一个`filterQuestionList`的计算属性，它根据当前选择的关注标签，自动返回对应的猿问列表数据。其中当选择全部时，返回全部数据。
```js
export default {
  // 省略其它
  computed: {
    filterQuestionList () {
      let list = this.questionList.slice()
      let like = this.like[this.currentIndex]
      if (like !== '全部') {
        return list.filter(item => item.tags.includes(like))
      } else {
        return list
      }
    }
  }
}
```

## 推荐作者
::: tip
目录`src/component/recommend/recommend-author`。
:::
我们可能已经发现了，在猿问列表的右侧空出来的内容是放置回答作者排行榜的，而这部分内容也可能在其它地方同样出现，所以我们把它提取为业务公共组件，放置在`components`目录。<br/>
根据我们的理解，我们对`recommend-author`组件的梳理如下：
`props`入参：
* `title`：推荐作者的标题，`String`类型。
* `list`: 排行榜的列表数据，`Array`类型。

`event`：因为唯一的点击事件是跳转着作者的个人中心，这里我们不做点击事件的处理。

根据以上梳理，我们可以得到以下基础代码：
基础`html`结构：
```html
<div class="recommend">
  <h3 class="recommend-title">
    {{ title }}
  </h3>
  <ul>
    <li v-for="(item,index) in list" :key="index" class="recommend-item">
      <div class="img-box">
        <img :src="item.avatar" alt="">
      </div>
      <div class="recommend-content">
        <p class="name ellipsis">
          {{ item.name }}
        </p>
        <p class="other-info">
          <span class="answer">{{ item.answer }}个回答</span>
          <span class="like">共{{ item.like }}个支持</span>
        </p>
        <span class="attention">+ 关注</span>
      </div>
    </li>
  </ul>
</div>
```

基础`javascript`代码：
```js
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
```