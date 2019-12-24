<template>
  <div class="question">
    <!-- 头部 -->
    <div class="question-header m-center">
      <div class="question-search">
        <img src="https://www.imooc.com/static/img/wenda/wenda-logo.png" alt="">
        <div class="search-box">
          <input type="text" placeholder="请输入你的问题">
          <i class="iconfont">&#xe63c;</i>
        </div>
        <div class="search-btn">
          提问
        </div>
      </div>
      <div class="question-nav">
        <dl>
          <dt>我的关注：</dt>
          <dd
            v-for="(item, index) in like"
            :key="index"
            :class="{
              active: currentIndex == index
            }"
            @click="handleLikeClick(item, index)"
          >
            {{ item }}
          </dd>
        </dl>
      </div>
    </div>

    <!-- 列表部分 -->
    <div class="m-center">
      <div class="question-content-container">
        <div class="left">
          <div class="question-list">
            <ul v-if="filterQuestionList && filterQuestionList.length">
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
                    <span
                      v-for="(tag, index) in item.tags"
                      :key="index"
                      class="name"
                    >{{ tag }}</span>
                    <span class="view-box">
                      <i class="iconfont">&#xe681;</i>
                      <span class="view-number">{{ item.view }}</span>
                    </span>
                  </p>
                </div>
              </li>
            </ul>
            <p v-else class="list-empty">
              暂无数据
            </p>
          </div>
          <pagination :total="total" :page.sync="page" />
        </div>
        <div class="right">
          <recommend-author :title="recommend.title" :list="recommend.data" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
import RecommendAuthor from 'components/recommend/recommend-author.vue'
import { getLikeList, getQuestionList } from 'api/question.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      currentIndex: 0,
      like: [],
      question: {},
      total: 100,
      page: 1
    }
  },
  mounted () {
    this.getLikeListData()
    this.getQuestionListData()
  },
  methods: {
    // 关注标签点击
    handleLikeClick (item, index) {
      this.currentIndex = index
    },
    // 获取关注标签列表
    getLikeListData () {
      getLikeList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.like = data
        }
      })
    },
    // 获取猿问数据
    getQuestionListData () {
      getQuestionList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.question = data
        }
      })
    }
  },
  computed: {
    // 猿问列表数据
    questionList () {
      return this.question.data || []
    },
    // 猿问列表筛选数据
    filterQuestionList () {
      let list = this.questionList.slice()
      let like = this.like[this.currentIndex]
      if (like !== '全部') {
        return list.filter(item => item.tags.includes(like))
      } else {
        return list
      }
    },
    // 回答排行榜
    recommend () {
      return this.question.recommend || []
    }
  },
  components: {
    Pagination,
    RecommendAuthor
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  .question
    padding: 20px 0 50px;
    .question-header
      .question-search
        position: relative;
        padding-right: 75px;
        background-color: #fff;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        & > img
          width: 300px;
          height: 60px;
        .search-box
          float: right;
          position: relative;
          margin-top: 16px;
          width: 480px;
          height: 36px;
          line-height: 36px;
          border-radius: 8px;
          background-color: $border-three-color;
          & > input
            padding: 0 60px 0 10px;
            width: 100%;
            height: 36px;
            outline: none;
            background: none;
            box-sizing: border-box;
            color: $font-four-color;
            font-size: 14px;
          .iconfont
            display: inline-block;
            position: absolute;
            top: 0;
            right: 20px;
            font-size: 20px;
            font-weight: 700;
            color: $font-four-color;
            cursor: pointer;
        .search-btn
          position: absolute;
          right: 0;
          top: 16px;
          padding: 7px 16px;
          background-color: #1fad4e;
          border-radius: 18px;
          color: #fff;
          font-size: 14px;
          line-height: 24px;
          cursor: pointer;
          &:hover
            background-color: #17823b;
      .question-nav
        position: relative;
        padding-top: 8px;
        padding-left: 80px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        dt, dd
          font-size: 14px;
          line-height: 24px;
        dt
          position: absolute;
          top: 8px;
          left: 0;
        dd
          display: inline-block;
          vertical-align: middle;
          padding-right: 20px;
          margin-bottom: 8px;
          cursor: pointer;
          &:hover, &.active
            color: $theme-green-color;
    .question-content-container
      display: flex;
      align-items: flex-start;
      margin-top: 30px;
      .left
        flex: 1;
        .question-list
          padding: 28px 32px;
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 8px 2px rgba(7,17,27,.1)
          .question-item
            display: flex;
            align-items: center;
            padding: 16px 0;
            border-bottom: 1px solid rgba(7,17,27,0.1);
            &:last-child
              border-bottom: none;
            .finish
              flex: 0 0 40px;
              width: 40px;
              padding: 8px 0;
              margin-right: 15px;
              background-color: rgba(31,173,78,.1);
              color: #17823b;
              & > span
                display: block;
                text-align: center;
                line-height: 18px;
                font-size: 16px;
                font-weight: 700;
                &:last-child
                  font-weight: 400;
                  font-size: 14px;
            .content-box
              flex: 1;
              .title
                margin-bottom: 4px;
                font-size: 16px;
                color: $font-first-color;
                font-weight: 700;
                line-height: 24px;
                cursor: pointer;
                &:hover
                  color: #1fad4e;
              .tag
                font-size: 12px;
                color: $font-four-color;
                & > img
                  display: inline-block;
                  vertical-align: middle;
                  margin-top: -2px;
                  width: 16px;
                  height: 16px;
                  border-radius: 50%;
                & > span
                  display: inline-block;
                  vertical-align: middle;
                  &.name
                    padding: 0 10px 0 5px;
                  &.view-box
                    padding-left: 10px;
                    & > i, & > span
                      display: inline-block;
                      vertical-align: middle;
        .list-empty
          padding: 10px 0;
          text-align: center;
          font-size: 14px;
          color: $theme-red-color;
      .right
        margin-left: 30px;
        flex: 0 0 280px;
        width: 280px;   
</style>