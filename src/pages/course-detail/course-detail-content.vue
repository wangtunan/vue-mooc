<template>
  <div class="course-detail-content">
    <!-- 导航部分 -->
    <div class="detail-nav">
      <ul class="m-center">
        <li
          v-for="(nav,index) in navList"
          :key="index"
          class="nav-item"
          :class="{active: index==currentNavIndex}"
          @click="currentNavIndex = index"
        >
          {{ nav.title }}
          <span v-if="nav.number" class="nav-number">{{ nav.number }}</span>  
        </li>
      </ul>
    </div>

    <!-- 内容部分 -->
    <div class="detail-information m-center">
      <div class="information-left">
        <component :is="componentName" :list="content" />
      </div>
      <div class="information-right">
        <detail-tips :lastest="lastest" />
        <recommend :list="recommend.data" :title="recommend.title" />
        <detail-tags v-if="tags.length" :list="tags" />
        <recommend :list="related.data" :title="related.title" />
      </div>
    </div>
  </div>
</template>
<script>
import DetailTips from './course-detail-tips.vue'
import Recommend from 'components/recommend/recommend.vue'
import DetailTags from './course-detail-tags.vue'
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      currentNavIndex: 0, // 当前导航的索引
      navList: [] // 导航数据
    }
  },
  created () {
    // 初始化导航数据
    this.navList = [
      { title: '课程章节', number: 0, componentName: 'chapter', key: "chapter" },
      { title: '问答', number: 1155, componentName: 'question-answer', key: 'answer' },
      // { title: '同学笔记', number: 0, componentName: '' },
      { title: '用户评价', number: 251, componentName: 'comment', key: 'comment' }
    ]
  },
  computed: {
    componentName () {
      return this.navList[this.currentNavIndex].componentName
    },
    content () {
      const key = this.navList[this.currentNavIndex].key
      return this.data[key] || {}
    },
    // 推荐课程
    recommend () {
      return this.data.recommend || {}
    },
    // 相关课程
    related () {
      return this.data.related || {}
    },
    // 专题标签
    tags () {
      return this.data.tags || []
    },
    // 学习情况
    lastest () {
      return this.data.lastest || {}
    }
  },
  components: {
    DetailTips,
    Recommend,
    DetailTags,
    Chapter: () => import('components/chapter/chapter.vue'),
    QuestionAnswer: () => import('components/question-answer/question-answer.vue'),
    Comment: () => import('components/comment/comment.vue')
  }
}
</script>
<style lang="stylus" scoped>
  .course-detail-content
    .detail-nav
      position: relative;
      height: 68px;
      line-height: 68px;
      box-shadow: 0 4px 8px 0 rgba(7,17,27,0.15);
      .nav-item
        position: relative;
        display: inline-block;
        margin-right: 80px;
        font-size: 16px;
        color: #1c1f21;
        font-weight: 700;
        cursor: pointer;
        &.active
          color: #f20d0d;
          &::after {
            content: '';
            display: block;
            margin: -15px auto 0px;
            width: 16px;
            height: 3px;
            border-radius: 15px;
            background-color: #f20d0d;
          }
        .nav-number
          display: inline-block;
          position: absolute;
          top: 10px;
          right: -20px;
          font-size: 12px;
          line-height: 1;
          color: #9199a1;
    .detail-information
      margin-top: 36px;
      margin-bottom: 36px;
      display: flex;
      align-items: top;
      .information-left
        flex: 1;
      .information-right
        margin-left: 32px;
        flex: 0 0 320px;
        width: 320px;
        & > div
          margin-bottom: 36px;
</style>
