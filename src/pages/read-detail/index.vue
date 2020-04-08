<template>
  <div class="read-detail">
    <!-- 头部 -->
    <div class="read-header-container">
      <div class="m-center">
        <div class="header">
          <div class="img-box">
            <img :src="readDetail.detailImg" alt="">
          </div>
          <div class="header-content">
            <h3 class="title">
              {{ readDetail.title }}
            </h3>
            <p class="desc">
              {{ readDetail.desc }}
            </p>
            <p class="other-info">
              <span v-if="readDetail.teacher" class="teacher-info">{{ readDetail.teacher.name }} / {{ readDetail.teacher.job }}</span>
              <span class="term">共{{ readDetail.term }}小节</span>
              <span class="number">共{{ readDetail.persons }}人购买</span>
            </p>
            <p class="price">
              ¥ {{ readDetail.price }}
            </p>
            <p class="read-btn">
              <span class="read">立即订阅</span>
              <span class="try">试读</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 列表 -->
    <div class="m-center">
      <div class="read-list">
        <dl class="left">
          <dt class="read-title">
            课程目录
            <span class="total">已更新14个小节</span>
          </dt>
          <dd v-for="(chapter,index) in readDetail.chapter" :key="index" class="read-item">
            <dl>
              <dt class="chapter-title">
                {{ chapter.title }}
              </dt>
              <dd v-for="(term, index) in chapter.data" :key="index">
                <p>
                  <span class="term-title">{{ term.title }}</span>
                  <span v-if="term.isTry" class="try-btn">试读</span>
                </p>
                <span class="time">{{ term.time }}</span>
              </dd>
            </dl>
          </dd>
        </dl>
        <div v-if="readRecommend.length" class="right">
          <recommend-read title="慕课专栏" :list="readRecommend" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RecommendRead from 'components/recommend/recommend-read.vue'
import { getReadDetail, getRecommendRead } from 'api/read.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      readDetail: {},
      readRecommend: []
    }
  },
  mounted () {
    this.getReadDetailData()
    this.getRecommendReadData()
  },
  methods: {
    // 获取专栏详情
    getReadDetailData () {
      let id = this.$route.params.id
      getReadDetail(id).then(res => {
        let { code, data, msg } = res
        if (code === ERR_OK) {
          this.readDetail = data
        } else {
          this.readDetail = {}
          this.$message.error(msg)
        }
      }).catch(() => {
        this.readDetail = {}
      })
    },
    // 获取推荐专栏
    getRecommendReadData () {
      getRecommendRead().then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.readRecommend = data
        } else {
          this.readRecommend = []
          this.$message.error(msg)
        }
      }).catch(() => {
        this.readRecommend = []
      })
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.params.id !== from.params.id) {
        this.getReadDetailData()
      }
    }
  },
  components: {
    RecommendRead
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/stylus/variables.styl';
  @import '~assets/stylus/mixin.styl';
  .read-detail
    .read-header-container
      height: 244px;
      background-color: #383d42;
      .header
        display: flex;
        align-items: flex-start;
        padding-top: 24px;
        .img-box
          flex: 0 0 144px
          img-box(144px, 190px);
          & > img
            border-radius: 12px;
        .header-content
          flex: 1;
          position: relative;
          margin-left: 40px;
          height: 190px;
          .title
            padding: 8px 0 16px;
            font-size: 24px;
            color: #fff;
            line-height: 24px;
          .desc
            padding-bottom: 16px;
            padding-left: 0;
            padding-right: 50px;
            font-size: 16px;
            color: #fff;
          .other-info
            padding-bottom: 16px;
            font-size: 14px;
            color: rgba(255,255,255,0.6);
            & > span {
              margin-right: 10px;
            }
          .price
            margin-bottom: 16px;
            font-size: 24px;
            line-height: 32px;
            color: #fff;
          .read-btn
            position: absolute;
            left: 0;
            bottom: 0;
            & > span
              display: inline-block;
              vertical-align: middle;
              margin-right: 20px;
              padding: 8px 24px;
              border-radius: 24px;
              background-color: #fff;
              color: $theme-blue-color;
              line-height: 24px;
              cursor: pointer;
              &.read
                background-color: $theme-blue-color;
                color: #fff;
    .read-list
      display: flex;
      align-items: flex-start;
      margin-top: 40px;
      margin-bottom: 40px;
      .left
        flex: 1;
        padding: 16px 32px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px 4px rgba(7,17,27,0.1);
        box-sizing: border-box;
        .read-title
          padding: 16px 0;
          border-bottom: 1px solid rgba(7,17,27,0.1);
          font-size: 18px;
          color: $font-first-color;
          font-weight: 700;
          .total
            padding-left: 10px;
            font-size: 12px;
            color: $font-four-color;
        .read-item
          &:last-child
            dd:last-child
              border-bottom: none;
          .chapter-title
            padding: 20px 0;
            border-bottom: 1px solid rgba(7,17,27,0.1);
            font-size: 14px;
            color: $font-first-color;
            font-weight: 700;
          dd
            padding: 16px 0;
            border-bottom: 1px solid rgba(7,17,27,0.1);
            font-size: 14px;
            & > p
              line-height: 24px;
              cursor: pointer;
              &:hover
                color: $theme-blue-color;
              .try-btn
                float: right;
                display: inline-block;
                width: 76px;
                height: 36px;
                text-align: center;
                line-height: 36px;
                background-color: rgba(51,119,255,.1);
                border-radius: 18px;
                color: $theme-blue-color;
                font-size: 14px;
                font-weight: 700;
                cursor: pointer;
                &:hover
                  background-color: rgba(51,119,255,1);
                  color: #fff;
            .time
              display: inline-block;
              padding-top: 8px;
              color: $font-four-color;
      .right
        margin-left: 30px;
        flex: 0 0 280px;
        width: 280px;
</style>