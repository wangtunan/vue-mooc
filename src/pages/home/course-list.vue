<template>
  <div class="course-list-container m-center">
    <!-- 标题 -->
    <h2 class="home-title">
      <i class="title-icon left-icon" :style="getBackgroundPosition(true)" />
      {{ title }}
      <i class="title-icon right-icon" :style="getBackgroundPosition(false)" />
    </h2>

    <!-- 课程banner -->
    <div v-if="currentBanner && currentBanner.length > 0" class="split-banner">
      <div
        v-for="(item,index) in currentBanner"
        :key="index"
        class="split-banner-item"
      >
        <img :src="item.url" alt="">
        <h2 class="title main">
          {{ item.title }}
        </h2>
        <p class="title sub">
          {{ item.subtitle }}
        </p>
        <div class="mask" />
      </div>
    </div>

    <!-- 课程列表 -->
    <course-list v-if="list.length" class="course-list" :list="list" />
  </div>
</template>
<script>
import CourseList from 'components/course/course.vue'
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: String,
    position: {
      type: Number,
      default: 0
    }
  },
  created () {
    this.bannerList = {
      easy: [
        { 
          title: "站上微信小程序风口，实现职业华丽转身",
          subtitle: "入门技能+项目开发，逐步深入学习微信小程序开发",
          url: "https://img.mukewang.com/5cbd837c0001b18b05670108.jpg"
        },
        { 
          title: "慕课微课",
          subtitle: "超值课程最低一元体验",
          url: "https://img.mukewang.com/5bf224930001991905670108.jpg"
        }
      ],
      improve: [
        { 
          title: "Vue高级工程师实战之路",
          subtitle: "从Vue基础语法入门最流行的SSR技术实现，完美学习路线打造快速晋升之路！",
          url: "https://img.mukewang.com/5bf225290001b0f105670108.jpg"
        },
        { 
          title: "Python开发一站式学习",
          subtitle: "从入门到开发，学习 好玩 好用 好未来的Python语言",
          url: "https://img.mukewang.com/5b86024c0001e0a805670108.jpg"
        }
      ],
      advanced: [
        { 
          title: "盘点最主流的前端框架有哪些？",
          subtitle: "上万人的选择打消你对主流框架的疑惑",
          url: "https://img.mukewang.com/5b8602900001bd8905670108.jpg"
        },
        { 
          title: "改变职场命运，修炼全栈工程师的必修课",
          subtitle: "练就编程十八般武艺，快速转型全栈开发，做全能型工程师！",
          url: "https://img.mukewang.com/5b70eebd0001bf7a05670108.jpg"
        }
      ]
    }
  },
  methods: {
    getBackgroundPosition (isLeft) {
      return {
        'background-position': `center ${ - (isLeft ? this.position : this.position + 1) * 36}px`
      }
    }
  },
  computed: {
    currentBanner () {
      return this.bannerList[this.type]
    }
  },
  components: {
    CourseList
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .course-list-container
    padding: 36px 0 48px;
    .split-banner
      display: flex;
      align-items: center;
      margin-top: 24px;
      .split-banner-item
        position: relative;
        flex: 1;
        margin: 0 8px 16px 8px;
        height: 108px;
        background-color: rgba(7,17,27,0.5);
        & > img
          display: block;
          width: 100%;
          height: 100%;
          background-color: #ccc;
          border-radius: 8px;
        .title
          z-index: 3;
          position: absolute;
          left: 0;
          right: 0;
          color: #fff;
          text-align: center;
          &.main
            top: 30%;
            font-size: 20px;
            line-height: 28px;
            font-weight: 700;
          &.sub
            top: 55%;
            font-size: 12px;
            line-height: 24px;
        .mask
          z-index: 1;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(7,17,27,0.4);
          border-radius: 8px;
    .course-list
      margin-top: 24px;
</style>
