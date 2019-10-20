<template>
  <div class="comment">
    <!-- 评价总览 -->
    <div class="score-overview">
      <div class="star-box">
        <span class="title">综合评分</span>
        <span class="score">{{ list.score.total }}</span>
        <mooc-star :value="list.score.total/2" :size="20" />
      </div>
      <div class="score-box">
        <span>内容实用</span>
        <span class="score">{{ list.score.content }}</span>
      </div>
      <div class="score-box">
        <span>简洁易懂</span>
        <span class="score">{{ list.score.difficult }}</span>
      </div>
      <div class="score-box">
        <span>逻辑清晰</span>
        <span class="score">{{ list.score.logic }}</span>
      </div>
    </div>

    <!-- 评价列表 -->
    <ul class="comment-list">
      <li v-for="(comment,index) in list.data" :key="index" class="comment-item">
        <div class="img-box">
          <img :src="comment.avatar" alt="">
        </div>
        <div class="comment-content-wrapper">
          <p>
            <span class="name">{{ comment.name }}</span>
            <span class="score">
              <MoocStar :value="comment.score/2" :size="16" :disabled="true" />
              {{ comment.score }}分
            </span>
          </p>
          <p class="content">
            {{ comment.comment }}
          </p>
          <p>
            <span class="like">
              <i class="iconfont">&#xe60c;</i>
              {{ comment.like }}
            </span>
            <span class="time">时间：{{ comment.time }}</span>
          </p>
        </div>
      </li>
    </ul>

    <!-- 分页 -->
    <pagination :total="total" :page.sync="page" />
  </div>
</template>
<script>
import Pagination from 'components/pagination/pagination.vue'
export default {
  props: {
    list: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      total: 100,
      page: 1
    }
  },
  components: {
    Pagination
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
            .like
              padding: 7px 15px;
              border-radius: 18px;
              background-color: rgba(84,92,99,0.1);
              color: #545c63;
              cursor: pointer;
</style>