<template>
  <div class="waterfull-container">
    <div class="waterfull m-center">
      <h2 class="home-title">
        <i class="title-icon left-icon" />
        精／彩／手／记／及／猿／问
        <i class="title-icon right-icon" />
      </h2>

      <div class="article-container">
        <div v-for="(item,index) in article" :key="index" class="article-item">
          <div v-if="item.type == 'topic'" class="topic-wrapper">
            <div v-for="(topic, index) in item.data" :key="index" class="topic-item">
              <p v-if="index==0" class="topic-flag">
                热门话题
              </p>
              <template v-if="index==0">
                <div class="topic-header-wrapper">
                  <div class="topic-title-wrapper">
                    <p class="topic-name">
                      #{{ topic.topic }}#
                    </p>
                    <p class="topic-title">
                      {{ topic.title }}
                    </p>
                  </div>
                  <img :src="topic.img" class="topic-img" width="72" height="72" alt="">
                </div>
                <p class="topic-desc">
                  {{ topic.desc }}
                </p>
                <p class="topic-look-detail">
                  了解详情->
                </p>
                <h2 class="post-header">
                  <span class="post-header-title">往期回顾</span>
                  <span class="post-header-title-line" />
                </h2>
              </template>

              <template v-else>
                <div class="topic-header-wrapper post-topic">
                  <div class="topic-title-wrapper">
                    <p class="topic-name">
                      #{{ topic.topic }}#
                    </p>
                    <p class="topic-title">
                      {{ topic.title }}
                    </p>
                  </div>
                  <img :src="topic.img" class="topic-img" width="72" height="72" alt="">
                </div>
              </template>
            </div>
          </div>

          <div v-if="item.type == 'article'" class="article-wrapper">
            <p class="article-flag">
              <i class="iconfont">&#xe763;</i>
              <span>手记文章</span>
            </p>
            <div class="article-title-box">
              <p class="article-title">
                {{ item.title }}
              </p>
              <img :src="item.img" class="article-img" width="72" height="48" alt="">
            </div>
            <p class="article-desc">
              {{ item.desc }}
            </p>
            <p class="article-number">
              <span class="scan">浏览 {{ item.scan }}</span>
              <span class="recommend">推荐 {{ item.recommend }}</span>
              <span class="read-all">阅读全文-></span>
            </p>
          </div>

          <div v-if="item.type == 'question'" class="question-wrapper">
            <p class="question-flag">
              <i class="iconfont">&#xe606;</i>
              <span>相关猿问</span>  
            </p>
            <p class="question-title">
              {{ item.title }}
            </p>
            <p class="status-text">
              {{ item.status.text }}
            </p>
            <p class="status-answer">
              {{ item.status.answer }}
            </p>
            <p class="total-number">
              共有{{ item.total }}个回答
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: [Object, Array],
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .waterfull-container
    width: 100%;
    background-color: #f7f9fb;
  .waterfull
    .home-title
      padding: 36px 0 48px;
      .left-icon
        background-position: center -360px;
      .right-icon
        background-position: center -396px;
    .article-container
      width: 100%;
      padding-bottom: 30px;
      column-count: 3;
      column-gap: 18px;
      .article-item
        margin-bottom: 20px;
        padding: 24px 32px 32px 32px;
        break-inside: avoid;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(7,17,27,0.1);
        cursor: pointer;
        &:hover
          box-shadow: 0 4px 8px 2px rgba(7,17,27,0.15);
        .topic-wrapper
          .topic-item
            .topic-flag
              display: inline-block;
              margin-bottom: 8px;
              padding: 5px 12px;
              background-color: $theme-green-color;
              border-radius: 12px;
              color: #fff;
              font-size: 12px;
            .post-header
              display: flex;
              align-items: center;
              margin-bottom: 15px;
              .post-header-title
                margin-right: 12px;
                font-size: 12px;
                color: $font-four-color;
              .post-header-title-line
                flex: 1;
                height: 1px;
                background-color: $border-second-color;
            .topic-header-wrapper
              display: flex;
              align-items: center;
              margin-bottom: 12px;
              &.post-topic
                transition: all 0.2s;
                &:hover
                  .topic-title-wrapper
                    color: rgba(0, 180, 60, 0.6);
                .topic-title-wrapper
                  color: $font-second-color;
                  font-size: 14px;
              .topic-title-wrapper
                flex: 1;
                color: rgba(0, 180, 60, 0.8);
                line-height: 24px;
                font-size: 16px;
              .topic-img
                flex: 0 0 72px;
                width: 72px;
                height: 72px;
                border-radius: 8px;
            .topic-desc
              font-size: 12px;
              color: $font-second-color;
              line-height: 24px;
              multline-ellipsis(6);
            .topic-look-detail
              margin: 10px 0 15px;
              text-align: right;
              font-size: 12px;
              color: rgba(0, 180, 60, 0.6);
              cursor: pointer;
              line-height: 24px;
        .article-wrapper
          .article-flag
            line-height: 24px;
            font-size: 12px;
            color: rgba(0, 140, 200, 0.6);
            & > span
              display: inline-block;
              vertical-align: top;
              margin-left: 3px;
          .article-title-box
            display: flex;
            align-items: flex-start;
            margin: 8px 0;
            .article-title
              flex: 1;
              font-size: 16px;
              color: $font-first-color;
              line-height: 24px;
              transition: all 0.2s;
              &:hover
                color: rgba(0, 140, 200, 0.6);
          .article-desc
            margin-bottom: 20px;
            font-size: 12px;
            color: $font-second-color;
            line-height: 24px;
            multline-ellipsis(8);
          .article-number
            font-size: 12px;
            color: $font-four-color;
            line-height: 24px;
            .scan
              margin-right: 20px;
            .read-all
              float: right;
              color: rgba(0, 140, 200, 0.6);
              cursor: pointer;
        .question-wrapper
          font-size: 12px;
          .question-flag
            color: rgba(0, 180, 60, 0.7);
            & > span
              display: inline-block;
              vertical-align: top;
              margin-left: 3px;
              margin-top: 2px;
          .question-title
            margin: 8px 0;
            font-size: 14px;
            color: $font-first-color;
            line-height: 1.5;
            transition: all 0.2s;
            &:hover
              color: rgba(0, 180, 60, 0.7);
          .status-text
            color: $font-first-color;
            line-height: 24px;
          .status-answer
            color: $font-second-color;
            line-height: 20px;
          .total-number
            margin-top: 10px;
            text-align: right;
            color: rgba(0, 180, 60, 0.6);
            font-size: 12px;
</style>


