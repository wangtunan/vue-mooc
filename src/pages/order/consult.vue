<template>
  <div class="consult">
    <h2 class="title">
      课程咨询
    </h2>
    <ul class="consult-list">
      <li v-for="(item,index) in consultList" :key="index" class="consult-item">
        <div class="like-box">
          <i class="iconfont" :class="{like: item.like}">&#xe60c;</i>
          <p class="number">
            {{ item.number }}
          </p>
        </div>
        <div class="content">
          <h3 class="title-box">
            <span class="title ellipsis">{{ item.title }}</span>
            <span class="time">{{ item.time }}</span>
          </h3>
          <p class="answer">
            {{ item.answer }}
          </p>
          <p class="from">
            来自：{{ item.from }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { consultList } from 'api/order.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      consultList: [] // 咨询数据
    }
  },
  mounted () {
    this.getConsultList()
  },
  methods: {
    // 获取用户咨询数据
    getConsultList () {
      consultList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.consultList = data
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl';
  .consult
    .title
      margin-bottom: 24px
      font-size: 16px;
      color: #07111b;
      font-weight: 700;
      line-height: 32px;
    .consult-list
      .consult-item
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;
        padding: 32px;
        background-color: #fff;
        box-shadow: 0 4px 8px 2px rgba(0,0,0,0.1);
        border-radius: 12px;
        .like-box
          margin-right: 16px;
          width: 36px;
          .iconfont
            display: block;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            text-align:center;
            line-height: 36px;
            color: #93999f;
            background-color: #f3f5f7;
            &.like
              background-color: rgba(240,20,20,.1);
              color: #f01414;
          .number
            text-align: center;
            font-size: 12px;
            color: #93999f;
            line-height: 24px;
        .content
          flex: 1;
          .title-box
            margin-bottom: 8px;
            color: #07111b;
            font-size: 16px;
            line-height: 32px;
            .title
              font-weight: 400;
            .time
              float: right;
              font-size: 14px;
              color: #93999f;
          .answer
            margin-bottom: 12px;
            color:#4d555d;
            font-size: 14px;
            line-height: 24px;
            multline-ellipsis(3)
          .from
            font-size: 14px;
            color: #93999f;
            line-height: 24px;
</style>
