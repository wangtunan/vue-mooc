<template>
  <div class="article m-center">
    <!-- 头部 -->
    <div class="article-header">
      <img class="article-icon" src="https://www.imooc.com/static/img/article/article-logo.png" alt="">
      <div class="search-container">
        <div class="search-box">
          <input type="text" placeholder="搜索感兴趣的知识和文章">
          <i class="iconfont">&#xe63c;</i>
        </div>
        <span class="write-btn">写文章</span>
      </div>
    </div>

    <!-- 内容部分 -->
    <div class="article-content">
      <div class="nav">
        <ul>
          <li
            class="nav-item"
            v-for="(item,index) in navList"
            :key="index"
            :class="{active: currentNavIndex==index}"
            @click="currentNavIndex=index"
          >{{item.title}}</li>
        </ul>
      </div>
      
      <div class="list">
        <article-list></article-list>
      </div>

      <div class="recommend">recommend</div>
    </div>
  </div>
</template>
<script>
import ArticleList from './article-list.vue'
import { getArticleNavList } from 'api/article.js'
import { ERR_OK } from 'api/config.js'
export default {
  data () {
    return {
      currentNavIndex: 0, // 当前导航的索引
      navList: [] // 导航数据
    }
  },
  mounted () {
    this.getArticleNavListData()
  },
  methods: {
    // 获取手记导航数据
    getArticleNavListData () {
      getArticleNavList().then(res => {
        let { code, data } = res
        if (code === ERR_OK) {
          this.navList = data
        }
      })
    }
  },
  components: {
    ArticleList
  }
}
</script>
<style lang="stylus" scoped>
  .article
    .article-header
      margin-top: 10px;
      height: 60px;
      .article-icon
        display: inline-block;
        vertical-align: middle;
        height: 100%;
      .search-container
        float: right;
        padding: 12px 0;
        height: 60px;
        box-sizing: border-box;
        .search-box
          display: inline-block;
          position: relative;
          width: 480px;
          height: 36px;
          line-height: 36px;
          border-radius: 8px;
          background-color: #f3f5f6;
          input
            padding: 0 60px 0 20px;
            width: 100%;
            height: 36px;
            box-sizing: border-box;
            line-height: 36px;
            outline: none;
            background: none;
            line-height: 0;
            font-size: 14px;
            color: #9199a1;
          .iconfont
            position: absolute;
            top: 0;
            right: 20px;
            font-size: 20px;
            font-weight: 700;
            color: #9199a1;
            cursor: pointer;
            &:hover
              color: #37f;
        .write-btn
          display: inline-block;
          margin-left: 10px;
          padding: 8px 24px;
          border-radius: 18px;
          background-color: #37f;
          line-height: 18px;
          font-size: 14px;
          color: #fff;
          cursor: pointer;
    .article-content
      display: flex;
      align-items: flex-start;
      padding: 20px 0 50px;
      .nav
        flex: 0 0 104px;
        width: 104px;
        padding: 8px 0;
        border-radius: 6px;
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(28,31,33,.1);
        .nav-item
          margin: 0 auto;
          margin-bottom: 8px;
          padding: 8px 0;
          width: 85px;
          line-height: 20px;
          text-align: center;
          font-size: 14px;
          word-break: break-all;
          cursor: pointer;
          &:hover
            color: #37f;
          &.active
            background-color: rgba(51,119,255,.1);
            border-radius: 4px;
            color: #37f;
            font-weight: 700;
          &:last-child
            margin-bottom: 0;
      .list
        flex: 1;
        margin: 0 20px;
      .recommend
        flex: 0 0 280px;
        width: 280px;
</style>