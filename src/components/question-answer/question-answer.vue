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
          @click="currentIndex = index"
        >
          {{ filter.title }}
        </li>
      </ul>
      <span class="desc">共有{{ list.total }}个问题，已解决{{ list.resolve }}个</span>
    </div>

    <!-- 问答列表 -->
    <ul class="qa-list">
      <li v-for="(item,index) in answerList" :key="index" class="qa-item">
        <div class="avatar-box">
          <img :src="item.avatar" alt="">
        </div>
        <div class="qa-content">
          <h3 class="title">
            {{ item.title }}
          </h3>
          <template v-if="item.status">
            <p class="answer-status">
              <span class="status">{{ item.status.type }}</span>
              <span class="split">/</span>
              <span class="name">{{ item.status.name }}</span>
            </p>
            <p class="answer">
              {{ item.answer.content }}
            </p>
          </template>
          <p class="qa-bottom">
            <span>{{ item.answer ? item.answer.number : 0 }}回答</span>
            <span>{{ item.view }}浏览</span>
            <span>{{ item.chapter }}</span>
            <span class="time">{{ item.time }}天前</span>
          </p>
        </div>
        <div v-if="item.status && item.status.resolve" class="icon">
          已采纳
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
        return []
      }
    }
  },
  data () {
    return {
      total: 100,
      page: 1,
      currentIndex: 0, // 当前筛选类型的索引
      filterList: [] // 筛选列表
    }
  },
  created () {
    // 初始化筛选列表
    this.filterList = [
      { code: 0, title: '全部' },
      { code: 1, title: '热门' },
      { code: 2, title: '待解决' },
      { code: 3, title: '已采纳' },
      { code: 4, title: '我的提问' }
    ]
  },
  computed: {
    // 问答列表
    answerList () {
      let list = this.list.data.slice()
      let code = this.filterList[this.currentIndex].code
      if (code === 1) {
        // 热门
        list.sort((a, b) => b.view - a.view)
      } else if(code === 2) {
        // 待解决
        list = list.filter(item => {
          return !item.hasOwnProperty('answer') || +item.answer.number === 0
        })
      } else if(code === 3) {
        list = list.filter(item => item.status && item.status.resolve)
      } else if(code === 4) {
        list = list.filter(item => item.isMe)
      }
      return list || []
    }
  },
  components: {
    Pagination
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
