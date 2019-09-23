<template>
  <div class="lesson-detail-contnet m-center">
    <!-- 导航数据 -->
    <ul class="nav-list">
      <li
        v-for="(nav,index) in navList"
        :key="index"
        class="nav-item"
        :class="{active: currentNavIndex == index}"
        @click="currentNavIndex=index"
      >
        <span v-if="nav.code==0" class="iconfont">&#xe602;</span>
        <span v-if="nav.code==1" class="iconfont">&#xe7c8;</span>
        <span v-if="nav.code==2" class="iconfont">&#xe981;</span>
        <span>{{ nav.title }}</span>
      </li>
    </ul>

    <!-- 内容部分 -->
    <div class="lesson-information">
      <div class="info-left">
        <component :is="componentName" :list="componentList" />
      </div>
      <div v-if="showSideBar" class="info-right">
        <detail-score :score="data.base" />
        <detail-teacher :teacher="data.teacher" />
        <recommend :list="data.recommend.data" :title="data.recommend.title" />
      </div>
    </div>
  </div>
</template>
<script>
import DetailScore from './lesson-detal-score.vue'
import DetailTeacher from './lesson-detail-teacher.vue'
import Recommend from 'components/recommend/recommend.vue'
export default {
  props: {
    data: {
      type: Object
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
      { title: '课程', code: 0, componentName: 'chapter', key: 'chapter', show: true },
      { title: '问答', code: 1, componentName: 'comment', key: 'comment', show: true },
      { title: '同学', code: 2, componentName: 'classmate', key: 'classmate', show: false }
    ]
  },
  computed: {
    componentName () {
      return this.navList[this.currentNavIndex].componentName
    },
    componentList () {
      let key = this.navList[this.currentNavIndex].key
      return this.data[key]
    },
    showSideBar () {
      return this.navList[this.currentNavIndex].show
    }
  },
  components: {
    DetailScore,
    DetailTeacher,
    Recommend,
    Chapter: () => import('components/chapter/chapter.vue'),
    Comment: () => import('components/comment/comment.vue'),
    classmate: () => import('./lesson-detail-classmate.vue')
  }
}
</script>
<style lang="stylus" scoped>
  .lesson-detail-contnet
    margin-bottom: 40px;
    .nav-list
      margin-top: -60px;
      .nav-item
        display: inline-block;
        margin-right: 72px;
        padding: 12px 24px 16px;
        width: 124px;
        height: 60px;
        box-sizing: border-box;
        cursor: pointer;
        & > span
          display: inline-block;
          vertical-align: middle;
          color: rgba(255,255,255,.6);
          font-size: 16px;
          &.iconfont
            margin-right: 10px;
            font-size: 32px;
            color: rgba(255,255,255,.6);
        &.active
          background-color: #fff;
          border-radius: 4px 4px 0 0;
          & > span
            color: #2b333b;
            &.iconfont
              color: #f01414;
    .lesson-information
      margin-top: 24px;
      display: flex;
      align-items: flex-start;
      .info-left
        flex: 1;
      .info-right
        flex: 0 0 300px;
        margin-left: 40px;
        width: 300px;
</style>