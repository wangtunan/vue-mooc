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
        <span>{{ nav.title }}</span>
      </li>
    </ul>

    <!-- 内容部分 -->
    <div class="lesson-information">
      <div class="info-left">
        <component :is="componentName" :catalog="catalogList" />
      </div>
      <div class="info-right">
        <detail-score :score="data" />
        <detail-teacher :teacher="data.teacher" />
      </div>
    </div>
  </div>
</template>
<script>
import DetailScore from './score.vue'
import DetailTeacher from './teacher.vue'
export default {
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      currentNavIndex: 0,
      navList: []
    }
  },
  created () {
    // 初始化导航数据
    this.navList = [
      { title: '课程', code: 0, componentName: 'chapter' },
      { title: '问答', code: 1, componentName: 'comment' }
    ]
  },
  computed: {
    componentName () {
      return this.navList[this.currentNavIndex].componentName
    },
    catalogList () {
      return this.data.catalog || {}
    }
  },
  components: {
    DetailScore,
    DetailTeacher,
    Chapter: () => import('components/chapter/chapter.vue'),
    Comment: () => import('components/comment/comment.vue')
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
          color: rgba(255,255,255,1);
          font-size: 16px;
          &.iconfont
            margin-right: 10px;
            font-size: 32px;
            color: rgba(255,255,255,1);
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