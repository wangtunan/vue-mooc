<template>
  <div class="question-answer">
    <!-- 提问模块 -->
    <div class="qa-search-container">
      <div class="search-box">
        <i class="iconfont">&#xe63c;</i>
        <input type="text" class="search-input" placeholder="请输入问题">
      </div>
      <div class="search-btn">
        我要提问
      </div>
    </div>

    <!-- 筛选模块 -->
    <div class="qa-filter-container">
      <ul>
        <li
          v-for="(filter, index) in filterList"
          :key="index"
          class="filter-item"
          :class="{active: index == currentIndex}"
          @click="handleFilterClick(index)"
        >
          {{ filter.title }}
        </li>
      </ul>
    </div>

    <!-- 问答列表 -->
    <ul class="qa-list">
      <li v-for="(item,index) in qaList" :key="index" class="qa-item">
        <div class="avatar-box">
          <img :src="item.avatar" alt="">
        </div>
        <div class="qa-content">
          <h3 class="title">
            {{ item.title }}
          </h3>
          <template v-if="item.answer">
            <p class="answer-status">
              <span class="status">讲师回答</span>
              <span class="split">/</span>
              <span class="name">{{ item.answer.teacher }}</span>
            </p>
            <p class="answer">
              {{ item.answer.content }}
            </p>
          </template>
          <p class="qa-bottom">
            <span>{{ item.answers }}回答</span>
            <span>{{ item.views }}浏览</span>
            <span>{{ item.chapter }}</span>
            <span class="time">{{ item.time }}</span>
          </p>
        </div>
        <div v-if="item.status && item.status.code == 1" class="icon">
          已采纳
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getLessonQa } from 'api/lesson.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      currentIndex: 0,
      qaList: []
    }
  },
  created () {
    // 初始化筛选列表
    this.filterList = [
      { title: '全部', code: '',  },
      { title: '待解决', code: 0,  },
      { title: '已采纳', code: 1,  }
    ]
  },
  mounted () {
    this.getLessonQa()
  },
  methods: {
    // 选项卡点击
    handleFilterClick (index) {
      this.currentIndex = index
      this.getLessonQa()
    },
    // 获取课程问答数据
    getLessonQa () {
      const params = {
        id: this.$route.params.id,
        code: this.currentCode
      }
      this.qaList = []
      getLessonQa(params).then(res => {
        const { code, data, msg } = res
        if (code === ERR_OK) {
          this.qaList = data
        } else {
          this.$message.error(msg)
        }
      }).catch(() => {
        this.$message.error('接口异常')
      })
    }
  },
  computed: {
    currentCode () {
      return this.filterList[this.currentIndex].code
    }
  }
}
</script>
<style lang="stylus" scoped>
  .question-answer
    .qa-search-container
      display: flex;
      align-items: center;
      height: 50px;
      .search-box
        flex: 1;
        position: relative;
        margin-right: 20px;
        padding: 0 60px 0 16px;
        overflow: hidden;
        border: 1px solid #b2b8bd;
        border-radius: 8px;
        box-sizing: border-box;
        background: #fff;
        .iconfont
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 30px;
          color: #9199a1;
        .search-input
          width: 100%;
          height: 48px;
          background-color: transparent;
          font-size: 16px;
          line-height: 24px;
          outline: none;
      .search-btn
        flex: 0 0 138px;
        width: 138px;
        height: 48px;
        text-align: center;
        line-height: 48px;
        background-color: #f20d0d;
        border-radius: 24px;
        color: #fff;
        cursor: pointer;
    .qa-filter-container
      margin-top: 24px;
      display: flex;
      align-items: center;
      ul
        flex: 1;
        .filter-item
          display: inline-block;
          margin-right: 48px;
          line-height: 30px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          &.active
            color: #f20d0d;
            border-bottom: 2px solid #f20d0d;
      .desc
        color: #93999f;
        font-size: 12px;
    .qa-list
      margin-top: 24px;
      .qa-item
        display: flex;
        align-items: flex-start;
        position: relative;
        margin-bottom: 20px;
        padding: 28px 16px;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 0 8px 4px rgba(7,17,27,0.1);
        overflow: hidden;
        .avatar-box
          flex: 0 0 48px;
          margin-right: 20px;
          width: 48px;
          height: 48px;
          & > img
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        .qa-content
          flex: 1;
          .title
            line-height: 40px;
            font-size: 16px;
            color: #07111b;
            font-weight: 700;
            cursor: pointer;
            &:hover
              color: #f20d0d;
          & > p
            font-size: 12px;
            color: #545c63;
            line-height: 24px;
            &.answer-status
              .split
                margin: 0 8px 0 8px;
            &.qa-bottom
              margin-top: 10px;
              color: #93999f;
              & > span
                margin-right: 25px;
                &.time
                  float: right;
        .icon
          position: absolute;
          left: 0;
          top: 0;
          width: 120px;
          height: 35px;
          line-height: 50px;
          background-color: #00b43c;
          transform: translate(-50px, -5px) rotate(-45deg);
          text-align: center;
          color: #fff;
          font-size: 12px;
</style>
