<template>
  <div class="comment">
    <!-- 评价总览 -->
    <div class="score-overview"></div>

    <!-- 评价列表 -->
    <ul class="comment-list">
      <li class="comment-item" v-for="(comment,index) in list.data" :key="index">
        <div class="img-box">
          <img :src="comment.avatar" alt="">
        </div>
        <div class="comment-content-wrapper">
          <p>
            <span class="name">{{comment.name}}</span>
            <span class="score">
              <star :score="comment.score/2" :size="16"></star>
              {{comment.score}}分
            </span>
          </p>
          <p class="content">{{comment.comment}}</p>
          <p>
            <span class="like">
              <i class="iconfont">&#xe60c;</i>
              {{comment.like}}
            </span>
            <span class="time">时间：{{comment.time}}</span>
          </p>
        </div>
      </li>
    </ul>

    <!-- 分页 -->
    <pagination :total="total" :page.sync="page"></pagination>
  </div>
</template>
<script>
import Pagination from 'base/pagination/pagination.vue'
import Star from 'base/star/star.vue'
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
    Pagination,
    Star
  }
}
</script>
<style lang="stylus" scoped>
  .comment
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