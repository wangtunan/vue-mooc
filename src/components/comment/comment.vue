<template>
  <div class="comment">
    <!-- 评价总览 -->
    <div class="score-overview">
      <div class="star-box">
        <span class="title">综合评分</span>
        <span class="score">{{ totalScore.total }}</span>
        <mooc-star :value="totalScore.total / 2" :size="18" disabled />
      </div>
      <div class="score-box">
        <span>内容实用</span>
        <span class="score">{{ totalScore.content_score }}</span>
      </div>
      <div class="score-box">
        <span>简洁易懂</span>
        <span class="score">{{ totalScore.easy_score }}</span>
      </div>
      <div class="score-box">
        <span>逻辑清晰</span>
        <span class="score">{{ totalScore.logic_score }}</span>
      </div>
    </div>

    <!-- 评价列表 -->
    <ul class="comment-list">
      <li
        v-for="(comment,index) in commentList"
        :key="index"
        class="comment-item"
      >
        <div class="img-box">
          <img :src="comment.avatar" alt="">
        </div>
        <div class="comment-content-wrapper">
          <p>
            <span class="name">{{ comment.name }}</span>
            <span class="score">
              <MoocStar :value="getCommentScore(comment)" :size="16" :disabled="true" />
              {{ getCommentScore(comment) }}分
            </span>
          </p>
          <p class="content">
            {{ comment.comment }}
          </p>
          <p>
            <span class="time">时间：{{ comment.time }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getLessonComment } from 'api/lesson.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      commentList: []
    }
  },
  mounted () {
    this.getLessonComment()
  },
  methods: {
    // 分页值更新
    handlePaginationChange (page) {
      this.page = page
      this.getLessonComment()
    },
    // 获取课程评价列表
    getLessonComment () {
      const params = {
        id: this.$route.params.id
      }
      this.commentList = []
      getLessonComment(params).then((res) => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.commentList = data
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
      })
    },
    // 获取单个评价总分
    getCommentScore (comment) {
      const cacheScore = {}
      if (cacheScore[comment['_id']]) {
        return cacheScore[comment['_id']]
      }
      const { content_score = 0, easy_score = 0, logic_score = 0 } = comment
      const score = Number(((content_score + easy_score + logic_score) / 3).toFixed(2))
      cacheScore[comment['_id']] = score
      return Number(((content_score + easy_score + logic_score) / 3).toFixed(2))
    }
  }, 
  computed: {
    totalScore () {
      if (this.commentList.length === 0) {
        return {
          total: 0,
          content_score: 0,
          easy_score: 0,
          logic_score: 0
        }
      }
      let score = {
        total: 0,
        content_score: 0,
        easy_score: 0,
        logic_score: 0
      }
      const length = this.commentList.length
      this.commentList.forEach(item => {
        score['content_score'] += parseFloat(item['content_score'])
        score['easy_score'] += parseFloat(item['easy_score'])
        score['logic_score'] += parseFloat(item['logic_score'])
      })
      score['total'] = (score['content_score'] + score['easy_score'] + score['logic_score']) / 3
      for (const key in score) {
        score[key] = Number((score[key] / length).toFixed(2))
      }
      return score
    }
  }
}
</script>
<style lang="stylus" scoped>
  .comment
    .score-overview
      padding: 24px 32px;
      display: flex;
      align-items: center;
      background-color: #fff;
      box-shadow: 0 0 8px 4px rgba(7,17,27,0.1);
      border-radius: 12px;
      .star-box
        flex: 1;
        & > span
          display: inline-block;
          vertical-align:  middle;
          line-height: 24px;
          &.title
            width: 40px;
            text-align: center;
            color: #1c1f21;
            font-size: 14px;
            line-height: 16px;
            font-weight: 700;
          &.score
            padding-left: 5px;
            font-size: 32px;
            color: #4d555d;
            font-weight: 700;
        >>> .star
          margin-left: 10px;
          vertical-align: middle;
          .star-item
            margin-right: 3px;
      .score-box
        margin-left: 50px;
        & > span
          display: inline-block;
          vertical-align:  middle;
          line-height: 24px;
          font-size: 14px;
          &.score
            padding-left: 12px;
            font-size: 26px;
            color: #f90;
            font-weight: 700;
    .comment-list
      margin-top: 24px;
      .comment-item
        margin-bottom: 8px;
        padding: 24px; 36px;
        display: flex;
        align-items: flex-start;
        background-color: #fff;
        box-shadow: 0 0 8px 4px rgba(7,17,27,.1);
        border-radius: 12px;
        .img-box
          margin-right: 20px;
          flex: 0 0 48px;
          width: 48px;
          height: 48px;
          & > img
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        .comment-content-wrapper
          flex: 1;
          & > p
            font-size: 14px;
            color: #14191e;
            line-height: 24px;
            &.content
              margin-top: 4px;
              margin-bottom: 8px;
              line-height: 28px;
            .name
              color: #787d82;
              font-weight: 700;
            .score, .time
              float: right;
            .time
              color: #b5b9bc;
              font-size: 12px;
</style>