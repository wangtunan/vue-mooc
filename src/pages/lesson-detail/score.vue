<template>
  <div class="lesson-detail-score">
    <h2 class="title">
      课程摘要
    </h2>
    <div class="score-content">
      <p class="rate-name">
        好评率
      </p>
      <p class="rate">
        {{ score.praise || 100 }}%
      </p>
      <p class="comment-btn">
        立即评价
      </p>
      <p class="desc">
        给老师来点鼓励，可获得10积分奖励，前10评价100%可获实战专享优惠券！
      </p>
      <div class="bottom">
        <dl>
          <dt>难度</dt>
          <dd>{{ score.hard.text }}</dd>
        </dl>
        <dl>
          <dt>时长</dt>
          <dd>{{ score.hours || 0 }}小时</dd>
        </dl>
        <dl>
          <dt>人数</dt>
          <dd>{{ score.persons }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    score: {
      type: Object
    }
  }
}
</script>
<style lang="stylus" scoped>
  .lesson-detail-score
    .title
      margin-bottom: 8px;
      font-size: 16px;
      color: #07111b;
      line-height: 24px;
    .score-content
      padding: 24px 4px;
      background-color: #eff2f5;
      border-radius: 8px;
      box-sizing: border-box;
      text-align: center;
      .rate-name
        margin-bottom: 8px;
        font-size: 16px;
        color: #07111b;
        line-height: 24px;
        font-weight: 700;
      .rate
        margin-bottom: 8px;
        color: #fa0;
        font-size: 32px;
        font-weight: 700;
        line-height: 32px;
      .comment-btn
        margin: 0 auto 8px;
        width: 160px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius: 36px;
        border: 1px solid #f90;
        background-color: #eff2f5;
        font-size: 14px;
        color: #f90;
        cursor: pointer;
        &:hover
          background-color: #f90;
          color: #fff;
      .desc
        margin: 0 auto 16px;
        padding-bottom: 16px;
        width: 90%;
        border-bottom: 1px solid #d9dde1;
        font-size: 12px;
        line-height: 20px;
        color: #93999f;
      .bottom
        display: flex;
        align-items: center;
        dl
          flex: 1;
          font-size: 12px;
          dt
            margin-bottom: 2px;
            color: #07111b;
            line-height: 16px;
          dd
            color: #4d555d;
            line-height: 16px;
</style>