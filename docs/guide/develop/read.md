# 专栏
::: tip
目录`src/pages/read`。
:::
`vue-mooc`中的专栏部分相对于真实慕课网中的专栏，做了一些稍微的改动：
* 移除了一些不必要的营销和广告部分。
* 按`前端开发`、`后端开发`等类型，增加了专栏分类功能。
## 专栏列表
在开发专栏列表页面之前，我们先屡清楚基本的`html`结构：
* `header`：放置专栏的`banner`图片等信息。
* `nav`：放置专栏分类筛选等信息。
* `list`：防止专栏列表内容等信息。
* `pagination`：公共分页部分信息。

在划分完以上基本的`html`结构以后，我们来实现以下基础的布局：
```html
<div class="read m-center">
  <!-- header -->
  <div class="read-header"></div>

  <!-- nav -->
  <div class="read-nav"></div>

  <!-- list -->
  <div class="read-list"></div>

  <!-- pagination -->
  <pagination :total.sync="total" />
</div>
```

由于专栏列表页相对来说内容比较少，布局也相对简单。所以我们并不会在这里大篇幅的一步一步讲述如何撰写`css`等方面的基础内容。值得一提的时，在做类型筛选的时候，我们定义了一个`filterReadList`的计算属性，她会自动根据你选择的类型，筛选出对应的专栏信息，像下面这样：
```js
export default {
  // 省略其它部分
  computed: {
    filterReadList () {
      let list = this.readList.slice()
      let currType = this.typeList[this.currentIndex]
      if (this.currentIndex !== 0) {
        list = list.filter(item => item.type === currType)
      }
      return list
    }
  }
}
```

## 专栏详情
::: tip
目录`src/pages/read-detail`。
:::
相比于真实慕课网的专栏详情，我们并没有做专栏的阅读页，仅仅只是提供了一个专栏简介和专栏目录等信息。
相同的道理，我们在开发专栏详情之前要先规划好基础的`html`结构：
* `header`：专栏的简介信息，包括封面，价格以及作者介绍等等。
* `list`：专栏的目录结构，放置专栏的章节信息。

在规划好以上基础`html`结构以后，我们可以得到如下的代码：
```html
<div class="read-detail">
  <!-- header -->
  <div class="read-header"></div>

  <!-- list -->
  <div class="read-list"></div>
</div>
```
规划好基础的布局结构以后我们需要实际开发，填写一些`css`和`js`方面的代码。值得一提的是，在专栏目录的结构中，我们使用到了嵌套`dl、dt和dd`来实现着部分的布局，如下是一个简单的案例：
```html
<dl class="left">
  <dt class="read-title">
    课程目录
    <span class="total">已更新14个小节</span>
  </dt>
  <dd v-for="(chapter,index) in readDetail.chapter" :key="index" class="read-item">
    <dl>
      <dt class="chapter-title">
        {{ chapter.title }}
      </dt>
      <dd v-for="(term, index) in chapter.data" :key="index">
        <p>
          <span class="term-title">{{ term.title }}</span>
          <span v-if="term.isTry" class="try-btn">试读</span>
        </p>
        <span class="time">{{ term.time }}</span>
      </dd>
    </dl>
  </dd>
</dl>
```
**问题**：那么为什么我们不使用嵌套`ul li`标签的形式而采用以上的解决方案呢？<br/>
**答案**：在专栏目录中，我们发现每一章节都有一个标题，它和专栏目录章节信息相对来说并不是同一类型，仅仅只是作为一个提示而已。如果我们使用嵌套`ul li`标签的形式，势必会造成章节标题和章节信息使用了同一个`li`标签，不够语义化。

## 推荐专栏
::: tip
目录`src/components/recommend/recommend-read.vue`。
:::
在开发专栏详情页的时候，你可以已经发现了我们是把章节放置在左侧，右侧是空出来的，这是因为右侧我们打算放置专栏推荐内容。<br/>
显而易见，`recommend-read`推荐专栏部分可能会在其它地方使用到，所以我们把它提取为业务公共组件，放置在`components`目录下。对于`recommend-read`组件的梳理如下：<br/>
`props`入参：
* `title`: 推荐专栏标题，`String`类型。
* `list`：推荐专栏列表数据，`Array`类型。

`event`：
* `handleReadItemClick`：推荐专栏点击事件，跳转至对应专栏详情。
* `handleMoreClick`：更对专栏推荐点击事件，跳转至专栏列表页面。

根据以上的梳理，我们可以得到以下基础代码：
基础`html`结构：
```html
<div class="recommend">
  <h3 v-if="title" class="recommend-title">
    {{ title }}
    <span class="more" @click="handleMoreClick">更多></span>
  </h3>
  <ul>
    <li
      v-for="(item,index) in list"
      :key="index"
      class="recommend-item"
      @click="handleReadItemClick"
    >
      <div class="img-box">
        <img :src="item.img" alt="">
      </div>
      <div class="recommend-content">
        <p class="name ellipsis"> {{ item.title }} </p>
        <p class="other-info">
          <span class="trem"> 共{{ item.term }}小节 </span>
          <span class="number"> 共{{ item.term }}人购买 </span>
        </p>
        <p class="price">
          <span class="price"> ¥{{ item.price }} </span>
          <span class="subscribe"> 立即订阅 </span>
        </p>
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
  },
  methods: {
    handleMoreClick () {
      this.$router.push('/read')
    },
    handleReadItemClick () {
      let random = new Date().getTime()
      this.$router.push(`/read/${random}`)
    }
  }
}
```